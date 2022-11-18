import React, { FC } from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import FontIcon from "react-native-vector-icons/FontAwesome";
// import OctIcon from "react-native-vector-icons/Octicons";
// import EntypoIcon from "react-native-vector-icons/Entypo";

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
    <View style={styles.postContainer}>
      <View style={styles.avatarContainer}>
        <Pressable>
          <Image source={avatarImage} style={styles.avatarImage} />
        </Pressable>
      </View>
      <View style={styles.postDescription}>
        <View style={styles.postHeader}>
          <View style={styles.usernameContainer}>
            <Text style={styles.username}>{username}</Text>
            <Text style={styles.date}>{`-  ${month}/${day}/${year}`}</Text>
          </View>
          <Icon name="dots-three-horizontal" style={styles.icon} />
        </View>
        <View>
          <Text style={styles.content}>{sweet}</Text>
          <View style={styles.reactionsContainer}>
            <FontIcon name="heart" style={styles.reactIcon} />
            <FontIcon name="comment-o" style={styles.reactIcon} />
            <FontIcon name="retweet" style={styles.reactIcon} />
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  postContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    borderBottomColor: "#a9a9a9",
    borderBottomWidth: 1,
    paddingBottom: 17,
  },
  avatarContainer: {
    width: "10%",
  },
  avatarImage: {
    width: 52,
    height: 52,
    borderRadius: 50,
    zIndex: 100,
  },
  postDescription: {
    width: "80%",
    paddingRight: 10,
  },
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 11,
  },
  usernameContainer: { flexDirection: "row", textAlignVertical: "center" },
  username: { fontSize: 14, fontWeight: "700" },
  date: { fontWeight: "500", color: "#a9a9a9", marginLeft: 10 },
  icon: {
    fontSize: 18,
    textAlign: "center",
  },
  content: {
    fontSize: 14,
    fontWeight: "400",
    color: "#090909",
  },
  reactionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    paddingHorizontal: 10,
  },
  reactIcon: {
    color: "#696969",
    fontSize: 16,
  },
});
export default Post;
