import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

type EmptyType = "sweeds" | "diaries" | "videos";

interface Props {
  type: EmptyType;
}

const EmptyContent = ({ type }: Props) => {
  return (
    <View style={styles.container}>
      <Icon name="browser-not-supported" size={44} />
      <Text>Este usuario no tiene {type} todavía</Text>
    </View>
  );
};

export default EmptyContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
});
