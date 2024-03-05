import React from "react";
import { ActivityIndicator, ScrollView, StyleSheet } from "react-native";
import Post from "components/core/Post";
import ghost from "assets/ghost.webp";
import { useQuery } from "@tanstack/react-query";
import { getPostsByUser } from "src/api/post";
import useUserStore from "src/stores/user/useUserStore";

const Home = () => {
  const user = useUserStore((state) => state.user);

  const { data: userPosts } = useQuery({
    queryKey: ["user-posts"],
    queryFn: () => getPostsByUser(user!.id),
  });

  return (
    <ScrollView style={styles.homeContainer}>
      {userPosts ? (
        userPosts.map(({ id, content, images, updateDate }) => (
          <Post
            key={id}
            avatarImage={ghost}
            username={"parapeto"}
            sweet={content}
            date={updateDate}
            postImages={images}
          />
        ))
      ) : (
        <ActivityIndicator />
      )}
    </ScrollView>
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
