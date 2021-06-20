import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import HomePageScreen from '../Home/Home'
import HistoryDetails from '../History/HistoryDetails/HistoryDetails'

const HomePageStack = createStackNavigator()

export const HomePageNavigator = () => (
  <HomePageStack.Navigator headerMode="none" screenOptions={{ ...TransitionPresets.SlideFromRightIOS }}>
    <HomePageStack.Screen
      name="Home"
      component={HomePageScreen}
    />

  </HomePageStack.Navigator>
)
