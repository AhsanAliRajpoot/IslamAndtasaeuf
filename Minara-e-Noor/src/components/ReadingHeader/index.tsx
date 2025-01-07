import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, Entypo, MaterialIcons } from "@expo/vector-icons";

const { width: screenWidth } = Dimensions.get("window");

interface CustomHeaderProps {
  title: string; // Dynamic title (e.g., Chapter Name)
  onMenuPress?: () => void; // Optional handler for the "..." menu button
  onSettingsPress?: () => void; // Optional handler for the settings button
}

export const Header: React.FC<CustomHeaderProps> = ({
  title,
  onMenuPress,
  onSettingsPress,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      {/* Back Button */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.iconContainer}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Menu and Settings Buttons */}
      <View style={styles.rightIcons}>
        {/* Menu */}
        <TouchableOpacity onPress={onMenuPress} style={styles.iconContainer}>
          <Entypo name="dots-three-vertical" size={20} color="black" />
        </TouchableOpacity>
        {/* Settings */}
        <TouchableOpacity
          onPress={onSettingsPress}
          style={styles.iconContainer}
        >
          <MaterialIcons name="settings" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignContent: "center",
    paddingHorizontal: 15,
    height: 70,
    alignSelf: "center",
    width: screenWidth,
    backgroundColor: "#FFF", // Header background color
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    paddingHorizontal: 10,
    alignSelf: "center",
  },
  title: {
    fontFamily: "Pak-Nastaleeq",
    flex: 1,
    textAlign: "center",
    fontSize: 25,
    color: "black",
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
});
