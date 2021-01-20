import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { ListingDetailsScreen } from "../screens";
import MainNavigator from "./MainNavigator";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name="Main"
      component={MainNavigator}
      options={{ tabBarLabel: "Feed" }}
    />
    <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
