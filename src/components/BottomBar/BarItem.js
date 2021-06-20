import { StyleSheet, Pressable, View } from "react-native";
import Text from "../Text";
import React from "react";

const BarItem = ({ iconComp: Icon, iconName, label, isFocused, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.root, { flex: isFocused ? 2 : 1 }]}
    >
      <View
        style={[
          styles.innerContainer,
          isFocused && styles.innerContainerFocused,
        ]}
      >
        {<Icon name={iconName} size={18} color="white" />}
        <Text bold style={styles.label}>
          {isFocused && label}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
  },
  innerContainer: {
    overflow: "hidden",
    flexDirection: "row",
    height: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  innerContainerFocused: {
    backgroundColor: "#ffffff30",
  },

  label: {
    color: "white",
    fontSize: 12,
    marginBottom: -3,
    marginLeft: 8,
  },
});

export default BarItem;
