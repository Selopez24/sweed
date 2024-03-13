import React from "react";
import { FlatList, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Post from "components/core/Post";
import ghost from "assets/ghost.webp";
import weedPost from "assets/weed-post.jpg";
import weed2 from "assets/weed2.jpg";
import { POSTS } from "src/mocks/posts";

const Home = () => {
  return (
    <SafeAreaView style={styles.homeContainer}>
      <FlatList
        data={POSTS}
        renderItem={({ item }) => (
          <Post post={item} avatarImage={ghost} postImage={[weedPost]} />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    width: "100%",
    margin: 0,
    paddingHorizontal: 5,
  },
});

export default Home;
