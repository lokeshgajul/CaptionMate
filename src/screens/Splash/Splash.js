import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default function Splash({ navigation }) {
  return (
    <View style={styles.screen}>
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <View style={styles.iconContainer}>
            <MaterialIcons name="edit-note" size={60} color="#6c2bee" />
          </View>
          <Text style={styles.text}>CaptionMate</Text>
          <Text style={styles.subText}>Never run out of captions again</Text>
        </View>

        <View style={styles.infoContainer}>
          <View style={[styles.iconContainer, { padding: 20 }]}>
            <MaterialIcons name="edit-note" size={60} color="#6c2bee" />
          </View>

          <Text style={styles.heading}>Instant Caption Magic</Text>
          <Text style={styles.description}>
            Briefly explains how the app generates captions based on user
            inputs.
          </Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("signin")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 40,
    backgroundColor: "#161022",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    transform: [{ translateY: -40 }],
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  infoContainer: {
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: "#23173bff",
    padding: 20,
    borderRadius: 50,
    marginBottom: 10,
  },
  text: {
    fontSize: 22,
    fontWeight: "500",
    color: "#fff",
  },
  subText: {
    fontSize: 16,
    color: "#666",
  },
  heading: {
    fontSize: 18,
    fontWeight: "400",
    marginBottom: 8,
    letterSpacing: 0.2,
    color: "#fff",
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    color: "#777",
    paddingHorizontal: 20,
  },
  buttonContainer: {
    width: width - 50,
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#6c2bee",
    paddingVertical: 14,
    borderRadius: 30,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
