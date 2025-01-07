import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { gStyles, theme } from "@theme";
import { HeroSection, LastReadButton } from "@components";
import { images } from "@assets";
import { useSelector } from "react-redux";
import { RootState } from "@store";
import {
  Divider,
  ContentCard,
  EventCard,
  WordsCard,
  SearchBar,
} from "@components";
const { width } = Dimensions.get("window");

export const QuranMain = () => {
  const appThemes = useSelector((state: RootState) => state.theme.theme);

  const styles = StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: appThemes.background,
    },

    heroContainer: {},

    lastOpenBtnContainer: {
      marginTop: width * 0.63,
    },
  });

  const handleMicPress = () => {
    console.log("Mic icon pressed!");
  };

  const handleSearchPress = () => {
    console.log("Search pressed!");
    // navigation.navigate("SearchScreen");
  };

  const handleLastReadPress = () => {
    console.log("Open Last Read button pressed!");
  };

  return (
    <View style={styles.main}>
      {/* Hero Section */}
      <View style={styles.heroContainer}>
        <HeroSection
          title="Quran"
          onHamburgerPress={() => console.log("Hamburger Pressed")}
          imageSource={images["sufisum-Hero-img"]}
        />
        <SearchBar
          placeholder="Search from Quran..."
          onSearchPress={handleSearchPress}
          onMicPress={handleMicPress}
        />
      </View>

      <View style={styles.lastOpenBtnContainer}>
        <LastReadButton onPress={handleLastReadPress} />
      </View>
    </View>
  );
};
