/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import SplashScreen from '../App/Containers/SplashScreen'

import configureStore from 'redux-mock-store';
 
import renderer from 'react-test-renderer'; 
import { SPINNER_ON } from  '../App/Utils/ReduxConstants'
it('renders correctly', () => {
  renderer.create(<App />);
});

it('renders correctly across screens', () => {
  const tree = renderer.create(<SplashScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
 
const middlewares = []
const mockStore = configureStore(middlewares)

// You would import the action from your codebase in a real scenario
const SpinnerON = () => ({ type: SPINNER_ON })

it('should dispatch action', () => {
 
  const initialState = {}
  const store = mockStore(initialState)

  // Dispatch the action
  store.dispatch(SpinnerON())

  // Test if your store dispatched the expected actions
  const actions = store.getActions()
  const expectedPayload = { type: SPINNER_ON }
  expect(actions).toEqual([expectedPayload])
})