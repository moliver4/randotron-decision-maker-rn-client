import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Google from "expo-google-app-auth";
// import { GoogleSignIn } from 'expo-google-sign-in';

import { IOS_CLIENT_ID } from '../config'

export default class LoginScreen extends React.Component {
  signInWithGoogle = async () => {
    try {
      const result = await Google.logInAsync({
        iosClientId: IOS_CLIENT_ID,
        scopes: ["profile", "email"]
      });

      if (result.type === "success") {
        console.log("LoginScreen.js.js 21 | ", result);
        this.props.navigation.navigate("Dashboard", {
          name: result.user.givenName,
          email: result.user.email
        }); //after Google login redirect to Profile
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      console.log('LoginScreen.js.js 30 | Error with login', e);
      return { error: true };
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Login with Google" onPress={this.signInWithGoogle} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});