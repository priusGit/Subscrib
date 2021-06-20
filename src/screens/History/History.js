import { StyleSheet, View, ScrollView, StatusBar } from "react-native";
import MiniTab from "../Home/components/miniTab";
import Filter from "../../components/Filter";
import Text from "../../components/Text";
import React, { useRef } from "react";
import { useScrollToTop } from "@react-navigation/native";

const textSize = 18;
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
  },
  HeaderText: {
    fontSize: textSize,
    fontWeight: "bold",
  },
  Day: {
    marginTop: 16,
    marginBottom: 16,
    fontWeight: "bold",
    fontSize: 14,
    opacity: 0.8,
  },
});

const History = ({ navigation }) => {
  const listRef = useRef(null);
  useScrollToTop(listRef);

  return (
    <>
      <StatusBar />
      <ScrollView
        ref={listRef}
        style={styles.HomeContainer}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <View style={styles.Header}>
          <Text bold style={styles.HeaderText}>
            Historia płatności
          </Text>
        </View>
        <Filter />
        <Text bold style={styles.Day}>
          Środa, 17 czerwca 2021
        </Text>
        <MiniTab
          name="Spotify"
          iconName="spotify"
          category="entertainment"
          onClick={() => navigation.navigate("History")}
          price="-20,00"
        />
        <MiniTab
          name="Apple App Store"
          iconName="apple"
          category="other"
          onClick={() => navigation.navigate("History")}
          price="-29,98"
        />

        <Text bold style={styles.Day}>
          Środa, 15 czerwca 2021
        </Text>
        <MiniTab
          name="Steam"
          iconName="steam"
          category="entertainment"
          onClick={() => navigation.navigate("History")}
          price="-171,50"
        />

        <Text bold style={styles.Day}>
          Niedziela, 10 czerwca 2021
        </Text>
        <MiniTab
          name="Bandagg"
          iconName="bandage"
          category="health"
          onClick={() => navigation.navigate("History")}
          price="+67,00"
          refund
        />
        <MiniTab
          name="Netflix"
          iconName="netflix"
          category="entertainment"
          onClick={() => navigation.navigate("History")}
          price="-44,00"
        />

        <Text bold style={styles.Day}>
          Czwartek, 1 czerwca 2021
        </Text>
        <MiniTab
          name="Amazon"
          iconName="amazon"
          category="entertainment"
          onClick={() => navigation.navigate("History")}
          price="-39,00"
        />
        <MiniTab
          name="Steam"
          iconName="steam"
          category="entertainment"
          onClick={() => navigation.navigate("History")}
          price="-81,79"
        />

        <Text bold style={styles.Day}>
          Środa, 17 Maj 2021
        </Text>
        <MiniTab
          name="Spotify"
          iconName="spotify"
          category="entertainment"
          onClick={() => navigation.navigate("History")}
          price="-20,00"
        />

        <Text bold style={styles.Day}>
          Wtorek, 16 Maj 2021
        </Text>
        <MiniTab
          name="Apple App Store"
          iconName="apple"
          category="other"
          onClick={() => navigation.navigate("History")}
          price="-29,98"
        />

        <Text bold style={styles.Day}>
          Niedziela, 10 Maj 2021
        </Text>
        <MiniTab
          name="Bandagg"
          iconName="bandage"
          category="health"
          onClick={() => navigation.navigate("History")}
          price="-67,00"
        />
        <MiniTab
          name="Netflix"
          iconName="netflix"
          category="entertainment"
          onClick={() => navigation.navigate("History")}
          price="-44,00"
        />

        <Text bold style={styles.Day}>
          Czwartek, 1 Maj 2021
        </Text>
        <MiniTab
          name="Amazon"
          iconName="amazon"
          category="entertainment"
          onClick={() => navigation.navigate("History")}
          price="+39,00"
          refund
        />

        <Text bold style={styles.Day}>
          Sobota, 1 Kwiecień 2021
        </Text>
        <MiniTab
          name="Steam"
          iconName="steam"
          category="entertainment"
          onClick={() => navigation.navigate("History")}
          price="-16,56"
        />

        <Text bold style={styles.Day}>
          Środa, 17 Marca 2021
        </Text>
        <MiniTab
          name="Spotify"
          iconName="spotify"
          category="entertainment"
          onClick={() => navigation.navigate("History")}
          price="-20,00"
        />

        <Text bold style={styles.Day}>
          Środa, 11 Marca 2021
        </Text>
        <MiniTab
          name="Steam"
          iconName="steam"
          category="entertainment"
          onClick={() => navigation.navigate("History")}
          price="-111,60"
        />

        <Text bold style={styles.Day}>
          Niedziela, 10 Marca 2021
        </Text>
        <MiniTab
          name="Bandagg"
          iconName="bandage"
          category="health"
          onClick={() => navigation.navigate("History")}
          price="-67,00"
        />
        <MiniTab
          name="Netflix"
          iconName="netflix"
          category="entertainment"
          onClick={() => navigation.navigate("History")}
          price="-44,00"
        />

        <Text bold style={styles.Day}>
          Czwartek, 1 Marca 2021
        </Text>
        <MiniTab
          name="Amazon"
          iconName="amazon"
          category="entertainment"
          onClick={() => navigation.navigate("History")}
          price="-39,00"
        />
      </ScrollView>
    </>
  );
};

export default History;
