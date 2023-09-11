import React, { useState } from "react";
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
import { signup } from "src/api";

type Props = NativeStackScreenProps<AuthStackParams, "SignUp">;

export default function SignUp({ navigation }: Props) {
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(true);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (key: string, value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  const handleSocial = () => {
    return null;
  };
  const handleSignUp = async () => {
    if (formData.password !== confirmPassword) {
      console.error("Passwords do not match!");
      return;
    }
    setIsLoading(true);
    try {
      const response = await signup(formData);
      console.log(response);
      setIsLoading(false);
      navigation.navigate("Login");
    } catch (error: any) {
      console.error("Error:", error.message);
      setIsLoading(false);
    }
  };
  const handleLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Logo style={styles.logo} />

        <Input
          errorMessage=""
          placeholder="Create your username"
          onChangeText={(text) => handleChange("username", text)}
          value={formData.username}
        />
        <Input
          errorMessage=""
          placeholder="Your first name"
          onChangeText={(text) => handleChange("firstName", text)}
          value={formData.firstName}
        />
        <Input
          errorMessage=""
          placeholder="Your last name"
          onChangeText={(text) => handleChange("lastName", text)}
          value={formData.lastName}
        />
        <Input
          errorMessage=""
          placeholder="Your email"
          keyboardType="email-address"
          onChangeText={(text) => handleChange("email", text)}
          value={formData.email}
        />
        <Input
          placeholder="Create your password"
          textContentType="password"
          secureTextEntry={isPasswordVisible}
          rightIcon={
            <Icon
              name={isPasswordVisible ? "eye-off-outline" : "eye-outline"}
              size={20}
              onPress={togglePasswordVisibility}
            />
          }
          onChangeText={(text) => handleChange("password", text)}
          value={formData.password}
        />
        <Input
          errorMessage=""
          placeholder="Confirm password"
          textContentType="password"
          secureTextEntry={isConfirmPasswordVisible}
          rightIcon={
            <Icon
              name={
                isConfirmPasswordVisible ? "eye-off-outline" : "eye-outline"
              }
              size={20}
              onPress={toggleConfirmPasswordVisibility}
            />
          }
          onChangeText={setConfirmPassword}
          value={confirmPassword}
        />
        <Text style={styles.privacyText}>
          By selecting ‘Sing up’ you agree our terms and statements of privacy.
          Read them <Text style={styles.boldText}>here</Text>
        </Text>
        <CustomButton
          title="Sign Up"
          onPress={handleSignUp}
          loading={isLoading}
        />

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
