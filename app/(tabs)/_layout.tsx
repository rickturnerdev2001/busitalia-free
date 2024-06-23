import { Stack, Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import MainView from "./home";

export default function TabLayout() {
  return (
    <Stack screenOptions={{ header: () => null }}>
      <Stack.Screen name="home" />
      <Stack.Screen name="index" />
    </Stack>
  );
}
