import React, { FC } from "react";
import {
  FlatList,
  Image,
  ImageSourcePropType,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import FontIcon from "react-native-vector-icons/FontAwesome";
import { Image as ImageElement } from "@rneui/themed";
import PostImages from "../PostImages/PostImages";

interface PostProps {
  avatarImage?: ImageSourcePropType;
  username: string;
  sweet: string;
  date?: Date;
  postImage?: ImageSourcePropType;
  favorites?: number;
  comments?: number;
  share?: number;
}

const Post: FC<PostProps> = ({
  avatarImage,
  username,
  sweet,
  date,
  postImage,
  favorites,
  comments,
  share,
}) => {
  const month = date!.getUTCMonth() + 1;
  const day = date!.getUTCDate();
  const year = date!.getFullYear();

  return (
    <View style={styles.container}>
      <View style={styles.post}>
        <View style={styles.postHeader}>
          <Pressable>
            <Image source={avatarImage} style={styles.avatarImage} />
          </Pressable>
          <View style={styles.usernameContainer}>
            <Text style={styles.username}>{username}</Text>
            {/* <Text style={styles.date}>{`-  ${month}/${day}/${year}`}</Text> */}
            <Text style={styles.date}>- 1 hour ago</Text>
          </View>
          <View style={{ flex: 1 }}></View>
          <Icon name="dots-three-horizontal" style={styles.icon} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.content}>{sweet}</Text>
          {postImage && (
            <>
              <View style={styles.imageContainers}>
                <PostImages postImage={postImage} style={styles.postImages} />
                <PostImages postImage={postImage} style={styles.postImages} />
                <PostImages postImage={postImage} style={styles.postImages} />
                {/* <PostImages postImage={postImage} style={styles.postImages} /> */}
                {/* <PostImages postImage={postImage!} style={styles.postImages} /> */}
              </View>
            </>
          )}
        </View>
        <View style={styles.reactionsContainer}>
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
          {/* <FontIcon name="heart" style={styles.reactIcon} />
          <FontIcon name="comment-o" style={styles.reactIcon} />
          <FontIcon name="retweet" style={styles.reactIcon} /> */}
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderBottomColor: "#a9a9a9",
    borderBottomWidth: 1,
    padding: 15,
  },
  avatarImage: {
    width: 52,
    height: 52,
    borderRadius: 50,
    zIndex: 100,
  },
  post: {
    width: "100%",
  },
  postHeader: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    marginBottom: 11,
  },
  usernameContainer: {
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
  contentContainer: {
    // borderWidth: 2,
    // maxHeight: 320,
    width: "100%",
  },
  content: {
    fontSize: 14,
    fontWeight: "400",
    color: "#090909",
    marginBottom: 22,
  },
  imageContainers: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    maxHeight: 950,
    minHeight: 230,
    flex: 1,
    borderWidth: 1,
    borderColor: "#a9a9a9",
    borderRadius: 10,
  },
  postImages: {
    width: "100%",
    maxHeight: 200,
    borderRadius: 5,
    // aspectRatio: 1.45,
    overflow: "hidden",
    flex: 1,
    margin: 1,
    flexGrow: 3,
  },
  reactionsContainer: {
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
