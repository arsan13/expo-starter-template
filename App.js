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
import Queries from "./src/utils/Queries";
import AuthStack from "./src/navigations/AuthStack";
import AppStack from "./src/navigations/AppStack";

export default function App() {
  const [user, setUser] = useState(null);
  const [isDark, setIsDark] = useState(false);

  const handleUser = (value) => {
    setUser(value);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <PaperProvider theme={isDark ? PaperDark : PaperDefault}>
      <NavigationContainer theme={isDark ? NavigationDark : NavigationDefault}>
        {user != null ? (
          <AppStack
            handleUser={handleUser}
            user={user}
            toggleTheme={toggleTheme}
          />
        ) : (
          <AuthStack handleUser={handleUser} user={user} />
        )}
      </NavigationContainer>
    </PaperProvider>
  );
}
