import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import Logo from "assets/logo.svg";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Button from "src/components/core/Button";
import { Input } from "@rneui/themed";
import { confirmResetPassword } from "src/api/auth";
import { AuthStackParams } from "src/types/root";

type Props = NativeStackScreenProps<AuthStackParams, "NewPassword">;

export default function NewPasswordScreen({ route, navigation }: Props) {
  const { token } = route.params;
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async () => {
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      const response = await confirmResetPassword(token, password);
      if (response.message) {
        setSuccessMessage(response.message);
        navigation.navigate("Login");
      }
    } catch (error) {
      console.error("Error confirming reset password:", error);
      setError("Failed to reset password. Try again.");
    }
    setLoading(false);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.logo}>
          <Logo />
        </View>
        <View style={styles.content}>
          <Input
            placeholder="New Password"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
          />
          <Input
            placeholder="Confirm Password"
            onChangeText={setConfirmPassword}
            value={confirmPassword}
            secureTextEntry
          />
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
          {successMessage ? (
            <Text style={styles.successText}>¡{successMessage}!</Text>
          ) : null}
          <Button
            title="Confirm Password"
            onPress={handleSubmit}
            loading={loading}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 40,
  },
  scrollView: {
    width: "100%",
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: 50,
  },
  logo: {
    marginBottom: 70,
  },
  content: {
    width: "100%",
    alignItems: "center",
  },

  errorText: {
    color: "red",
    marginBottom: 10,
  },
  successText: {
    color: "green",
    marginBottom: 10,
    fontSize: 16,
  },
});
