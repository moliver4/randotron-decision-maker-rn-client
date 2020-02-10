import React, { useState } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import FadeInView from './AnimatedView'
let winSize = Dimensions.get('window');

const DecisionCard = ( { choice } ) => {

  return (
    <View style={styles.container}>
        <Text style={styles.answer}> 
          {choice.title}
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: 'center',
      textAlign: 'center'
    }, 
    answer: {
      fontSize: 80/winSize.scale
    }
})

export default DecisionCard;