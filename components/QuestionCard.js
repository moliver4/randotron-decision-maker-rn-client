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
      borderBottomColor: 'white',
      borderBottomWidth: 1
    }, 
    text: {
      fontFamily: 'open-sans-bold',
      color: Colors.extra,
      fontSize: 60/Dimensions.get('window').scale
    }
})

export default QuestionCard;