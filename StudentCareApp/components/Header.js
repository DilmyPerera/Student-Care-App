import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Image source={require('../assets/uovlogo.png')} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginBottom: 16,
  },
  logo: {
    width: 200,
    height: 80,
    resizeMode: 'contain',
  },
});