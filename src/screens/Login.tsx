import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Input } from "@rneui/themed";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/Ionicons";
import { navigate } from "src/helpers/RootNavigation";
import { login } from "src/api";
import { AuthStackParams } from "src/navigators";
import Button from "src/components/core/Button";
import IconButton from "src/components/core/Icons";
import Logo from "assets/logo.svg";
import Google from "assets/icons/google.svg";
import Facebook from "assets/icons/facebook.svg";
import Twitter from "assets/icons/twitter.svg";

type Props = NativeStackScreenProps<AuthStackParams, "Login">;

export default function Login({ navigation }: Props) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSocial = () => {};

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const response = await login(formData);

      setIsLoading(false);

      if (response && response.statusCode === 401) {
        console.error("Login failed:", response.message);
      } else {
        navigate("HomeNavigator", { screen: "Home" });
      }
    } catch (error: any) {
      console.error("Error:", error.message);
      setIsLoading(false);
    }
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
            placeholder="Write your username"
            onChangeText={(text) => handleChange("username", text)}
            value={formData.username}
          />

          <Input
            placeholder="Introduce your password"
            textContentType="password"
            secureTextEntry={isPasswordVisible}
            rightIcon={
              <Icon
                name="eye-off-outline"
                size={20}
                onPress={togglePasswordVisibility}
              />
            }
            onChangeText={(text) => handleChange("password", text)}
            value={formData.password}
          />

          <Text style={[styles.boldText, styles.forgotText]}>
            Forgot your password?
          </Text>
        </View>
        <Button title="Login" onPress={handleLogin} />

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
        <Text>
          Not registered?
          <Text style={styles.boldText} onPress={toSignUp}>
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
