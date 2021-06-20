import { StyleSheet, View, ScrollView, StatusBar } from "react-native";
import { useScrollToTop } from "@react-navigation/native";
import Text from "../../components/Text";
import React, { useRef } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import Checkbox from "../../components/Checkbox";

const textSize = 18;
const styles = StyleSheet.create({
  HomeContainer: {
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  Header: {
    marginBottom: 17,
  },
  HeaderText: {
    fontSize: textSize,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
});

const Settings = ({ navigation }) => {
  return (
    <>
      <StatusBar />
      <View style={styles.HomeContainer}>
        <View style={styles.Header}>
          <Text bold style={styles.HeaderText}>
            Ustawienia
          </Text>
        </View>
        <View style={{ width: "100%", borderWidth: 1, padding: 24 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 18,
            }}
          >
            <MaterialIcons name="accessibility" size={24} color="black" />
            <Text bold style={{ marginLeft: 12, fontSize: 16 }}>
              Ułatwienia dostępu
            </Text>
          </View>
          <View style={styles.row}>
            <Text>Zwiększ kontrast:</Text>
            <Checkbox />
          </View>
          <View style={styles.row}>
            <Text>Większy tekst:</Text>
            <Checkbox />
          </View>
          <View style={styles.row}>
            <Text>Odwrócenie kolorów:</Text>
            <Checkbox initialValue />
          </View>
          <View style={[styles.row, { marginBottom: 4 }]}>
            <Text>Tryb ciemny:</Text>
            <Checkbox />
          </View>
        </View>
      </View>
    </>
  );
};

export default Settings;
