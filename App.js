import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppContext from 'context/AppContext';
import AuthNavigator from 'navigators/AuthNavigator';
import HomeNavigator from 'navigators/HomeNavigator';

const Stack = createNativeStackNavigator()

export default function App() {



  return (
    <AppContext>

      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="AuthNavigator" component={AuthNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="HomeNavigator" component={HomeNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>

    </AppContext>
  );
}

