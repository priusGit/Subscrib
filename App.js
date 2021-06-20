import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { HomePageNavigator } from "./src/screens/navigators/homepage.navigator";
import { ServicesNavigator } from "./src/screens/navigators/services.navigator";
import { HistoryNavigator } from "./src/screens/navigators/history.navigator";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import BottomBar from "./src/components/BottomBar/BottomBar";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Settings from "./src/screens/Settigns/Settings";

const Tab = createBottomTabNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        headerMode="none"
        tabBar={(props) => <BottomBar {...props} />}
      >
        <Tab.Screen
          name="Home"
          component={HomePageNavigator}
          options={{
            label: "Home",
            iconComp: Ionicons,
            iconName: "home",
          }}
        />
        <Tab.Screen
          name="Historia"
          component={HistoryNavigator}
          options={{
            label: "Historia",
            iconComp: MaterialCommunityIcons,
            iconName: "text-search",
          }}
        />
        <Tab.Screen
          name="Serwisy"
          component={ServicesNavigator}
          options={{
            label: "Serwisy",
            iconComp: MaterialCommunityIcons,
            iconName: "shape",
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            label: "Ustawienia",
            iconComp: Ionicons,
            iconName: "settings-sharp",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
const Root = () => (
  <>
    <StatusBar />
    <App />
  </>
);

export default Root;
