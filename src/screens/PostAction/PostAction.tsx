import React, { useState } from "react";
import { Image, View } from "react-native";
import { Input } from "@rneui/themed";
import * as ImagePicker from "expo-image-picker";
import IconButton from "src/components/core/Icons/IconButton";
import Gallery from "assets/icons/gallery.svg";
import Button from "src/components/core/Button";
import { supabase } from "src/config/initSupabase";
import useUserStore from "src/stores/user/useUserStore";
import { sendPost } from "src/api/post";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { styles } from "./PostAction,styles";
import { useQueryClient } from "@tanstack/react-query";

type Props = {
  navigation: NavigationProp<ParamListBase>;
};

export default function PostAction({ navigation }: Props) {
  const [post, setPost] = useState("");
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);
  const [imageUris, setImageUris] = useState<string[]>([]);

  const user = useUserStore().user;

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
      allowsMultipleSelection: true,
    });

    if (!result.canceled && result.assets) {
      setImageUris(result.assets.map((asset) => asset.uri));
    }
  };

  const handlePosting = async () => {
    if (!user) return;

    setIsLoading(true);
    const imagesData: { pathName: string; url: string }[] = [];

    if (imageUris.length > 0) {
      for (const imageUri of imageUris) {
        const file = imageUri.split("/").pop();
        const fileExtension = file?.split(".").pop();
        const fileName = `${Date.now()}.${fileExtension}`;
        const fileType = `image/${fileExtension}`;

        const formData = new FormData();
        const imageToUpload = {
          uri: imageUri,
          name: fileName,
          type: fileType,
        } as unknown as Blob;

        formData.append("file", imageToUpload);

        const uploadPath = `images/${user.id}/${fileName}`;

        await supabase.storage.from("Images").upload(uploadPath, formData, {
          contentType: fileType,
          upsert: true,
        });

        const { data } = await supabase.storage
          .from("Images")
          .getPublicUrl(uploadPath);

        imagesData.push({ pathName: uploadPath, url: data.publicUrl });
      }
    }

    await sendPost({
      content: post,
      images: imagesData,
    });

    setIsLoading(false);
    setPost("");
    setImageUris([]);
    await queryClient.invalidateQueries({ queryKey: ["user-posts"] });
    navigation.navigate("Feed");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.imagesContainer}>
          {imageUris.map((uri) => (
            <Image key={uri} source={{ uri }} style={styles.loadedImages} />
          ))}
        </View>

        <Input
          value={post}
          onChangeText={setPost}
          spellCheck={false}
          inputContainerStyle={styles.actionsContainer}
        />
        <View style={styles.actionsContainer}>
          <IconButton icon={<Gallery />} onPress={pickImage} />
          <Button
            title="post"
            style={styles.btn}
            loading={isLoading}
            onPress={handlePosting}
            fontSize={14}
          />
        </View>
      </View>
    </View>
  );
}
