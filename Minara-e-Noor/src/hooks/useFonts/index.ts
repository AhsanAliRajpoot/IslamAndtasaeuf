import * as Font from "expo-font";

export const useFonts = async (): Promise<void> => {
  await Font.loadAsync({
    "Visby-Heavy": require("../../assets/fonts/VisbyHeavy.otf"),
    "Visby-ExtraBold": require("../../assets/fonts/VisbyExtrabold.otf"),
    "Visby-Bold": require("../../assets/fonts/VisbyBold.otf"),
    "Visby-Medium": require("../../assets/fonts/VisbyMedium.otf"),
    "Visby-Regular": require("../../assets/fonts/VisbyRegular.otf"),
    "Visby-Semibold": require("../../assets/fonts/VisbySemibold.otf"),
    "Al-Majeed-Quranic-Regular": require("../../assets/fonts/AlMajeedQuranicFontRegular.ttf"),
    "PDMS-Saleem-Quran-Font": require("../../assets/fonts/PDMSSaleemQuranFont.ttf"),
    "Jameel-regular": require("../../assets/fonts/Jameel.ttf"),
    "Pak-Nastaleeq": require("../../assets/fonts/PakNastaleeqRegular.otf"),
    "Al-Mushaf-Quran": require("../../assets/fonts/AlMushafQuran.ttf"),
    "Al-Qalam-Quran-Majeed": require("../../assets/fonts/AlQalamQuranMajeed.ttf"),
    "Al-Mushaf": require("../../assets/fonts/AlMushaf.ttf"),
    "Arab-Quran-Islamic": require("../../assets/fonts/ArabQuranIslamic.ttf"),
    "Mehr-Nastaliq": require("../../assets/fonts/MehrNastaliq.ttf"),
  });
};
