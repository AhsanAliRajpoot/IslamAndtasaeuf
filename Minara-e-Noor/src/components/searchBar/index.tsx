import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Pressable,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { RootState } from "@store";

const { width } = Dimensions.get("window");

interface SearchBarProps {
  placeholder?: string;
  onSearchPress?: () => void;
  onMicPress?: () => void;
  editable?: boolean;
  pointerEvents?: "none" | "auto";
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search...",
  onSearchPress,
  onMicPress,
  editable = false,
  pointerEvents = "none",
}) => {
  const appThemes = useSelector((state: RootState) => state.theme.theme);

  const styles = StyleSheet.create({
    container: {
      position: "absolute",
      top: width * 0.475,
      left: 20,
      right: 20,
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: appThemes.cardBackground,
      borderRadius: 8,
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 6,
      shadowOffset: { width: 0, height: 3 },
      elevation: 4,
      height: 50,
      paddingHorizontal: 10,
    },
    searchIcon: {
      marginRight: 10,
    },
    searchInput: {
      flex: 1,
      fontSize: 15,
      color: appThemes.text,
      opacity: 0.6,
    },
    micIcon: {
      marginLeft: 10,
    },
  });

  return (
    <Pressable style={styles.container} onPress={onSearchPress}>
      <Ionicons
        name="search"
        size={20}
        color={appThemes.text}
        style={styles.searchIcon}
      />
      <TextInput
        style={styles.searchInput}
        placeholder={placeholder}
        placeholderTextColor={appThemes.text}
        editable={editable}
        pointerEvents={pointerEvents}
      />
      <Pressable onPress={onMicPress}>
        <Ionicons
          name="mic"
          size={20}
          color={appThemes.text}
          style={styles.micIcon}
        />
      </Pressable>
    </Pressable>
  );
};
