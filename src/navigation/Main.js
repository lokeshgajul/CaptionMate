import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import SignIn from "../screens/auth/Signin/SignIn";
import Signup from "../screens/auth/Signup/Signup";
import Splash from "../screens/Splash/Splash";
import Home from "../screens/home/Home";
import Profile from "../screens/Profile/Profile";

export default function Main() {
  const Stack = createNativeStackNavigator();

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#161022",
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        initialRouteName="splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="signin" component={SignIn} />
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
