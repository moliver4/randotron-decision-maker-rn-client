import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ChoiceCard from '../components/ChoiceCard'
import DecisionCard from '../components/DecisionCard'
import QuestionCard from '../components/QuestionCard'
import Calculator from '../services/Calculator'
import ServerAdapter from '../services/ServerAdapter'
import { connect } from 'react-redux'
import { addQuestion, loadCurrentQuestion } from '../store/actions/questions'


const DecisionScreen= ({ navigation, currentQuestion, loadCurrentQuestion, addQuestion } ) => {
    // const decision = navigation.getParam('decision', 'nothing')
    // const id = decision.id
    // const winningChoice = decision.choice

    // const question = navigation.getParam('question', 'nothing')

    // const reRun = navigation.getParam('reRun', 'nothing')
    const clearForm = navigation.getParam('clearForm', 'nothing')
    console.log('current question object on Decision screen', currentQuestion)
    const choices = currentQuestion.choices
    const question = currentQuestion.question
    const decision = currentQuestion.decision
    const decisionID = decision.id
    const decisionChoice= decision.choice

    const renderChoices = () => {
      return choices.map ((choice, index) => {
          return <ChoiceCard choice={choice} key={index} index={index} />
      })
    }

    const reRun = () => {
      console.log('running again!')
      let final = Calculator.reRun(choices)
      console.log('new answer is here', final)
      let body = {
          question_id: question.id,
          choice_id: final.id
      }
      let prom = ServerAdapter.editDecision(decisionID, body)
      prom.then(dec => updateDecision(dec))
  }


    const updateDecision = (dec) => {
      const body = {
        question: question,
        choices: choices,
        decision: dec
      }
      loadCurrentQuestion(body)
    }

    const handleNewQuestion = () => {
      //this should persist the question into the STATE!! will need to think of a way to update currentQuestion then use that to add to questions in state
      addQuestion(currentQuestion)
      clearForm()
      navigation.navigate('Form')
 
    }


    const deleteQuestion = () => {
      console.log('deleteing this question and stuff', question.id)
      let prom = ServerAdapter.deleteQuestion(question.id)
      prom.then(data => navigateToForm(data))
    }

    const navigateToForm=(data) => {
      console.log('question deleted', data)
      clearForm()
      navigation.navigate('Form')
    }

    return (
      <View style={styles.container}>
          
          <Text> Decision Screen</Text>
          <QuestionCard question= {question}/>
          {renderChoices()}
          <DecisionCard choice={decisionChoice} />
          <Button title="Delete Everything" onPress={deleteQuestion}/>
          <Button title='ReRun' onPress={reRun}/>
          <Button title="Save and New Question" onPress={handleNewQuestion}/>
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

const mapDispatchToProps = dispatch => {
  return {
    addQuestion: (question) => dispatch(addQuestion(question)),
    loadCurrentQuestion: (question) => dispatch(loadCurrentQuestion(question))
  }
}

const mapStatetoProps = state => {
  return {
    currentQuestion: state.currentQuestion
  }
}


export default connect(mapStatetoProps, mapDispatchToProps)(DecisionScreen)