import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

 class FormScreen extends React.Component {


  render() {
    return (
      <View style={styles.container}>
          <Text> Form Screen</Text>
          
        
          <Button title="should move me forward to Decision Screen" onPress={() => this.props.navigation.navigate('Decision')}/>
  
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

FormScreen.navigationOptions = navData => {
  return {
    headerTitle: 'New Question'
  };
};

export default FormScreen