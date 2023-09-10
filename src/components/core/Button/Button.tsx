import { Button } from "@rneui/themed";
import React from "react";
import { StyleSheet, GestureResponderEvent, View } from "react-native";

interface Props {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
}

const CustomButton = ({ title, onPress }: Props) => {
  return <Button title={title} onPress={onPress} />;
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});

export default CustomButton;
