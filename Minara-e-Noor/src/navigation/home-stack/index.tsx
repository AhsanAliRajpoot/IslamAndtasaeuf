import React from "react";
import { colors, theme } from "@theme";
import {
  HomeMain,
  SettingsScreen,
  ChapterDetailsScreen,
  ReadingScreen,
} from "@screens";
import { HomeStackParamsList, HomeStackScreenProps } from "@navigation-types";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { ToastUtility } from "@utility";

const Stack = createStackNavigator<HomeStackParamsList>();

export const HomeStack = () => {
  const navigation =
    useNavigation<HomeStackScreenProps<"HomeMain">["navigation"]>();

  const openSettings = () => {
    navigation.navigate("SettingsScreen");
  };

  const underDevOnPress = () => {
    ToastUtility.show("Under development");
  };

  // const headerRight = () => {
  //   return (
  //     <Pressable onPress={openSettings}>
  //       <MaterialCommunityIcons name="cog" size={24} color={colors.black} />
  //     </Pressable>
  //   );
  // };

  const headerLeft = () => {
    return (
      <Pressable onPress={openSettings}>
        <Entypo name="menu" size={24} color={colors.black} />
      </Pressable>
    );
  };

  const options: StackNavigationOptions = {
    headerShown: false,
    headerTransparent: true, // if ture, then transparent
    headerTintColor: colors.black,
    headerTitleAlign: "center",
    headerStyle: {
      backgroundColor: "#FFEAB3", //#FFEAB3
      borderWidth: 0,
      shadowOpacity: 0,
    },
    //headerRight,
    headerLeft,
    headerLeftContainerStyle: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      paddingLeft: theme.spacing.xl,
      // borderWidth: 1,
    },
    headerRightContainerStyle: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
      paddingRight: theme.spacing.xl,
      // borderWidth: 1,
    },
  };
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen
        name="HomeMain"
        component={HomeMain}
        options={{
          title: "HOME",
        }}
      />

      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: "Settings",
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ChapterDetailsScreen"
        component={ChapterDetailsScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ReadingScreen"
        component={ReadingScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
