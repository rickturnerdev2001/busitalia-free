import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";
import React, { Fragment } from "react";
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

interface MyStatusBarProps extends StatusBarProps {
  backgroundColor: string;
}

const MyStatusBar: React.FC<MyStatusBarProps> = ({
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

const MainView = () => {
  return (
    <Fragment>
      <MyStatusBar backgroundColor="#D0142C" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Navbar />
          <View
            style={{
              backgroundColor: "#50C79D",
              padding: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 20, fontWeight: "800" }}>
              TICKET ACTIVE
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#F8F8F8",
              height: "100%",
              display: "flex",
              paddingVertical: 12,
              paddingHorizontal: 24,
            }}
          >
            <Collapsible title="Check and validation">
              <View
                style={{
                  backgroundColor: "#fff",
                  paddingTop: 12,
                  display: "flex",
                  gap: 12,
                }}
              >
                <QRCodeComponent data="https://mccr.it/vt?t=52204313&v=0009" />
                <Text
                  style={{
                    textAlign: "center",
                    color: "#000",
                    fontSize: 24,
                    fontWeight: "800",
                  }}
                >
                  522043134
                </Text>
                <View
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <Feather name="zoom-in" size={24} color="black" />
                  <Text style={{ fontWeight: "400", fontSize: 18 }}>Zoom</Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    width: "100%",
                    paddingHorizontal: 10,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <View
                    style={{ display: "flex", flexDirection: "column", gap: 4 }}
                  >
                    <CurrentTime />
                  </View>
                  {/* 199... */}
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 4,
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={require("@/assets/images/app per persone oneste/password-image.png")}
                      style={{ alignSelf: "center", width: 40, height: 40 }}
                    />

                    <Text style={{ fontSize: 20 }}>119</Text>
                  </View>
                </View>
              </View>
            </Collapsible>

            <Waves />
          </View>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  safeArea: {
    flex: 1,
    backgroundColor: "#CC0033",
  },
  container: {
    flex: 1,
    backgroundColor: "#50C79D",
  },
  navbar: {
    height: 70,
    backgroundColor: "#CC0033",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    paddingHorizontal: 2,
  },
  iconContainer: {
    padding: 10,
  },
  navText: {
    fontSize: 18,
    marginRight: 20,
    fontWeight: "800",
    color: "white",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "#000",
  },
});

export default MainView;
