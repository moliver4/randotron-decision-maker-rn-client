import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
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
            <View style={styles.container}>
                <Text>One moment...</Text>
                <ActivityIndicator size='large'/>
            </View>
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
  });
  