import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import { PaperProvider , Text} from 'react-native-paper';

export default function Header() {
  return (
    <PaperProvider>
      <ScrollView>
        <View style={styles.header}>
        <Text style={styles.headertext}>UOV Student Care</Text> 
      {/* <Image source={require('../assets/uovlogo.png')} style={styles.logo} /> */}
    </View>
      </ScrollView>
    
    </PaperProvider>
    
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginBottom: 16,
  },
  headertext : {
    backgroundColor:"#8b008b",
        alignItems:"center", 
        width:"100%",
        height:50,
  },
  logo: {
    width: 200,
    height: 80,
    resizeMode: 'contain',
  },
});