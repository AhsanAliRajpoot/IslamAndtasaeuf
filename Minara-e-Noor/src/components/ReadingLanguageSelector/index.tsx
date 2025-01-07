import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface LanguageSelectorProps {
  languages: string[];
  selectedLanguage: string;
  onSelectLanguage: (language: string) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  languages,
  selectedLanguage,
  onSelectLanguage,
}) => (
  <View style={styles.languageContainer}>
    {languages.map((lang) => (
      <TouchableOpacity
        key={lang}
        onPress={() => onSelectLanguage(lang)}
        style={[
          styles.languageButton,
          selectedLanguage === lang && styles.selectedLanguage,
        ]}
      >
        <Text style={styles.languageText}>{lang}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

const styles = StyleSheet.create({
  languageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
  },
  languageButton: {
    padding: 5,
    marginHorizontal: 5,
    borderWidth: 1,
    borderRadius: 5,
  },
  selectedLanguage: { backgroundColor: "#d3d3d3" },
  languageText: { fontSize: 16 },
});
