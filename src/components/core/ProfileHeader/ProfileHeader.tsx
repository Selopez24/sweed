import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageSourcePropType,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import useUserStore from "src/stores/user/useUserStore";
import { ProfileFeedType } from "src/types/profile";
import SelectButton from "./SelectButton";
import { useMutation } from "@tanstack/react-query";
import { followUser, getFollowees } from "src/api/user";

interface Followee {
  firstName: string;
  id: string;
  isActive: boolean;
  lastName: string;
  userName: string;
}

interface ProfileHeaderProps {
  avatarImage: ImageSourcePropType;
  userId: string;
}

const ProfileHeader = ({ avatarImage, userId }: ProfileHeaderProps) => {
  const user = useUserStore((state) => state.user);
  const [followees, setFollowees] = useState<Followee[]>([]);

  if (!user) return;
  const { username, firstName, lastName, id: myUserId } = user;
  const [selected, setSelected] = useState<ProfileFeedType>("all");

  const followMutation = useMutation({
    mutationKey: ["following", userId],
    mutationFn: followUser,
    onSuccess: async () => {
      const followees = await getFollowees();
      setFollowees(followees);
    },
  });
  const handleFollow = async () => {
    followMutation.mutate(userId);
  };

  const isFollowing = followees.map((followee) => followee.id).includes(userId);

  return (
    <View style={styles.profileHeaderConatiner}>
      <View style={styles.profileBanner}>
        <Image source={avatarImage} style={styles.avatarImage} />
      </View>
      <View style={styles.userContainer}>
        <Text style={styles.userName}>
          {firstName} {lastName}
        </Text>
        <Text>@{username}</Text>
        <Text>Biography's description</Text>
        {myUserId !== userId && (
          <TouchableOpacity
            onPress={handleFollow}
            style={[
              styles.contentButton,
              !isFollowing && styles.selectedButton,
            ]}
            activeOpacity={0.8}
          >
            <Text
              style={[styles.textButton, !isFollowing && styles.selectedText]}
            >
              {!isFollowing ? " Follow" : "Following"}
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.followContainer}>
        <Pressable style={{ flexDirection: "row" }}>
          <Text>46</Text>
          <Text>Followers</Text>
        </Pressable>
        <Pressable style={{ flexDirection: "row" }}>
          <Text>56</Text>
          <Text>Following</Text>
        </Pressable>
      </View>
      <View style={styles.contentContainer}>
        <SelectButton
          onSelect={() => setSelected("diaries")}
          selected={selected}
          property="diaries"
        />
        <SelectButton
          onSelect={() => setSelected("all")}
          selected={selected}
          property="all"
        />
        <SelectButton
          onSelect={() => setSelected("media")}
          selected={selected}
          property="media"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileHeaderConatiner: {
    width: "100%",
    // height: 300,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 60,
  },
  profileBanner: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#c3c3c3",
    height: 150,
    position: "relative",
  },
  avatarImage: {
    height: 120,
    width: 120,
    borderRadius: 60,
    position: "absolute",
    bottom: -60,
    borderWidth: 4,
    borderColor: "#FFF",
  },
  userContainer: { marginTop: 60, alignItems: "center", gap: 10 },
  userName: { fontWeight: "600", fontSize: 20 },

  followContainer: {
    width: "100%",
    paddingHorizontal: 100,
    marginVertical: 18,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contentContainer: {
    width: "100%",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  contentButton: {
    width: 100,
    height: 33,
    borderRadius: 17,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: "#027546",
    fontWeight: "600",
  },
  selectedButton: { backgroundColor: "#027546" },
  selectedText: { color: "white" },
});

export default ProfileHeader;
