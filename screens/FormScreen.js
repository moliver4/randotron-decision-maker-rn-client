import React, {useEffect} from 'react';
import { View, Alert, Text, ScrollView, Keyboard, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView, KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view'
import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign } from '@expo/vector-icons';
import ChoiceForm from '../components/ChoiceForm'
import LogoutButton from '../components/LogoutButton'

import QuestionForm from '../components/QuestionForm'
import Colors from '../constants/Colors'
import ChoiceCard from '../components/ChoiceCard'

import { connect } from 'react-redux'
import Calculator from '../services/Calculator'
import ServerAdapter from '../services/ServerAdapter'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { addQuestion, loadCurrentQuestion, loadQuestions } from '../store/actions/questions'

const INITIAL_STATE = {
        isEditing: false,
        newQuestion: {
            title: ''
        },
        choices: [],
        newChoice: {
            title: '',
            weight: 1
        },
        decision: null
    }

class FormScreen extends React.Component {
    state = INITIAL_STATE

    handleNewQuestionChange=(text) => {
        this.setState(prevState => {
             return {
                 ...prevState,
                 newQuestion: {
                     title: text
                 }
             }
        })
    }

   handleChoiceTitleChange = (text) => {
       this.setState(prevState => {
            return {
                ...prevState,
                newChoice: {
                    ...prevState.newChoice,
                    title: text
                }
            }
       })
   }
    handleChoiceWeightChange = (text) => {
       let num = parseInt(text)
        if (num) {
            this.setState(prevState => {
                return {
                    ...prevState,
                    newChoice: {
                        ...prevState.newChoice,
                        weight: num 
                    }
                }
            })
        }
    }

    addChoice = () => {
        this.setState(prevState => {
            return {
                ...prevState,
                isEditing: true
            }
        })
    }

    cancelAddChoice = () => {
        this.setState(prevState => {
            return {
                ...prevState,
                isEditing: false,
                newChoice: {
                    title: '',
                    weight: null
                }
            }
        })
    }

    submitAddChoice = () => {
        if (this.state.newChoice.title.length < 1) {
            Alert.alert('Invalid Choice!', 'You should probably write something here...', [{text: 'Okay', style: 'destructive'}])
            return
        }
        this.setState(prevState => {
            return {
                ...prevState,
                isEditing: false,
                newChoice: {
                    title: '',
                    weight: 1
                },
                choices: [...prevState.choices, this.state.newChoice]
            }
        })
    }
    showChoices = () => {
        return this.state.choices.map ((choice, index) => {
            return <ChoiceCard choice={choice} key={index} index={index} deleteChoice={this.deleteChoiceHandler} decision={this.state.decision}/>
        })
    }
    showListChoices = (itemData) => {     
        return <ChoiceCard choice={itemData.item} index={itemData.index} deleteChoice={this.deleteChoiceHandler} decision={this.state.decision}/>
    }
    renderChoices = () => {
        if (this.state.choices.length < 1) {
            return
        }
        if (this.state.choices.length < 3) {
            return (
                <View style={styles.choiceContainer}>
                    {this.showChoices()}
                </View>
            )
        }
     
        return  (
            <KeyboardAwareFlatList
                data={this.state.choices}
                keyExtractor={(item, index) => `choice-${index}`}
                renderItem={this.showListChoices}
                style={styles.choiceContainer}
            />
 
        )
        
    }

    

    deleteChoiceHandler = (obj) => {
        this.setState((prevState) => {
          return ({
            choices: prevState.choices.filter(function(item) {
              return item !== obj
            }) 
          })
        })
      }


      handleSubmitforDecision = (props) => {

        if(this.state.choices.length < 2 ) {
            Alert.alert('Oops!', 'We need at least 2 choices to make a decision...', [{text: 'Okay', style: 'destructive'}])
            return
        }
        if (props.user.id !== null) {
            const body = {
                title: this.state.newQuestion.title,
                user_id: props.user.id,
                choices: this.state.choices   
            }
            let promise = ServerAdapter.newQuestion(body)
            promise.then(data => this.findUserAnswer(data))
        } else {
            this.findGuestAnswer()
        }
    }

