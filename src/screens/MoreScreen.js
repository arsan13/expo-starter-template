import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

const MoreScreen = ({ handleUser, toggleTheme }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button
        style={styles.button}
        // icon="camera"
        mode="contained"
        onPress={() => toggleTheme()}
      >
        Toggle Theme
      </Button>
      <Button
        style={styles.button}
        // icon="camera"
        mode="contained"
        onPress={() => handleUser(null)}
      >
        Logout
      </Button>
    </View>
  );
};

export default MoreScreen;

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
});
