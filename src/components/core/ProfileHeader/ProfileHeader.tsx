import React, { FC } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageSourcePropType,
  Image,
  Pressable,
} from "react-native";

interface ProfileHeaderProps {
  avatarImage?: ImageSourcePropType;
}

const ProfileHeader: FC<ProfileHeaderProps> = ({ avatarImage }) => {
  return (
    <View style={styles.profileHeaderConatiner}>
      <View style={styles.profileBanner}>
        <Image source={avatarImage} style={styles.avatarImage} />
      </View>
      <View style={styles.userContainer}>
        <Text style={{ fontWeight: "600", fontSize: 20 }}>User Name</Text>
        <Text>@username</Text>
        <Text style={{ marginTop: 11 }}>Biography's description</Text>
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
        <Pressable style={styles.contentButton}>
          <Text style={styles.textButton}>Followers</Text>
        </Pressable>
        <Pressable style={styles.contentButton}>
          <Text style={styles.textButton}>Following</Text>
        </Pressable>
        <Pressable style={styles.contentButton}>
          <Text style={styles.textButton}>Following</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileHeaderConatiner: {
    width: "100%",
    height: 300,
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
    // marginBottom: 60,
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
  userContainer: { marginTop: 60, alignItems: "center" },

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
    backgroundColor: "#555555",
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: "white",
    fontWeight: "600",
  },
});

export default ProfileHeader;
