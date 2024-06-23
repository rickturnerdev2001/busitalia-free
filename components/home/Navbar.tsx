import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Navbar() {
  return (
    <View style={styles.navbar}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          source={require("@/assets/images/Busitalia_logo_196x63.jpg")}
          style={{ alignSelf: "center", width: 200 }}
        />
      </View>

      <View>
        <Text style={styles.navText}>my tickets</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.iconContainer}>
          <SimpleLineIcons name="user" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#CC0033",
  },
  container: {
    flex: 1,
    backgroundColor: "#50C79D",
  },
  navbar: {
    height: 55,
    backgroundColor: "#fff",
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
