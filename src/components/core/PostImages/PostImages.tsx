import React from "react";
import { View, ImageSourcePropType, Image, StyleSheet } from "react-native";

interface ImageProps {
  postImage: ImageSourcePropType;
  containerStyle?: {};
  imageStyle?: {};
}

const PostImages = ({ imageStyle, postImage, containerStyle }: ImageProps) => {
  return (
    <View style={{ ...styles.imageContainer, ...containerStyle }}>
      <Image source={postImage} style={imageStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    flexGrow: 1,
  },
});

export default PostImages;
