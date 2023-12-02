import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Input } from "@rneui/themed";
import * as ImagePicker from "expo-image-picker";
import IconButton from "src/components/core/Icons/IconButton";
import Gallery from "assets/icons/gallery.svg";
import Button from "src/components/core/Button";
import { supabase } from "src/config/initSupabase";
import useUserStore from "src/stores/user/useUserStore";
import { sendPost } from "src/api/post";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

type Props = {
  navigation: NavigationProp<ParamListBase>;
};

export default function PostAction({ navigation }: Props) {
  const [post, setPost] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [imageUri, setImageUri] = useState<string | null>(null);
  const user = useUserStore().user;

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const handlePosting = async () => {
    if (!user) return;
    setIsLoading(true);
    const { data } = await supabase.storage
      .from("Images")
      .createSignedUploadUrl(user?.id);

    const file = imageUri?.split("/").pop();
    const fileExtension = file?.split(".").pop();
    const fileName = file?.split(".")[0];
    const fileType = `image/${fileExtension}`;

    const formData = new FormData();
    const imageToUpload = {
      uri: imageUri,
      name: fileName,
      type: fileType,
    } as unknown as Blob;

    formData.append("file", imageToUpload);

    if (data && imageUri && user?.id) {
      await supabase.storage
        .from("Images")
        .uploadToSignedUrl(user?.id, data.token, formData);
    }
    const {
      data: { publicUrl },
    } = supabase.storage.from("Images").getPublicUrl(user.id);

    await sendPost({
      content: post,
      images: [{ pathName: user.id, url: publicUrl }],
    });
    setIsLoading(false);
    setPost("");
    setImageUri(null);
    navigation.navigate("Feed");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {imageUri ? (
          <Image
            source={{ uri: imageUri }}
            style={{ width: 100, height: 100 }}
          />
        ) : null}
        <Input
          value={post}
          onChangeText={setPost}
          inputContainerStyle={{
            height: 200,
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        />
        <View style={styles.actionsContainer}>
          <IconButton icon={<Gallery />} onPress={pickImage} />
          <Button
            title="post"
            style={{
              width: "20%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: 30,
              borderRadius: 15,
            }}
            loading={isLoading}
            onPress={handlePosting}
            fontSize={14}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    backgroundColor: "#ffffffcc",
  },
  actionsContainer: {
    paddingRight: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
