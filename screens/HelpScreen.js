import React from 'react';
import { View, Text, SafeAreaView, Dimensions } from 'react-native';
import MyGradient from '../components/MyGradient'
import HelpInfo from '../components/HelpInfo'



 class HelpScreen extends React.Component {


  render() {
    return (
      
        <MyGradient>
         
            <HelpInfo/>

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