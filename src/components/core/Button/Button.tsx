import React from "react";
// import PropTypes from "prop-types";
import {
  StyleSheet,
  Pressable,
  Text,
  GestureResponderEvent,
} from "react-native";
import COLORS from "../../../styles/colors";

interface Props {
  title: string;
  style: {};
  textStyle?: {};
  onPress: (event: GestureResponderEvent) => void;
}

const CustomButton = ({ title, style, onPress, textStyle }: Props) => {
  return (
    <Pressable
      style={({ pressed }) => [
        pressed ? { opacity: 0.8 } : { opacity: 1 },
        styles.button,
        style,
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    padding: 6,
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    backgroundColor: COLORS.strong_green,
    marginBottom: 22,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
});

export default CustomButton;
