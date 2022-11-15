import React, { FC } from "react";
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

const CustomButton: FC<Props> = ({ title, style, onPress, textStyle }) => {
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
  },
  text: {
    color: "white",
    fontSize: 14,
  },
});

export default CustomButton;
