import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Post from "components/core/Post";
import ProfileHeader from "components/core/ProfileHeader";
import ghost from "assets/ghost.webp";
import weedPost from "assets/weed-post.jpg";
import weed2 from "assets/weed2.jpg";
import { followUser, getUserPosts } from "src/api/user";
import { useMutation, useQuery } from "@tanstack/react-query";
import { RouteProp, useRoute } from "@react-navigation/native";
import { EmptyContent } from "src/components/ui/EmptyContent";
import { DrawerStackParams } from "src/types/root";
import useUserStore from "src/stores/user/useUserStore";

const Profile = () => {
  const user = useUserStore((state) => state.user);
  const { params } = useRoute<RouteProp<DrawerStackParams, "Profile">>();

  const { data: postData } = useQuery({
    queryKey: ["profilePosts", params?.userId],
    queryFn: async () => {
      const idToGet = params?.userId ?? user?.id;
      return await getUserPosts(idToGet);
    },
  });

  return (
    <View style={styles.postsContainer}>
      <FlatList
        data={postData}
        renderItem={({ item }) => (
          <Post post={item} avatarImage={ghost} postImage={[weedPost]} />
        )}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<EmptyContent type="sweeds" />}
        ListHeaderComponent={
          <ProfileHeader
            avatarImage={ghost}
            userId={params.userId ?? user?.id!}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  postsContainer: {
    flex: 1,
    minHeight: 300,
  },
});

export default Profile;
