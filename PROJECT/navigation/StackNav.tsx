import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import Navigation from './Navigation';
const Stack = createStackNavigator();
const StackNav = () => {
  return (
    
    <Stack.Navigator>
      <Stack.Screen name="LanguageSelection" component={Navigation}  options={{headerShown:false}}/>
    </Stack.Navigator>
  
  )
}

export default StackNav