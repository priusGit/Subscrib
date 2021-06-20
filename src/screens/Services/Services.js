import { StyleSheet, ScrollView, Pressable, Text, View } from "react-native";
import { useScrollToTop } from "@react-navigation/native";
import MiniTab from "../Home/components/miniTab";
import React, { useState, useRef } from "react";
import Filter from "../../components/Filter";

const Services = ({ navigation }) => {
  const [showingTextCategory, setShowingTextCategory] = useState("lastDays");

  const listRef = useRef(null);
  useScrollToTop(listRef);

  const stylesForLast =
    showingTextCategory === "lastDays"
      ? [styles.Last, styles.CategoryText, styles.Showing]
      : [styles.Last, styles.CategoryText, styles.Hidden];
  const stylesForComing =
    showingTextCategory === "coming"
      ? [styles.Coming, styles.CategoryText, styles.Showing]
      : [styles.Last, styles.CategoryText, styles.Hidden];

  return (
    <ScrollView ref={listRef} style={styles.HomeContainer}>
      <View style={styles.Header}>
        <Text style={styles.HeaderText}>Serwisy</Text>
      </View>
      <View style={styles.Categories}>
        <Pressable onPress={() => setShowingTextCategory("lastDays")}>
          <Text style={stylesForLast}>Subskrypcje</Text>
        </Pressable>
        <Pressable onPress={() => setShowingTextCategory("coming")}>
          <Text style={stylesForComing}>Związania</Text>
        </Pressable>
      </View>
      <Filter />
      <View style={styles.Tabs}>
        {showingTextCategory === "lastDays" && (
          <>
            <MiniTab
              name="Amazon Prime Video"
              iconName="amazon"
              category="entertainment"
              onPress={() => navigation.navigate("ServicesDetails")}
            />
            <MiniTab
              name="Bandagg"
              iconName="bandage"
              category="health"
              onPress={() => navigation.navigate("ServicesDetails")}
            />
            <MiniTab
              name="Netflix"
              iconName="netflix"
              trigger="lastDays"
              onPress={() => navigation.navigate("ServicesDetails")}
            />
            <MiniTab
              name="Spotify"
              iconName="spotify"
              category="entertainment"
              onPress={() => navigation.navigate("ServicesDetails")}
            />
          </>
        )}

        {showingTextCategory !== "lastDays" && (
          <>
            <MiniTab
              name="Apple App Store"
              iconName="apple"
              category="other"
              onPress={() => navigation.navigate("ServicesDetails")}
            />
            <MiniTab
              name="Steam"
              iconName="steam"
              onPress={() => navigation.navigate("ServicesDetails")}
            />
            <MiniTab
              name="Google Play Store"
              iconName="google-play"
              category="other"
              onPress={() => navigation.navigate("ServicesDetails")}
            />
          </>
        )}
      </View>
    </ScrollView>
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
  },
  HeaderText: {
    fontSize: textSize,
    fontWeight: "bold",
  },
  Category: {
    marginTop: 16,
    marginBottom: 16,
    fontWeight: "bold",
    fontSize: 14,
    opacity: 0.8,
  },
  Categories: {
    flexDirection: "row",
    marginBottom: 26,
  },
  CategoryText: {
    fontSize: 16,
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
  Tabs: {
    marginTop: 26,
    marginBottom: 40,
  },
});

export default Services;
