// import { NavigationContainer } from '@react-navigation/native';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// // import { createStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import {MaterialIcons} from 'react-native-vector-icons';
// import LoginPage from './components/LoginPage'

// import ProfilePage from './components/ProfilePage';
// import CoursePage from './components/CoursePage';
// import SubjectPage from './components/SubjectPage';

// const Tab = createBottomTabNavigator();

// export default function App() {

//   return (
//     <SafeAreaProvider>
//       <NavigationContainer>
//         <Tab.Navigator
//       screenOptions={({ route }) => ({
//           tabBarIcon: ({ color, size }) => {
//             let iconName;

//             if (route.name === 'Profile') {
//               iconName = 'person';
//             } else if (route.name === 'Course') {
//               iconName = 'school';
//             } else if (route.name === 'Subjects') {
//               iconName = 'book';
//             }

//             return <MaterialIcons name={iconName} size={size} color={color} />;
//           },
//         })}
//         tabBarOptions={{
//           activeTintColor: '#4b0082',
//           inactiveTintColor: 'gray',
//         }}
//       >
//         <Tab.Screen name="Profile" component={ProfilePage} />
//         <Tab.Screen name="Course" component={CoursePage} />
//         <Tab.Screen name="Subjects" component={SubjectPage} />
//       </Tab.Navigator>
    
//       </NavigationContainer>
//     </SafeAreaProvider>
//   );
// }

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/native-stack';  
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from 'react-native-vector-icons';

import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage';
import CoursePage from './components/CoursePage';
import SubjectPage from './components/SubjectPage';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Main" component={MainTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

