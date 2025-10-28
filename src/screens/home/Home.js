import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  TouchableHighlight,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import * as ImagePicker from "expo-image-picker";
import Captions from "../Captions/Captions";
import { SafeAreaView } from "react-native-safe-area-context";
const width = Dimensions.get("window");

export default function Home({ navigation }) {
  const [selectedVibe, setSelectedVibe] = useState("Funny");
  const [image, setImage] = useState(null);

  const handleSelected = (value) => setSelectedVibe(value);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) setImage(result.assets[0].uri);
  };

  const vibeArray = [
    { id: 1, value: "Funny" },
    { id: 2, value: "Asthetic" },
    { id: 3, value: "Motivational" },
    { id: 4, value: "Casual" },
    { id: 5, value: "Poetic" },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#161022" }}>
      <ScrollView
        contentContainerStyle={{
          padding: 20,
          paddingBottom: 80,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingRight: 5,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "600",
              marginTop: 10,
            }}
          >
            Create The Perfect Caption
          </Text>
          <TouchableHighlight
            onPress={() => navigation.navigate("profile")}
            style={{
              marginTop: 10,
              backgroundColor: "#6c2bee",
              padding: 10,
              borderRadius: 20,
            }}
          >
            <FontAwesome6 name="user-large" size={15} color="white" />
          </TouchableHighlight>
        </View>

        {/* Upload */}
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.uploadButton}
            onPress={pickImage}
            activeOpacity={0.8}
          >
            <MaterialIcons name="add-photo-alternate" size={40} color="gray" />
            <Text style={styles.uploadText}>
              {image ? "Change Photo" : "Upload Your Photo"}
            </Text>
            <Text
              style={{ color: "#8e8d8dff", fontWeight: "500", marginTop: 10 }}
            >
              Choose a photo from your gallery
            </Text>
          </TouchableOpacity>

          {image && (
            <Image source={{ uri: image }} style={styles.previewImage} />
          )}
        </View>

        {/* Vibe Section */}
        <Text
          style={{
            color: "white",
            fontSize: 17,
            fontWeight: "600",
            marginTop: 20,
          }}
        >
          Choose your vibe
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginVertical: 10 }}
          contentContainerStyle={{
            flexDirection: "row",
            gap: 10,
            height: 35,
            marginTop: 5,
          }}
        >
          {vibeArray.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => handleSelected(item.value)}
              activeOpacity={0.8}
            >
              <View
                style={[
                  styles.vibeTextContainer,
                  selectedVibe === item.value && styles.selectedContainer,
                ]}
              >
                <Text
                  style={[
                    styles.vibeText,
                    selectedVibe === item.value && styles.selectedText,
                  ]}
                >
                  {item.value}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={{ width: "100%", marginTop: 10 }}>
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: "600",
              letterSpacing: 0.25,
            }}
          >
            Your Captions
          </Text>
          <Captions />
        </View>
      </ScrollView>

      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 40,
          left: 10,
          right: 10,
          borderRadius: 25,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#6c2bee",
          paddingVertical: 10,
          gap: 2,
        }}
      >
        <EvilIcons name="star" size={24} color="white" />
        <Text style={{ color: "white", textAlign: "center", fontSize: 15 }}>
          Generate
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  vibeTextContainer: {
    backgroundColor: "#505050ff",
    borderRadius: 25,
  },
  selectedContainer: {
    backgroundColor: "#6c2bee",
  },
  vibeText: {
    color: "#fff",
    fontSize: 13,
    paddingVertical: 8,
    paddingHorizontal: 20,
    fontWeight: "600",
  },
  container: {
    marginTop: 15,
    backgroundColor: "#3a3a3aff",
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 50,
  },
  uploadButton: {
    width: width - 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    paddingVertical: 10,
  },
  uploadText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  previewImage: {
    width: 150,
    height: 150,
    borderRadius: 80,
    // marginTop: 20,
    alignSelf: "center",
  },
});
