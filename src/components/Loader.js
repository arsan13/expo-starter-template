import React from "react";
import { StyleSheet, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { useTheme } from "../contexts/ThemeProvider";

const Loader = () => {
  const isDark = useTheme();

  return (
    <View style={[styles.container, isDark && { backgroundColor: "black" }]}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Loader;
