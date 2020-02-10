import React, { useState, useEffect } from 'react';
import { View, Text, Animated, FlatList, Dimensions, Button, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import Colors from '../constants/Colors'
import MiniChoiceCard from '../components/MiniChoiceCard'
import DecisionCard from '../components/DecisionCard'
import QuestionCard from '../components/QuestionCard'
import Calculator from '../services/Calculator'
import ServerAdapter from '../services/ServerAdapter'
import { connect } from 'react-redux'
import { addQuestion, loadCurrentQuestion, loadQuestions, editQuestion, deleteQuestion } from '../store/actions/questions'


const DecisionScreen= ({ navigation, user, isLoggedIn, currentQuestion, loadCurrentQuestion, editQuestion, loadQuestions, deleteQuestion } ) => {
  const [springValue] = useState(new Animated.Value(0.3))
  React.useEffect(() => {
    spring();
  }, [])
  
  const spring = () => {
    springValue.setValue(0.3)
    Animated.spring(
      springValue,
      {
        toValue: 1,
        friction: 1
      }
    ).start()
  }


  console.log('current question object on Decision screen', currentQuestion)
    const isOld = navigation.getParam('oldDecision', false)
    //if it is old, then load the current question in store with the question object given to us 

      const question = currentQuestion.question
      const choices = currentQuestion.choices
      const decision = currentQuestion.decision
      const decisionID = decision.id
      const decisionChoice= decision.choice
      const clearForm = navigation.getParam('clearForm', 'nothing')

    const renderChoices = () => {
        if (choices.length < 3) {
            return (
                <View style={styles.choiceContainer}>
                    {showChoices()}
                </View>
            )
        }
     
        return  (
            <FlatList
                data={choices}
                keyExtractor={(item, index) => `choice-${index}`}
                renderItem={showListChoices}
                style={styles.choiceContainer}
            />
  
        )
        
    }
    


    const showChoices = () => {
      return choices.map ((choice, index) => {
          return <MiniChoiceCard choice={choice} key={index} index={index} />
      })
    }
    const showListChoices = (itemData) => {     
        return <MiniChoiceCard choice={itemData.item} index={itemData.index}/>
    }
  




    const reRun = () => {
      console.log('running again!')
      let final = Calculator.getDecision(choices)
      if (isLoggedIn) {
        let body = {
            question_id: question.id,
            choice_id: final.id
        }
        let prom = ServerAdapter.editDecision(decisionID, body)
        prom.then(dec => updateDecision(dec))
      } else {
        //if user is not logged in, skip server step, just update with new object with choice key
        //update to 'current question' in store
        let newDec = {
          choice: final
        }
        updateDecision(newDec)
      }
  }

    const updateDecision = (dec) => {
      const body = {
        question: question,
        choices: choices,
        decision: dec
      }
      loadCurrentQuestion(body)
      getUpdate(body)
      spring()
    }

    //If a user is logged in, will send GET request for new user questions list and repopulate list of questions
    const getUpdate = (body) => {
      if (isLoggedIn) {
        editQuestion(body)
      } 
    }

    //TO DELETE LATER no longer need this function because not makign a server call. just updating state with current function. But then when user logs in next time, will be persisted.
    const handleUserData = (data) => {
      loadQuestions(data.questions)
    }


    const deleteQuestionHandler = () => {
      console.log('deleting this question', question.id)
      let prom = ServerAdapter.deleteQuestion(question.id)
      prom.then(data => handleDelete(data))
    }

    const handleDelete = (question) => {
      deleteQuestion(question)
      navigateBack()
    }

    const navigateBack=(data) => {
      //whenever we navigate to form, we want to get update
      // console.log('question deleted, going back to form')
      // getUpdate()
      if (!isOld) {
        clearForm()
      }
      navigation.goBack()
    }

    return (
      <LinearGradient
            colors={[Colors.accent, Colors.extra]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.container}>
   
          <QuestionCard question= {question}/>
          <Animated.View style={{ width: '80%', alignItems: "center", justifyContent: 'center', flexShrink: 1, padding: 10, borderRadius: 15, height: 50, backgroundColor: Colors.accent, transform: [{scale: springValue}] }} >
            <DecisionCard choice={decisionChoice} />
          </Animated.View>
         
            {renderChoices()}
   
          
          <View style={styles.buttonContainer}> 
            <Button title='ReRun' onPress={reRun}/>
            {isLoggedIn? <Button title="Delete This Question" onPress={deleteQuestionHandler}/> : null }
            {isOld? null : <Button title="New Question" onPress={navigateBack}/>}
          </View>
      </LinearGradient>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  choiceContainer: {
    maxHeight: '30%',
    width: Dimensions.get('window').width * 0.9,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "space-evenly"
  }
});

DecisionScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Decision'
  };
};

const mapDispatchtoProps = dispatch => {
  return {
      loadQuestions: (questions) => dispatch(loadQuestions(questions)), 
      addQuestion: (question) => dispatch(addQuestion(question)),
      editQuestion: (question) => dispatch(editQuestion(question)),
      deleteQuestion: (question) => dispatch(deleteQuestion(question)),
      loadCurrentQuestion: (question) => dispatch(loadCurrentQuestion(question))
    }
}

const mapStatetoProps = state => {
  return {
    isLoggedIn: state.isLoggedIn,
    user: state.user,
    currentQuestion: state.currentQuestion
  }
}


export default connect(mapStatetoProps, mapDispatchtoProps)(DecisionScreen)