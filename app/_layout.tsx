import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";
import React, { Fragment, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Platform,
  SafeAreaView,
  Image,
} from "react-native";
import { StatusBarProps } from "expo-status-bar";
import Navbar from "@/components/Navbar";
import Waves from "@/components/Waves";
import { Collapsible } from "@/components/Collapsible";
import { QRCodeComponent } from "@/components/QRView";
import CurrentTime from "@/components/CurrentTime";
import { SplashScreen, Stack } from "expo-router";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { useFonts } from "expo-font/build/FontHooks";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack screenOptions={{ header: () => null }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
