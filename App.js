import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Profile from "./screens/Profile";
import ProfileCarousel from "./screens/ProfileCarousel";
import ScanInput from "./screens/ScanInput";
import ScanOutput from "./screens/ScanOutput";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ProfileCarousel" component={ProfileCarousel} />
        <Stack.Screen name="ScanInput" component={ScanInput} />
        <Stack.Screen name="ScanOutput" component={ScanOutput} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}