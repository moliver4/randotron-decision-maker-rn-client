import React from 'react';
import { View, Alert, Text, Button, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native';
import ChoiceForm from '../components/ChoiceForm'
import QuestionForm from '../components/QuestionForm'
import ChoiceCard from '../components/ChoiceCard'
import { connect } from 'react-redux'
import Calculator from '../services/Calculator'
import ServerAdapter from '../services/ServerAdapter'
import { addQuestion, loadCurrentQuestion, loadQuestions } from '../store/actions/questions'
// import { TouchableOpacity } from 'react-native-gesture-handler';

const INITIAL_STATE = {
        isEditing: false,
        newQuestion: {
            title: ''
        },
        choices: [],
        newChoice: {
            title: '',
            weight: null
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
                    weight: null
                },
                choices: [...prevState.choices, this.state.newChoice]
            }
        })
    }

    renderChoices = () => {
        if (this.state.choices.length < 1) {
            return
        }
        console.log(this.state.choices)
        return this.state.choices.map ((choice, index) => {
            return <ChoiceCard choice={choice} key={index} index={index} deleteChoice={this.deleteChoiceHandler} decision={this.state.decision}/>
        })
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
        if(this.state.newQuestion.title.length < 1) {
            Alert.alert('Oops!', 'Please at least enter *something* as your question.', [{text: 'Okay', style: 'destructive'}])
            return
        }
        if(this.state.choices.length < 2 ) {
            Alert.alert('Oops!', 'You need at least 2 choices to make a decision...', [{text: 'Okay', style: 'destructive'}])
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
        console.log('here is my answer', final)
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
        }, () => this.reloadQuestions())
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

    reloadQuestions = () => {
        if (this.props.isLoggedIn){
            let promise = ServerAdapter.getSignedInUser(this.props.user.id)
            promise.then(data => this.handleUserData(data))
        }
        else {
            console.log('user not logged in right now')
        }
    }

    handleUserData = (data) => {
        if (data.questions.length > 0) {
          this.props.loadQuestions(data.questions)
        }
        this.handleFinalNavigation()
      }

    //can be used regardless of if user is signed in or not
    handleFinalNavigation = () => {
        const body = {
            question: this.state.newQuestion,
            choices: this.state.choices,
            decision: this.state.decision
        }  
        console.log('BODY OF NOT LOGGED IN', body)
        this.props.loadCurrentQuestion(body)
        this.props.navigation.navigate('Decision', {
            clearForm: this.clearForm
        })
        
    }


    /////////////////////////////////////////////////////////


  render() {
    let { newChoice, newQuestion, isEditing } = this.state
    return (
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <QuestionForm newQuestion={newQuestion} handleNewQuestionChange={this.handleNewQuestionChange}/>
                
                <View style={styles.choiceContainer}>
                    {this.renderChoices()}
                </View>

                {!isEditing? <Button title='Add Choice' onPress={this.addChoice}/> : null}
                {isEditing ? <ChoiceForm 
                    newChoice={newChoice} 
                    titleChange={this.handleChoiceTitleChange} 
                    weightChange={this.handleChoiceWeightChange}
                    cancelAddChoice={this.cancelAddChoice}
                    submitAddChoice={this.submitAddChoice}
                /> : null
                }
                <View >
                    <Button title='Submit'onPress={() => this.handleSubmitforDecision(this.props)}/>
                </View>
                
                    
            </KeyboardAvoidingView>

        </TouchableWithoutFeedback>
    )
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "space-evenly"
      },
      choiceContainer: {
        width: '80%'
      },
      questionContainer: {
        width: '100%',
        alignItems: "center",
        marginBottom: 50,
      },

})

FormScreen.navigationOptions = navData => {
    return {
      headerTitle: 'New Question'
    };
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