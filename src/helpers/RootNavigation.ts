import { NavigationContainerRef } from "@react-navigation/native";
import { createRef } from "react";

type RootStackParamList = {
  AuthNavigator: undefined;
  HomeNavigator: undefined;
};

export const navigationRef =
  createRef<NavigationContainerRef<RootStackParamList>>();

export const navigate = (name: keyof RootStackParamList, params?: any) => {
  if (navigationRef.current) {
    navigationRef.current.navigate(name, params);
  }
};
