import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { connect } from 'react-redux'
import {loadQuestions} from '../store/actions/questions'
import ServerAdapter from '../services/ServerAdapter'

class DashboardScreen extends React.Component {

    // componentDidMount = () => {
    //   console.log('mounting component!!!')
    //   let prom = ServerAdapter.fetchUser({email: this.props.user.email})
    //   prom.then(data => this.props.loadQuestions(data.questions))
    // }

    showQuestions = questions=> {
      return questions.map ((question, index) => {
        return <Text key={index}>{question.question.title}</Text>
      })
    }

    render () {
        return (
            <View style={styles.container} >
                <Text>
                    {this.props.isLoggedIn ? this.props.user.name : 'hello'}
                    Dashboard SCREEN
                </Text>
                <View>
                  {this.showQuestions(this.props.questions)}
                </View>
                <Button title="should move me forward from Dash to Decision Screen" onPress={() => this.props.navigation.navigate('Decision')}/>
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
    },
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