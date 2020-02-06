import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MyGradient from '../components/MyGradient'
import Colors from '../constants/Colors'
import QuestionList from '../components/QuestionList';
import { connect } from 'react-redux'
import {loadQuestions, logout} from '../store/actions/questions'



const DashboardScreen = props => {
  
        return (
            <View style={styles.container}>
                {props.isLoggedIn? 
                <Text style={styles.text}>
                    Hey { props.user.name }!
                </Text>
                :
                <View style={styles.greeting}> 
                  <Text style={styles.text}>
                    Welcome Guest! 
                  </Text>
                  <Text style={styles.text}>Since You Aren't Logged In, </Text> 
                  <Text style={styles.text}> Your Answers Won't Be Saved :( </Text>
                </View>
                }
                {props.isLoggedIn? <QuestionList questions={props.questions} navigation={props.navigation}/> : null}
          
            </View>
        )
}
    


DashboardScreen.navigationOptions = props => {
 
      return {
        headerTitle: 'Your Decisions', 
        headerRight: (
          <Ionicons name="ios-log-out" size={20} color={Colors.primary} style={{paddingRight: 10}} onPress={() => {
                props.navigation.navigate('Auth');
              }}
            />
        )
      };
  
    
  };

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,
      marginBottom: 50
    },
    greeting: {
      alignItems: 'center',
      justifyContent: 'center',
    }
    ,
    text: {
      fontFamily: 'open-sans-bold',
      color: Colors.primary
    }
  });
  
const mapStateToProps = state => {
    return { 
        user: state.user,
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