import { View, Text, Image, TextInput, TouchableOpacity, Platform } from 'react-native';
import React, { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Category from '../assets/Category';
import Category1 from '../assets/Category1';
import Category2 from '../assets/Category2';
import DateTimePicker from '@react-native-community/datetimepicker';
import Input from '../assets/input';
import { useDispatch, useSelector } from 'react-redux';
import { postTodo } from '../redux/slices/todoslice';
import { AppDispatch } from '../redux';

const AddS = () => {
  const [selectedCategory, setSelectedCategory] = useState<any>("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [note, setNote] = useState('');
  const [taskTitle, setTaskTitle] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const themeMode = useSelector<any>(state => state.theme.themeMode);
  const handleCategoryPress = (category: any) => {
    let categoryValue;
    if (category === 'category') {
      categoryValue = 1;
    } else if (category === 'category1') {
      categoryValue = 2;
    } else if (category === 'category2') {
      categoryValue = 3;
    }
    setSelectedCategory(categoryValue);
  };

  const getCategoryStyle = (category: number) => {
    return {
      transform: [{ scale: selectedCategory === category ? 1.2 : 1 }],
    };
  };

  const handleDateChange = (event: any, date: any) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (date) {
      setSelectedDate(date);
    }
  };

  const handleTimeChange = (event: any, time: any) => {
    setShowTimePicker(Platform.OS === 'ios');
    if (time) {
      setSelectedTime(time);
    }
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const showTimepicker = () => {
    setShowTimePicker(true);
  };

  const renderSelectedDate = () => {
    if (selectedDate) {
      return selectedDate.toDateString();
    } else {
      return 'Date';
    }
  };

  const renderSelectedTime = () => {
    if (selectedTime) {
      const hours = selectedTime.getHours();
      const minutes = selectedTime.getMinutes();
      return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
    } else {
      return 'Time';
    }
  };

  const handleSave = () => {
    const todoData = {
      title: taskTitle,
      note: note,
      date: selectedDate,
      time: selectedTime,
      category:selectedCategory,
      completed:false
    };

    dispatch(postTodo(todoData));
    setTaskTitle('')
    setNote('')
    setSelectedCategory('')
    setSelectedDate(new Date()); 
    setSelectedTime(new Date());
    
  };

  return (
    <KeyboardAwareScrollView style={{ flex: 1 }}>
      <View>
        <View style={{ height: 80, backgroundColor: themeMode === 'dark' ? '#deb887' : '#4A3780', }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Image source={require('../assets/images/Right.png')} />
            <View style={{ right: 30,marginTop:20 }}>
              <Text style={{ fontSize: 25, fontWeight: "500" }}>Add New Task</Text>
            </View>
            <Image style={{ marginLeft: 20 }} source={require('../assets/images/Left.png')} />
          </View>
        </View>

        <Text style={{ color: "black", fontWeight: "400", fontSize: 18, marginTop: 30, marginLeft: 20 }}>Task Title</Text>
        <View style={{ marginHorizontal: 20 }}>
          <TextInput
            style={{
              width: '100%',
              height: 60,
              paddingHorizontal: 15,
              marginVertical: 10,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#ccc',
              fontSize: 16,
              color: 'black',
            }}
            placeholder="Task Title"
            placeholderTextColor="#888"
            value={taskTitle}
            onChangeText={setTaskTitle}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ color: "black", fontWeight: "400", fontSize: 18, marginTop: 30, marginLeft: 20 }}>Category</Text>
          <View style={{ flexDirection: "row", marginTop: 20, gap: 20, left: 20 }}>
            <TouchableOpacity onPress={() => handleCategoryPress('category')}>
              <Category style={getCategoryStyle(1)} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleCategoryPress('category1')}>
              <Category1 style={getCategoryStyle(2)} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleCategoryPress('category2')}>
              <Category2 style={getCategoryStyle(3)} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ gap: 10 }}>
            <Text style={{ color: "black", fontWeight: "400", fontSize: 18, marginTop: 30, marginLeft: 20 }}>Date</Text>
            <View style={{ borderRadius: 10, marginLeft: 20, borderWidth: 1, width: 180, height: 60, flexDirection: "row", justifyContent: "space-between", borderColor: "#ccc" }}>
              <Text style={{ color: "black", fontWeight: "400", fontSize: 18, marginVertical: 10 }}>{renderSelectedDate()}</Text>
              <TouchableOpacity onPress={showDatepicker} style={{ right: 10, marginVertical: 13 }}>
                <Input />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ gap: 10 }}>
            <Text style={{ color: "black", fontWeight: "400", fontSize: 18, marginTop: 30, marginLeft: 20 }}>Time</Text>
            <View style={{ borderRadius: 10, marginLeft: 20, borderWidth: 1, width: 160, height: 60, flexDirection: "row", justifyContent: "space-between", borderColor: "#ccc" }}>
              <Text style={{ color: "black", fontWeight: "400", fontSize: 18, marginVertical: 10 }}>{renderSelectedTime()}</Text>
              <TouchableOpacity onPress={showTimepicker} style={{ right: 10, marginVertical: 13 }}>
                <Input />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ marginLeft: 20 }}>
          <Text style={{ color: "black", fontWeight: "400", fontSize: 18, marginTop: 30 }}>Note</Text>
          <TextInput
            style={{
              width: '90%',
              height: 200,
              paddingHorizontal: 15,
              marginVertical: 10,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#ccc',
              fontSize: 16,
              color: 'black',
            }}
            placeholder="Note"
            placeholderTextColor="#888"
            multiline
            value={note}
            onChangeText={setNote}
          />
        </View>
        <TouchableOpacity
          style={{backgroundColor: themeMode === 'dark' ? '#deb887' : '#4A3780', marginHorizontal: 20, height: 50, borderRadius: 10, alignItems: "center", justifyContent: "center", marginTop: 20 }}
          onPress={handleSave}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>Save</Text>
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            value={selectedDate}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}

        {showTimePicker && (
          <DateTimePicker
            value={selectedTime}
            mode="time"
            display="default"
            onChange={handleTimeChange}
          />
        )}
      </View>
    </KeyboardAwareScrollView>
  );
};

export default AddS;
