import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Switch, Title } from "react-native-paper";
import { useTheme, useThemeUpdate } from "../contexts/ThemeProvider";
import { updateUser } from "../contexts/UserProvider";

const MoreScreen = () => {
  const isDark = useTheme();
  const toggleTheme = useThemeUpdate();
  const handleUser = updateUser();

  return (
    <View style={{ flex: 1, justifyContent: "center", marginHorizontal: 10 }}>
      <View style={styles.switch}>
        <Title>Dark Theme</Title>
        <Switch
          style={{ alignSelf: "center" }}
          value={isDark}
          onValueChange={toggleTheme}
        />
      </View>
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
  switch: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});
