import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { handleLoading } from "../contexts/LoadingProvider";
import { updateUser } from "../contexts/UserProvider";
import { db } from "../utils/firebase";

const RegisterScreen = () => {
  let initialState = { name: "", email: "", password: "" };
  const [detail, setDetail] = useState(initialState);
  const handleUser = updateUser();
  const setLoading = handleLoading();

  const handleChange = (key, value) => {
    setDetail({ ...detail, [key]: value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    if (!validate()) {
      setLoading(false);
    } else {
      await db.collection("users").doc(detail.email).set(detail);
      setDetail(initialState);
      setLoading(false);
      handleUser(detail.email);
    }
  };

  const validate = async () => {
    if (detail.name === "" || detail.email === "" || detail.password === "") {
      console.log("All the fields are mandatory");
      return false;
    }
    const data = await db
      .collection("users")
      .where("email", "==", detail.email)
      .get();
    if (data.docs.length > 0) {
      console.log("Email already exists");
      return false;
    }
    return true;
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", marginHorizontal: 10 }}>
      <TextInput
        style={styles.input}
        mode="outlined"
        label="Name"
        value={detail.name}
        onChangeText={(text) => handleChange("name", text)}
      />
      <TextInput
        style={styles.input}
        mode="outlined"
        label="Email"
        value={detail.email}
        onChangeText={(text) => handleChange("email", text)}
      />
      <TextInput
        style={styles.input}
        mode="outlined"
        label="Password"
        value={detail.password}
        secureTextEntry
        onChangeText={(text) => handleChange("password", text)}
      />
      <Button
        styles={styles.button}
        // icon="camera"
        mode="contained"
        onPress={handleSubmit}
      >
        Sign-up
      </Button>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
  },
  button: {
    marginVertical: 10,
  },
});
