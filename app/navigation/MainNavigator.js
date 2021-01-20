import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import { theme } from "../config";
import { ListingsScreen } from "../screens";
import AcountNavigator from "./AcountNavigator";
import FormNavigator from "./FormNavigator";
import NewButton from "./NewButton";

const { size, getFont } = theme;
const Tab = createBottomTabNavigator();

const MainNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      labelStyle: {
        fontFamily: getFont(2),
        fontSize: size.s,
      },
      safeAreaInsets: {
        bottom: 4,
      },
    }}
  >
    <Tab.Screen
      name="Listings"
      component={ListingsScreen}
      options={{
        title: "Home",
        tabBarIcon: ({ color, size }) => (
          <Ionicons
            style={{ marginBottom: -4 }}
            name="home"
            size={size}
            color={color}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Form"
      component={FormNavigator}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <NewButton onPress={() => navigation.navigate("Form")} />
        ),
      })}
    />
    <Tab.Screen
      name="Acount"
      component={AcountNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons
            style={{ marginBottom: -4 }}
            name="person"
            size={size}
            color={color}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainNavigator;
