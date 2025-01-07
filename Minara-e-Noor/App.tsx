/* eslint-disable react-native/no-inline-styles */
import "react-native-gesture-handler";
import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Platform, View } from "react-native";
import { RootSiblingParent } from "react-native-root-siblings";
import * as SplashScreen from "expo-splash-screen";
import { registerRootComponent } from "expo";
import { colors } from "@theme";
import { Provider } from "react-redux";
import { store } from "@store";
import { App } from "@";
import { useFonts } from "./src/hooks/useFonts/index"; // Import your custom hook

// Prevent splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function RootApp() {
  const [isAppReady, setIsAppReady] = React.useState(false);

  React.useEffect(() => {
    const prepare = async () => {
      try {
        // Use the custom hook to load fonts
        await useFonts();
      } catch (e) {
        console.warn("Error loading fonts: ", e);
      } finally {
        setIsAppReady(true); // Mark the app as ready
      }
    };

    prepare();
  }, []);

  const onLayoutRootView = React.useCallback(async () => {
    if (isAppReady) {
      await SplashScreen.hideAsync(); // Hide the splash screen once fonts are loaded
    }
  }, [isAppReady]);

  if (!isAppReady) {
    return null; // Don't render anything until fonts are fully loaded
  }

  return (
    <RootSiblingParent>
      <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
        <StatusBar
          backgroundColor={colors.primary}
          style={Platform.OS === "android" ? "light" : "dark"}
        />
        <Provider store={store}>
          <NavigationContainer theme={DefaultTheme}>
            <App />
          </NavigationContainer>
        </Provider>
      </View>
    </RootSiblingParent>
  );
}

registerRootComponent(RootApp);
