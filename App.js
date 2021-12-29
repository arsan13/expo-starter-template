import React, { useState } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Queries from "./src/utils/Queries";
import AuthStack from "./src/navigations/AuthStack";
import AppStack from "./src/navigations/AppStack";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  // return <Queries />;
  return (
    <NavigationContainer>
      {loggedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
