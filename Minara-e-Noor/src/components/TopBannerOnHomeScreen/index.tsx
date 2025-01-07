import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { images } from "@assets";

export const Banner: React.FC = () => {
  const navigation = useNavigation();

  const handleSupportClick = () => {
    //navigation.navigate('SupportScreen');
  };

  return (
    <View style={styles.container}>
      {/* Custom Icon/Image */}
      <Image
        source={images["top-left"]}
        style={styles.icon}
        resizeMode="contain"
      />

      {/* Texts */}
      <View style={styles.textContainer}>
        <Text style={styles.primaryText}>
          خرچ گِن کر نہ کرو تاکہ تمہیں بھی گن کر نہ ملے۔ بخاری 2591
        </Text>
        <Text style={styles.secondaryText}>
          ایپ اسلام اور تصوف سے تعاون کریں۔
        </Text>
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.button} onPress={handleSupportClick}>
        <Text style={styles.buttonText}>Support</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9F9F9",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 20,
    elevation: 3, // For shadow (Android)
    shadowColor: "#000", // For shadow (iOS)
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  icon: {
    width: 20, // Customize the size as needed
    height: 20,
    marginBottom: 15,
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 15,
  },
  primaryText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginBottom: 8,
    fontFamily: "System", // Customize the font if needed
  },
  secondaryText: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    fontFamily: "System",
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
