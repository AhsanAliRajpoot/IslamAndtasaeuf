import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type { NavigatorScreenParams, Route } from "@react-navigation/native";
import type { StackScreenProps } from "@react-navigation/stack";

//--------------------------------------
export type HomeStackParamsList = {
  HomeMain: undefined;
  SettingsScreen: undefined;
  ChapterDetailsScreen: { id: string | number; bookId: number };
  ReadingScreen: { id: string | number; bookId: number };
};

export type TasawuffStackParamsList = {
  TasawufMain: undefined; // The main screen for Tasawuf
  ChapterDetailsScreen: { id: string | number }; // Add ChapterDetailsScreen here
  ReadingScreen: { id: string | number };
  params: { id: string | number };
};

export type HomeStackScreenProps<T extends keyof HomeStackParamsList> =
  StackScreenProps<HomeStackParamsList, T>;

//--------------------------------------
export type RootTabsParamsList = {
  QuranStack: undefined;
  HadithStack: undefined;
  HomeStack: NavigatorScreenParams<HomeStackParamsList>;
  TafseerStack: undefined;
  TasawuffStack: NavigatorScreenParams<TasawuffStackParamsList>;
  ChapterDetailsScreen: { id: string | number };
  ChapterScreen: { id: string | number };
  // ProfileSettingsStack: NavigatorScreenParams<SettingsStackParamsList>;
};
export type RootsTabsScreenProps<T extends keyof RootTabsParamsList> =
  BottomTabScreenProps<RootTabsParamsList, T>;
//--------------------------------------
