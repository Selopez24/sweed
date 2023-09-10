import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Logo from "../../assets/logo.svg";
import CustomButton from "../components/core/Button/Button";
import { Input } from "@rneui/themed";
import Icon from "react-native-vector-icons/Ionicons";
import { IconButton } from "../components/core/Icons/IconButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParams } from "src/navigators/AuthNavigator";
import { navigate } from "src/helpers/RootNavigation";

const twitter = require("../../assets/twitter-icon.png");
const facebook = require("../../assets/facebook-icon.png");
const google = require("../../assets/google-icon.png");
type Props = NativeStackScreenProps<AuthStackParams, "Login">;

export default function Login({ navigation }: Props) {
  const handleSocial = () => {};
  const handleLogin = () => {
    navigate("HomeNavigator", { screen: "Home" });
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
            errorMessage="Please enter a valid username"
            placeholder="Write your username"
          />

          <Input
            placeholder="Introduce your password"
            textContentType="password"
            secureTextEntry={true}
            rightIcon={<Icon name="eye-off-outline" size={20} />}
          />

          <Text style={[styles.boldText, styles.forgotText]}>
            Forgot your password?
          </Text>
        </View>
        <CustomButton title="Login" onPress={handleLogin} />

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
