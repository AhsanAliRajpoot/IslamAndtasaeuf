import React, { useEffect, useState } from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { TasawuffStackParamsList } from "@navigation-types";
import { RouteProp } from "@react-navigation/native";
import { fetchChapters } from "@api";
import { Chapter } from "../../../api/types";

type TasawufMainScreenProps = {
  navigation: StackNavigationProp<TasawuffStackParamsList, "ReadingScreen">;
  route: RouteProp<TasawuffStackParamsList, "ChapterDetailsScreen">;
};

export const ChapterDetailsScreen: React.FC<TasawufMainScreenProps> = ({
  navigation,
  route,
}) => {
  const { bookId } = route.params;
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadChapters = async () => {
      try {
        const data = await fetchChapters(bookId); // Assuming BookId = 2
        console.log(route.params);
        console.log(bookId);
        setChapters(data);
      } catch (err) {
        setError("Failed to fetch chapters. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadChapters();
  }, []);

  const handleChapterPress = (chapterId: number) => {
    const totalChapters =
      chapters.length > 0 ? chapters[chapters.length - 1].chapterNumber : 0;

    navigation.navigate("ReadingScreen", {
      bookId: bookId,
      chapterId,
      totalChapters,
    });
  };

  const renderChapter = ({ item }: { item: Chapter }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => handleChapterPress(item.id)}
    >
      <Text style={styles.cardText}>{item.title}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#333" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={chapters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderChapter}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default ChapterDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  list: {
    paddingBottom: 16,
  },
  card: {
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  cardText: {
    fontSize: 22,
    textAlign: "right",
    color: "#333",
    fontFamily: "Mehr-Nastaliq",
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  errorText: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
  },
});
