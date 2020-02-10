import React from 'react';
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet } from 'react-native'
import Colors from '../constants/Colors';

const MyGradient = (props) => {
    return (
        <LinearGradient
            colors={['white', Colors.accent, Colors.extra]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}>
            {props.children}
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    }
  });

export default MyGradient;
