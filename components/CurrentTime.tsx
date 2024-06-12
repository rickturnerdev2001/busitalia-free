import AntDesign from "@expo/vector-icons/AntDesign";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const CurrentTime: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    };

    updateCurrentTime();
    const intervalId = setInterval(updateCurrentTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={styles.timeContainer}>
        <AntDesign name="clockcircleo" size={20} color="black" />

        <Text style={styles.timeText}>{currentTime}</Text>
      </View>
      <View
        style={{
          position: "relative",
          marginTop: -10,
          marginLeft: 20,
          width: "65%",
        }}
      >
        <View
          style={{
            marginTop: -4,
            width: "100%",
            position: "relative",
            borderRadius: 20,
            borderColor: "#E95052",
            borderWidth: 1,
            backgroundColor: "#fff",
            zIndex: 2,
            padding: 6,
          }}
        ></View>

        <View
          style={{
            position: "absolute",
            zIndex: 3,
            width: "94%",
            borderRadius: 20,

            right: "3%",
            top: "-18%",
            height: "90%",
            backgroundColor: "#e95052",
          }}
        ></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timeContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  timeText: {
    fontSize: 20,
    color: "#000",
  },
});

export default CurrentTime;