    clearForm =() => {
        this.setState(INITIAL_STATE)
    }

    findUserAnswer=(data) => {
        let final = Calculator.getDecision(data.choices)
        let body = {
            question_id: data.question.id,
            choice_id: final.id
        }
        let prom = ServerAdapter.newDecision(body)
        prom.then(dec => this.setState(prevState => {
            let decision = {
                id: dec.id,
                choice: final
            }
            return {
                ...prevState,
                newQuestion: data.question,
                choices: data.choices,
                decision: decision
            }
        }, () => this.handleFinalNavigation())
     )
    }

    findGuestAnswer = () => {
        let final = Calculator.getDecision(this.state.choices)
        let decision = {
            id: null,
            choice: final
        }
        this.setState(prevState => {
            return {
                ...prevState,
                decision: decision
            }
        }, () => this.handleFinalNavigation())
    }

    handleFinalNavigation = () => {
        const body = {
            question: this.state.newQuestion,
            choices: this.state.choices,
            decision: this.state.decision
        }  
        if (this.props.isLoggedIn) {
            this.props.addQuestion(body)
        }
        this.props.loadCurrentQuestion(body)
        this.clearForm()
        this.props.navigation.navigate('Decision', {
            clearForm: this.clearForm
        })
        
    }

  render() {
    let { newChoice, newQuestion, isEditing } = this.state
    return (
        
         <LinearGradient
              colors={[Colors.accent, Colors.extra]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={{flex:1}}> 
            <KeyboardAwareScrollView contentContainerStyle={styles.container} extraScrollHeight={150}>
                
                    <QuestionForm newQuestion={newQuestion} handleNewQuestionChange={this.handleNewQuestionChange}/>
               
                    {this.renderChoices()}
            
                {isEditing ? <ChoiceForm 
                    newChoice={newChoice} 
                    titleChange={this.handleChoiceTitleChange} 
                    weightChange={this.handleChoiceWeightChange}
                    cancelAddChoice={this.cancelAddChoice}
                    submitAddChoice={this.submitAddChoice}
                /> : null
                }
                <View style={{justifyConteint: 'center', alignItems: 'center'}}>
                    {!isEditing? 
                    <TouchableOpacity style={styles.button} onPress={this.addChoice}> 
                            <Text style={styles.buttonText}>+  Add Choice</Text>
                    </TouchableOpacity> : null}
                    <TouchableOpacity style={styles.button} onPress={() => this.handleSubmitforDecision(this.props)}> 
                            <Text style={{...styles.buttonText, color: Colors.additional}}>Submit</Text>
                    </TouchableOpacity>
                </View>
           
                    
            </KeyboardAwareScrollView>
        </LinearGradient>

    )
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: "center",
        paddingVertical: 50,
        justifyContent: 'space-evenly'
      },
      choiceContainer: {
        width: '100%',
        maxHeight: '60%'
      },
      questionContainer: {
        marginTop: 50, 
        width: '100%',
        alignItems: "center"
      },
      button: {
        backgroundColor: 'white',
        paddingVertical: 7,
        paddingHorizontal: 30,
        borderRadius: 25,   
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        shadowOpacity: 0.26,
        elevation: 5,
        marginVertical: Dimensions.get('window').height * 0.01
      },
      buttonText: {
        color: Colors.extra,
        fontFamily: 'open-sans',
        fontSize: 18
      }

})

FormScreen.navigationOptions = navData => {
    return {
      headerTitle: 'New Question',
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
      )};
  };

  const mapStatetoProps = state => {
      return {
        isLoggedIn: state.isLoggedIn,
        user: state.user
    }
  }

  const mapDispatchtoProps = dispatch => {
    return {
        loadQuestions: (questions) => dispatch(loadQuestions(questions)), 
        addQuestion: (question) => dispatch(addQuestion(question)),
        loadCurrentQuestion: (question) => dispatch(loadCurrentQuestion(question))
      }
  }
  


export default connect(mapStatetoProps, mapDispatchtoProps)(FormScreen);