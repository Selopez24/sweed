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

interface PostProps {
  avatarImage: ImageSourcePropType;
  username: string;
  sweet: string;
  // date?: Date;
  postImage: ImageSourcePropType[];
  // favorites?: number;
  // comments?: number;
  // share?: number;
}

const Post = ({ avatarImage, username, sweet, postImage }: PostProps) => {
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
          <Text style={styles.date}>- 1 hour ago</Text>
        </View>
        <View style={{ marginLeft: "auto" }}>
          <Entypo name="dots-three-horizontal" size={24} style={styles.icon} />
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>{sweet}</Text>

        {postImage?.length > 0 ? (
          <View style={styles.imageContainers}>
            {postImage.map((image, i) => (
              <PostImages
                imageStyle={[
                  styles.postImages,
                  {
                    top: -0,
                    left:
                      postImage.length === 1
                        ? 0
                        : postImage.length === 2
                        ? i * 72
                        : postImage.length === 3
                        ? i * 55
                        : i * 38,
                    minWidth: 240,
                    width: `${100 - 20 * (postImage.length - 1)}%`,
                    zIndex: 5 - i,
                  },
                ]}
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
