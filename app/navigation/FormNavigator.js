import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import React from "react";

import { ListingEditScreen, MediaSelectionScreen } from "../screens";

const Stack = createStackNavigator();

const FormNavigator = () => (
  <Stack.Navigator
    initialRouteName="ListingEdit"
    mode="modal"
    screenOptions={({ route, navigation }) => ({
      headerShown: false,
      cardOverlayEnabled: true,
      headerStatusBarHeight:
        navigation
          .dangerouslyGetState()
          .routes.findIndex((r) => r.key === route.key) > 0
          ? 0
          : undefined,
      ...TransitionPresets.ModalPresentationIOS,
    })}
  >
    <Stack.Screen name="ListingEdit" component={ListingEditScreen} />
    <Stack.Screen name="MediaSelection" component={MediaSelectionScreen} />
  </Stack.Navigator>
);

export default FormNavigator;
