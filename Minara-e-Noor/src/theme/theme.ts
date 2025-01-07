import { Dimensions, StyleSheet } from "react-native";
import colors from "./colors";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
export const theme = {
  header: {
    height: 45,
  },
  text: {
    decoration: {
      underline: "underline",
      lineThrough: "line-through",
      underlineLineThrough: "underline line-through",
      none: "none",
    },
  },
  font: {
    thin: "Visby-Thin",
    light: "Visby-Light",
    regular: "Visby-Regular",
    medium: "Visby-Medium",
    bold: "Visby-Bold",
    heavy: "Visby-Heavy",
  },
  fontSize: {
    "2xs": 8,
    xs: 10,
    sm: 12,
    md: 14,
    lg: 18,
    xl: 24,
    "2xl": 32,
    "3xl": 40,
    "4xl": 48,
  },
  radius: {
    none: 0,
    xs: 6,
    sm: 8,
    md: 12,
    lg: 15,
    xl: 18,
    full: 9999,
  },
  spacing: {
    none: 0,
    xs: 4,
    sm: 6,
    md: 8,
    lg: 12,
    xl: 16,
    xxl: 20,
    xxxl: 25,
  },
  colors: {
    dark: [
      "#C1C2C5",
      "#A6A7AB",
      "#909296",
      "#5C5F66",
      "#373A40",
      "#2C2E33",
      "#25262B",
      "#1A1B1E",
      "#141517",
      "#101113",
    ],
    gray: [
      "#F8F9FA",
      "#F1F3F5",
      "#E9ECEF",
      "#DEE2E6",
      "#CED4DA",
      "#ADB5BD",
      "#868E96",
      "#495057",
      "#343A40",
      "#212529",
    ],
    red: [
      "#FFF5F5",
      "#FFE3E3",
      "#FFC9C9",
      "#FFA8A8",
      "#FF8787",
      "#FF6B6B",
      "#FA5252",
      "#F03E3E",
      "#E03131",
      "#C92A2A",
    ],
    pink: [
      "#FFF0F6",
      "#FFDEEB",
      "#FCC2D7",
      "#FAA2C1",
      "#F783AC",
      "#F06595",
      "#E64980",
      "#D6336C",
      "#C2255C",
      "#A61E4D",
    ],
    grape: [
      "#F8F0FC",
      "#F3D9FA",
      "#EEBEFA",
      "#E599F7",
      "#DA77F2",
      "#CC5DE8",
      "#BE4BDB",
      "#AE3EC9",
      "#9C36B5",
      "#862E9C",
    ],
    violet: [
      "#F3F0FF",
      "#E5DBFF",
      "#D0BFFF",
      "#B197FC",
      "#9775FA",
      "#845EF7",
      "#7950F2",
      "#7048E8",
      "#6741D9",
      "#5F3DC4",
    ],
    indigo: [
      "#EDF2FF",
      "#DBE4FF",
      "#BAC8FF",
      "#91A7FF",
      "#748FFC",
      "#5C7CFA",
      "#4C6EF5",
      "#4263EB",
      "#3B5BDB",
      "#364FC7",
    ],
    blue: [
      "#E7F5FF",
      "#D0EBFF",
      "#A5D8FF",
      "#74C0FC",
      "#4DABF7",
      "#339AF0",
      "#228BE6",
      "#1C7ED6",
      "#1971C2",
      "#1864AB",
    ],
    cyan: [
      "#E3FAFC",
      "#C5F6FA",
      "#99E9F2",
      "#66D9E8",
      "#3BC9DB",
      "#22B8CF",
      "#15AABF",
      "#1098AD",
      "#0C8599",
      "#0B7285",
    ],
    teal: [
      "#E6FCF5",
      "#C3FAE8",
      "#96F2D7",
      "#63E6BE",
      "#38D9A9",
      "#20C997",
      "#12B886",
      "#0CA678",
      "#099268",
      "#087F5B",
    ],
    green: [
      "#EBFBEE",
      "#D3F9D8",
      "#B2F2BB",
      "#8CE99A",
      "#69DB7C",
      "#51CF66",
      "#40C057",
      "#37B24D",
      "#2F9E44",
      "#2B8A3E",
    ],
    lime: [
      "#F4FCE3",
      "#E9FAC8",
      "#D8F5A2",
      "#C0EB75",
      "#A9E34B",
      "#94D82D",
      "#82C91E",
      "#74B816",
      "#66A80F",
      "#5C940D",
    ],
    yellow: [
      "#FFF9DB",
      "#FFF3BF",
      "#FFEC99",
      "#FFE066",
      "#FFD43B",
      "#FCC419",
      "#FAB005",
      "#F59F00",
      "#F08C00",
      "#E67700",
    ],
    orange: [
      "#FFF4E6",
      "#FFE8CC",
      "#FFD8A8",
      "#FFC078",
      "#FFA94D",
      "#FF922B",
      "#FD7E14",
      "#F76707",
      "#E8590C",
      "#D9480F",
    ],
  },
} as const;

