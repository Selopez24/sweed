import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Post from "../components/core/Post";
import ghost from "../../assets/ghost.webp";

const Home = () => {
  return (
    <View style={styles.homeContainer}>
      <Post
        avatarImage={ghost}
        username={"parapeto"}
        sweet={
          "Este es un comentario o es un tuit? ¿cómo se llama el contenido del post? será un sweed? "
        }
        date={new Date()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    width: "100%",
    height: 300,

    padding: 5,
  },
});

export default Home;
