import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import Colors from '../constants/Colors'


const QuestionCard = ( { question } ) => {

  return (
    <View style={styles.container}>
        <Text style={styles.text}>
            {question.title}
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
     
    }, 
    text: {
      fontFamily: 'open-sans',
      color: Colors.additional,
      fontSize: 60/Dimensions.get('window').scale
    }
})

export default QuestionCard;