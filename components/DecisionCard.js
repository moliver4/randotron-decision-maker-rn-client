import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


const DecisionCard = decision => {

  return (
    <View style={styles.container}>
        <Text>
            {decision.title}
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