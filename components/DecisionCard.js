import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


const DecisionCard = ( { choice } ) => {
  console.log(choice.title)

  return (
    <View style={styles.container}>
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