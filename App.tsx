import "react-native-gesture-handler";
import React, { useEffect, useRef, useState } from "react";
import {
  NavigationContainer,
  NavigationContainerRef,
} from "@react-navigation/native";
import { useShallow } from "zustand/react/shallow";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppContextProvider from "./src/context/AppContext";
import { theme } from "./src/theme/theme";
import { ThemeProvider } from "@rneui/themed";
import { AuthNavigator, DrawerNavigator } from "./src/navigators";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as SecureStore from "expo-secure-store";
import * as Linking from "expo-linking";
import useUserStore from "./src/stores/user/useUserStore";
import { RootStackParams } from "./src/types/root";
import { ALREADY_LOGGED, USER_DATA } from "./src/constants/secureStore";

const Stack = createNativeStackNavigator();

const queryClient = new QueryClient();

const prefix = Linking.createURL("/");

export default function App() {
  const { user, setUser } = useUserStore(
    useShallow((state) => ({
      user: state.user,
      setUser: state.setUser,
    }))
  );
  const [isLogged, setIsLogged] = useState(false);
  const navigationRef = useRef<NavigationContainerRef<RootStackParams>>(null);

  useEffect(() => {
    const getStatus = async () => {
      const isLoggedIn = await SecureStore.getItemAsync(ALREADY_LOGGED);
      const user = await SecureStore.getItemAsync(USER_DATA);
      if (user) {
        setUser(JSON.parse(user));
      }

      if (isLoggedIn) setIsLogged(true);
    };
    if (!user) {
      getStatus();
    }
  }, [user]);

  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        Auth: "*",
        Login: "login",
      },
    },
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AppContextProvider>
          <NavigationContainer ref={navigationRef} linking={linking}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              {user && isLogged ? (
                <Stack.Screen
                  name="HomeNavigator"
                  component={DrawerNavigator}
                  options={{ headerShown: false }}
                />
              ) : (
                AuthNavigator()
              )}
            </Stack.Navigator>
          </NavigationContainer>
        </AppContextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
