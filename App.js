import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Aries from './screens/Aries';
import MainScreen from './screens/MainScreen';
import Gemini from './screens/Gemini';
import Taurus from './screens/Taurus';
import Cancer from './screens/Cancer';
import Leo from './screens/Leo';
import Virgo from './screens/Virgo';
import Libre from './screens/Libre';
import Scorpio from './screens/Scorpio';
import Sagittarius from './screens/Sagittarius';
import Capricorn from './screens/Capricorn';
import Aquarius from './screens/Aquarius';
import Pisces from './screens/Pisces';
import NewMoon from './screens/NewMoon';
import FullMoon from './screens/FullMoon';
import SolarEclipse from './screens/SolarEclipse';



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
        <Stack.Screen options={{ headerShown: false }} name="Libre" component={Libre} />
        <Stack.Screen options={{ headerShown: false }} name="Scorpio" component={Scorpio} />
        <Stack.Screen options={{ headerShown: false }} name="Sagittarius" component={Sagittarius} />
        <Stack.Screen options={{ headerShown: false }} name="Capricorn" component={Capricorn} />
        <Stack.Screen options={{ headerShown: false }} name="Aquarius" component={Aquarius} />
        <Stack.Screen options={{ headerShown: false }} name="Pisces" component={Pisces} />
        <Stack.Screen options={{ headerShown: false }} name="NewMoon" component={NewMoon} />
        <Stack.Screen options={{ headerShown: false }} name="FullMoon" component={FullMoon} />
        <Stack.Screen options={{ headerShown: false }} name="SolarEclipse" component={SolarEclipse} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

