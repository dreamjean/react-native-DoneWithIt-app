import { createStackNavigator } from "@react-navigation/stack";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import React, { useEffect } from "react";

import expoPushTokensApi from "../api/expoPushTokens";
import { isAndroid } from "../config";
import { ListingDetailsScreen } from "../screens";
import MainNavigator from "./MainNavigator";

const Stack = createStackNavigator();

const AppNavigator = () => {
  useEffect(() => {
    registerForPushNotifications();
  }, []);

  const registerForPushNotifications = async () => {
    if (Constants.isDevice) {
      try {
        const { granted } = await Permissions.getAsync(
          Permissions.NOTIFICATIONS
        );
        if (!granted) return;

        const { data } = await Notifications.getExpoPushTokenAsync();
        expoPushTokensApi.register(data);
      } catch (error) {
        console.log("Failed to get push token for push notification!", error);
      }
    } else {
      alert("Must use physical device for Push Notifications");
    }

    if (isAndroid) {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
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
