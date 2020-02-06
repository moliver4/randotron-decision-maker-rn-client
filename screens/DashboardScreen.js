import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// import { HeaderButtons, Item } from 'react-navigation-header-buttons';
// import HeaderButton from '../components/HeaderButton';
import QuestionList from '../components/QuestionList';
import { connect } from 'react-redux'
import {loadQuestions, logout} from '../store/actions/questions'



const DashboardScreen = props => {
  
        return (
            <View style={styles.container}>
                <Text >
                    {props.isLoggedIn ? `Hello ${ props.user.name }` : 'Hello'}
                </Text>
                <QuestionList questions={props.questions} navigation={props.navigation}/>
          
            </View>
        )
}
    


DashboardScreen.navigationOptions = props => {
 
      return {
        headerTitle: 'Your Decisions', 
        headerRight: (
          <Ionicons name="ios-log-out" size={30} style={{paddingRight: 10}} onPress={() => {
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