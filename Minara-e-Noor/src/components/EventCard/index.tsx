import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { RootState } from "@store";

interface CardProps {
  title: string;
  eventDescription: string;
  onSharePress: () => void;
}

export const EventCard: React.FC<CardProps> = ({
  title,
  eventDescription,
  onSharePress,
}) => {
  const appThemes = useSelector((state: RootState) => state.theme.theme);

  const styles = StyleSheet.create({
    card: {
      backgroundColor: appThemes.cardBackground,
      padding: 16,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 8,
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 4 },
      shadowRadius: 6,
      elevation: 3,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    titleContainer: {
      flex: 1,
    },
    titleText: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#333",
    },
    Text: {
      fontSize: 14,
      color: "#666",
      marginTop: 4,
    },
    iconContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    iconSpacing: {
      marginLeft: 12,
    },
    arabicText: {
      fontSize: 20,
      color: "#000",
      textAlign: "right",
      marginTop: 12,
      fontWeight: "500",
    },
    urduText: {
      fontSize: 16,
      color: "#444",
      textAlign: "right",
      marginTop: 8,
      fontWeight: "400",
    },
  });

  return (
    <View style={styles.card}>
      {/* Header Section */}
      <View style={styles.header}>
        {/* title */}
        <Text style={styles.titleText}>{title}</Text>
        {/* Action Icons */}
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={onSharePress}>
            <MaterialIcons name="share" size={24} color={appThemes.text} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Urdu Translation */}
      <Text style={styles.urduText}>{eventDescription}</Text>
    </View>
  );
};

// Styles
