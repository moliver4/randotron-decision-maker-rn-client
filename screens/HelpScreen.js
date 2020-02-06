import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MyGradient from '../components/MyGradient'
import HelpInfo from '../components/HelpInfo'


 class HelpScreen extends React.Component {


  render() {
    return (
      
        <MyGradient>
          <View style={{padding: 50}}> 
            <HelpInfo/>
          </View>
          </MyGradient>
          
          
      
    );
  }
}




HelpScreen.navigationOptions = navData => {
  return {
    header:null
  };
};
export default HelpScreen