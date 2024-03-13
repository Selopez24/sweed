import React from "react";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import * as SecureStore from "expo-secure-store";
import { ALREADY_LOGGED, USER_DATA } from "src/constants/secureStore";
import useUserStore from "src/stores/user/useUserStore";

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const setUser = useUserStore((state) => state.setUser);

  const logout = async () => {
    await SecureStore.deleteItemAsync(USER_DATA);
    await SecureStore.deleteItemAsync(ALREADY_LOGGED);
    setUser(null);
  };

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{
        flex: 1,
      }}
    >
      <DrawerItemList {...props} />
      <DrawerItem
        style={{ marginTop: "auto" }}
        label="Logout"
        onPress={logout}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
