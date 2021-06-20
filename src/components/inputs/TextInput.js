import { StyleSheet, View, TextInput as RNTextInput } from "react-native";
import React from "react";
import Text from "../Text";

const TextInput = ({
  label,
  value,
  onValueChange,
  additionalContent,
  containerStyle,
  ...restProps
}) => {
  return (
    <View style={[styles.root, containerStyle]}>
      <Text style={{ minWidth: 60, fontSize: 16 }}>{label}</Text>
      <View style={{ flex: 1, borderBottomWidth: 1 }}>
        <RNTextInput
          value={value}
          onChangeText={onValueChange}
          {...restProps}
        />
      </View>
      {additionalContent && (
        <View style={{ minWidth: 30, alignItems: "center" }}>
          {additionalContent}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
});

export default TextInput;
