import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
  View,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { PostImages } from "../PostImages";
import { HomeStackParams } from "src/navigators";
import { styles } from "./Post.styles";
import PostActions from "./PostActions";
import { ImageDTO } from "src/types/image";

interface PostProps {
  avatarImage: ImageSourcePropType;
  username: string;
  sweet: string;
  date?: Date;
  postImages: ImageDTO[];
  // favorites?: number;
  // comments?: number;
  // share?: number;
}

const Post = ({
  avatarImage,
  username,
  sweet,
  postImages,
  date,
}: PostProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();

  const goToProfile = () => {
    navigation.navigate("Profile");
  };

  return (
    <View style={styles.post}>
      <View style={styles.postHeader}>
        <Pressable onPress={goToProfile}>
          <Image source={avatarImage} style={styles.avatarImage} />
        </Pressable>
        <View style={styles.postInfoContainer}>
          <Text style={styles.username}>{username}</Text>
          <Text style={styles.date}>- {date?.toLocaleString()}</Text>
        </View>
        <View style={styles.dotsContainer}>
          <Entypo name="dots-three-horizontal" size={24} style={styles.icon} />
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>{sweet}</Text>

        {postImages?.length > 0 ? (
          <View style={styles.imageContainers}>
            {postImages.map((image, i) => (
              <PostImages
                imageStyle={[styles.postImages]}
                postImage={image}
                key={i}
              />
            ))}
          </View>
        ) : null}
      </View>
      <PostActions />
    </View>
  );
};

export default Post;
