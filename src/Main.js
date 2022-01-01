import React, { useState } from "react";
import "react-native-gesture-handler";
import {
  NavigationContainer,
  DefaultTheme as NavigationDefault,
  DarkTheme as NavigationDark,
} from "@react-navigation/native";
import {
  Provider as PaperProvider,
  DarkTheme as PaperDark,
  DefaultTheme as PaperDefault,
} from "react-native-paper";
import AuthStack from "./navigations/AuthStack";
import AppStack from "./navigations/AppStack";
import { useTheme } from "./contexts/ThemeProvider";
import { getUser } from "./contexts/UserProvider";

export default function App() {
  const isDark = useTheme();
  const user = getUser();

  return (
    <PaperProvider theme={isDark ? PaperDark : PaperDefault}>
      <NavigationContainer theme={isDark ? NavigationDark : NavigationDefault}>
        {user != null ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </PaperProvider>
  );
}
