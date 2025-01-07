import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from "react-redux";
import { RootState } from "@store";

const { width } = Dimensions.get("window");

interface HeroSectionProps {
  title: string;
  onHamburgerPress: () => void;
  imageSource: any;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  onHamburgerPress,
  imageSource,
}) => {
  const appThemes = useSelector((state: RootState) => state.theme.theme);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: "absolute",
      top: 0,
      width: width, // Full width of the screen
      height: width * 0.53, // Maintain a 16:9 ratio (or adjust as needed)
      overflow: "hidden",
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 16,
      marginTop: 45,
    },
    hamburger: {
      marginRight: 16,
    },
    title: {
      fontSize: 22,
      color: "#fff",
      fontWeight: "bold",
      textAlign: "center",
      flex: 1,
    },
    content: {
      marginTop: 15,
      width: "75%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between", // Space between text and image
      paddingHorizontal: 16,
    },
    textContainer: {
      flex: 1,
      alignItems: "flex-start", // Align text to the left
      justifyContent: "center", // Center vertically relative to the image
    },
    nowText: {
      fontSize: 14,
      color: "#fff",
      marginBottom: 8,
    },
    upcomingText: {
      fontSize: 14,
      color: "#fff",
    },
    image: {
      width: 100,
      height: 100,
      tintColor: "white",
    },
  });

  return (
    <LinearGradient
      colors={appThemes.gradient as [string, string]}
      style={styles.container}
    >
      {/* Header */}
      <View style={styles.header}>
        {/* Hamburger Icon */}
        <TouchableOpacity onPress={onHamburgerPress} style={styles.hamburger}>
          <MaterialIcons name="menu" size={28} color="#fff" />
        </TouchableOpacity>
        {/* Screen Title */}
        <Text style={styles.title}>{title}</Text>
        {/* Spacer for symmetry */}
        <View />
      </View>

      {/* Image and Text */}
      <View style={styles.content}>
        {/* Text Section */}
        <View style={styles.textContainer}>
          <Text style={styles.nowText}>Now</Text>
          <Text style={styles.upcomingText}>Upcoming</Text>
        </View>
        {/* PNG Image */}
        <Image source={imageSource} style={styles.image} resizeMode="contain" />
      </View>
    </LinearGradient>
  );
};
