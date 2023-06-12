import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import { Provider, useSelector } from 'react-redux'
import { store } from './redux';
import StackNav from './navigation/StackNav';


const Tabs = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
    
        <Provider store={store}>
          
        <StackNav/>
   </Provider>
      </NavigationContainer>
  );
};

export default App;
