import FloatingModal from "../../../components/FloatingModal";
import { StyleSheet, View } from "react-native";
import Button from "../../../components/Button";
import Text from "../../../components/Text";
import React from "react";

const CancelSubscriptionModal = ({ visible, onCancel, name, onSubmit }) => {
  return (
    <FloatingModal
      visible={visible}
      onClose={onCancel}
      style={{ alignItems: "center" }}
    >
      <Text style={styles.cancelModalTitle}>
        Czy na pewno chcesz anulować subskrypcję dla:
      </Text>
      <Text bold style={styles.cancelModalServiceName}>
        {name}
      </Text>
      <View style={{ flexDirection: "row" }}>
        <Button
          title="Nie"
          containerStyle={{ flex: 1, marginRight: 24 }}
          onPress={onCancel}
        />
        <Button
          title="Tak"
          containerStyle={{ flex: 1 }}
          primary
          onPress={onSubmit}
        />
      </View>
    </FloatingModal>
  );
};

const styles = StyleSheet.create({
  cancelModalTitle: {
    marginTop: 24,
    fontSize: 18,
    lineHeight: 29,
    textAlign: "center",
  },
  cancelModalServiceName: {
    fontSize: 27,
    lineHeight: 49,
    marginTop: 23,
    marginBottom: 44,
  },
});

export default CancelSubscriptionModal;
