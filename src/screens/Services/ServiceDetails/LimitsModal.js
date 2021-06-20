import FloatingModal from "../../../components/FloatingModal";
import TextInput from "../../../components/inputs/TextInput";
import DateInput from "../../../components/inputs/DateInput";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Button from "../../../components/Button";
import { StyleSheet, View } from "react-native";
import Text from "../../../components/Text";
import React, { useState } from "react";

const LimitsModal = ({ visible, name, onCancel, onSubmit }) => {
  const [date, setDate] = useState(new Date(2021, 11, 1));
  const [amount, setAmount] = useState("250,00 zł");

  return (
    <FloatingModal visible={visible} onClose={onCancel}>
      <Text style={{ fontSize: 18, marginBottom: 16, marginTop: 4 }}>
        Ustaw limit dla:
      </Text>
      <Text bold style={{ fontSize: 18, marginBottom: 16 }}>
        {name}
      </Text>
      <Text style={{ marginBottom: 16, fontSize: 16 }}>Wybierz limity:</Text>

      <DateInput
        label="Data"
        value={date}
        onValueChange={setDate}
        containerStyle={{ marginBottom: 22 }}
        additionalContent={
          <MaterialCommunityIcons name="calendar" size={18} color="black" />
        }
      />
      <TextInput
        label="Kwota"
        value={amount}
        onValueChange={setAmount}
        additionalContent={<Text style={{ fontSize: 16 }}>zł</Text>}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 48,
        }}
      >
        <Button
          title="Ustaw"
          primary
          onPress={onSubmit}
          containerStyle={{ width: 160 }}
        />
      </View>
    </FloatingModal>
  );
};

LimitsModal.propTypes = {};

const styles = StyleSheet.create({});

export default LimitsModal;
