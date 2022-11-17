import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Logo from "../../assets/Logo";
import CustomButton from "../components/core/Button/Button";
import COLORS from "../styles/colors";
import { Input } from "@rneui/themed";
import IconButton from "../components/images/IconButton";
import twitter from "../../assets/twitter-icon.png";
import facebook from "../../assets/facebook-icon.png";
import google from "../../assets/google-icon.png";
import Icon from "react-native-vector-icons/Ionicons";

export default function SignUp({ navigation }) {
  const handleSocial = () => {
    navigation.navigate("HomeNavigator");
  };
  const handleSignUp = () => {
    navigation.navigate("AuthNavigator");
  };
  const handleLogin = () => {
    navigation.navigate("LoginView");
  };

  return (
    <ScrollView style={{ top: 80 }}>
      <View style={styles.container}>
        <Logo style={styles.logo} />

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
          placeholder="Create your username"
          cursorColor={COLORS.cursor_color}
        />
        <Input
          inputContainerStyle={{
            backgroundColor: "#fff",
            borderRadius: 6,
            borderBottomWidth: 0,
          }}
          errorMessage=""
          inputStyle={{
            color: COLORS.cursor_color,
            fontSize: 14,
            paddingVertical: 5,
            paddingHorizontal: 8,
          }}
          labelStyle={{ color: "#00ff00" }}
          placeholder="Your email"
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
          placeholder="Create your password"
          cursorColor={COLORS.cursor_color}
          textContentType="password"
          secureTextEntry={true}
          rightIcon={<Icon name="eye-off-outline" size={20} />}
        />
        <Input
          inputContainerStyle={{
            backgroundColor: "#fff",
            borderRadius: 6,
            borderBottomWidth: 0,
            paddingRight: 5,
          }}
          errorMessage=""
          inputStyle={{
            color: COLORS.cursor_color,
            fontSize: 14,
            paddingVertical: 5,
            paddingHorizontal: 8,
          }}
          labelStyle={{ color: "#00ff00" }}
          placeholder="Confirm password"
          cursorColor={COLORS.cursor_color}
          textContentType="password"
          secureTextEntry={true}
          rightIcon={<Icon name="eye-off-outline" size={20} />}
        />
        <Text style={styles.privacyText}>
          By selecting ‘Sing up’ you agree our terms and statements of privacy.
          Read them <Text style={styles.boldText}>here</Text>
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
        <View style={styles.socialIcons}>
          <IconButton icon={facebook} onPress={handleSocial} style={{}} />
          <IconButton icon={twitter} onPress={handleSocial} style={{}} />
          <IconButton icon={google} onPress={handleSocial} style={{}} />
        </View>
        <Text style={styles.privacyText}>
          Already have an account?
          <Text style={styles.boldText} onPress={handleLogin}>
            {" "}
            Log in
          </Text>
        </Text>
      </View>
    </ScrollView>
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
    // position: "absolute",
    // top: 60,
    marginBottom: 40,
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
