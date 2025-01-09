import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import {
  HeroSection,
  LastReadButton,
  SearchBar,
  CatagoryDataCard,
} from "@components";
import { RootState } from "@store";
import { TasawuffStackParamsList } from "@navigation-types";
import { StackNavigationProp } from "@react-navigation/stack";
import { fetchBooks } from "@api";
import { Book } from "../../../api/types";

const { width } = Dimensions.get("window");

type TasawufMainScreenProps = {
  navigation: StackNavigationProp<TasawuffStackParamsList, "TasawufMain">;
};

export const TasawuffMain: React.FC<TasawufMainScreenProps> = ({
  navigation,
}) => {
  const appThemes = useSelector((state: RootState) => state.theme.theme);

  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const data = await fetchBooks();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };

    loadBooks();
  }, []);

  const handlePress = (id: number) => {
    navigation.navigate("ChapterDetailsScreen", { bookId: id });
  };

  const categorizedBooks = books.reduce((acc, book) => {
    acc[book.category] = [...(acc[book.category] || []), book];
    return acc;
  }, {} as Record<string, Book[]>);

  const styles = StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: appThemes.background,
    },
    heroContainer: {},
    lastOpenBtnContainer: {
      marginTop: width * 0.63,
    },
    heading: {
      fontSize: 30,
      textAlign: "center",
      color: "#333",
      marginVertical: 20,
      fontFamily: "Mehr-Nastaliq",
    },
    listContainer: {
      justifyContent: "space-between",
      marginBottom: 20,
    },
  });

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.main}>
      {/* Hero Section */}
      <View style={styles.heroContainer}>
        {" "}
        <HeroSection
          title="Tasawuf"
          onHamburgerPress={() => console.log("Hamburger Pressed")}
          imageSource={require("@assets/images/sufisum-Hero-img.png")}
        />
        <SearchBar
          placeholder="Search Sufism"
          onSearchPress={() => console.log("Search pressed!")}
          onMicPress={() => console.log("Mic icon pressed!")}
        />
      </View>
      <View style={styles.lastOpenBtnContainer}>
        <LastReadButton
          onPress={() => console.log("Open Last Read button pressed!")}
        />
      </View>
      {/* Render categorized books */}
      {Object.keys(categorizedBooks).map((category) => (
        <View key={category}>
          <Text style={styles.heading}>{category}</Text>
          <FlatList
            data={categorizedBooks[category]}
            renderItem={({ item }) => (
              <CatagoryDataCard
                title={item.title}
                id={item.id}
                onPress={() => handlePress(item.id)}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            contentContainerStyle={styles.listContainer}
            nestedScrollEnabled
          />
        </View>
      ))}
    </ScrollView>
  );
};
