import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import Feed from "src/screens/Feed";

const Tab = createBottomTabNavigator();

export const HomeNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: () => <Icon name="list" size={30} />,
          tabBarLabelStyle: { fontSize: 14, fontWeight: "600" },
        }}
      />
    </Tab.Navigator>
  );
};
