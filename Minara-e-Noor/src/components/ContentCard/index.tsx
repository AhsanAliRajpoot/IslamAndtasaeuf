import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { RootState } from "@store";

interface CardProps {
  topic: string;
  reference?: string;
  englishTranslation?: string;
  arabicVerse: string;
  urduTranslation: string;
  onSharePress: () => void;
  onBookPress: () => void;
}

export const ContentCard: React.FC<CardProps> = ({
  topic,
  reference,
  arabicVerse,
  urduTranslation,
  englishTranslation,
  onSharePress,
  onBookPress,
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
    topicContainer: {
      flex: 1,
    },
    topicText: {
      fontSize: 18,
      fontWeight: "bold",
      color: appThemes.text,
    },
    referenceText: {
      fontSize: 14,
      color: appThemes.text,
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
      fontFamily: "PDMS-Saleem-Quran-Font",
      fontSize: 50,
      lineHeight: 80,
      color: appThemes.text,
      textAlign: "right",
      marginTop: 12,
      fontWeight: "500",
    },

    englishText: {
      fontSize: 16,
      color: appThemes.text,
      marginTop: 12,
    },

    urduText: {
      fontFamily: "Pak-Nastaleeq",
      fontSize: 20,
      color: appThemes.text,
      textAlign: "right",
      marginTop: 8,
      //fontWeight: "400",
    },
  });

  return (
    <View style={styles.card}>
      {/* Header Section */}
      <View style={styles.header}>
        {/* Topic and Reference */}
        <View style={styles.topicContainer}>
          <Text style={styles.topicText}>{topic}</Text>
          <Text style={styles.referenceText}>{reference}</Text>
        </View>

        {/* Action Icons */}
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={onSharePress}>
            <MaterialIcons name="share" size={24} color={appThemes.text} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onBookPress}>
            <FontAwesome
              name="book"
              size={24}
              color={appThemes.text}
              style={styles.iconSpacing}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Arabic Verse */}
      <Text style={styles.englishText}>{englishTranslation}</Text>

      {/* Arabic Verse */}
      <Text style={styles.arabicText}>{arabicVerse}</Text>

      {/* Urdu Translation */}
      <Text style={styles.urduText}>{urduTranslation}</Text>
    </View>
  );
};

// Styles
