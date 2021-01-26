import { createStackNavigator } from "@react-navigation/stack";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import React, { useEffect } from "react";

import expoPushTokens from "../api/expoPushTokens";
import { ListingDetailsScreen } from "../screens";
import MainNavigator from "./MainNavigator";

const Stack = createStackNavigator();

const AppNavigator = () => {
  useEffect(() => {
    registerForPushNotifications();
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permissions = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permissions.granted) return;

      const token = await Notifications.getExpoPushTokenAsync();
      await expoPushTokens.register(token);
    } catch (error) {
      console.log("Error getting a push token", error);
    }
  };

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
