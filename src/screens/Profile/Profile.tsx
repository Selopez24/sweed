import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Post from "components/core/Post";
import ProfileHeader from "components/core/ProfileHeader";
import ghost from "assets/ghost.webp";
import weedPost from "assets/weed-post.jpg";
import weed2 from "assets/weed2.jpg";
import { getUserPosts } from "src/api/user";
import { useQuery } from "@tanstack/react-query";
import useUserStore from "src/stores/user/useUserStore";
import { Post as PostType } from "src/types/post";


const Profile = ({ }) => {

  const userState = useUserStore(state => state.user)

  const { data: postData } = useQuery({
    queryKey: ['profilePosts'],
    queryFn: () => getUserPosts(userState?.id)
  })



  return (
    <>
      <ScrollView style={styles.homeContainer}>
        <ProfileHeader avatarImage={ghost} />
        {postData?.map(({ id, content, createDate, user }: PostType) => <Post
          avatarImage={ghost}
          username={user.username}
          sweet={
            content}
          date={createDate}
          postImage={[weed2, weedPost, weed2, weedPost]}
          key={id}
        />
        )}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    width: "100%",
    margin: 0,
    paddingHorizontal: 5,
  },
});

export default Profile;
