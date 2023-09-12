import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Logo from "../../assets/logo.svg";
import CustomButton from "../components/core/Button/Button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParams } from "src/navigators/AuthNavigator";

type Props = NativeStackScreenProps<AuthStackParams, "Auth">;

export default function Auth({ navigation }: Props) {
  const handleLogin = () => {
    navigation.navigate("Login");
  };
  const handleSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Logo />
      </View>

      <CustomButton title="Log in" onPress={handleLogin} />
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.or}>___________________</Text>
        <Text style={styles.or}>Or</Text>
        <Text style={styles.or}>___________________</Text>
      </View>

      <CustomButton title="Sign Up" onPress={handleSignUp} />
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
    top: 100,
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
