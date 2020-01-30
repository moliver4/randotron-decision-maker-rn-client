import React, { useState } from 'react';
import * as Font from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux'
import MainApp from './MainApp'


export default function App() {
  return (
    <MainApp/>
  )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
