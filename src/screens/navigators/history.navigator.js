import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import HistoryScreen from '../History/History'
import HistoryDetails from '../History/HistoryDetails/HistoryDetails'

const HistoryPageStack = createStackNavigator()

export const HistoryNavigator = () => (
  <HistoryPageStack.Navigator headerMode="none" screenOptions={{ ...TransitionPresets.SlideFromRightIOS }}>
    <HistoryPageStack.Screen
      name="History"
      component={HistoryScreen}
    />
    <HistoryPageStack.Screen
      name="HistoryDetails"
      component={HistoryDetails}
    />

  </HistoryPageStack.Navigator>
)
