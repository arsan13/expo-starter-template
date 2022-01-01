import React from "react";
import "react-native-gesture-handler";
import ThemeProvider from "./src/contexts/ThemeProvider";
import UserProvider from "./src/contexts/UserProvider";
import Main from "./src/Main";

export default function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Main />
      </UserProvider>
    </ThemeProvider>
  );
}
