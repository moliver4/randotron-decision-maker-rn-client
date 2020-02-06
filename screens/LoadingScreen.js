import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import Colors from '../constants/Colors';
import firebase from 'firebase';


export default class LoadingScreen extends React.Component {

    componentDidMount = () => {
        this.checkIfLoggedIn();
    }
    
    checkIfLoggedIn = () => {
        firebase.auth().onAuthStateChanged(user => {
            if(user)
            {
                this.props.navigation.navigate ('Dashboard')
            } else {
                this.props.navigation.navigate('Auth')
            }
        })
    }


    render () {
        return (
            <LinearGradient
            colors={[Colors.accent, Colors.extra]}
            start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
            style={styles.container}>
                <Text style={styles.text}>One moment...</Text>
                <ActivityIndicator size='large'/>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#D7F5EF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        
        color: 'black',
        fontSize: 24
    }
  });
  