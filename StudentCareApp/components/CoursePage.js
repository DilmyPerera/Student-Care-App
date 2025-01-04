import { ScrollView, StyleSheet, View } from "react-native";
import { courses } from '../db/StudentsDb';
import { Divider, Text } from "react-native-paper";
export default function CoursePage( {route}){
    const { student } = route.params;
    const course = courses.find((c) => c.id === student.course_id);
    return(
        <ScrollView contentContainerStyle ={styles.scrollView}>
            <View style = {styles.container}>
                <Text variant="titleLarge" style = {styles.title}> {course.name} </Text>
                <Text variant="bodyMedium" style = {styles.info}> Code : {course.course_code} |  Dept : {course.department}</Text>
                <Divider/>

                <Text variant="bodyMedium" style = {styles.subtitle}> Course Information </Text>

                <Text variant="bodyMedium" style = {styles.info}> Code : {course.course_code} </Text>
                <Text variant="bodyMedium" style = {styles.info}> Department : {course.department} </Text>
                <Text variant="bodyMedium" style = {styles.info}> Description : {course.description} </Text>

                <Divider/>

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