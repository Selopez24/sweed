import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Logo from "../../assets/Logo";
import CustomButton from "../components/core/Button/Button";
import COLORS from "../styles/colors";

export default function Login({ navigation }) {
  const handleLogin = () => {
    navigation.navigate("LoginView");
  };
  const handleSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <View style={styles.container}>
      <Logo style={styles.logo} />

      <CustomButton
        style={styles.button}
        title="LOG IN"
        onPress={handleLogin}
      />
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.or}>___________________</Text>
        <Text style={styles.or}>Or</Text>
        <Text style={styles.or}>___________________</Text>
      </View>

      <CustomButton
        style={styles.textSignUpButton}
        title="Sign Up"
        onPress={handleSignUp}
        textStyle={styles.textSignUpButton}
      />

      {/* <Text style={styles.forgotPassword}>Forgot Password</Text> */}
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
    // height: 17,
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
