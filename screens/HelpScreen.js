import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

 class HelpScreen extends React.Component {


  render() {
    return (
      <View style={styles.container}>
          <Text> Help Screen</Text>
          
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


HelpScreen.navigationOptions = navData => {
  return {
    headerTitle: 'How to Play'
  };
};
export default HelpScreen