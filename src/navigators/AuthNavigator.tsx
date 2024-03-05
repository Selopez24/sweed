import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "src/screens/SignUp";
import Login from "src/screens/Login";
import { Auth, NewPassword, ResetPassword } from "src/screens/Auth";
import { AuthStackParams } from "src/types/root";

const AuthStack = createNativeStackNavigator<AuthStackParams>();

export const AuthNavigator = () => (
  <AuthStack.Group screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="Auth" component={Auth} />
    <AuthStack.Screen name="SignUp" component={SignUp} />
    <AuthStack.Screen name="Login" component={Login} />
    <AuthStack.Screen name="ResetPassword" component={ResetPassword} />
    <AuthStack.Screen name="NewPassword" component={NewPassword} />
  </AuthStack.Group>
);
