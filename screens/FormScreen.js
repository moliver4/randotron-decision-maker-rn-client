import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

 class FormScreen extends React.Component {


  render() {
    return (
      <View style={styles.container}>
          <Text> Form Screen</Text>
          
        <Button title="should move me forward to Decision Screen" />
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

export default FormScreen