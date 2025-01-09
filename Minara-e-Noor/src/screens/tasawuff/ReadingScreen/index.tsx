import React, { useEffect, useState } from "react";
import { SafeAreaView, View, ScrollView, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Footer, Header, LanguageSelector } from "@components";
import { fetchChapterData } from "@api";
import { Chapter, Reference } from "../../../api/types";
import type { TasawuffStackScreenProps } from "@navigation-types"; // Adjust the path to your types file

export const ReadingScreen: React.FC = () => {
  const route = useRoute<TasawuffStackScreenProps<"ReadingScreen">["route"]>();
  const { bookId, chapterId, totalChapters } = route.params;

  const [currentChapterNumber, setCurrentChapterNumber] = useState(chapterId);
  const [currentChapter, setCurrentChapter] = useState<Chapter | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState("اردو");

  useEffect(() => {
    loadChapterData(currentChapterNumber);
  }, [currentChapterNumber]);

  const loadChapterData = async (chapterNumber: number) => {
    try {
      const chapterData = await fetchChapterData(bookId, chapterNumber);
      const data = chapterData[0];
      setCurrentChapter(data);
    } catch (error) {
      console.error("Error fetching chapter data:", error);
    }
  };

  const handleNextChapter = () => {
    setCurrentChapterNumber((prev) => (prev === totalChapters ? 1 : prev + 1)); // Circular navigation
  };

  const handlePrevChapter = () => {
    setCurrentChapterNumber((prev) => (prev === 1 ? totalChapters : prev - 1)); // Circular navigation
  };

  const handleSelectLanguage = (language: string) => {
    setSelectedLanguage(language);
  };

  const renderParagraphs = () => {
    return currentChapter?.Paragraphs?.map((paragraph) => {
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
        languages={["عربی", "English", "اردو", "فارسی"]}
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
    marginBottom: 15,
  },
  paragraphText: {
    fontSize: 20,
    lineHeight: 32,
    textAlign: "justify",
    fontFamily: "Jameel-Noori-Nastaleeq-Default",
  },
  translationText: {
    fontSize: 14,
    lineHeight: 22,
    color: "#555",
    marginTop: 8,
  },
});

export default ReadingScreen;
