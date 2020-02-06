import React from 'react';
import { View, Modal, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';
import { SocialIcon, Button } from 'react-native-elements'
import MyGradient from '../components/MyGradient'
import InfoButton from '../components/InfoButton'
import CloseModalButton from '../components/CloseModalButton'
import HelpInfo from '../components/HelpInfo'
import DefaultText from '../components/DefaultText';
import * as Google from "expo-google-app-auth";
import {login, guest, logout} from '../store/actions/userAuth'
import {loadQuestions} from '../store/actions/questions'
import { connect } from 'react-redux'
import ServerAdapter from '../services/ServerAdapter'
import Colors from '../constants/Colors'

import { IOS_CLIENT_ID } from '../config'
import { TouchableOpacity } from 'react-native-gesture-handler';

class LoginScreen extends React.Component {
  state = {
    modalVisible: false
  }


  setModalVisible= (visible)=> {
    this.setState({modalVisible: visible});
  }

  fetchLogin = (email, name) => {
    let prom = ServerAdapter.fetchUser({email: email, name: name})
    prom.then(data => this.handleUserData(data)).then(this.props.navigation.navigate("Dashboard"));
  }

  handleUserData = (data) => {
    if (data.questions.length > 0) {
      console.log('data questions', data.questions)
      this.props.loadQuestions(data.questions)
    }
    this.props.login(data.user.email, data.user.name, data.user.id)
  }
  componentDidMount () {
    this.props.logout()
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
         //after Google login redirect to Profile
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
    this.props.guest(null, null, null)
    this.props.navigation.navigate("Dashboard");
  }

  render() {
  
    return (
      <MyGradient>
     
        <View>
          <Image source={require('../assets/cat-logo.png')} style={{width:60, height: 60, marginBottom: 40}}/>
        </View>
        <View style={styles.titleContainer}>
          <View>
            <Text style={styles.text}> Decisions are tiring.</Text>
          </View>
          <View>
            <Text style={styles.text}> We can help.</Text>
          </View>
        </View>
    
          <View style={styles.buttonContainer}>
            <SocialIcon
                title='Login with Google'
                button
                style={{height: 50}}
                type='google'
                Component={TouchableOpacity}
                onPress={this.signInWithGoogle}
            />
          </View>

          <View style={styles.buttonContainer}>
            <Button 
              buttonStyle={styles.buttonGuest} 
              raised 
              title="Continue as Guest" 
              onPress={this.continueAsGuest} />
          </View>
          
          <InfoButton setModalVisible={this.setModalVisible}/>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <View style={styles.modal}>
              
                <HelpInfo/>

                <CloseModalButton setModalVisible={this.setModalVisible}/>
            
            </View>
          </Modal>
      </MyGradient>
    );
  }
}

LoginScreen.navigationOptions = navData => {
  return {
    header:null
  };
};
const mapDispatchToProps = dispatch => {
  return {
    guest: () => {dispatch(guest())},
    logout: () => {dispatch(logout())},
    login: (email, name, id) => dispatch(login(email, name, id)),
    loadQuestions: (questions) => dispatch(loadQuestions(questions))
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#D7F5EF",
  //   alignItems: "center",
  //   justifyContent: "center"
  // },
  modal: {
    marginHorizontal: 30,
    marginVertical: 100,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 100
  },
  buttonContainer: {
    width: '80%',
    height: 70,
    marginBottom: 10
  },
  buttonGuest: {
    paddingHorizontal: 20,
    height: 45,
    borderRadius:70,
 
  },
  text: {
    color: 'slategrey',
    fontFamily: 'open-sans-bold'
  }
});

export default connect(null, mapDispatchToProps)(LoginScreen)