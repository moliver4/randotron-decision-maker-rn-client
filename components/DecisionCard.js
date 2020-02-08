import React, { useState } from 'react';
import { View, Text, Button, Animated, Image, Easing, StyleSheet } from 'react-native';
import FadeInView from './AnimatedView'


const DecisionCard = ( { choice } ) => {
 
  // const [springValue, setSpringValue] = useState(new Animated.Value(0.3))

  // const spring = () => {
  //   this.springValue.setValue(0.3)
  //   Animated.spring(
  //     this.springValue,
  //     {
  //       toValue: 1,
  //       friction: 1
  //     }
  //   ).start()
  // }

  return (
    <View >
        <Text>
            Your Answer:
            {choice.title}
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

export default DecisionCard;