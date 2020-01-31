import React from 'react';
import { View, Text, Button, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import ChoiceForm from '../components/ChoiceForm'
import ChoiceCard from '../components/ChoiceCard'

const INITAL_STATE = {
        isEditing: false,
        newQuestion: {
            title: ''
        },
        newChoice: {
            title: '',
            reason: '',
            weight: null
        }

    }

class FormScreen extends React.Component {
    state = {
        isEditing: false,
        newQuestion: {
            title: ''
        },
        newChoice: {
            title: '',
            reason: '',
            weight: null
        }

    }
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
        this.setState(INITAL_STATE)
    }

    submitChoice = () => {
        console.log('submitting Choice, will add to Store')
    }

    // renderChoices = (choices) => {
    //     return choices.map ((choice, index) => {
    //         return <ChoiceCard choice={choice} key={index} index={index}/>
    //     })
    // }

    handleSubmit = () => {
        console.log('Submitting')
    }

    // deleteChoiceHandler = (obj) => {
    //     this.setState((prevState) => {
    //       return ({
    //         options: prevState.choices.filter(function(item) {
    //           return item !== obj
    //       })
          
    //       })
    //     })
    //   }


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
        
            <View><Text>Choices will go here</Text></View>

            <Button title='Add Choice' onPress={this.addChoice}/>
            {isEditing ? <ChoiceForm 
                newChoice={newChoice} 
                titleChange={this.handleChoiceTitleChange} 
                reasonChange={this.handleChoiceReasonChange} 
                weightChange={this.handleChoiceWeightChange}
            /> : null
            }
            <View >
                <TouchableOpacity onPress={this.handleSubmit} title='SUBMIT FOR LATER'><Button title='Submit'/></TouchableOpacity>
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
  
export default FormScreen;