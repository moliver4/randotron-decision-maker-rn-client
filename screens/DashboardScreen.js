import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import QuestionList from '../components/QuestionList';
import { connect } from 'react-redux'
import {loadQuestions} from '../store/actions/questions'
import ServerAdapter from '../services/ServerAdapter'

class DashboardScreen extends React.Component {

    render () {
        return (
            <View style={styles.container}>
                <Text>
                    {this.props.isLoggedIn ? `Hello ${ this.props.user.name }` : 'hello'}
                </Text>
                <QuestionList questions={this.props.questions} navigation={this.props.navigation}/>
          
            </View>
        )
    }
    
}

DashboardScreen.navigationOptions = navData => {
    return {
      headerTitle: 'Your Decisions', 
      headerLeft: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName="ios-menu"
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
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
    loadQuestions: (questions) => dispatch(loadQuestions(questions))
  }
}
  
  export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen)