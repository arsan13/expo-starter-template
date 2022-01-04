import React from "react";
import { View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import MoreScreen from "../screens/MoreScreen";

const Tab = createMaterialBottomTabNavigator();

export default function AppStack() {
  return (
    <Tab.Navigator
      shifting={true}
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "#694fad" }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const icons = {
            Home: "home",
            More: "ellipsis-vertical",
          };

          // You can return any component that you like here!
          return (
            <Ionicons name={icons[route.name]} size={size} color={color} />
          );
        },
      })}
    >
      <Tab.Screen
        name="Home"
        // options={{
        //   tabBarLabel: "Home",
        //   tabBarIcon: ({ tintColor }) => (
        //     <View>
        //       <Ionicons style={[{ color: tintColor }]} size={15} name="home" />
        //     </View>
        //   ),
        // }}
      >
        {(props) => <HomeScreen {...props} />}
      </Tab.Screen>
      <Tab.Screen name="More">
        {(props) => <MoreScreen {...props} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
