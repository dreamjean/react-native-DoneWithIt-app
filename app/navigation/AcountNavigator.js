import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { MessageScreen, ProfileScreen } from "../screens";

const Stack = createStackNavigator();

const AcountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Message"
      component={MessageScreen}
      options={{ headerTitleAlign: "center" }}
    />
  </Stack.Navigator>
);

export default AcountNavigator;
