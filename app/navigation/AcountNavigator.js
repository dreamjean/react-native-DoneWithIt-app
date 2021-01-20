import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { ListingsScreen, MessagesScreen, ProfileScreen } from "../screens";

const Stack = createStackNavigator();

const AcountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerShown: false,
        headerTitle: "Back",
      }}
    />
    <Stack.Screen
      name="Messages"
      component={MessagesScreen}
      options={{ headerTitleAlign: "center" }}
    />
    <Stack.Screen
      name="Listings"
      component={ListingsScreen}
      options={{ headerTitleAlign: "center" }}
    />
  </Stack.Navigator>
);

export default AcountNavigator;
