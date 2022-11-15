import React, { FC } from "react";
import {
  StyleSheet,
  Pressable,
  Text,
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
} from "react-native";
// import twitter from "../../../assets/twitter-icon.png";
// import facebook from "../../../assets/facebook-icon.png";
// import google from "../../../assets/google-icon.png";

interface Props {
  icon: ImageSourcePropType;
  onPress: (event: GestureResponderEvent) => void;
  style: {};
}

const IconButton: FC<Props> = ({ icon, onPress, style }) => {
  //   const icons = {
  //     twitter,
  //     facebook,
  //     google,
  //   };
  //   console.log(typeof twitter);
  return (
    <>
      <Pressable style={styles.button} onPress={onPress}>
        <Image source={icon} />
      </Pressable>
      {/* <Text>{JSON.stringify(icons[icon])}</Text> */}
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
  },
  text: {
    color: "white",
    fontSize: 14,
  },
});

export default IconButton;
