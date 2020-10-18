import React, { Component } from 'react';
import  SplashScreen from '../Containers/SplashScreen';
import  HomeScreen from '../Containers/HomeScreen';
import { NavigationContainer } from  '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName ="SplashScreen" headerMode="none">
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen}    /> 
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;