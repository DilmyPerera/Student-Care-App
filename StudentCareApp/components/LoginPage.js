import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { ScrollView, View , StyleSheet } from 'react-native';
import { Button, PaperProvider, Text } from 'react-native-paper';
import { students } from '../db/StudentsDb';
import Header from './Header';

export default function LoginPage(){
    const [username,setUsername] = useState('');
    const [ password, setPassword] = useState('');
    const [ error, setError] = useState();

    const navigation = useNavigation();

    const handleLogin = () =>{
        const user = students.find(
            (student) => student.username === username && student.password === password
        );

        if (user) {
            navigation.replace('Profile', { student: user});
        } else {
            Alert.alert('Error', 'Username or Password is incorrect');
        }
    };

    return(
        <PaperProvider>
            <ScrollView>
                <Header/>
                <View>
                    <View>
                        <Text variant="headlineLarge">STUDENT LOGIN</Text>
                    </View>
                    <View>
                        <TextInput label="Username" value={username} onChangeText={setUsername} />
                    </View>
                    <View>
                        <TextInput label="Password" value={password} onChangeText={setPassword} secureTextEntry/>
                    </View>
                    <View>
                        <Button mode="contained" onPress={handleLogin}>
                            Login
                        </Button>
                    </View>
                 </View>
            </ScrollView>
        </PaperProvider>
        
    );
}

const styles = StyleSheet.create({
    container : {
        flex :1 ,
        justifyContent : 'center',
        alignItems : 'center',
        padding : 16,
    },

    title :{
        fontSize : 24,
        fontWeight : 'bold',
        marginBottom : 24,
    },
    input : {
        width : "40%",
        height: 40 ,
        padding : 8,
    },
})