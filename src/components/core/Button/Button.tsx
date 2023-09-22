import React from "react";
import { Button as RnButton } from "@rneui/themed";
import { StyleSheet, GestureResponderEvent } from "react-native";

interface Props {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  loading?: boolean;
}

const Button = ({ title, onPress, loading = false }: Props) => {
  return (
    <RnButton
      title={title}
      onPress={onPress}
      loading={loading}
      uppercase={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});

export default Button;
