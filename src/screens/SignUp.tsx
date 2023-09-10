import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Input } from "@rneui/themed";
import Icon from "react-native-vector-icons/Ionicons";

import Logo from "../../assets/logo.svg";
import CustomButton from "../components/core/Button/Button";
import { IconButton } from "../components/core/Icons/IconButton";
import { AuthStackParams } from "src/navigators/AuthNavigator";
import Google from "../../assets/icons/google.svg";
import Facebook from "../../assets/icons/facebook.svg";
import Twitter from "../../assets/icons/twitter.svg";

type Props = NativeStackScreenProps<AuthStackParams, "SignUp">;

export default function SignUp({ navigation }: Props) {
 
  const handleSocial = () => {
    return null;
  };
  const handleSignUp = () => {
    navigation.navigate("SignUp");
  };
  const handleLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Logo style={styles.logo} />

        <Input errorMessage="" placeholder="Create your username" />
        <Input errorMessage="" placeholder="Your first name" />
        <Input errorMessage="" placeholder="Your last name" />
        <Input errorMessage="" placeholder="Your email" />
        <Input
          placeholder="Create your password"
          textContentType="password"
          secureTextEntry={true}
          rightIcon={<Icon name="eye-off-outline" size={20} />}
        />
        <Input
          errorMessage=""
          placeholder="Confirm password"
          textContentType="password"
          secureTextEntry={true}
          rightIcon={<Icon name="eye-off-outline" size={20} />}
        />
        <Text style={styles.privacyText}>
          By selecting ‘Sing up’ you agree our terms and statements of privacy.
          Read them <Text style={styles.boldText}>here</Text>
        </Text>
        <CustomButton title="Sign Up" onPress={handleSignUp} />

        <View style={{ flexDirection: "row" }}>
          <Text style={styles.or}>___________________</Text>
          <Text style={styles.or}>Or</Text>
          <Text style={styles.or}>___________________</Text>
        </View>
        <Text style={styles.or}>Enter with your social media account</Text>
        <View style={styles.socialIcons}>
          <IconButton icon={<Facebook />} onPress={handleSocial} />
          <IconButton icon={<Twitter />} onPress={handleSocial} />
          <IconButton icon={<Google />} onPress={handleSocial} />
        </View>
        <Text style={styles.privacyText}>
          Already have an account?
          <Text style={styles.boldText} onPress={handleLogin}>
            Log in
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
  logo: {
    marginBottom: 38,
  },
  privacyText: {
    color: "#767676",
    fontWeight: "400",
    fontSize: 14,
    marginBottom: 33,
  },
  boldText: {
    fontWeight: "600",
    color: "#231F20",
    textDecorationLine: "underline",
  },
  button: { width: "100%", marginBottom: 3 },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "space-between",
    width: "60%",
  },
  textSignUpButton: {
    backgroundColor: "white",
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
