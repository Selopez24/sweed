import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "src/screens/Home";
import Profile from "src/screens/Profile";

export type HomeStackParams = {
  Profile: any;
  Home: any;
};

const Stack = createNativeStackNavigator<HomeStackParams>();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerBackVisible: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};
