import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Splash from "./src/screens/Splash/Splash";
import Main from "./src/navigation/Main";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="inverted" />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161022",
  },
});
