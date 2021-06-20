import { StyleSheet, Text as RNText } from "react-native";
import React from "react";

const Text = ({ bold, style, ...restProps }) => {
  const fontFamily = bold ? "Poppins_600SemiBold" : "Poppins_400Regular";
  return <RNText style={[styles.root, { fontFamily }, style]} {...restProps} />;
};

const styles = StyleSheet.create({
  root: {
    fontSize: 14,
  },
});

export default Text;
