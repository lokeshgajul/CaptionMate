import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Switch,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function Profile({ navigation }) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={26} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
      </View>

      {/* Profile Info */}
      <View style={styles.profileSection}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
          }}
          style={styles.avatar}
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>john.doe@example.com</Text>
      </View>

      {/* Settings */}
      <View style={styles.settingsContainer}>
        {/* Dark Mode */}
        <View style={[styles.settingRow, { paddingVertical: 2 }]}>
          <View style={styles.iconLabel}>
            <Ionicons name="moon" size={22} color="#ccc" />
            <Text style={styles.settingText}>Dark Mode</Text>
          </View>
          <Switch
            trackColor={{ false: "#767577", true: "#6c2bee" }}
            thumbColor={isDarkMode ? "#fff" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setIsDarkMode(!isDarkMode)}
            value={isDarkMode}
          />
        </View>

        {/* Log Out */}
        <TouchableOpacity style={styles.settingRow}>
          <View style={styles.iconLabel}>
            <Ionicons name="log-out-outline" size={22} color="#ccc" />
            <Text style={styles.settingText}>Log Out</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#888" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#120e21",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  editText: {
    color: "#9c6efc",
    fontWeight: "600",
  },
  profileSection: {
    alignItems: "center",
    marginTop: 40,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 15,
  },
  name: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },
  email: {
    color: "#b5b5b5",
    fontSize: 14,
    marginTop: 3,
  },
  settingsContainer: {
    marginTop: 40,
    gap: 15,
  },
  settingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1d1731",
    borderRadius: 15,
    padding: 15,
  },
  iconLabel: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  settingText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});
