import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ChoiceCard from '../components/ChoiceCard'
import DecisionCard from '../components/DecisionCard'
import QuestionCard from '../components/QuestionCard'


const DecisionScreen= ({ navigation } ) => {
    const decision = navigation.getParam('decision', 'nothing')   
    const question = navigation.getParam('question', 'nothing')

    const renderChoices = () => {
      const choices = navigation.getParam('choices', 'nothing')
      return choices.map ((choice, index) => {
          return <ChoiceCard choice={choice} key={index} index={index} deleteChoice={this.deleteChoiceHandler} decision={this.state.decision}/>
      })
    }



    return (
      <View style={styles.container}>
          
          <Text> Decision Screen</Text>
          <QuestionCard question= {question}/>
          <DecisionCard decision={decision} />

          
        <Button title="New Question should take me back to form" />
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


export default DecisionScreen