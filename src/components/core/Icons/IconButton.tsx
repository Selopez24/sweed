import { Button } from "@rneui/base";
import React, { ReactNode, ReactElement } from "react";
import { StyleSheet, GestureResponderEvent } from "react-native";

interface Props {
  onPress: (event: GestureResponderEvent) => void;
  icon: ReactElement;
}

export const IconButton = ({ icon, onPress }: Props) => {
  return <Button onPress={onPress} type="clear" icon={icon} />;
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "transparent",
  },
});
