import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import React from "react";

import { ListingEditScreen, MediaSelectionScreen } from "../screens";

const Stack = createStackNavigator();

const AcountNavigator = () => (
  <Stack.Navigator
    initialRouteName="Listing Edit"
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
    <Stack.Screen name="Listing Edit" component={ListingEditScreen} />
    <Stack.Screen name="Media Selection" component={MediaSelectionScreen} />
  </Stack.Navigator>
);

export default AcountNavigator;
