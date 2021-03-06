import React from 'react';
import { View, Text, StyleSheet, Button, Alert, ActivityIndicator, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors'
import QuestionList from '../components/QuestionList';
import { connect } from 'react-redux'
import { LinearGradient } from 'expo-linear-gradient'
import {loadQuestions, logout} from '../store/actions/questions'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import LogoutButton from '../components/LogoutButton';



const DashboardScreen = props => {
        if (!props.loaded) {
          return  ( 
            <LinearGradient
            colors={[Colors.accent, Colors.extra]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.container}>
              <ActivityIndicator size="large" color={Colors.additional} />
            </LinearGradient>
          )
        }
        return (
            <LinearGradient
              colors={[Colors.accent, Colors.extra]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={styles.container}> 

                  {props.isLoggedIn? 
                  <Text style={styles.hello}>
                      Hey { props.user.name }!
                  </Text>
                  :
                  <View style={styles.greeting}> 

                    <Text style={styles.text}>Since You Aren't Logged In, </Text> 
                    <Text style={styles.text}> Your Answers Won't Be Saved :( </Text>
                  </View>
                  }
                  {props.questions.length > 0 ? <QuestionList questions={props.questions} navigation={props.navigation}/> : null}
                
          
            </LinearGradient>
        )
}
    


DashboardScreen.navigationOptions = navData => {
      return {
        headerTitle: 'Your Decisions', 
        headerRight: (
        <HeaderButtons HeaderButtonComponent={LogoutButton}>
          <Item
            title="logout"
            accessibilityLabel='back to login screen'
            iconName="logout"
            onPress={() => {
              Alert.alert(
                'Are You Sure You Want To Go Back To The Login Screen?',
                'If you are not signed in, you will loose your question.',
                [
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {text: 'Yes', onPress: () => navData.navigation.navigate('Auth')},
                ],
              )
            }}
          />
      </HeaderButtons>
        )
      };
  
    
  };

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',

    },
    greeting: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    hello: {
      fontFamily: 'open-sans-bold',
      color: Colors.extra
    },
    text: {
      fontFamily: 'open-sans-bold',
      color: Colors.primary
    },

  });
  
const mapStateToProps = state => {
    return { 
        user: state.user,
        loaded: state.loaded,
        isLoggedIn: state.isLoggedIn,
        questions: state.questions
    }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    loadQuestions: (questions) => dispatch(loadQuestions(questions))
  }
}
  
  export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen)