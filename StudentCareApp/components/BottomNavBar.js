import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

export default function BottomNavBar({ navigation , route }){

    const { user } = route.params;
    const handleProfile = () => {
        navigation.navigate("Profile" , { user } );
    }

    const handleCourse = () => {
        navigation.navigate(  "Course" , { user });
    }

    const handleSubject = () => {
        navigation.navigate( "Subject" , { user });
    }

    return(
        <View>
            <Button icon="person" mode="contained" onPress={handleProfile}>Profile</Button>
            <Button icon="school" mode="contained" onPress={handleCourse}>Course</Button>
            <Button icon="book" mode="contained" onPress={handleSubject}>Subjects</Button>
        </View>
    );
}


const styles = StyleSheet.create ({
    container : {
        display : flex,
        flexDirection : "row",
        justifyContent : 'center',
        alignItems : 'center',
    },
    bottombar : {
        width : 120,
        height :50,
        backgroundColor :rgb(41, 1, 48),
        margin : 7,
        display : 'flex',
    },
})

// function MainTabs() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ color, size }) => {
//           let iconName;

//           if (route.name === 'Profile') {
//             iconName = 'person';
//           } else if (route.name === 'Course') {
//             iconName = 'school';
//           } else if (route.name === 'Subjects') {
//             iconName = 'book';
//           }

//           return <MaterialIcons name={iconName} size={size} color={color} />;
//         },
      
     
//         tabBarActiveTintColor: '#4b0082',
//         tabBarInactiveTintColor: 'gray',
      
//         tabBarStyle: {
//           paddingBottom: 5,  
//           height: 60,       
//         },
//     })}
//     >
//       <Tab.Screen name="Profile" component={ProfilePage} />
//       <Tab.Screen name="Course" component={CoursePage} />
//       <Tab.Screen name="Subjects" component={SubjectPage} />
//     </Tab.Navigator>
//   );
// }
