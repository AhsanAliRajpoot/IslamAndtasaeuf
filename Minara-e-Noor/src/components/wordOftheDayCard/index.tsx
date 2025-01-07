import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { RootState } from "@store";

interface CardProps {
  title: string;
  arabicWord: string;
  urduWord: string;
  onSharePress: () => void;
}

export const WordsCard: React.FC<CardProps> = ({
  title,
  arabicWord,
  urduWord,
  onSharePress,
}) => {
  const appThemes = useSelector((state: RootState) => state.theme.theme);

  const styles = StyleSheet.create({
    card: {
      backgroundColor: appThemes.cardBackground,
      padding: 16,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 10,
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
      marginBottom: 12, // Adds a bit of space between header and words
    },
    titleText: {
      fontSize: 18,
      fontWeight: "bold",
      color: appThemes.text,
    },
    iconContainer: {
      padding: 8, // Gives a nice hit area for the icon
    },
    wordsContainer: {
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 12, // Adds some space between header and word display
    },
    urduText: {
      fontSize: 16,
      color: appThemes.text,
      marginBottom: 8, // Adjusts space between Urdu and Arabic words
      fontWeight: "400",
    },
    arabicText: {
      fontSize: 16,
      color: appThemes.text,
      fontWeight: "400",
      marginHorizontal: 8,
    },
  });

  return (
    <View style={styles.card}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.titleText}>{title}</Text>
        <TouchableOpacity onPress={onSharePress} style={styles.iconContainer}>
          <MaterialIcons name="share" size={24} color={appThemes.text} />
        </TouchableOpacity>
      </View>

      {/* Words Section */}
      <View style={styles.wordsContainer}>
        <Text style={styles.urduText}>{urduWord}</Text>
        <Text style={styles.arabicText}>{arabicWord}</Text>
      </View>
    </View>
  );
};

// Styles
