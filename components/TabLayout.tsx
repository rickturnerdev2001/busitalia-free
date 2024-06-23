import React, { Fragment } from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StatusBarProps,
  StyleSheet,
  View,
} from "react-native";

interface CustomStatusBarProps extends StatusBarProps {
  backgroundColor: string;
}

const CustomStatusBar: React.FC<CustomStatusBarProps> = ({
  backgroundColor,
  ...props
}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <SafeAreaView>
      <StatusBar
        barStyle={"light-content"}
        translucent
        backgroundColor={backgroundColor}
        {...props}
      />
    </SafeAreaView>
  </View>
);

interface TabLayoutProps {
  children: JSX.Element;
}

export default function TabLayout({ children }: TabLayoutProps) {
  return (
    <Fragment>
      <CustomStatusBar backgroundColor="#D0142C" />
      <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>
    </Fragment>
  );
}

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  safeArea: {
    flex: 1,
    backgroundColor: "#CC0033",
  },
});
