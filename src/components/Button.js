import { StyleSheet, Pressable } from "react-native";
import React from "react";
import Text from "./Text";

const Button = ({ title, primary, containerStyle, ...restProps }) => (
  <Pressable
    style={[styles.root, primary && styles.rootPrimary, containerStyle]}
    {...restProps}
  >
    <Text style={[title, primary && styles.titlePrimary]}>
      {title && title.toUpperCase()}
    </Text>
  </Pressable>
);

const styles = StyleSheet.create({
  root: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderWidth: 1,
    alignItems: "center",
  },
  rootPrimary: {
    backgroundColor: "black",
  },
  title: {
    fontSize: 16,
    lineHeight: 24,
  },
  titlePrimary: {
    color: "white",
  },
});

export default Button;
