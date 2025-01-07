import React from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import {
  Ionicons,
  Entypo,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";

const { width: screenWidth } = Dimensions.get("window");

interface CustomFooterProps {
  onBookPress?: () => void; // Handler for Book icon
  onPreviousPress?: () => void; // Handler for Previous icon
  onPlayPausePress?: () => void; // Handler for Play/Pause icon
  isPlaying?: boolean; // Controls Play/Pause icon state
  onNextPress?: () => void; // Handler for Next icon
  onSharePress?: () => void; // Handler for Share icon
}

export const Footer: React.FC<CustomFooterProps> = ({
  onBookPress,
  onPreviousPress,
  onPlayPausePress,
  isPlaying = false,
  onNextPress,
  onSharePress,
}) => {
  return (
    <View style={styles.footerContainer}>
      {/* Book Icon */}
      <TouchableOpacity onPress={onBookPress} style={styles.iconContainer}>
        <FontAwesome5 name="book" size={24} color="black" />
      </TouchableOpacity>

      {/* Previous Icon */}
      <TouchableOpacity onPress={onPreviousPress} style={styles.iconContainer}>
        <Entypo name="controller-fast-backward" size={24} color="black" />
      </TouchableOpacity>

      {/* Play/Pause Icon */}
      <TouchableOpacity onPress={onPlayPausePress} style={styles.iconContainer}>
        {isPlaying ? (
          <Ionicons
            name="pause"
            size={32}
            color="black"
            style={styles.playPauseButton}
          />
        ) : (
          <Ionicons
            name="play"
            size={32}
            color="black"
            style={styles.playPauseButton}
          />
        )}
      </TouchableOpacity>

      {/* Next Icon */}
      <TouchableOpacity onPress={onNextPress} style={styles.iconContainer}>
        <Entypo name="controller-fast-forward" size={24} color="black" />
      </TouchableOpacity>

      {/* Share Icon */}
      <TouchableOpacity onPress={onSharePress} style={styles.iconContainer}>
        <MaterialIcons name="share" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Distributes the icons evenly
    height: 60,
    width: screenWidth,
    alignSelf: "center",
    backgroundColor: "#FFF", // Footer background color
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    paddingHorizontal: 20,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  playPauseButton: {
    padding: 8,
    borderRadius: 40, // Makes the background perfectly round
    backgroundColor: "orange", // Nice blue color for the button
    alignItems: "center",
    justifyContent: "center", // Centers the icon inside
  },
});