export const globalStyles = StyleSheet.create({
  contentCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  mainContainer: {
    flex: 1,
    paddingTop: theme.spacing.none,
    paddingHorizontal: theme.spacing.lg, // changing this will also change the width for dash's screen wide views
    backgroundColor: colors.thinGray,
  },
  card: {
    borderRadius: theme.radius.md,
    marginVertical: theme.spacing.xs,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.md,
    rowGap: theme.spacing.sm,
    backgroundColor: colors.white,
    // borderWidth: 1,
  },
  relatedRecordCard: {
    width: SCREEN_WIDTH - theme.spacing.lg * 2,
    borderRadius: theme.radius.md,
    marginVertical: theme.spacing.xs,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.md,
    rowGap: theme.spacing.sm,
    backgroundColor: colors.white,
    // borderWidth: 1,
  },
  tblHeaderText: {
    color: colors.titleText,
    fontFamily: theme.font.bold,
    textAlignVertical: "top",
    fontSize: theme.fontSize.sm,
    // borderWidth: 1,
  },
  tblDescText: {
    color: colors.titleText,
    fontFamily: theme.font.medium,
    textAlignVertical: "top",
    fontSize: theme.fontSize.sm,
    // borderWidth: 1,
  },
  buttonLabelTextAddOn: {
    //tblDescText
    letterSpacing: 0.5,
  },
  headerText: {
    fontFamily: theme.font.heavy,
    textAlign: "center",
    flexWrap: "wrap",
    fontSize: theme.fontSize.xl,
    color: colors.titleText,
  },
  cardInfoTitleText: {
    fontFamily: theme.font.bold,
    fontSize: theme.fontSize.lg,
    color: colors.titleText,
    textAlign: "left",
    textAlignVertical: "top",
    // borderWidth: 1,
  },
  cardTitleText: {
    fontSize: theme.fontSize.lg,
    fontFamily: theme.font.medium,
    color: colors.titleText,
  },
  descText: {
    fontFamily: theme.font.medium,
    fontSize: theme.fontSize.md,
    color: colors.qtyTextGray,
  },
  descTextBold: {
    fontFamily: theme.font.bold,
    fontSize: theme.fontSize.md,
    color: colors.qtyTextGray,
  },
  descTextPrimaryBold: {
    fontFamily: theme.font.bold,
    fontSize: theme.fontSize.md,
    // textAlign: "center",
    textAlignVertical: "center",
    color: colors.primary,
  },
  formErrorText: {
    fontFamily: theme.font.medium,
    fontSize: theme.fontSize.sm,
    color: colors.error,
  },
  descTextPrimary: {
    fontFamily: theme.font.medium,
    fontSize: theme.fontSize.md,
    textAlign: "center",
    color: colors.primary,
  },
  fab: {
    position: "absolute",
    margin: theme.spacing.xl,
    right: theme.spacing.none,
    bottom: theme.spacing.none,
    elevation: 8,
    backgroundColor: colors.primary,
  },
  noImg: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // ...gStyles.contentCenter,
    alignSelf: "center",
    width: "100%",
    height: 160,
    overflow: "hidden",
    borderRadius: theme.radius.sm,
    marginVertical: theme.spacing.xs,
    borderStyle: "dashed",
    borderColor: colors.titleText,
    borderWidth: 1,
  },
  imgStyle: {
    flex: 1,
    alignSelf: "center",
    width: "100%",
    height: 160,
    overflow: "hidden",
    borderRadius: theme.radius.sm,
    marginVertical: theme.spacing.xs,
    // borderWidth: 1,
  },
  userTypeModalStyle: {
    //list screen filter modal style
    backgroundColor: colors.white,
    paddingHorizontal: theme.spacing.xl,
    paddingVertical: theme.spacing.xxxl,
    margin: theme.spacing.xxl,
    borderRadius: theme.radius.lg,
    // borderWidth: 1,
  },
  radioItemStyle: {
    borderRadius: theme.spacing.md,
    marginVertical: theme.spacing.sm,
    overflow: "hidden",
    borderColor: colors.borderColor,
    backgroundColor: colors.white,
    borderWidth: 1,
  },

  //_listcard badge related
  typeContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  //list card bottom button row
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export const lightTheme = {
  background: colors.background,
  text: colors.textPrimary,
  header: colors.primary,
  footer: colors.secondary,
  border: colors.border,
  cardBackground: colors.cardBackground,
  gradient: colors.gradient, // Subtle white-to-light-gray gradient
};

export const darkTheme = {
  background: "#333333",
  text: "#FFFFFF",
  header: colors.primary,
  footer: colors.secondary,
  border: "#555555",
  cardBackground: "#444444",
  gradient: ["#222222", "#444444"], // Deep gray-to-dark gradient
};

export const sepiaTheme = {
  background: "#F5DEB3",
  text: "#5B4636",
  header: colors.primary,
  footer: colors.secondary,
  border: "#D2B48C",
  cardBackground: "#FAEBD7",
  gradient: ["#FBE8C3", "#F5DEB3"], // Warm beige-to-sepia gradient
};

export const highContrastTheme = {
  background: "#000000",
  text: "#FFFFFF",
  header: "#FFD700",
  footer: "#FFD700",
  border: "#FFFFFF",
  cardBackground: "#1A1A1A",
  gradient: ["#000000", "#333333"], // Black-to-dark-gray gradient
};

export const accessibleTheme = {
  background: "#FDFDFD",
  text: "#1A1A1A",
  header: colors.primary,
  footer: colors.secondary,
  border: "#CCCCCC",
  cardBackground: "#FFFFFF",
  gradient: ["#FFFFFF", "#F4F4F4"], // Pure white-to-light-gray gradient
};

export const nightModeTheme = {
  background: "#1A1A2E",
  text: "#EAEAEA",
  header: "#162447",
  footer: "#1B1B2F",
  border: "#40407a",
  cardBackground: "#2A2A3F",
  gradient: ["#1A1A2E", "#2A2A3F"], // Deep blue-to-grayish-blue gradient
};

export const forestGreenTheme = {
  background: "#E8F5E9",
  text: "#2E7D32",
  header: "#1B5E20",
  footer: "#388E3C",
  border: "#A5D6A7",
  cardBackground: "#C8E6C9",
  gradient: ["#E8F5E9", "#C8E6C9"], // Soft green-to-light-green gradient
};

export const solarizedLightTheme = {
  background: "#FDF6E3",
  text: "#586E75",
  header: "#657B83",
  footer: "#839496",
  border: "#EEE8D5",
  cardBackground: "#FFFFF0",
  gradient: ["#FDF6E3", "#EEE8D5"], // Light beige-to-pale yellow gradient
};

export const monochromeTheme = {
  background: "#FAFAFA",
  text: "#4A4A4A",
  header: "#333333",
  footer: "#4A4A4A",
  border: "#DDDDDD",
  cardBackground: "#FFFFFF",
  gradient: ["#FAFAFA", "#EEEEEE"], // Soft gray-to-lighter-gray gradient
};

export const blueLightFilterTheme = {
  background: "#FFF8E1",
  text: "#3E2723",
  header: "#5D4037",
  footer: "#6D4C41",
  border: "#FFE0B2",
  cardBackground: "#FFECB3",
  gradient: ["#FFF8E1", "#FFE0B2"], // Warm yellow-to-light amber gradient
};

export const creamPaperTheme = {
  background: "#F5F5DC",
  text: "#5B4636",
  header: "#8B6B52",
  footer: "#A1887F",
  border: "#D7CCC8",
  cardBackground: "#FFF8DC",
  gradient: ["#FFF8DC", "#F5F5DC"], // Cream-to-light-cream gradient
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
  sepia: sepiaTheme,
  highContrast: highContrastTheme,
  nightMode: nightModeTheme,
  forestGreen: forestGreenTheme,
  solarizedLight: solarizedLightTheme,
  monochrome: monochromeTheme,
  blueLightFilter: blueLightFilterTheme,
  creamPaper: creamPaperTheme,
};

export const FontColors = {
  white: "#FFFFFF",
  lightGray: "#E0E0E0",
  gold: "#FFD700",
  lightPink: "#FFB6C1",
  skyBlue: "#87CEEB",
  darkBrown: "#5B4636",
  goldenBrown: "#8B5A2B",
  slateGray: "#2F4F4F",
  walnutBrown: "#4B3621",
  sepiaTone: "#704214",
  brightYellow: "#FFFF00",
  orangeRed: "#FF4500",
  cyan: "#00FFFF",
  limeGreen: "#32CD32",
  darkGray: "#1A1A1A",
  charcoalGray: "#333333",
  black: "#000000",
  midGray: "#4F4F4F",
  lightCharcoal: "#5B5B5B",
  offWhite: "#EAEAEA",
  lightBlue: "#ADD8E6",
  lightGreen: "#90EE90",
  forestGreen: "#2E7D32",
  tealGreen: "#004D40",
  deepGreen: "#1B5E20",
  darkSeaGreen: "#8FBC8F",
  oliveGreen: "#556B2F",
  softGrayBlue: "#586E75",
  lightBlueGray: "#839496",
  brightBlue: "#268BD2",
  magenta: "#D33682",
  goldenYellow: "#B58900",
  gray: "#808080",
  mediumBrown: "#5D4037",
  chocolateBrown: "#795548",
  amber: "#FF6F00",
  saddleBrown: "#8B4513",
  mahogany: "#3E2723",
  coffeeBrown: "#6F4E37",
};

const urduFontFamilies = {
  Nastaleeq_regular: "Noori-Nastaleeq-Regular",
};

const arabicFontFamilies = {
  Al_Majeed_Quranic: "Al-Majeed-Quranic-Regular",
  Al_Mushaf_Quran: "Al-Mushaf-Quran",
  Al_Qalam_Quran_Majeed_font: "Al-Qalam-Quran-Majeed",
  Al_Qalam_Quran: "Al-Qalam-Quran",
  Al_Mushaf: "Al-Mushaf",
  Arab_Quran_Islamic: "Arab-Quran-Islamic",
  Asif_Quranic: "Asif-Quranic",
  Jameel: "Jameel",
  PDMS_Saleem: "PDMS-Saleem",
  Uthman_Naskh_Regular: "Uthman-Naskh-Regular",
  Mehr_Nastaliq: "Mehr-Nastaliq",
  Muhammadi_Quranic: "Muhammadi-Quranic",
  Nabi: "Muhammadi_Quranic",
};

const englishFontFamilies = {
  Visby_thin: "Visby-Thin",
  Visby_Regular: "Visby-Regular",
};

export const fontSize = {
  extra_small: 10,
  small: 12,
  medium: 14,
  large: 18,
  extra_large: 24,
  double_extra_large: 32,
  display: 40,
  display2: 48,
  display3: 60,
};

export type UrduFontKey = keyof typeof urduFontFamilies;
type ArabicFontKey = keyof typeof arabicFontFamilies;
export type EnglishFontKey = keyof typeof englishFontFamilies;
export type customFontColors = keyof typeof FontColors;
export type customFontSizeKeys = keyof typeof fontSize;
export {
  urduFontFamilies,
  arabicFontFamilies,
  englishFontFamilies,
  ArabicFontKey,
};
export type Theme = typeof lightTheme;
