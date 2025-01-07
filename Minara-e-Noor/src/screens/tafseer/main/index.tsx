import React from "react";
import { gStyles, theme } from "@theme";
import { StyleSheet, Text, View } from "react-native";

export const TafseerMain = () => {
  return (
    <View style={styles.main}>
      <Text>Tafseer</Text>
    </View>
  );
};

export default TafseerMain;

const styles = StyleSheet.create({
  main: {
    ...gStyles.mainContainer,
    paddingTop: theme.header.height,
  },
});
