import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import PostImages from "../PostImages/PostImages";
import { HomeStackParams } from "../../../navigators/HomeNavigator";

interface PostProps {
  avatarImage: ImageSourcePropType;
  username: string;
  sweet: string;
  date?: Date;
  postImage: ImageSourcePropType[];
  favorites?: number;
  comments?: number;
  share?: number;
}

const Post = ({
  avatarImage,
  username,
  sweet,
  date,
  postImage,
  favorites,
  comments,
  share,
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
          <Text style={styles.date}>- 1 hour ago</Text>
        </View>
        <View style={{ marginLeft: "auto" }}>
          <Icon name="dots-three-horizontal" style={styles.icon} />
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
      <View style={styles.actionsContainer}>
        <Pressable>
          <Text style={styles.reactIcon}>Reaction</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.reactIcon}>Comment</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.reactIcon}>Repost</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.reactIcon}>Send</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  avatarImage: {
    width: 52,
    height: 52,
    borderRadius: 50,
    zIndex: 100,
  },
  post: {
    width: "100%",
    borderBottomColor: "#a9a9a9",
    borderBottomWidth: 1,
    padding: 15,
  },
  postHeader: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    marginBottom: 11,
  },
  postInfoContainer: {
    flexDirection: "row",
    textAlignVertical: "center",
    justifyContent: "space-between",
    marginLeft: 11,
  },
  username: { fontSize: 14, fontWeight: "700" },
  date: { fontWeight: "500", color: "#a9a9a9", marginLeft: 10 },
  icon: {
    fontSize: 18,
    textAlign: "center",
    color: "#696969",
  },
  content: {
    width: "100%",
  },
  text: {
    fontSize: 14,
    fontWeight: "400",
    color: "#090909",
    marginBottom: 22,
  },
  imageContainers: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    position: "relative",
    height: 230,
  },
  postImages: {
    maxHeight: 220,
    borderRadius: 5,
    overflow: "hidden",
    margin: 1,
    borderWidth: 3,
    borderColor: "#e9e9e9",
    position: "absolute",
  },

  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  reactIcon: {
    color: "#696969",
    fontSize: 14,
  },
});
export default Post;
