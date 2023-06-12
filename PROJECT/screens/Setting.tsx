import {View, Text, TouchableOpacity, StyleSheet,Image} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { AppDispatch } from '../redux';
import { getTheme, setTheme, toggleTheme } from '../redux/slices/ThemeSlice';


const SettingScreen = () => {
  const themeMode = useSelector< any>(state => state.theme.themeMode);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getTheme());
  }, []);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
    if (themeMode === 'dark') {
      return dispatch(setTheme('light'));
    }
    return dispatch(setTheme('dark'));
  };

  const buttonBackColor: any = {
    backgroundColor: themeMode === 'dark' ? '#deb887' : '#4A3780',
    borderWidth: 2,
    borderColor: "#fff"
  };

  const buttonTextColor: any = {
    color: "#fff"
  };

  const containerStyle: any = {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
  };

  const textStyle: any = {
    color: "#fff"
  };

  return (
    <View style={[containerStyle]}>
        <View style={{ height: 80, backgroundColor: themeMode === 'dark' ? '#deb887' : '#4A3780', }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between",width:390}}>
            <Image source={require('../assets/images/Right.png')} />
            <View style={{ right: 30,marginTop:20 }}>
              <Text style={{ fontSize: 25, fontWeight: "500" }}> Settings</Text>
            </View>
            <Image style={{ marginLeft: 20 }} source={require('../assets/images/Left.png')} />
          </View>
        </View>
      <View style={{flex: 1.2, alignItems: 'center',justifyContent:"center"}}>
        <TouchableOpacity
          style={[styles.button, buttonBackColor]}
          onPress={() => handleToggleTheme()}>
          <Text style={[styles.buttonText, buttonTextColor]}>Change Theme</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  buttonText: {
    color: '#4A3780',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#4A3780',
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 20,
    paddingHorizontal: 50,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },
});