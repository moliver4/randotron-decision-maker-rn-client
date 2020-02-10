import React from 'react';
import { View, TextInput, Text, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const QuestionForm = (props) => {
    return (
        <TouchableWithoutFeedback  onPress={()=> Keyboard.dismiss()}>
            <View style={styles.questionContainer}>
                <Text style={styles.text} htmlFor='decision'>What can we help you with?</Text>

                <TextInput 
                    style={styles.input} 
                    value={props.newQuestion.title} 
                    onChangeText={text=> props.handleNewQuestionChange(text)} 
                    placeholder="Your Question Here"
                />
            </View>
        </TouchableWithoutFeedback>
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
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        marginVertical: 10
    }
})
export default QuestionForm;
