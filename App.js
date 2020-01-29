import React, { useState } from 'react';
import * as Font from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
// import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import firebase from 'firebase'
import { AppLoading } from 'expo';
import { firebaseConfig } from './config'

// import LoginScreen from './screens/LoginScreen'
// import DashboardScreen from './screens/DashboardScreen'
// import LoadingScreen from './screens/LoadingScreen'
import MainNavigator from './navigator/1MainNavigator.js'


firebase.initializeApp(firebaseConfig)


const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return <MainNavigator />;
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
