import {
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import {
  MaterialCommunityIcons,
  Entypo,
  Ionicons,
  FontAwesome5,
} from "@expo/vector-icons";
import CancelSubscriptionModal from "./CancelSubscriptionModal";
import LimitsModal from "./LimitsModal";
import Text from "../../../components/Text";
import { CATEGORY_ICONS, CATEGORY_LABELS } from "../../../constants";

const Services = ({ navigation, route }) => {
  const { name = "Netflix", category = "entertainment" } = route.params || {};

  const [cancelVisible, setCancelVisible] = useState(false);
  const [limitsVisible, setLimitsVisible] = useState(false);

  return (
    <>
      <CancelSubscriptionModal
        name={name}
        visible={cancelVisible}
        onCancel={() => setCancelVisible(false)}
        onSubmit={() => setCancelVisible(false)}
      />
      <LimitsModal
        name={name}
        visible={limitsVisible}
        onCancel={() => setLimitsVisible(false)}
        onSubmit={() => setLimitsVisible(false)}
      />

      <StatusBar />
      <ScrollView style={styles.HomeContainer}>
        <View style={styles.Header}>
          <Pressable onPress={() => navigation.goBack()}>
            <Entypo on name="chevron-left" size={30} color="black" />
          </Pressable>

          <Text style={styles.HeaderText}>Serwisy</Text>
        </View>
        <View style={styles.topBox}>
          <Pressable style={styles.PressableCenter}>
            <View style={styles.miniTab}>
              <View style={styles.IconContainer}>
                <MaterialCommunityIcons name="netflix" size={32} color="red" />
              </View>
              <View style={styles.DescriptionContainer}>
                <Text style={styles.Title}>{name}</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <MaterialCommunityIcons
                    name={CATEGORY_ICONS[category]}
                    size={24}
                    color="black"
                  />
                  <Text style={styles.Category}>
                    {CATEGORY_LABELS[category]}
                  </Text>
                </View>
              </View>
              <View>
                <Pressable
                  style={{ flexDirection: "row", alignItems: "center" }}
                  onPress={() => setCancelVisible(true)}
                >
                  <FontAwesome5 name="trash" size={16} color="black" />
                  <Text style={{ marginBottom: -4, marginLeft: 6 }}>
                    Anuluj
                  </Text>
                </Pressable>
              </View>
            </View>
          </Pressable>
          <View style={styles.MidBox}>
            <Text style={styles.MidBoxTitle}>
              <MaterialCommunityIcons
                name="information"
                size={16}
                color="black"
              />
              Szczegóły
            </Text>
            <View style={styles.InfoDateStart}>
              <Text style={styles.DateStartText}>Data rozpoczęcia:</Text>
              <Text style={styles.grower} />
              <Text style={styles.DateStartDate}>21.01.2021</Text>
            </View>
            <View style={styles.InfoDateNext}>
              <Text style={styles.DateStartText}>Następna płatność:</Text>
              <Text style={styles.grower} />
              <Text style={styles.DateStartDate}>21.06.2021</Text>
            </View>
            <View style={styles.InfoCash}>
              <Text style={styles.DateStartText}>Pobierana kwota:</Text>
              <Text style={styles.grower} />
              <Text style={styles.DateStartDate}>-193,00 zł</Text>
            </View>
          </View>
          <View style={styles.BottomBox}>
            <View style={styles.Limits}>
              <View style={styles.Limit}>
                <Text style={styles.LimitText}>Limit:</Text>
                <Text style={styles.LimitData}>do 19.01.2022</Text>
              </View>
              <View style={styles.Limit}>
                <Text style={styles.LimitText}>Limit:</Text>
                <Text style={styles.LimitData}>do 200zł</Text>
              </View>
            </View>
            <View style={styles.grower} />
            <Pressable
              style={styles.EditButtonContainer}
              onPress={() => setLimitsVisible(true)}
            >
              <Text style={styles.EditButtonContainerText}>
                <MaterialCommunityIcons
                  name="grease-pencil"
                  size={16}
                  color="white"
                />
                {"  "}
                Zmień
              </Text>
            </Pressable>
          </View>
        </View>
        <Text style={styles.LastTransactionsTitle}>Ostatnie transakcje</Text>
        <View style={styles.LastTransactions}>
          <View style={styles.LastTransaction}>
            <Text style={styles.LastTransactionDate}>10.06.2021</Text>
            <Text style={styles.LastTransactionType}>Subskrypcja</Text>
            <Text style={styles.LastTransactionAmount}>-44,00 zł</Text>
          </View>
          <View style={styles.LastTransaction}>
            <Text style={styles.LastTransactionDate}>10.05.2020</Text>
            <Text style={styles.LastTransactionType}>Subskrypcja</Text>
            <Text style={styles.LastTransactionAmount}>-44,00 zł</Text>
          </View>
          <View style={styles.LastTransaction}>
            <Text style={styles.LastTransactionDate}>09.05.2020</Text>
            <Text style={styles.LastTransactionType}>Subskrypcja</Text>
            <Text style={styles.LastTransactionAmount}>-44,00 zł</Text>
          </View>
          <View style={styles.LastTransaction}>
            <Text style={styles.LastTransactionDate}>09.04.2020</Text>
            <Text style={styles.LastTransactionType}>Subskrypcja</Text>
            <Text style={styles.LastTransactionAmount}>-44,00 zł</Text>
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <Pressable
            onPress={() => navigation.navigate("History")}
            style={styles.TransactionHistoryButton}
          >
            <Text style={styles.TransactionHistoryButtonText}>
              <MaterialCommunityIcons
                name="text-search"
                size={14}
                color="black"
              />
              {"  "}
              Historia Transakcji
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
};

const textSize = 21;
const styles = StyleSheet.create({
  grower: {
    flexGrow: 2,
  },
  HomeContainer: {
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  Header: {
    marginBottom: 17,
    flexDirection: "row",
  },
  HeaderText: {
    fontSize: textSize,
    fontWeight: "bold",
  },
  miniTab: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  IconContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "black",
  },
  DescriptionContainer: {
    justifyContent: "center",
    marginLeft: 10,
    flexGrow: 2,
  },
  PressableCenter: {
    justifyContent: "center",
  },
  Price: {
    // fontFamily: 'Poppins_400Black',
    fontWeight: "bold",
  },
  Title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  Category: {
    fontWeight: "bold",
    marginLeft: 4,
  },
  topBox: {
    borderWidth: 1,
  },
  MidBox: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  MidBoxTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 12,
  },
  InfoDateStart: {
    flexDirection: "row",
    marginBottom: 12,
  },
  DateStartText: {
    fontWeight: "bold",
    fontSize: 14,
  },
  DateStartDate: {
    fontWeight: "bold",
    fontSize: 14,
  },
  InfoDateNext: {
    flexDirection: "row",
    marginBottom: 12,
  },
  InfoCash: {
    flexDirection: "row",
    marginBottom: 12,
  },
  BottomBox: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  Limits: {},
  Limit: {
    flexDirection: "row",
  },
  LimitText: {},
  LimitData: {
    marginLeft: 10,
    fontWeight: "bold",
  },
  LastTransactionsTitle: {
    marginTop: 18,
    marginBottom: 18,
    fontSize: 16,
    fontWeight: "bold",
  },
  LastTransactions: {
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
  },
  LastTransaction: {
    flexDirection: "row",
    borderBottomWidth: 1,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  LastTransactionDate: {
    fontWeight: "bold",
  },
  LastTransactionAmount: {
    fontWeight: "bold",
  },
  LastTransactionType: {
    flexGrow: 2,
    marginLeft: 24,
    fontWeight: "bold",
  },
  TransactionHistoryButton: {
    borderWidth: 1,
    width: 200,
    fontSize: 14,
    marginTop: 20,
    paddingHorizontal: 17,
    paddingVertical: 12,
    borderRadius: 50,
    marginBottom: 40,
  },
  TransactionHistoryButtonText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
  EditButtonContainer: {
    paddingHorizontal: 20,
    height: 30,
    backgroundColor: "black",
    borderRadius: 50,
    justifyContent: "center",
  },
  EditButtonContainerText: {
    fontSize: 14,
    color: "white",
  },
});

export default Services;
