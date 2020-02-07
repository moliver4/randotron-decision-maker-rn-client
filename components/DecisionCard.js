import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import FadeInView from './AnimatedView'


const DecisionCard = ( { choice } ) => {
  console.log(choice.title)

  return (
    <FadeInView style={styles.container}>
        <Text>
            Your Answer:
            {choice.title}
        </Text>
    </FadeInView>
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

export default DecisionCard;