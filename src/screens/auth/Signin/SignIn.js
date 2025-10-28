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

export default function SignIn({ navigation }) {
  return (
    <View style={styles.screen}>
      <View style={styles.titleContainer}>
        <Feather name="edit" size={24} color="white" />
        <Text style={styles.title}>CaptionMate</Text>
      </View>

      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Login to Your Account</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
        />
      </View>
      <TouchableOpacity
        style={styles.forgotContainer}
        onPress={() => console.log("Forgot Password pressed")}
      >
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.replace("home")}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.dividerContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.line} />
      </View>

      <TouchableOpacity
        style={[
          styles.loginButton,
          { backgroundColor: "#fff", paddingVertical: 12 },
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
        <Text style={{ color: "#888" }}>Don't have an account </Text>
        <Text
          style={{ color: "white", fontWeight: "500" }}
          onPress={() => navigation.replace("signup")}
        >
          Sign up
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
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    marginTop: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    color: "#fff",
    marginTop: 5,
  },
  headingContainer: {
    width: width * 0.9,
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
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 30,
    fontSize: 16,
    marginTop: 20,
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
    marginTop: 20,
  },
  loginText: {
    color: "#fff",
    fontSize: 18,
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
