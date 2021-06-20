import { StyleSheet, View, ScrollView, Pressable } from "react-native";
import React, { useRef } from "react";
import { vw } from "react-native-expo-viewport-units";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import MiniTab from "./components/miniTab";
import Text from "../../components/Text";
import { useScrollToTop } from "@react-navigation/native";

const textSize = 21;
const marginBottom = 16;
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
  },
  Amount: {
    flexDirection: "row",
  },
  AmountText: {
    fontSize: textSize,
  },
  AmountTextNumber: {
    fontSize: 25,
    fontWeight: "bold",
  },
  GraphPartContainer: {
    flexDirection: "row",
  },
  GraphPart: {
    marginTop: 30,
  },
  GraphPartBorder: {
    height: 32,
    width: vw(80),
    borderWidth: 1,
    marginBottom,
    marginLeft: 10,
  },
  GraphPart1: {
    height: 30,
    backgroundColor: "#55E0A3",
    width: vw(70),
    borderRightWidth: 1,
  },
  GraphPart2: {
    height: 30,
    width: vw(60),
    backgroundColor: "#43A279",
    borderRightWidth: 1,
  },
  GraphPart3: {
    height: 30,
    width: vw(55),
    backgroundColor: "#1D573E",
    borderRightWidth: 1,
  },
  GraphPart4: {
    height: 30,
    width: vw(40),
    backgroundColor: "#112C20",
    borderRightWidth: 1,
  },
  GraphPart5: {
    height: 30,
    width: vw(30),
    backgroundColor: "#000000",
    borderRightWidth: 1,
  },
  Payments: {
    marginTop: 15,
    marginBottom: 40,
  },
  PaymentText: {
    fontSize: 20,
    marginBottom: 15,
    fontWeight: "bold",
  },
  Categories: {
    flexDirection: "row",
    marginBottom: 10,
  },
  CategoryText: {
    fontSize: 16,
  },
  Day: {
    marginTop: 16,
    marginBottom: 16,
    fontWeight: "bold",
    fontSize: 14,
    opacity: 0.8,
  },
  Coming: {
    opacity: 0.7,
  },
  Last: {
    marginRight: 20,
  },
  Showing: {
    fontWeight: "bold",
    paddingBottom: 5,
    borderBottomWidth: 3,
  },
  Hidden: {
    fontWeight: "normal",
  },
});

