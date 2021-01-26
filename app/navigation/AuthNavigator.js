import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { LoginScreen, RegisterScreen, WelcomeScreen } from "../screens";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator
    initialRouteName="Welcome"
    screenOptions={{ headerTitleAlign: "center" }}
  >
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
