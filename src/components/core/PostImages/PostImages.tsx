import React from "react";
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

const PostImages = ({ style, postImage }: ImageProps) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={postImage} style={style} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    flexGrow: 1,
    // padding: 10,
  },
});

export default PostImages;
