import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
// @ts-ignore
import Logo from "../../assets/logo.svg";
import CustomButton from "../components/core/Button/Button";
import COLORS from "../styles/colors";
import { Input } from "@rneui/themed";
import IconButton from "../components/images/IconButton";
import Icon from "react-native-vector-icons/Ionicons";

export default function LoginView({ navigation }) {
  const twitter = require("../../assets/twitter-icon.png");
  const facebook = require("../../assets/facebook-icon.png");
  const google = require("../../assets/google-icon.png");

  const handleSocial = () => {
    navigation.navigate("HomeNavigator");
  };
  const handleLogin = () => {
    navigation.navigate("HomeNavigator");
  };
  const toSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Logo style={styles.logo} />

        <View style={styles.formContainer}>
          <Input
            inputContainerStyle={{
              backgroundColor: "#fff",
              borderRadius: 6,
              borderBottomWidth: 0,
            }}
            errorMessage="Please enter a valid username"
            inputStyle={{
              color: COLORS.cursor_color,
              fontSize: 14,
              paddingVertical: 5,
              paddingHorizontal: 8,
            }}
            labelStyle={{ color: "#00ff00" }}
            placeholder="Write your username"
            cursorColor={COLORS.cursor_color}
          />

          <Input
            inputContainerStyle={{
              backgroundColor: "#fff",
              borderRadius: 6,
              borderBottomWidth: 0,
              paddingRight: 5,
            }}
            // errorMessage="password must be at least 8 characters long"

            inputStyle={{
              color: COLORS.cursor_color,
              fontSize: 14,
              paddingVertical: 5,
              paddingHorizontal: 8,
            }}
            labelStyle={{ color: "#00ff00" }}
            placeholder="Introduce your password"
            cursorColor={COLORS.cursor_color}
            textContentType="password"
            secureTextEntry={true}
            rightIcon={<Icon name="eye-off-outline" size={20} />}
          />

          <Text style={[styles.boldText, styles.forgotText]}>
            Forgot your password?
          </Text>
        </View>
        <CustomButton
          style={styles.button}
          title="Login"
          onPress={handleLogin}
        />

        <View style={{ flexDirection: "row" }}>
          <Text style={styles.or}>___________________</Text>
          <Text style={styles.or}>Or</Text>
          <Text style={styles.or}>___________________</Text>
        </View>
        <Text style={styles.or}>Enter with your social media account</Text>
        <View style={styles.socialIcons}>
          <IconButton icon={facebook} onPress={handleSocial} style={{}} />
          <IconButton icon={twitter} onPress={handleSocial} style={{}} />
          <IconButton icon={google} onPress={handleSocial} style={{}} />
        </View>
        <Text>
          Not registered?
          <Text style={styles.boldText} onPress={toSignUp}>
            {" "}
            Sign up
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  formContainer: {
    width: "100%",
    marginBottom: 33,
    justifyContent: "flex-end",
    alignContent: "flex-end",
    alignItems: "flex-end",
  },
  button: { display: "flex" },

  logo: {
    marginBottom: 87,
  },
  boldText: {
    textDecorationLine: "underline",
    color: "#000",
    fontWeight: "600",
  },

  forgotText: {
    marginTop: -15,
    marginRight: 15,
  },

  socialIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "space-between",
    width: "60%",
  },

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
