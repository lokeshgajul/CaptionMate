import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";

const { width } = Dimensions.get("window");

export default function Signup({ navigation }) {
  return (
    <View style={styles.screen}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Create Your Account</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text
          style={{
            color: "white",
            fontWeight: "500",
            paddingBottom: 2,
          }}
        >
          Name
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your full name"
          placeholderTextColor="#888"
        />
        <Text
          style={{
            color: "white",
            fontWeight: "500",
            paddingTop: 15,
            paddingBottom: 2,
          }}
        >
          Email
        </Text>
        <TextInput
          style={styles.input}
          placeholder="example@gmail.com"
          placeholderTextColor="#888"
        />
        <Text
          style={{
            color: "white",
            fontWeight: "500",
            paddingTop: 15,
            paddingBottom: 2,
          }}
        >
          Password
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#888"
          secureTextEntry
        />
        <Text
          style={{
            color: "white",
            fontWeight: "500",
            paddingTop: 15,
            paddingBottom: 2,
          }}
        >
          Confirm Password
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#888"
          secureTextEntry
        />
      </View>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.replace("splash")}
      >
        <Text style={styles.loginText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.dividerContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.line} />
      </View>

      <TouchableOpacity
        style={[
          styles.loginButton,
          { backgroundColor: "#fff", paddingVertical: 10 },
        ]}
        onPress={() => navigation.replace("splash")}
      >
        <Text style={{ fontWeight: "800", letterSpacing: 0.1, fontSize: 15 }}>
          Continue With Google
        </Text>
      </TouchableOpacity>

      <View
        style={{
          position: "absolute",
          bottom: 60,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Text style={{ color: "#888" }}>Already have an account? </Text>
        <Text
          onPress={() => navigation.replace("signin")}
          style={{ color: "white", fontWeight: "500" }}
        >
          Login
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#161022",
    // justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 40,
  },

  headingContainer: {
    width: width * 0.9,
    marginTop: 40,
  },
  heading: {
    fontSize: 32,
    fontWeight: "500",
    color: "#fff",
  },
  inputContainer: {
    width: width * 0.9,
    marginTop: 40,
  },
  input: {
    backgroundColor: "#23173bff",
    color: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 15,
    fontSize: 16,
    marginTop: 5,
  },
  forgotContainer: {
    alignItems: "flex-end",
    marginTop: 12,
    width: width * 0.9,
    marginBottom: 5,
  },
  forgotText: {
    color: "#888",
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: "#6c2bee",
    paddingVertical: 10,
    borderRadius: 30,
    width: width * 0.9,
    alignItems: "center",
    marginTop: 25,
  },
  loginText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "500",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: width * 0.9,
    marginTop: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#444",
  },
  orText: {
    color: "#888",
    marginHorizontal: 10,
    fontSize: 14,
    fontWeight: "500",
  },
});
