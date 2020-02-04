import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


const QuestionCard = ( { question } ) => {

  return (
    <View style={styles.container}>
        <Text>
            {question.title}
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center"
    }
})

export default QuestionCard;