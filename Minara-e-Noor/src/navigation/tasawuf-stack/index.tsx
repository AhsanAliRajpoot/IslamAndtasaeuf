import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TasawuffMain, ChapterDetailsScreen, ReadingScreen } from "@screens";
import { TasawuffStackParamsList } from "@navigation-types";

const Stack = createStackNavigator<TasawuffStackParamsList>();

export const TasawuffStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TasawufMain"
        component={TasawuffMain}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ChapterDetailsScreen"
        component={ChapterDetailsScreen}
        options={{
          title: "Chapter Details",
        }}
      />

      <Stack.Screen
        name="ReadingScreen"
        component={ReadingScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
