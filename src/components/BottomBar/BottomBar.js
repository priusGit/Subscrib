import { StyleSheet, View } from "react-native";
import BarItem from "./BarItem";
import React from "react";

const BottomBar = ({ state, descriptors, navigation }) => {
  const mapRoute = (route, index) => {
    const props = descriptors[route.key].options;
    const isFocused = state.index === index;

    const onPress = () => {
      const event = navigation.emit({
        type: "tabPress",
        target: route.key,
        canPreventDefault: true,
      });

      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(route.name);
      }
    };

    return (
      <BarItem
        key={route.name}
        isFocused={isFocused}
        onPress={onPress}
        {...props}
      />
    );
  };

  return <View style={styles.menuContainer}>{state.routes.map(mapRoute)}</View>;
};

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "black",
  },
});

export default BottomBar;
