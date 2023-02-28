import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Post from "../components/core/Post";
const ghost = require("../../assets/ghost.webp");
const weedPost = require("../../assets/weed-post.jpg");
const weed2 = require("../../assets/weed2.jpg");

const Home = () => {
  return (
    <ScrollView style={styles.homeContainer}>
      <Post
        avatarImage={ghost}
        username={"parapeto"}
        sweet={
          "Este es un comentario o es un tuit? ¿cómo se llama el contenido del post? será un sweed?sld,  kfweaa oewk cm ceemcm e  ekopekdoke e eokdkokd ekfk  "
        }
        date={new Date()}
        postImage={[weedPost]}
      />
      <Post
        avatarImage={ghost}
        username={"parapeto"}
        sweet={
          "Este es un comentario o es un tuit? ¿cómo se llama el contenido del post? será un sweed? "
        }
        date={new Date()}
        postImage={[weed2, weedPost]}
      />
      <Post
        avatarImage={ghost}
        username={"parapeto"}
        sweet={
          "Este es un comentario o es un tuit? ¿cómo se llama el contenido del post? será un sweed? "
        }
        date={new Date()}
        postImage={[]}
      />
      <Post
        avatarImage={ghost}
        username={"parapeto"}
        sweet={
          "Este es un comentario o es un tuit? ¿cómo se llama el contenido del post? será un sweed? kacmdmcasmafo sdmsam dmfsfmkma sfioajf,x "
        }
        date={new Date()}
        postImage={[weed2, weedPost, weed2]}
      />
      <Post
        avatarImage={ghost}
        username={"parapeto"}
        sweet={
          "Este es un comentario o es un tuit? ¿cómo se llama el contenido del post? será un sweed? "
        }
        date={new Date()}
        postImage={[weed2, weedPost, weed2, weedPost]}
      />
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
