import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Dropdown } from "@components";
import { RadioButtonGroup } from "@components";
import { useSelector, useDispatch } from "react-redux";
import { RootState, setTheme, setArabicFont } from "@store";
import * as themes from "@theme";

type ThemeKey = keyof typeof themes.themes;

export const SettingsScreen: React.FC = () => {
  // States for each section
  const dispatch = useDispatch();

  // Get the theme object and theme name from Redux state
  const themeName = useSelector((state: RootState) => state.theme.themeName);
  const theme = useSelector((state: RootState) => state.theme.theme);

  const arabicFont = useSelector(
    (state: RootState) => state.arabicFontFamily.arabicFont
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: theme.background,
    },
    section: {
      marginVertical: themes.theme.spacing.xl,
      padding: themes.theme.spacing.xl,
      borderRadius: themes.theme.radius.md,
    },
    heading: {
      color: theme.text,
      fontSize: themes.theme.fontSize.lg,
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: themes.theme.spacing.sm,
    },

    arabicFont: {
      alignSelf: "center",
      fontFamily: arabicFont,
    },
  });

  const [reciteOption, setReciteOption] = useState<string>("translation");
  const [translationAuthor, setTranslationAuthor] = useState<string>(String);
  const [tafseerAuthor, setTafseerAuthor] = useState<string>(String);
  const [tajweed, setTajweed] = useState<"show" | "hide">("show");
  const [autoScroll, setAutoScroll] = useState<"show" | "hide">("hide");
  const [wordByWordAuthor, setWordByWordAuthor] = useState<string>("Author 1");
  const [wordsColor, setWordsColor] = useState<string>("Default");
  const [wordStyle, setWordStyle] = useState<"combined" | "newLine">(
    "combined"
  );
  const [arabicFontSize, setArabicFontSize] = useState<number>(16);
  const [arabicTextColor, setArabicTextColor] = useState<string>("Black");
  const [urduFont, setUrduFont] = useState<string>("Default Urdu");
  const [urduFontSize, setUrduFontSize] = useState<number>(16);
  const [urduTextColor, setUrduTextColor] = useState<string>("Black");
  const [tafseerColor, setTafseerColor] = useState<string>("Black");
  const [englishFont, setEnglishFont] = useState<string>("Default English");
  const [englishFontSize, setEnglishFontSize] = useState<number>(16);

  const handleThemeChange = (newTheme: ThemeKey) => {
    dispatch(setTheme(newTheme));
  };

  const arabicFontOptions = Object.keys(
    themes.arabicFontFamilies
  ) as Array<themes.ArabicFontKey>;

  const handleChangeArabicFont = (font: themes.ArabicFontKey) => {
    dispatch(setArabicFont(font));
  };

  return (
    <ScrollView style={styles.container}>
      {/* Section 1: Recitation */}
      <View style={styles.section}>
        <Text style={styles.heading}>Recitation</Text>
        <RadioButtonGroup
          label="Recite:"
          options={["Translation", "Tafseer"]}
          selected={reciteOption}
          onSelect={(option) => setReciteOption(option)}
        />
        {reciteOption === "translation" ? (
          <Dropdown
            label="Translation Author"
            options={["Author 1", "Author 2"]}
            selected={translationAuthor}
            onSelect={setTranslationAuthor}
            theme={theme}
          />
        ) : (
          <Dropdown
            label="Tafseer Author"
            options={["Author A", "Author B"]}
            selected={tafseerAuthor}
            onSelect={setTafseerAuthor}
            theme={theme}
          />
        )}
      </View>

      {/* Section 2: General */}
      <View style={styles.section}>
        <Text style={styles.heading}>General</Text>
        <Dropdown
          label="Theme"
          options={Object.keys(themes.themes) as ThemeKey[]} // Type the options
          selected={themeName as ThemeKey} // Ensure selected is of type ThemeKey
          onSelect={handleThemeChange}
          theme={theme}
        />
        <Dropdown
          label="Tajweed"
          options={["Show", "Hide"]}
          selected={tajweed}
          onSelect={(option) => setTajweed(option as "show" | "hide")}
          theme={theme}
        />
        <Dropdown
          label="Auto Scroll"
          options={["Show", "Hide"]}
          selected={autoScroll}
          onSelect={(option) => setAutoScroll(option as "show" | "hide")}
          theme={theme}
        />
      </View>

      {/* Section 3: Word-by-Word Recitation */}
      <View style={styles.section}>
        <Text style={styles.heading}>Word-by-Word</Text>
        <Dropdown
          label="Author"
          options={["Author 1", "Author 2", "Hide"]}
          selected={wordByWordAuthor}
          onSelect={setWordByWordAuthor}
          theme={theme}
        />
        <Dropdown
          label="Words Color"
          options={["Default", "Custom"]}
          selected={wordsColor}
          onSelect={setWordsColor}
          theme={theme}
        />
        <Dropdown
          label="Word Style"
          options={["Combined", "Each Word on New Line"]}
          selected={wordStyle}
          onSelect={(option) => setWordStyle(option as "combined" | "newLine")}
          theme={theme}
        />
      </View>

      {/* Section 4: Arabic Font */}
      <View style={styles.section}>
        <Text style={styles.heading}>Arabic Font</Text>
        <Dropdown
          label="Font"
          options={arabicFontOptions} // Dropdown options.
          selected={arabicFont} // Currently selected font.
          onSelect={handleChangeArabicFont}
          theme={theme}
        />

        <Dropdown
          label="Font Size"
          options={Array.from({ length: 49 }, (_, i) => `${12 + i}pt`)}
          selected={`${arabicFontSize}pt`}
          onSelect={(size) => setArabicFontSize(parseInt(size))}
          theme={theme}
        />
        <Dropdown
          label="Text Color"
          options={["Black", "Gray", "Custom"]}
          selected={arabicTextColor}
          onSelect={setArabicTextColor}
          theme={theme}
        />
        <Text style={styles.arabicFont}>
          بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </Text>
      </View>

      {/* Section 5: Urdu Font */}
      <View style={styles.section}>
        <Text style={styles.heading}>Urdu Font</Text>
        <Dropdown
          label="Font"
          options={["Default Urdu", "Custom Urdu"]}
          selected={urduFont}
          onSelect={setUrduFont}
          theme={theme}
        />
        <Dropdown
          label="Font Size"
          options={Array.from({ length: 49 }, (_, i) => `${12 + i}pt`)}
          selected={`${urduFontSize}pt`}
          onSelect={(size) => setUrduFontSize(parseInt(size))}
          theme={theme}
        />
        <Dropdown
          label="Text Color"
          options={["Black", "Gray", "Custom"]}
          selected={urduTextColor}
          onSelect={setUrduTextColor}
          theme={theme}
        />
        <Dropdown
          label="Tafseer Color"
          options={["Black", "Gray", "Custom"]}
          selected={tafseerColor}
          onSelect={setTafseerColor}
          theme={theme}
        />
      </View>

      {/* Section 6: English Font */}
      <View style={styles.section}>
        <Text style={styles.heading}>English Font</Text>

        <Dropdown
          label="Font"
          options={["Default English", "Custom English"]}
          selected={englishFont}
          onSelect={setEnglishFont}
          theme={theme}
        />
        <Dropdown
          label="Font Size"
          options={Array.from({ length: 49 }, (_, i) => `${12 + i}pt`)}
          selected={`${englishFontSize}pt`}
          onSelect={(size) => setEnglishFontSize(parseInt(size))}
          theme={theme}
        />
      </View>
    </ScrollView>
  );
};
