import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function Captions() {
  return (
    <View style={{}}>
      {[1, 2, 3, 4].map((id, item) => {
        return (
          <View
            key={id}
            style={{
              backgroundColor: "#3a3a3aff",
              borderRadius: 10,
              paddingVertical: 15,
              paddingHorizontal: 10,
              marginTop: 15,
              // marginBottom: 5,
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "500",
                letterSpacing: 0.1,
                lineHeight: 18,
              }}
            >
              Embark on a journey of a thousand miles, one step at a time.
            </Text>
            <Text
              style={{
                color: "#dadadaff",
                fontWeight: "600",
                letterSpacing: 0.2,
                marginTop: 5,
              }}
            >
              #travel #adventure #wanderlust
            </Text>
            <View
              style={{ height: 1, backgroundColor: "#666", marginVertical: 10 }}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                gap: 30,
              }}
            >
              <TouchableOpacity
                style={{
                  paddingTop: 2,
                  flexDirection: "row",
                  gap: 5,
                  alignItems: "center",
                }}
              >
                <FontAwesome6 name="copy" size={20} color="white" />
                <Text style={{ color: "white" }}>Copy</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  paddingTop: 2,
                  flexDirection: "row",
                  gap: 5,
                  alignItems: "center",
                }}
              >
                <FontAwesome5 name="bookmark" size={20} color="white" />
                <Text style={{ color: "white" }}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </View>
  );
}
