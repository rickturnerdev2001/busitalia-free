import React, { useEffect, useRef } from "react";
import { View, Image, StyleSheet, Animated, Easing } from "react-native";

export default function Waves() {
  const translateX1 = useRef(new Animated.Value(0)).current;
  const translateX2 = useRef(new Animated.Value(0)).current;
  const translateX3 = useRef(new Animated.Value(0)).current;
  const translateX4 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const createAnimation = (animatedValue, direction) => {
      return Animated.loop(
        Animated.timing(animatedValue, {
          toValue: direction === "left" ? -50 : 50,
          duration: 5000,
          easing: Easing.linear,
          useNativeDriver: true,
        })
      ).start();
    };

    createAnimation(translateX1, "left");
    createAnimation(translateX2, "right");
    createAnimation(translateX3, "left");
    createAnimation(translateX4, "right");
  }, [translateX1, translateX2, translateX3, translateX4]);

  return (
    <View style={styles.container}>
      <View style={{zIndex: 50}}>
        <Animated.Image
          source={require("@/assets/images/app per persone oneste/pallini-blu-chiaro-3.png")}
          style={[styles.image, { transform: [{ translateX: translateX1 }] }]}
        />
      </View>
      <View style={{ marginTop: -12, zIndex: 60 }}>
        <Animated.Image
          source={require("@/assets/images/app per persone oneste/pallini-blu-chiaro-2.png")}
          style={[
            styles.image,
            { transform: [{ translateX: translateX2 }], top: "-10%" },
          ]}
        />
      </View>

      <View style={{ marginTop: -12, zIndex: 70}}>
        <Animated.Image
          source={require("@/assets/images/app per persone oneste/pallini-blu-chiaro.png")}
          style={[styles.image, { transform: [{ translateX: translateX3 }] }]}
        />
      </View>

      <View style={{ marginTop: -12, zIndex: 80}}>
        <Animated.Image
          source={require("@/assets/images/app per persone oneste/pallini-bianchi.png")}
          style={[styles.image, { transform: [{ translateX: translateX4 }] }]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    overflow: "hidden",
    marginTop: 20,

    height: 86,
    width: "100%",
  },
  image: {
    height: 20,
    width: "100%", // This ensures the image goes off-screen and creates the scrolling effect
  },
});
