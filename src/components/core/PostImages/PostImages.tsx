import React from "react";
import {
  View,
  ImageSourcePropType,
  Image,
  StyleSheet,
  StyleProp,
  ImageStyle,
  ViewStyle,
} from "react-native";

interface ImageProps {
  postImage: ImageSourcePropType;
  containerStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
}

const PostImages = ({ imageStyle, postImage, containerStyle }: ImageProps) => (
  <View style={[styles.imageContainer, containerStyle]}>
    <Image source={postImage} style={imageStyle} />
  </View>
);

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    flexGrow: 1,
  },
});

export default PostImages;
