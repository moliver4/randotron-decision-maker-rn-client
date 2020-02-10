import React, { useState } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

let winSize = Dimensions.get('window');

const DecisionCard = ( { choice } ) => {

  return (
 
        <Text style={styles.answer}> 
          {choice.title}
        </Text>

  );
};

const styles = StyleSheet.create({
    container: {
      padding: 10,
      flexShrink: 1,
      alignItems: "center",
      justifyContent: 'center',
      textAlign: 'center'
    }, 
    answer: {
      fontSize: 80/winSize.scale
    }
})

export default DecisionCard;