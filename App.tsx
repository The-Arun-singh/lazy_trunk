import { config } from "@gluestack-ui/config";
import { GluestackUIProvider, StatusBar } from "@gluestack-ui/themed";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import DeckScreen from "./screens/DeckScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <StatusBar hidden showHideTransition={"fade"} barStyle={"default"} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="Deck" component={DeckScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
