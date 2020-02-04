import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ChoiceCard from '../components/ChoiceCard'
import DecisionCard from '../components/DecisionCard'
import QuestionCard from '../components/QuestionCard'
import Calculator from '../services/Calculator'
import ServerAdapter from '../services/ServerAdapter'
import { connect } from 'react-redux'
import {loadQuestions} from '../store/actions/questions'


const DecisionScreen= ({ navigation } ) => {
    const decision = navigation.getParam('decision', 'nothing')
    const id = decision.id
    const winningChoice = decision.choice

    const question = navigation.getParam('question', 'nothing')

    const reRun = navigation.getParam('reRun', 'nothing')
    const clearForm = navigation.getParam('clearForm', 'nothing')
    const choices = navigation.getParam('choices', 'nothing')

    const renderChoices = () => {
      return choices.map ((choice, index) => {
          return <ChoiceCard choice={choice} key={index} index={index} />
      })
    }


    const handleNewQuestion = () => {
      const question_object = {
        question: question,
        choices: choices,
        decision: decision
      }
      this.props.addQuestion(question_object)
      clearForm()
      navigation.navigate('Form')
 
    }


    const deleteQuestion = () => {
      console.log('deleteing this question and stuff', question.id)
      let prom = ServerAdapter.deleteQuestion(question.id)
      prom.then(data => navigateToForm())
    }

    const navigateToForm=() => {
      clearForm()
      navigation.navigate('Form')
    }

    return (
      <View style={styles.container}>
          
          <Text> Decision Screen</Text>
          <QuestionCard question= {question}/>
          {renderChoices()}
          <DecisionCard choice={winningChoice} />
          <Button title="Delete Everything" onPress={deleteQuestion}/>
          <Button title='ReRun' onPress={() => reRun(choices, id)}/>
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
    addQuestion: (question) => dispatch(addQuestion(question))
  }
}


export default connect(null, mapDispatchToProps)(DecisionScreen)