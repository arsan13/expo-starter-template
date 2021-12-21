import React, { useState } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Queries from "./src/utils/Queries";
import AuthStack from "./src/navigations/AuthStack";
import Home from "./src/screens/Home";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return <Queries />;
  return (
    <NavigationContainer>
      {loggedIn ? <Home /> : <AuthStack />}
    </NavigationContainer>
  );
}
