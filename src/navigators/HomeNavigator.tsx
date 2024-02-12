import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Feed from "src/screens/Feed";
import { PostAction } from "src/screens/PostAction";

export type HomeStackParams = {
  Profile: undefined;
  Feed: undefined;
  PostAction: undefined;
};

const Tab = createBottomTabNavigator();

export const HomeNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Feed" component={Feed} />
    <Tab.Screen name="Post" component={PostAction} />
  </Tab.Navigator>
);
