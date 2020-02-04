import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ChoiceCard from '../components/ChoiceCard'
import DecisionCard from '../components/DecisionCard'
import QuestionCard from '../components/QuestionCard'
import Calculator from '../services/Calculator'
import ServerAdapter from '../services/ServerAdapter'
import { connect } from 'react-redux'
import { addQuestion, loadCurrentQuestion, loadQuestions } from '../store/actions/questions'


const DecisionScreen= ({ navigation, user, isLoggedIn, currentQuestion, loadCurrentQuestion, addQuestion, loadQuestions } ) => {
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
      return choices.map ((choice, index) => {
          return <ChoiceCard choice={choice} key={`choice-${index}`} index={index} />
      })
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
        updateDecisionc(newDec)
      }
  }


    const updateDecision = (dec) => {
      const body = {
        question: question,
        choices: choices,
        decision: dec
      }
      loadCurrentQuestion(body)
      getUpdate()
    }

    //If a user is logged in, will send GET request for new user questions list and repopulate list of questions
    const getUpdate = () => {
      if (isLoggedIn) {
        let promise = ServerAdapter.getSignedInUser(user.id)
        promise.then(data => handleUserData(data))
      } 
    }
    const handleUserData = (data) => {
      if (data.questions.length > 0) {
        loadQuestions(data.questions)
      }
    }


    const deleteQuestion = () => {
      console.log('deleting this question', question.id)
      let prom = ServerAdapter.deleteQuestion(question.id)
      prom.then(data => navigateBack(data))
    }

    const navigateBack=(data) => {
      //whenever we navigate to form, we want to get update
      console.log('question deleted, going back to form')
      getUpdate()
      if (!isOld) {
        clearForm()
      }
      navigation.goBack()
    }

    return (
      <View style={styles.container}>
          
          <Text> Decision Screen</Text>
          <QuestionCard question= {question}/>
          {renderChoices()}
          <DecisionCard choice={decisionChoice} />
          {isLoggedIn? <Button title="Delete This Question" onPress={deleteQuestion}/> : null }
          <Button title='ReRun' onPress={reRun}/>
          {isOld? null : <Button title="New Question" onPress={navigateBack}/>}
      </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

DecisionScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Final Answer'
  };
};

const mapDispatchtoProps = dispatch => {
  return {
      loadQuestions: (questions) => dispatch(loadQuestions(questions)), 
      addQuestion: (question) => dispatch(addQuestion(question)),
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