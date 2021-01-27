import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import { useEffect, useState } from "react";

import expoPushTokensApi from "../api/expoPushTokens";
import { isAndroid } from "../config";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const useNotifications = (responseListenerFunc) => {
  const [notification, setNotification] = useState(false);

  useEffect(() => {
    registerForPushNotifications();

    Notifications.addNotificationReceivedListener((notification) =>
      setNotification(notification)
    );

    if (notification)
      Notifications.addNotificationResponseReceivedListener(
        responseListenerFunc
      );
  }, []);

  const registerForPushNotifications = async () => {
    let token;
    if (Constants.isDevice) {
      const {
        status: existingStatus,
      } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      expoPushTokensApi.register(token);
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
};

export default useNotifications;
