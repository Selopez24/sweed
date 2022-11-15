import React, { FC } from "react";
import {
  StyleSheet,
  Pressable,
  Text,
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
} from "react-native";

interface Props {
  icon: ImageSourcePropType;
  onPress: (event: GestureResponderEvent) => void;
  style: {};
}

const IconButton: FC<Props> = ({ icon, onPress, style }) => {
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
