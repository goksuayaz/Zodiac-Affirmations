import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Aries from './screens/Aries';
import MainScreen from './screens/MainScreen';
import Gemini from './screens/Gemini';
import Taurus from './screens/Taurus';
import Cancer from './screens/Cancer';
import Leo from './screens/Leo';
import Virgo from './screens/Virgo';
import ZodiacSecrets from './screens/ZodiacSecrets';
import ZodiacMatches from './screens/ZodiacMatches';
import PlanetMysteries from './screens/PlanetMysteries';

const Stack = createStackNavigator();

export default function App() {



  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen options={{ headerShown: false }} name="MainScreen" component={MainScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Aries" component={Aries} />
        <Stack.Screen options={{ headerShown: false }} name="Taurus" component={Taurus} />
        <Stack.Screen options={{ headerShown: false }} name="Gemini" component={Gemini} />
        <Stack.Screen options={{ headerShown: false }} name="Cancer" component={Cancer} />
        <Stack.Screen options={{ headerShown: false }} name="Leo" component={Leo} />
        <Stack.Screen options={{ headerShown: false }} name="Virgo" component={Virgo} />
        <Stack.Screen options={{ headerShown: false }} name="ZodiacSecrets" component={ZodiacSecrets} />
        <Stack.Screen options={{ headerShown: false }} name="ZodiacMatches" component={ZodiacMatches} />
        <Stack.Screen options={{ headerShown: false }} name="PlanetMysteries" component={PlanetMysteries} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

