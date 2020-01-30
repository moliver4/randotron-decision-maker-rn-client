import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import MainApp from './MainApp'
import reducer from './store/reducers/userAuth'

const store = createStore(reducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}> 
        <MainApp/>
      </Provider>
    )
  }
}


export default App
