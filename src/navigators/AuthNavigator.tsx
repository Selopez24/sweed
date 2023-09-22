import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Auth, Login, SignUp } from "../screens";

export type AuthStackParams = {
  Auth: any;
  SignUp: any;
  Login: any;
};

const AuthStack = createNativeStackNavigator<AuthStackParams>();

export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Auth"
    >
      <AuthStack.Screen name="Auth" component={Auth} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  );
};
