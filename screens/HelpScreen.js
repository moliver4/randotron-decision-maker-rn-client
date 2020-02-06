import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MyGradient from '../components/MyGradient'
import HelpInfo from '../components/HelpInfo'


 class HelpScreen extends React.Component {


  render() {
    return (
      
        <MyGradient>
            <Text
              style={{
                backgroundColor: 'transparent',
                fontSize: 15,
                color: '#fff',
              }}>
              Help Screen
            </Text>
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