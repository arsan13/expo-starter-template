import React from "react";
import { View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import MoreScreen from "../screens/MoreScreen";

const Tab = createMaterialBottomTabNavigator();

export default function AppStack({ user, handleUser, toggleTheme }) {
  return (
    <Tab.Navigator
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "#694fad" }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ tintColor }) => (
            <View>
              <Ionicons style={[{ color: tintColor }]} size={15} name="home" />
            </View>
          ),
        }}
      >
        {(props) => <HomeScreen user={user} {...props} />}
      </Tab.Screen>
      <Tab.Screen name="More">
        {(props) => (
          <MoreScreen
            handleUser={handleUser}
            toggleTheme={toggleTheme}
            {...props}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
