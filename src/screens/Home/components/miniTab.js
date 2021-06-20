import { CATEGORY_ICONS, CATEGORY_LABELS } from "../../../constants";
import { StyleSheet, View, Pressable } from "react-native";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import Text from "../../../components/Text";
import React from "react";

const MiniTab = ({
  name = "Netflix",
  iconName = "netflix",
  category = "entertainment",
  price,
  refund,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.miniTab, refund && styles.refund]}>
        <View style={styles.IconContainer}>
          <MaterialCommunityIcons name={iconName} size={24} color="white" />
        </View>
        <View style={styles.DescriptionContainer}>
          <Text style={styles.Title}>{name}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialCommunityIcons
              name={CATEGORY_ICONS[category]}
              size={24}
              color="black"
            />
            <Text style={styles.Category}>{CATEGORY_LABELS[category]}</Text>
          </View>
        </View>
        <View style={styles.PriceContainer}>
          {price && <Text style={styles.Price}>{price} zł</Text>}
          {!price && <Entypo name="chevron-right" size={30} color="black" />}
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  miniTab: {
    flexDirection: "row",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 5,
  },
  IconContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "black",
  },
  DescriptionContainer: {
    justifyContent: "center",
    marginLeft: 20,
    flexGrow: 2,
  },
  PriceContainer: {
    justifyContent: "center",
  },
  Price: {
    fontWeight: "bold",
  },
  Title: {
    fontWeight: "bold",
  },
  Category: {
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 4,
  },
  refund: {
    backgroundColor: "#4FD098",
  },
});

export default MiniTab;
