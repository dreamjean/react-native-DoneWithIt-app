import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import { ListingEditScreen, ListingsScreen } from "../screens";
import AcountNavigator from "./AcountNavigator";

const Tab = createBottomTabNavigator();

const MainNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Listings" component={ListingsScreen} />
    <Tab.Screen name="Listing Edit" component={ListingEditScreen} />
    <Tab.Screen name="Acount" component={AcountNavigator} />
  </Tab.Navigator>
);

export default MainNavigator;
