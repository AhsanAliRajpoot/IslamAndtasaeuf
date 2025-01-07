import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface CardProps {
  title: string;
  id: string | number; // Identifier for the card
  onPress: (id: string | number) => void; // Function to handle press
}

export const CatagoryDataCard: React.FC<CardProps> = ({
  title,
  id,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(id)}>
      <Text style={styles.cardText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    margin: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
    alignItems: "center",
  },
  cardText: {
    fontSize: 18,
    textAlign: "right",
    color: "black",
    fontFamily: "Mehr-Nastaliq",
  },
});
