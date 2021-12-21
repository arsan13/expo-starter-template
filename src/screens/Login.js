import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Login = ({ navigation }) => {
  return (
    <View>
      <Text>Login</Text>
      <Button title="Sign-up" onPress={() => navigation.navigate("Register")} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
