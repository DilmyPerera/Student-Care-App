import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './components/LoginPage'

export default function App() {
  const Stack = createStackNavigator();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
      <Stack.Navigator intialRouteName='Login'
      screenOptions={{
        headerStyle :{ backgroundColor : '#e2bee2' },
      }}
      >
      <Stack.Screen  name="Login" component = {LoginPage} options={{title: "Login"}}/>
      </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

