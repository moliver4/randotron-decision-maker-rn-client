import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Google from "expo-google-app-auth";
import {login} from '../store/actions/userAuth'
import {loadQuestions} from '../store/actions/questions'
import { connect } from 'react-redux'
import ServerAdapter from '../services/ServerAdapter'
// import { GoogleSignIn } from 'expo-google-sign-in';

import { IOS_CLIENT_ID } from '../config'

class LoginScreen extends React.Component {

  fetchLogin = (email, name) => {
    let prom = ServerAdapter.fetchUser({email: email, name: name})
    prom.then(data => this.handleUserData(data))
  }

  handleUserData = (data) => {
    if (data.questions.length > 0) {
      console.log('data questions', data.questions)
      this.props.loadQuestions(data.questions)
    }
    this.props.login(data.user.email, data.user.name, data.user.id)
  }
 

  signInWithGoogle = async () => {
    try {
      const result = await Google.logInAsync({
        iosClientId: IOS_CLIENT_ID,
        scopes: ["profile", "email"]
      });

      if (result.type === "success") {
        console.log("LoginScreen.js.js 21 | ", result);
        this.fetchLogin(result.user.email, result.user.givenName)
        this.props.navigation.navigate("Dashboard"); //after Google login redirect to Profile
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      console.log('LoginScreen.js.js 30 | Error with login', e);
      return { error: true };
    }
  };

  continueAsGuest = () => {
    this.props.login(null, null, null)
    this.props.navigation.navigate("Dashboard");
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Login with Google" onPress={this.signInWithGoogle} />

        <Button title="Continue as Guest" onPress={this.continueAsGuest} />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (email, name, id) => dispatch(login(email, name, id)),
    loadQuestions: (questions) => dispatch(loadQuestions(questions))
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

export default connect(null, mapDispatchToProps)(LoginScreen)