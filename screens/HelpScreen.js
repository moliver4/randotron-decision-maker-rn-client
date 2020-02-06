import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

 class HelpScreen extends React.Component {


  render() {
    return (
      <View style={styles.container}>
          <Text style={{color: 'white'}}> Help Screen</Text>
          
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D7F5EF",
    alignItems: "center",
    justifyContent: "center"
  }
});


HelpScreen.navigationOptions = navData => {
  return {
    header:null
  };
};
export default HelpScreen