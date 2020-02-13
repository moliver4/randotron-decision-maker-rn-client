import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import MainApp from './MainApp'
import reducer from './store/reducers/mainReducer'
console.disableYellowBox = true
const store = createStore(reducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}> 
          <StatusBar barStyle='dark-content' hidden={false} />
          <MainApp/>
 
      </Provider>
    )
  }
}



export default App
