import React from "react";
import { View, StyleSheet } from "react-native";

export const Divider: React.FC = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    height: 1, // Thickness of the line
    backgroundColor: "#f6d060", // Line color
    width: "100%", // Full width
  },
});
