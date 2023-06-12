import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider, useSelector } from 'react-redux';
import { store } from '../redux';
import TodoSvg from '../assets/TodoSvg';
import Add from '../assets/Add';
import Set from '../assets/Set';
import List from '../screens/List';
import AddS from '../screens/AddS';
import SettingScreen from '../screens/Setting';



const Tabs = createBottomTabNavigator();

const Navigation = () => {
    const themeMode = useSelector<any>(state => state.theme.themeMode);

  return (

   
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, focused }) => {
            let iconComponent;
            let iconColor = focused ? ( themeMode === 'dark' ? '#deb887' : '#4A3780') : 'none';

            if (route.name === 'List') {
              iconComponent = <TodoSvg fill={iconColor} stroke={iconColor}/>;
            } else if (route.name === 'Add') {
              iconComponent = <Add fill={iconColor}  stroke={iconColor} />;
            } else if (route.name === 'Setting') {
              iconComponent = <Set fill={iconColor}   stroke={iconColor}/>;
            }

            return (
              <View style={{ alignItems: 'center' }}>
                {iconComponent}
              </View>
            );
          },
          tabBarStyle: {
            display: 'flex',
          },
          tabBarShowLabel: false,
        })}
      >
        <Tabs.Screen name="List" component={List} options={{ headerShown: false }} />
        <Tabs.Screen name="Add" component={AddS} options={{ headerShown: false }}/>
        <Tabs.Screen name="Setting" component={SettingScreen}options={{ headerShown: false }} />
      </Tabs.Navigator>

 
  );
};

export default Navigation;
