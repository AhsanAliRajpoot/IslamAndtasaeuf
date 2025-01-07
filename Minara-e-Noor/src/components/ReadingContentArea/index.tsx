import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";

interface ContentAreaProps {
  content: string;
}

export const ContentArea: React.FC<ContentAreaProps> = ({ content }) => (
  <ScrollView style={styles.contentContainer}>
    <Text style={styles.contentText}>{content}</Text>
  </ScrollView>
);

const styles = StyleSheet.create({
  contentContainer: { padding: 10 },
  contentText: { fontSize: 16, lineHeight: 24 },
});
