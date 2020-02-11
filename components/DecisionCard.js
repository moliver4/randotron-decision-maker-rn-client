import React, { useState } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import Colors from '../constants/Colors'

let winSize = Dimensions.get('window');

const DecisionCard = ( { choice } ) => {

  return (
        <Text style={styles.answer}> 
          {choice.title}
        </Text>

  );
};

const styles = StyleSheet.create({

    answer: {
      textAlign: 'center',
      color: Colors.extra,
      fontSize: 80/winSize.scale
    }
})

export default DecisionCard;