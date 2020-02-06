import React from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const QuestionForm = (props) => {
    return (
        <View style={styles.questionContainer}>
            <Text style={styles.text} htmlFor='decision'>What's the Question?</Text>

            <TextInput 
                style={styles.input} 
                value={props.newQuestion.title} 
                onChangeText={text=> props.handleNewQuestionChange(text)} 
                placeholder="Your Question Here"
                placeholderTextColor='grey'
            />

        </View>
    );
}
const styles = StyleSheet.create({
      questionContainer: {
        width: '100%',
        alignItems: "center",
        marginBottom: 50,
      },
      text: {
          fontFamily: 'open-sans-bold',
          fontSize: 15,
          paddingBottom: 10,
          color: Colors.primary
      },
      input: {
        height: 30,
        width: '70%',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10
    }
})
export default QuestionForm;
