import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import useNotifications from "../hooks/useNotifications";
import { ListingDetailsScreen } from "../screens";
import MainNavigator from "./MainNavigator";
import navigation from "./rootNavigation";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const navigationListener = () => navigation.navigate("Account");
  useNotifications(navigationListener);

  return (
    <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Main"
        component={MainNavigator}
        options={{ tabBarLabel: "Feed" }}
      />
      <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
