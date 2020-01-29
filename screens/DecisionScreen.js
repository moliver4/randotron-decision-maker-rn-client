import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

 class DecisionScreen extends React.Component {


  render() {
    return (
      <View style={styles.container}>
          <Text> Decision Screen</Text>
          
        <Button title="New Question should take me back to form" />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default DecisionScreen