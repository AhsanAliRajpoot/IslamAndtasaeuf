import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { gStyles, theme } from "@theme";
import { Ionicons } from "@expo/vector-icons";
import { images } from "@assets";
import {
  Divider,
  ContentCard,
  EventCard,
  WordsCard,
  SearchBar,
} from "@components";
import { useNavigation } from "@react-navigation/native";
import { RootState } from "@store";
import { ScrollView } from "react-native-gesture-handler";
const { width } = Dimensions.get("window");

export const HomeMain = () => {
  const appThemes = useSelector((state: RootState) => state.theme.theme);

  const styles = StyleSheet.create({
    main: {
      ...gStyles.mainContainer,
      paddingHorizontal: 0,
      paddingTop: theme.spacing.xxxl * 3.2,
    },

    container: {
      flex: 1,
      backgroundColor: appThemes.background,
    },
    heroImage: {
      width: width, // Full width of the screen
      height: width * 0.59, // Typical hero aspect ratio (adjust as needed)
      justifyContent: "center",
      alignItems: "flex-start",
    },
    heroTextContainer: {
      paddingLeft: 20,
      paddingTop: 40,
    },
    heroTextNow: {
      fontSize: 14,
      color: "black",
    },
    heroTextComing: {
      fontSize: 14,
      color: "black",
    },

    searchBar: {
      position: "absolute",
      top: width * 0.475, // Slightly overlapping the hero image
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
      elevation: 4, // For Android shadow
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

    cardContainer: {
      padding: 10,
      marginTop: 5,
    },
    cardRow: {
      justifyContent: "space-between",
    },
    card: {
      width: (width - 60) / 4,
      height: 80,
      padding: 10,
      backgroundColor: appThemes.cardBackground,
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
      shadowColor: appThemes.text,
      shadowOpacity: 0.1,
      shadowRadius: 4,
      shadowOffset: { width: 0, height: 2 },
      elevation: 3,
      marginVertical: 10,
    },
    cardTitle: {
      fontFamily: "Jameel-regular",
      fontSize: 15,
      color: appThemes.text,
    },
    cardSubtitle: {
      fontSize: 12,
      textAlign: "center",
      color: appThemes.text,
    },

    // styles for images section

    mainImageContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginHorizontal: 20,
      marginBottom: 20,
    },
    image: {
      width: 165,
      height: 150,
      borderRadius: 10,
    },

    // styles for spirituality section

    spititualityContainer: {
      width: "90%",
      height: 150, // Adjust height as needed
      marginVertical: 16,
      alignSelf: "center",
    },
    backgroundImage: {
      flex: 1,
      justifyContent: "center", // Ensures content is vertically centered
      alignItems: "center", // Ensures content is horizontally centered
    },
    textContainer: {
      backgroundColor: "rgba(0, 0, 0, 0.3)", // Semi-transparent background for better text readability
      padding: 16,
      borderRadius: 8,
      alignItems: "center",
    },
    mainHeading: {
      fontSize: 24,
      color: appThemes.text,
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: 8,
    },

    subHeading: {
      fontSize: 16,
      color: appThemes.text,
      textAlign: "center",
      marginTop: 4,
    },
  });

  const navigation = useNavigation();

  const handleSearchPress = () => {
    //navigation.navigate("SearchScreen"); // Replace with your actual search screen route
  };

  const navigateToScreen1 = () => {
    //navigation.navigate("Screen1");
  };

  const navigateToScreen2 = () => {
    //navigation.navigate("Screen2");
  };

  const handleMicPress = () => {
    console.log("Mic icon pressed!");
  };

  const CARDS = [
    { id: "1", title: "نعت", subtitle: "Naat" },
    { id: "2", title: "حمد", subtitle: "Hamd" },
    { id: "3", title: " فقہ  ", subtitle: "Fiqh" },
    { id: "4", title: "ارکان اسلام", subtitle: "Pilars of Islam" },
    { id: "5", title: "سیرت", subtitle: "Seerah" },
    { id: "6", title: "اذکار", subtitle: "Azkaar" },
    { id: "7", title: "لائبریری", subtitle: "Library" },
    { id: "8", title: "عارنہ کلام", subtitle: "Sufi Poetry" },
  ];

  const handleCardPress = (screenName: string) => {
    //navigation.navigate(screenName);
  };

  const renderCard = ({
    item,
  }: {
    item: { id: string; title: string; subtitle: string };
  }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => handleCardPress(`Screen${item.id}`)}
    >
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Hero Section */}
      <ImageBackground
        source={images["Home-screen-banner"]} // Replace with your image URL or local asset
        style={styles.heroImage}
        resizeMode="contain"
      >
        <View style={styles.heroTextContainer}>
          <Text style={styles.heroTextNow}>Now</Text>
          <Text style={styles.heroTextComing}>Up coming</Text>
        </View>
      </ImageBackground>
      {/* Search Bar */}
      <SearchBar
        placeholder="Search Ayat, Hadith, Tafser Sufism"
        onSearchPress={handleSearchPress}
        onMicPress={handleMicPress}
      />

      {/* Cards Section */}
      <FlatList
        data={CARDS}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        numColumns={4}
        contentContainerStyle={styles.cardContainer}
        columnWrapperStyle={styles.cardRow}
        scrollEnabled={false}
      />

      <Divider />

      <ContentCard
        topic="Surah An-Nur"
        reference="24:35"
        arabicVerse="قُل لِّلْمُؤْمِنِينَ يَغُضُّوا۟ مِنْ أَبْصَـٰرِهِمْ وَيَحْفَظُوا۟ فُرُوجَهُمْ ۚ ذَٰلِكَ أَزْكَىٰ لَهُمْ ۗ إِنَّ ٱللَّهَ خَبِيرٌۢ بِمَا يَصْنَعُونَ ٣٠"
        urduTranslation="مومن مردوں سے کہہ دو کہ اپنی نظریں نیچی رکھا کریں اور اپنی شرم گاہوں کی حفاظت کیا کریں۔ یہ ان کے لئے بڑی پاکیزگی کی بات ہے اور جو کام یہ کرتے ہیں خدا ان سے خبردار ہے"
        onSharePress={() => console.log("Share pressed")}
        onBookPress={() => console.log("Book pressed")}
      />
      <ContentCard
        topic="Surah Al-Baqarah"
        reference="2:255"
        arabicVerse="اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ"
        urduTranslation="اللہ، اس کے سوا کوئی معبود نہیں، وہ زندہ اور سب کا قائم رکھنے والا ہے۔"
        onSharePress={() => console.log("Share pressed for Al-Baqarah")}
        onBookPress={() => console.log("Book pressed for Al-Baqarah")}
      />

      <ContentCard
        topic="Surah Al-Baqarah"
        reference="2:255"
        arabicVerse="اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ"
        urduTranslation="اللہ، اس کے سوا کوئی معبود نہیں، وہ زندہ اور سب کا قائم رکھنے والا ہے۔"
        onSharePress={() => console.log("Share pressed for Al-Baqarah")}
        onBookPress={() => console.log("Book pressed for Al-Baqarah")}
      />

      <ContentCard
        topic="Surah Al-Baqarah"
        reference="2:255"
        arabicVerse="اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ"
        urduTranslation="اللہ، اس کے سوا کوئی معبود نہیں، وہ زندہ اور سب کا قائم رکھنے والا ہے۔"
        onSharePress={() => console.log("Share pressed for Al-Baqarah")}
        onBookPress={() => console.log("Book pressed for Al-Baqarah")}
      />

      <EventCard
        title="Islamic Event"
        eventDescription="اللہ، اس کے سوا کوئی معبود نہیں، وہ زندہ اور سب کا قائم رکھنے والا ہے۔"
        onSharePress={() => console.log("Share pressed for Al-Baqarah")}
      />

      <ContentCard
        topic="Dua of the Day"
        reference="24:35"
        englishTranslation="Tell the believing men to lower their gaze and guard their chastity. That is purer for them. Surely Allah is All-Aware of what they do"
        arabicVerse="قُل لِّلْمُؤْمِنِينَ يَغُضُّوا۟ مِنْ أَبْصَـٰرِهِمْ وَيَحْفَظُوا۟ فُرُوجَهُمْ ۚ ذَٰلِكَ أَزْكَىٰ لَهُمْ ۗ إِنَّ ٱللَّهَ خَبِيرٌۢ بِمَا يَصْنَعُونَ ٣٠"
        urduTranslation="مومن مردوں سے کہہ دو کہ اپنی نظریں نیچی رکھا کریں اور اپنی شرم گاہوں کی حفاظت کیا کریں۔ یہ ان کے لئے بڑی پاکیزگی کی بات ہے اور جو کام یہ کرتے ہیں خدا ان سے خبردار ہے"
        onSharePress={() => console.log("Share pressed")}
        onBookPress={() => console.log("Book pressed")}
      />

      <WordsCard
        title="Word of the day"
        urduWord="اللہ کی ایک صفت، جو دلوں کی مرمت کرنے والا"
        arabicWord="الْجَابِرُ"
        onSharePress={() => console.log("Share pressed for Al-Baqarah")}
      />

      <Divider />

      <View style={styles.mainImageContainer}>
        <TouchableOpacity onPress={navigateToScreen1}>
          <Image
            source={images["asma-ul-husna"]}
            style={styles.image}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToScreen2}>
          <Image
            source={images["asma-ul-nabi"]}
            style={styles.image}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <Divider />
      {/* Learn spirituality section */}

      <View style={styles.spititualityContainer}>
        {/* Background Image */}
        <ImageBackground
          source={images["learn-spirituality"]} // Replace with your background image URL
          style={styles.backgroundImage}
          resizeMode="contain" // Ensures the background image covers the section
        >
          {/* Content */}
          <View style={styles.textContainer}>
            {/* Main Heading */}
            <Text style={styles.mainHeading}>آؤ رحانیت سیکھیں۔</Text>
            {/* Subheadings */}
            <Text style={styles.subHeading}>
              اپنے اندر کی روشنی کو پہچانیں۔
            </Text>
            <Text style={styles.subHeading}>تصوف کے راز جاننے کا وقت ہے۔</Text>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

export default HomeMain;
