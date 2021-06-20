import React from "react";
import {
  TouchableWithoutFeedback,
  StyleSheet,
  Pressable,
  View,
  Modal,
} from "react-native";

const FloatingModal = ({ visible, onClose, style, children }) => {
  return (
    <Modal
      animationType="none"
      transparent
      visible={visible}
      onRequestClose={onClose}
      onDismiss={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <TouchableWithoutFeedback>
          <View style={[styles.contentContainer, style]}>{children}</View>
        </TouchableWithoutFeedback>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    width: "100%",
    height: "100%",
    backgroundColor: "#00000070",
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    backgroundColor: "white",
    width: "80%",
    paddingHorizontal: 32,
    paddingVertical: 24,
  },
});

export default FloatingModal;
