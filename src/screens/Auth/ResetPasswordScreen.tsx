import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Logo from "src/assets/logo.svg";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Button from "src/components/core/Button";
import { Input } from "@rneui/themed";
import { resetPassword } from "src/api/auth";
import { AuthStackParams } from "src/types/root";

type Props = NativeStackScreenProps<AuthStackParams, "ResetPassword">;

export default function ResetPassword({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await resetPassword(email);
    } catch (error) {
      console.error("Error resetting password:", error);
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Logo />
      </View>

      <Input
        placeholder="Write your email"
        onChangeText={setEmail}
        value={email}
      />

      <Button title="Reset Password" onPress={handleSubmit} loading={loading} />
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
