import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
  FontAwesome5,
} from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { RootState } from "@store";
import { colors } from "@theme";
import { QuranMain, HadithMain, TafseerMain } from "@screens";
import { HomeStack } from "../home-stack";
import { TasawuffStack } from "../tasawuf-stack";
import { ViewStyle } from "react-native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import type { RootTabsParamsList } from "@navigation-types";

const Tab = createBottomTabNavigator<RootTabsParamsList>();

interface OwnProps {}

const MainTabs: React.FC<OwnProps> = ({}) => {
  const appThemes = useSelector((state: RootState) => state.theme.theme);

  const getTabBarVisibility = (route: any) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "TasawufMain";

    // Hide tab bar on specific screens
    if (routeName === "ChapterDetailsScreen" || routeName === "ReadingScreen") {
      return "none";
    }
    return "flex";
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabelStyle: styles.labelStyle,
        tabBarInactiveTintColor: colors.titleText,
        tabBarActiveTintColor: colors.primary,
        tabBarShowLabel: true,
        unmountOnBlur: true,
        tabBarStyle: {
          display: getTabBarVisibility(route),
        },
      })}
      initialRouteName="HomeStack"
    >
      {/* TODO - see if need to convert to stack. */}

      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="home"
              color={focused ? colors.primary : colors.titleText}
              size={focused ? 24 : 16}
            />
          ),
        }}
      />

      <Tab.Screen
        name="QuranStack"
        component={QuranMain}
        options={{
          title: "Quran",
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="book-open"
              color={focused ? colors.primary : colors.titleText}
              size={focused ? 24 : 16}
            />
          ),
        }}
      />
      <Tab.Screen
        name="HadithStack"
        component={HadithMain}
        options={{
          title: "Hadith",
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="book"
              color={focused ? colors.primary : colors.titleText}
              size={focused ? 24 : 16}
            />
          ),
        }}
      />

      <Tab.Screen
        name="TasawuffStack"
        component={TasawuffStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="book"
              color={focused ? colors.primary : colors.titleText}
              size={focused ? 24 : 16}
            />
          ),
        }}
      />

      <Tab.Screen
        name="TafseerStack"
        component={TafseerMain}
        options={{
          title: "More",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="dots-horizontal"
              color={focused ? colors.primary : colors.titleText}
              size={focused ? 24 : 16}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export { MainTabs as RootTabs };

const styles = StyleSheet.create({
  labelStyle: {
    fontFamily: "Visby-Bold",
    fontSize: 12,
    color: colors.titleText,
  },
});
