import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Logo from "../../assets/Logo";
// import Logo from "../../assets/logo.svg";
import CustomButton from "../components/core/Button/Button";

export default function Login({ navigation }) {
  const handleLogin = () => {
    navigation.navigate("HomeNavigator");
  };
  const handleSignUp = () => {
    navigation.navigate("AuthNavigator");
  };

  return (
    <View style={styles.container}>
      <Logo />

      <CustomButton
        style={styles.button}
        title="LOG IN"
        onPress={handleLogin}
      />

      <Text style={styles.or}>Or</Text>

      <CustomButton
        style={styles.button}
        title="SIGN UP"
        onPress={handleSignUp}
      />

      <Text style={styles.forgotPassword}>Forgot Password</Text>
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
  button: { width: "100%" },

  or: {
    margin: 20,
    color: "#767676",
  },
  forgotPassword: {
    textDecorationLine: "underline",
    alignSelf: "flex-start",
    marginTop: 20,
  },
});
