import React, { useEffect, useState } from "react";
import {
  FlatList,
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Footer, Header, LanguageSelector } from "@components";
import { fetchChapterData } from "@api";
import { Chapter, Paragraph, Reference } from "../../../api/types";

export const ReadingScreen: React.FC = () => {
  const navigation = useNavigation();

  const [currentChapterNumber, setCurrentChapterNumber] = useState(1);
  const [currentChapter, setCurrentChapter] = useState<Chapter | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState("اردو");
  const bookId = 2; // Static bookId, adjust as needed

  useEffect(() => {
    loadChapterData(currentChapterNumber);
  }, [currentChapterNumber]);

  const loadChapterData = async (chapterNumber: number) => {
    try {
      const chapterData = await fetchChapterData(bookId, chapterNumber);
      setCurrentChapter(chapterData);
    } catch (error) {
      console.error("Error fetching chapter data:", error);
    }
  };

  const handleNextChapter = () => {
    setCurrentChapterNumber((prev) => (prev === 4 ? 1 : prev + 1)); // Circular navigation
  };

  const handlePrevChapter = () => {
    setCurrentChapterNumber((prev) => (prev === 1 ? 4 : prev - 1)); // Circular navigation
  };

  const handleSelectLanguage = (language: string) => {
    setSelectedLanguage(language);
  };

  const renderParagraphs = () => {
    return currentChapter?.Paragraphs.map((paragraph) => {
      let content = paragraph.content;
      paragraph.References.forEach((ref: Reference) => {
        content = content.replace(`[ref:${ref.id}]`, ref.referenceDetail);
      });

      const translation = paragraph.Translations.find(
        (t) => t.Language.name === selectedLanguage
      );
      const translatedContent = translation?.content || "";

      return (
        <View key={paragraph.id} style={styles.paragraphContainer}>
          <Text style={styles.paragraphText}>{content}</Text>
          {translatedContent ? (
            <Text style={styles.translationText}>{translatedContent}</Text>
          ) : null}
        </View>
      );
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={currentChapter?.title || "Loading..."}
        onSettingsPress={() => alert("Settings pressed!")}
      />
      <LanguageSelector
        languages={["عربی", "English", "Translation", "اردو", "فارسی"]}
        selectedLanguage={selectedLanguage}
        onSelectLanguage={handleSelectLanguage}
      />
      <ScrollView style={styles.contentContainer}>
        {renderParagraphs()}
      </ScrollView>
      <Footer
        onPreviousPress={handlePrevChapter}
        onNextPress={handleNextChapter}
        onPlayPausePress={() => alert("Playing audio!")}
        onSharePress={() => alert("Sharing content!")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  contentContainer: {
    flex: 1,
    margin: 10,
  },
  paragraphContainer: {
    marginBottom: 16,
  },
  paragraphText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "justify",
  },
  translationText: {
    fontSize: 14,
    lineHeight: 22,
    color: "#555",
    marginTop: 8,
  },
});