const Home = ({ navigation }) => {
  const [showingTextCategory, setShowingTextCategory] =
    React.useState("lastDays");
  const stylesForLast =
    showingTextCategory === "lastDays"
      ? [styles.Last, styles.CategoryText, styles.Showing]
      : [styles.Last, styles.CategoryText, styles.Hidden];
  const stylesForComing =
    showingTextCategory === "coming"
      ? [styles.Coming, styles.CategoryText, styles.Showing]
      : [styles.Last, styles.CategoryText, styles.Hidden];
  const lastDays = (
    <>
      <Text bold style={styles.Day}>
        Środa, 17 czerwca 2021
      </Text>
      <MiniTab
        name="Spotify"
        iconName="spotify"
        category="entertainment"
        onPress={() => navigation.navigate("History")}
        price="-20,00"
      />
      <MiniTab
        name="Apple App Store"
        iconName="apple"
        category="other"
        onPress={() => navigation.navigate("History")}
        price="-29,98"
      />

      <Text bold style={styles.Day}>
        Środa, 15 czerwca 2021
      </Text>
      <MiniTab
        name="Steam"
        iconName="steam"
        category="entertainment"
        onPress={() => navigation.navigate("History")}
        price="-171,50"
      />

      <Text bold style={styles.Day}>
        Niedziela, 10 czerwca 2021
      </Text>
      <MiniTab
        name="Bandagg"
        iconName="bandage"
        category="health"
        onPress={() => navigation.navigate("History")}
        price="-67,00"
      />
      <MiniTab
        name="Netflix"
        iconName="netflix"
        category="entertainment"
        onPress={() => navigation.navigate("History")}
        price="-44,00"
      />

      <Text bold style={styles.Day}>
        Czwartek, 1 czerwca 2021
      </Text>
      <MiniTab
        name="Amazon"
        iconName="amazon"
        category="entertainment"
        onPress={() => navigation.navigate("History")}
        price="-39,00"
      />
      <MiniTab
        name="Steam"
        iconName="steam"
        category="entertainment"
        onPress={() => navigation.navigate("History")}
        price="+81,7981,79"
        refund
      />

      <Text bold style={styles.Day}>
        Środa, 17 Maj 2021
      </Text>
      <MiniTab
        name="Spotify"
        iconName="spotify"
        category="entertainment"
        onPress={() => navigation.navigate("History")}
        price="-20,00"
      />
    </>
  );
  const coming = (
    <>
      <Text bold style={styles.Day}>
        Poniedziałek, 21 czerwca 2021
      </Text>
      <MiniTab
        name="Netflix"
        iconName="netflix"
        category="entertainment"
        onPress={() => navigation.navigate("History")}
        price="-44,00"
      />
      <Text bold style={styles.Day}>
        Piątek, 25 czerwca 2021
      </Text>
      <MiniTab
        name="Spotify"
        iconName="spotify"
        category="entertainment"
        onPress={() => navigation.navigate("History")}
        price="-20,00"
      />
      <Text bold style={styles.Day}>
        Sobota, 03 maj 2021
      </Text>
      <MiniTab
        name="Bandagg"
        iconName="bandage"
        category="health"
        onPress={() => navigation.navigate("History")}
        price="-67,00"
      />
      <MiniTab
        name="Amazon Prime Video"
        iconName="amazon"
        category="entertainment"
        onPress={() => navigation.navigate("History")}
        price="-39,00"
      />
    </>
  );

  const listRef = useRef(null);
  useScrollToTop(listRef);

  return (
    <>
      <ScrollView ref={listRef} style={styles.HomeContainer}>
        <View style={styles.Header}>
          <Text style={styles.HeaderText}>Witaj, Arek!</Text>
        </View>
        <View style={styles.Amount}>
          <Text style={styles.AmountText}>Twój stan konta: </Text>
          <View style={styles.grower} />
          <Text style={styles.AmountTextNumber}>2091,68zł</Text>
        </View>
        <View style={styles.GraphPart}>
          <View style={styles.GraphPartContainer}>
            <MaterialCommunityIcons
              name="food-fork-drink"
              size={24}
              color="black"
            />
            <View style={styles.GraphPartBorder}>
              <View style={styles.GraphPart1} />
            </View>
          </View>
          <View style={styles.GraphPartContainer}>
            <Ionicons name="game-controller" size={24} color="black" />
            <View style={styles.GraphPartBorder}>
              <View style={styles.GraphPart2} />
            </View>
          </View>
          <View style={styles.GraphPartContainer}>
            <MaterialCommunityIcons
              name="hospital-box"
              size={24}
              color="black"
            />
            <View style={styles.GraphPartBorder}>
              <View style={styles.GraphPart3} />
            </View>
          </View>
          <View style={styles.GraphPartContainer}>
            <MaterialCommunityIcons name="car" size={24} color="black" />
            <View style={styles.GraphPartBorder}>
              <View style={styles.GraphPart4} />
            </View>
          </View>
          <View style={styles.GraphPartContainer}>
            <MaterialCommunityIcons
              name="dots-horizontal"
              size={24}
              color="black"
            />
            <View style={styles.GraphPartBorder}>
              <View style={styles.GraphPart5} />
            </View>
          </View>
        </View>
        <View style={styles.Payments}>
          <Text style={styles.PaymentText}>Płatności</Text>
          <View style={styles.Categories}>
            <Pressable onPress={() => setShowingTextCategory("lastDays")}>
              <Text
                bold={showingTextCategory === "lastDays"}
                style={stylesForLast}
              >
                Ostatnie
              </Text>
            </Pressable>
            <Pressable onPress={() => setShowingTextCategory("coming")}>
              <Text
                bold={showingTextCategory !== "lastDays"}
                style={stylesForComing}
              >
                Nadchodzące
              </Text>
            </Pressable>
          </View>
          {showingTextCategory == "lastDays" ? lastDays : coming}
        </View>
      </ScrollView>
    </>
  );
};

export default Home;
