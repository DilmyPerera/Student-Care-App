import { ScrollView, StyleSheet, View } from "react-native";
import { courses } from '../db/StudentsDb';
import { Divider, Text } from "react-native-paper";
import Header from "./Header";
import LogoBar from "./LogoBar";
import BottomNavBar from "./BottomNavBar";

export default function CoursePage( {route,navigation}){
    const { student } = route.params;
    const course = courses.find((c) => c.id === student.course_id);
    return(
        <ScrollView contentContainerStyle ={styles.scrollView}>
            <View style = {styles.container}>
                <Header/>
                <LogoBar/>
                <Text variant="titleLarge" style = {styles.title}> {course.name} </Text>
                <Text variant="bodyMedium" style = {styles.info}> Code : {course.course_code} |  Dept : {course.department}</Text>
                <Divider/>

                <Text variant="bodyMedium" style = {styles.subtitle}> Course Information </Text>

                <Text variant="bodyMedium" style = {styles.info}> Code : {course.course_code} </Text>
                <Text variant="bodyMedium" style = {styles.info}> Department : {course.department} </Text>
                <Text variant="bodyMedium" style = {styles.info}> Description : {course.description} </Text>

                <Divider/>

                <BottomNavBar navigation={navigation} route={route}/>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flexGrow: 1, 
    },
    container : {
        flex : 1 ,
        padding : 16,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
    },
    title : {
        fontWeight : 'bold',
        marginBottom : 16,
        textAlign : 'center',
    },
    subtitle : {
        fontWeight: 'bold',
        marginBottom: 16,
    },
    info : {
        marginBottom : 8,
    },
});