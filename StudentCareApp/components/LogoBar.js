import { Image, StyleSheet, View } from "react-native";

export default function LogoBar(){
    return(
        <View>
            <Image source={require('../assets/uovlogo.png')} />
        </View>
    );
}

const styles = StyleSheet.create ({
    logo : {
        width : "100%",
        height : 100,
        resizeMode : 'contain',
        marginTop : 10,
    },
})