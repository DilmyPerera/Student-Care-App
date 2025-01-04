import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialIcons} from 'react-native-vector-icons';
import LoginPage from './components/LoginPage'

import ProfilePage from './components/ProfilePage';
import CoursePage from './components/CoursePage';
import SubjectPage from './components/SubjectPage';

const Tab = createBottomTabNavigator();

export default function App() {

  const Stack = createStackNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
      screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Profile') {
              iconName = 'person';
            } else if (route.name === 'Course') {
              iconName = 'school';
            } else if (route.name === 'Subjects') {
              iconName = 'book';
            }

            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#4b0082',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Profile" component={ProfilePage} />
        <Tab.Screen name="Course" component={CoursePage} />
        <Tab.Screen name="Subjects" component={SubjectPage} />
      </Tab.Navigator>
    
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

