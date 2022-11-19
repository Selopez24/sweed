import React, { FC } from "react";
import {
  View,
  FlatList,
  ImageSourcePropType,
  Image,
  StyleSheet,
} from "react-native";

interface ImageProps {
  postImage: ImageSourcePropType;
  style: {};
}

const PostImages: FC<ImageProps> = ({ style, postImage }) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={postImage} style={style} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: { width: "100%", flexGrow: 1, padding: 10 },
});

export default PostImages;
