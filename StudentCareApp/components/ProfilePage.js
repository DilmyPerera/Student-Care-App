import { StyleSheet, View } from "react-native";
import { Divider, Text } from "react-native-paper";
import { students } from '../db/StudentsDb'
import Header from "./Header";
export default function ProfilePage (){
    const student = students[0];
    return(
        <View style= {styles.container}>
            <Header/>
            <Text variant="bodyLarge" style = {styles.title}> {student.name}</Text>
            <Text variant="bodyMedium" style = {styles.info}> Age : {student.age} | Gender : {student.gender}</Text>
            {/* <Text variant="bodyMedium" style = {styles.info> Gender : {student.gender}</Text> */}
            <Divider/>

            <Text variant="bodyMedium" style = {styles.subtitle}> Contact Information </Text>

            <Text variant="bodyMedium" style = {styles.info}> Email : {student.email}</Text>
            <Text variant="bodyMedium" style = {styles.info}> Phone : {student.phone}</Text>
            <Text variant="bodyMedium" style = {styles.info}> Address : {student.address}</Text>

            <Divider/>

            <Text variant="bodyMedium" style = {styles.subtitle}> BiologicalInformation </Text>

            <Text variant="bodyMedium" style = {styles.info}> Gender : {student.gender}</Text>
            <Text variant="bodyMedium" style = {styles.info}> Age : {student.age}</Text>
            <Text variant="bodyMedium" style = {styles.info}> Blood Group : {student.blood_group}</Text>


        </View>
       
    );
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        padding : 16,
    },
    title : {
        fontWeight: 'bold',
        textAlign : 'center',
        marginBottom: 16,
    },
    subtitle : {
        fontWeight: 'bold',
        textAlign : 'auto',
        marginBottom: 16,
    },
    info : {
        fontSize: 18,
        marginBottom: 8,
    },

});