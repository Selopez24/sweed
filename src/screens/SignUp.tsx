import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Logo from "../../assets/Logo";
import CustomButton from "../components/core/Button/Button";
import COLORS from "../styles/colors";
import { Input } from "@rneui/themed";
import IconButton from "../components/images/IconButton";
 import twitter from "../../assets/twitter-icon.png";
 import facebook from "../../assets/facebook-icon.png";
 import google from "../../assets/google-icon.png";

export default function SignUp({ navigation }) {
  // Imported with require because with 'import' throws an error "Cannot find module 'url:../..public/img/logo.png' or its corresponding type declarations."
  // const twitter = require("../../assets/twitter-icon.png");
  // const facebook = require("../../assets/facebook-icon.png");
  // const google = require("../../assets/google-icon.png");

  const handleSocial = () => {
    navigation.navigate("HomeNavigator");
  };
  const handleSignUp = () => {
    navigation.navigate("AuthNavigator");
  };

  return (
    <View style={styles.container}>
      <Logo style={styles.logo} />

      <Input
        containerStyle={{}}
        disabledInputStyle={{}}
        inputContainerStyle={{
          backgroundColor: "#fff",
          borderRadius: 6,
          borderBottomWidth: 0,
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}
        errorMessage="Please enter a valid username"
        errorStyle={{}}
        errorProps={{}}
        inputStyle={{ color: COLORS.cursor_color, fontSize: 14 }}
        labelStyle={{ color: "#00ff00" }}
        labelProps={{}}
        placeholder="Create your username"
        cursorColor={COLORS.cursor_color}
      />
      <Input
        containerStyle={{}}
        disabledInputStyle={{}}
        inputContainerStyle={{
          backgroundColor: "#fff",
          borderRadius: 6,
          borderBottomWidth: 0,
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}
        errorMessage=""
        errorStyle={{}}
        errorProps={{}}
        inputStyle={{ color: COLORS.cursor_color, fontSize: 14 }}
        labelStyle={{ color: "#00ff00" }}
        labelProps={{}}
        placeholder="Create your username"
        cursorColor={COLORS.cursor_color}
      />
      <Input
        containerStyle={{}}
        disabledInputStyle={{}}
        inputContainerStyle={{
          backgroundColor: "#fff",
          borderRadius: 6,
          borderBottomWidth: 0,
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}
        errorMessage=""
        errorStyle={{}}
        errorProps={{}}
        inputStyle={{ color: COLORS.cursor_color, fontSize: 14 }}
        labelStyle={{ color: "#00ff00" }}
        labelProps={{}}
        placeholder="Create your username"
        cursorColor={COLORS.cursor_color}
      />
      <Input
        containerStyle={{}}
        disabledInputStyle={{}}
        inputContainerStyle={{
          backgroundColor: "#fff",
          borderRadius: 6,
          borderBottomWidth: 0,
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}
        errorMessage=""
        errorStyle={{}}
        errorProps={{}}
        inputStyle={{ color: COLORS.cursor_color, fontSize: 14 }}
        labelStyle={{ color: "#00ff00" }}
        labelProps={{}}
        placeholder="Create your username"
        cursorColor={COLORS.cursor_color}
      />
      <Text>
        By selecting ‘Sing up’ you agree our terms and statements of privacy.
        Read them here
      </Text>
      <CustomButton
        style={styles.button}
        title="Sign Up"
        onPress={handleSignUp}
      />

      <View style={{ flexDirection: "row" }}>
        <Text style={styles.or}>___________________</Text>
        <Text style={styles.or}>Or</Text>
        <Text style={styles.or}>___________________</Text>
      </View>
      <Text style={styles.or}>Enter with your social media account</Text>
      <View style={{ flexDirection: "row", backgroundColor: "transparent" }}>
        <IconButton icon={facebook} onPress={handleSocial} style={{}} />
        <IconButton icon={twitter} onPress={handleSocial} style={{}} />
        <IconButton icon={google} onPress={handleSocial} style={{}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  logo: {
    position: "absolute",
    top: 60,
  },

  button: { width: "100%" },
  textSignUpButton: {
    backgroundColor: "white",
    color: COLORS.strong_green,
    fontWeight: "700",
  },

  or: {
    marginHorizontal: 10,
    marginVertical: 20,
    color: "#767676",
  },
  forgotPassword: {
    textDecorationLine: "underline",
    alignSelf: "flex-start",
    marginTop: 20,
  },
});
