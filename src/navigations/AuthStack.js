import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import Register from "../screens/Register";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login">
        {(props) => <Login {...props} />}
      </Stack.Screen>
      <Stack.Screen name="Register">
        {(props) => <Register {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthStack;
