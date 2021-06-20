import { StyleSheet, View, Pressable } from "react-native";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Text from "./Text";

const Checkbox = ({ initialValue }) => {
  const [value, setValue] = useState(initialValue);

  return (
    <Pressable style={styles.root} onPress={() => setValue(!value)}>
      <View style={[styles.halfBox, { backgroundColor: "#4FD098" }]} />
      <View style={[styles.halfBox, { backgroundColor: "#ADACAC" }]}>
        <Text style={{ fontSize: 10 }}>Wył.</Text>
      </View>
      <View style={[styles.slider, { left: value ? "50%" : 0 }]} />
    </Pressable>
  );
};

Checkbox.propTypes = {};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    width: 70,
    height: 24,
  },
  halfBox: {
    borderWidth: 1,
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  slider: {
    width: "50%",
    height: "100%",
    position: "absolute",
    backgroundColor: "white",
    borderWidth: 1,
  },
});

export default Checkbox;
