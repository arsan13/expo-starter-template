import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Alert } from "react-native";
import { Button, TextInput, Title } from "react-native-paper";
import { handleLoading } from "../contexts/LoadingProvider";
import { updateUser } from "../contexts/UserProvider";
import { db } from "../utils/firebase";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setLoading = handleLoading();
  const handleUser = updateUser();

  const handleSubmit = async () => {
    setLoading(true);
    console.log({ email, password });
    const data = await db
      .collection("users")
      .where("email", "==", email)
      .where("password", "==", password)
      .get();
    setEmail("");
    setPassword("");
    setLoading(false);
    if (data.docs.length > 0) {
      handleUser(data.docs[0].data().email);
    } else {
      console.log("Invalid credentials");
      Alert.alert("Unsuccessful", "Invalid credentials", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", marginHorizontal: 10 }}>
      {/* underlineColor, activeUnderlineColor, outlineColor, activeOutlineColor */}
      <TextInput
        style={styles.input}
        mode="outlined"
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        mode="outlined"
        label="Password"
        value={password}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Button
        styles={styles.button}
        // icon="camera"
        mode="contained"
        // color="cyan"
        onPress={handleSubmit}
        uppercase={false}
      >
        Login
      </Button>
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Title style={styles.register}>Don't have an account? Sign-up</Title>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
  },
  button: {
    marginVertical: 10,
  },
  register: {
    fontSize: 15,
    marginVertical: 10,
    textAlign: "center",
  },
});
