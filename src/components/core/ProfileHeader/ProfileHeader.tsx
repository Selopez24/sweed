import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageSourcePropType,
  Image,
  Pressable,
} from "react-native";
import { COLORS } from "src/styles";

interface ProfileHeaderProps {
  avatarImage: ImageSourcePropType;
}

const ProfileHeader = ({ avatarImage }: ProfileHeaderProps) => {
  const [selected, setSelected] = useState<"diaries" | "media" | "all">("all");

  return (
    <View style={styles.profileHeaderConatiner}>
      <View style={styles.profileBanner}>
        <Image source={avatarImage} style={styles.avatarImage} />
      </View>
      <View style={styles.userContainer}>
        <Text style={styles.userName}>User Name</Text>
        <Text>@username</Text>
        <Text style={styles.biography}>Biography's description</Text>
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
        <Pressable
          onPress={() => setSelected("diaries")}
          style={[
            styles.contentButton,
            selected === "diaries" ? styles.selectedButton : null,
          ]}
        >
          <Text
            style={[
              styles.textButton,
              selected === "diaries" ? styles.selecteedText : null,
            ]}
          >
            Diaries
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setSelected("all")}
          style={[
            styles.contentButton,
            selected === "all" ? styles.selectedButton : null,
          ]}
        >
          <Text
            style={[
              styles.textButton,
              selected === "all" ? styles.selecteedText : null,
            ]}
          >
            All
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setSelected("media")}
          style={[
            styles.contentButton,
            selected === "media" ? styles.selectedButton : null,
          ]}
        >
          <Text
            style={[
              styles.textButton,
              selected === "media" ? styles.selecteedText : null,
            ]}
          >
            Media
          </Text>
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
  userName: { fontWeight: "600", fontSize: 20 },
  biography: { marginTop: 11 },

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
    color: COLORS.strong_green,
    fontWeight: "600",
  },
  selectedButton: { backgroundColor: COLORS.strong_green },
  selecteedText: { color: "white" },
});

export default ProfileHeader;
