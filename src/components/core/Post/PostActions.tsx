import React from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "./Post.styles";

const PostActions = () => (
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
  );

export default PostActions;
