import Ionicons from "@expo/vector-icons/Ionicons";
import { PropsWithChildren, useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  Text,
  View,
} from "react-native";

import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";

export function Collapsible({
  children,
  title,
}: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ThemedView>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.heading}
          onPress={() => setIsOpen((value) => !value)}
          activeOpacity={0.8}
        >
          <Text style={{ fontWeight: "900", color: "#CE0032", fontSize: 18 }}>
            {title}
          </Text>
          <Ionicons
            name={isOpen ? "chevron-down" : "chevron-up-outline"}
            size={24}
            color={"#CE0032"}
          />
        </TouchableOpacity>

        {isOpen && <ThemedView style={styles.content}>{children}</ThemedView>}
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    paddingVertical: 16,

    borderRadius: 16,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  heading: {
    flexDirection: "row",
    paddingHorizontal: 24,
    justifyContent: "space-between",
    alignItems: "center",
    gap: 6,
  },
  content: {
    marginTop: 6,
  },
});
