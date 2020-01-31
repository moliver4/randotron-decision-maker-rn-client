import React from 'react';
import { View, Text, Button, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import ChoiceForm from '../components/ChoiceForm'
import ChoiceCard from '../components/ChoiceCard'
import { connect } from 'react-redux'
import Calculator from '../services/Calculator'
import ServerAdapter from '../services/ServerAdapter'

const INITIAL_STATE = {
        isEditing: false,
        newQuestion: {
            title: ''
        },
        choices: [],
        newChoice: {
            title: '',
            reason: '',
            weight: null
        },
        decision: {}

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

   handleChoiceReasonChange = (text) => {
    this.setState(prevState => {
         return {
             ...prevState,
             newChoice: {
                 ...prevState.newChoice,
                 reason: text
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
        this.setState(INITIAL_STATE)
    }

    submitAddChoice = () => {
        if (this.state.newChoice.title.length < 1) {
            return
        }
        this.setState(prevState => {
            return {
                ...prevState,
                isEditing: false,
                newChoice: {
                    title: '',
                    reason: '',
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
            return <ChoiceCard choice={choice} key={index} index={index} deleteChoice={this.deleteChoiceHandler}/>
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

      // if user is logged in, should POST question to user, then POST choices to the question. When choices come back, calculate answer, POST answer, update state, update STORE with new decision object? 
      //if user is not logged in, calculate answer, update state

      //navigate to decision page when ready
      handleSubmitforDecision = (props) => {
        if (props.user.id !== null) {
            console.log(props.user.id)
        } else {
            console.log('user is not logged in')
        }
        // const user = props.user
        // const userId=props.user.id
        // let answer = Calculator.getDecision(this.state.choices)
        // this.setState(prevState => {
        //     return {
        //         ...prevState,
        //         decision: answer
        //     }
        // })
        // console.log('Submitting')
    }

    /////////////////////////////////////////////////////////


  render() {
    let { newChoice, newQuestion, isEditing } = this.state
    return (
     
        <View style={styles.container}>
            <View style={{height:50}} >
                <Text htmlFor='decision'>What's the Question?</Text>
                <TextInput 
                    style={styles.input} 
                    value={newQuestion.title} 
                    onChangeText={text=> this.handleNewQuestionChange(text)} 
                    placeholder="Your Question Here"
                    placeholderTextColor='grey'
                />
            </View>
            {this.renderChoices()}

            <Button title='Add Choice' onPress={this.addChoice}/>
            {isEditing ? <ChoiceForm 
                newChoice={newChoice} 
                titleChange={this.handleChoiceTitleChange} 
                reasonChange={this.handleChoiceReasonChange} 
                weightChange={this.handleChoiceWeightChange}
                cancelAddChoice={this.cancelAddChoice}
                submitAddChoice={this.submitAddChoice}
            /> : null
            }
            <View >
                <Button title='Submit'onPress={() => this.handleSubmitforDecision(this.props)}/>
                <Button title='To Decision Navigate' onPress={() => this.props.navigation.navigate('Decision')}/>
            </View>
            
                  
        </View>


    )
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
      },
    input: {
        flex: 1,
        backgroundColor: '#ececec',
        paddingLeft: 5
    }
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
  


export default connect(mapStatetoProps)(FormScreen);