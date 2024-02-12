import React from "react";
import { Button as RnButton } from "@rneui/themed";
import { StyleProp, ViewStyle } from "react-native";

interface Props {
  title: string;
  onPress: () => void;
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
}: Props) => (
  <RnButton
    title={title}
    onPress={onPress}
    loading={loading}
    uppercase={false}
    type={type}
    containerStyle={[style]}
    titleStyle={{ fontSize }}
  />
);

export default Button;
