import React from "react";
import {
  View,
  Image,
  StyleSheet,
  StyleProp,
  ImageStyle,
  ViewStyle,
} from "react-native";
import { ImageDTO } from "src/types/image";

interface ImageProps {
  postImage: ImageDTO;
  containerStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
}

const PostImages = ({ imageStyle, postImage, containerStyle }: ImageProps) => (
  <View style={[styles.imageContainer, containerStyle]}>
    <Image source={{ uri: postImage.url }} style={imageStyle} />
  </View>
);

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    flexGrow: 1,
  },
});

export default PostImages;
