import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppContext } from "../context/AppContext";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import LoginView from "../screens/LoginView";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  // const { setContextValue } = useContext(AppContext);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="LoginView" component={LoginView} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
