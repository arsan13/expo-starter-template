import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import FormScreen from "../screens/FormScreen";

const Tab = createMaterialBottomTabNavigator();

export default function AppStack() {
  return (
    <Tab.Navigator
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "#694fad" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        tabBarIcon={({ tintColor }) => (
          <View>
            <Ionicons style={[{ color: tintColor }]} size={25} name="home" />
          </View>
        )}
      />
      <Tab.Screen name="Form" component={FormScreen} />
    </Tab.Navigator>
  );
}
