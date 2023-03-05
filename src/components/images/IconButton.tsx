import React from "react";
import {
  StyleSheet,
  Pressable,
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
} from "react-native";

interface Props {
  icon: ImageSourcePropType;
  onPress: (event: GestureResponderEvent) => void;
  style: {};
}

const IconButton = ({ icon, onPress, style }: Props) => {
  return (
    <>
      <Pressable style={styles.button} onPress={onPress}>
        <Image source={icon} />
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    padding: 6,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    marginBottom: 22,
  },
  text: {
    color: "white",
    fontSize: 14,
  },
});

export default IconButton;
