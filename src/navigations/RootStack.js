import React from "react";
import "react-native-gesture-handler";
import {
  NavigationContainer,
  DefaultTheme as NavigationDefault,
  DarkTheme as NavigationDark,
} from "@react-navigation/native";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import { getUser } from "../contexts/UserProvider";
import { useTheme } from "../contexts/ThemeProvider";

const RootStack = () => {
  const user = getUser();
  const isDark = useTheme();

  return (
    <NavigationContainer theme={isDark ? NavigationDark : NavigationDefault}>
      {user != null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default RootStack;
