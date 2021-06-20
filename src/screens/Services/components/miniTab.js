import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import React from "react";

const MiniTab = ({ name, imageUrl, onPress, trigger }) => {
  let miniIcon = (
    <MaterialCommunityIcons name="netflix" size={24} color="black" />
  );
  if (trigger === "coming") {
    miniIcon = (
      <MaterialCommunityIcons name="spotify" size={24} color="black" />
    );
  }

  return (
    <Pressable onPress={onPress}>
      <View style={styles.miniTab}>
        <View style={styles.IconContainer}>
          <Image source={{ uri: imageUrl }} style={{ width: 24, height: 24 }} />
        </View>
        <View style={styles.DescriptionContainer}>
          <Text style={styles.Title}>{name}</Text>
          <Text style={styles.Category}>
            {miniIcon}
            {trigger} Rozrywka
          </Text>
        </View>
        <View style={styles.PriceContainer}>
          <Entypo name="chevron-right" size={30} color="black" />
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
    marginBottom: 10,
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
    // fontFamily: 'Poppins_400Black',
    fontWeight: "bold",
  },
  Title: {
    fontWeight: "bold",
  },
  Category: {
    fontWeight: "bold",
  },
});

export default MiniTab;
