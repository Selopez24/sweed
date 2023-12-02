import React from "react";
import { Button as RnButton } from "@rneui/themed";
import {
  StyleSheet,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
} from "react-native";

interface Props {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  loading?: boolean;
  type?: "solid" | "outline" | "clear";
  style?: StyleProp<ViewStyle>;
  fontSize?: number;
}

const Button = ({
  title,
  onPress,
  loading = false,
  type = "solid",
  style,
  fontSize = 16,
}: Props) => {
  return (
    <RnButton
      title={title}
      onPress={onPress}
      loading={loading}
      uppercase={false}
      type={type}
      containerStyle={[{ width: "100%" }, style]}
      titleStyle={{ fontSize }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});

export default Button;
