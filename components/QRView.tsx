import { View, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import QRCode from "react-native-qrcode-svg";

export const QRCodeComponent: React.FC<{ data: string }> = ({ data }) => {
  return (
    <View style={styles.qrContainer}>
      <QRCode value={data} size={130} />
    </View>
  );
};

const styles = StyleSheet.create({
  qrContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
