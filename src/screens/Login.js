import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

const Login = ({ navigation }) => {
  return (
    <View>
      {/* underlineColor, activeUnderlineColor, outlineColor, activeOutlineColor */}
      <TextInput
        // mode="outlined"
        label="Email"
        // value={text}
        onChangeText={(text) => console.log(text)}
      />
      <Button
        icon="camera"
        mode="contained"
        // color="cyan"
        onPress={() => navigation.navigate("Register")}
      >
        Sign-up
      </Button>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
