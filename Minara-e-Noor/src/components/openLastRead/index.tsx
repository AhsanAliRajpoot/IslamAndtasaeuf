import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { RootState } from "@store";

interface LastReadButtonProps {
  iconName?: keyof typeof MaterialIcons.glyphMap; // Icon name from MaterialIcons
  text?: string; // Customizable text
  onPress: () => void; // Callback for button press
}

export const LastReadButton: React.FC<LastReadButtonProps> = ({
  iconName = "history", // Default icon
  text = "Open Last Read", // Default text
  onPress,
}) => {
  const appThemes = useSelector((state: RootState) => state.theme.theme);

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: appThemes.cardBackground }]}
      onPress={onPress}
    >
      {/* Icon */}
      <MaterialIcons
        name={iconName}
        size={24}
        color={appThemes.text}
        style={styles.icon}
      />

      {/* Text */}
      <Text style={[styles.text, { color: appThemes.text }]}>{text}</Text>
    </TouchableOpacity>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 3, // Shadow for Android
  },
  icon: {
    marginRight: 8, // Space between icon and text
  },
  text: {
    fontSize: 15,
  },
});
