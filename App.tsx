import "react-native-gesture-handler";
import React, { useRef } from "react";
import {
  NavigationContainer,
  NavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppContextProvider from "./src/context/AppContext";
import { theme } from "./src/theme/theme";
import { ThemeProvider } from "@rneui/themed";
import { AuthNavigator, DrawerNavigator } from "./src/navigators";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as Linking from "expo-linking";
import useUserStore from "./src/stores/user/useUserStore";
import { RootStackParams } from "./src/types/root";

const Stack = createNativeStackNavigator();

const queryClient = new QueryClient();

const prefix = Linking.createURL("/");

export default function App() {
  const user = useUserStore((state) => state.user);
  const navigationRef = useRef<NavigationContainerRef<RootStackParams>>(null);

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
              {user ? (
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
