import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import ServiceScreen from "../Services/Services";
import ServiceDetails from "../Services/ServiceDetails/ServiceDetails";

const ServicesPageStack = createStackNavigator();

export const ServicesNavigator = () => (
  <ServicesPageStack.Navigator
    headerMode="none"
    screenOptions={{ ...TransitionPresets.SlideFromRightIOS }}
  >
    <ServicesPageStack.Screen name="Services" component={ServiceScreen} />
    <ServicesPageStack.Screen
      name="ServicesDetails"
      component={ServiceDetails}
    />
  </ServicesPageStack.Navigator>
);
