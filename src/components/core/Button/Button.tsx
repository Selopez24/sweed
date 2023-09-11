import { Button } from "@rneui/themed";
import React from "react";
import { StyleSheet, GestureResponderEvent, View } from "react-native";

interface Props {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  loading?: boolean;
}

const CustomButton = ({ title, onPress, loading = false }: Props) => {
  return (
    <Button
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

export default CustomButton;
