/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component} from 'react';
 
 
import AppNavigator from './App/Navigators/AppNavigator'
import { Provider } from "react-redux";
import store from './App/Store/Store';

class App extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    
  }

  render(){
    return( 
      <Provider store={store}>
        <AppNavigator/> 
      </Provider>
    )
  }
}
 
export default App;
