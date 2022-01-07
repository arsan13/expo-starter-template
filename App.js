import React from "react";
import "react-native-gesture-handler";
import LoadingProvider from "./src/contexts/LoadingProvider";
import ThemeProvider from "./src/contexts/ThemeProvider";
import UserProvider from "./src/contexts/UserProvider";
import Main from "./src/Main";

export default function App() {
  return (
    <ThemeProvider>
      <LoadingProvider>
        <UserProvider>
          <Main />
        </UserProvider>
      </LoadingProvider>
    </ThemeProvider>
  );
}
