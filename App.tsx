import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppContextProvider from "./src/context/AppContext";
import AuthNavigator from "./src/navigators/AuthNavigator";
import HomeNavigator from "./src/navigators/HomeNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AppContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="AuthNavigator"
            component={AuthNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomeNavigator"
            component={HomeNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContextProvider>
  );
}
