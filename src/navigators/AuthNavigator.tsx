import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "src/screens/SignUp";
import Login from "src/screens/Login";
import { Auth, NewPasswordScreen, ResetPasswordScreen } from "src/screens/Auth";
import { AuthStackParams } from "src/types/root";

const AuthStack = createNativeStackNavigator<AuthStackParams>();

export const AuthNavigator = () => {
  return (
    <AuthStack.Group screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Auth" component={Auth} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <AuthStack.Screen
        name="NewPasswordScreen"
        component={NewPasswordScreen}
      />
    </AuthStack.Group>
  );
};
