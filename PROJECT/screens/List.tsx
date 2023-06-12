import React, { useEffect, useState } from 'react';
import { View, Image, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../redux';
import { getTodos, updateTodo, toggleUncompleted, deleteTodo } from '../redux/slices/todoslice';
import Category1 from '../assets/Category1';
import Category2 from '../assets/Category2';
import Category from '../assets/Category';
import Check from '../assets/Check';
import CheckBox from '../assets/CheckBox';
import { getTheme, toggleTheme } from '../redux/slices/ThemeSlice';
import { ActivityIndicator } from 'react-native-paper';

const List = () => {
  const dispatch = useDispatch<AppDispatch>();
  const themeMode = useSelector<any>(state => state.theme.themeMode);
  
  const [todo, setTodo] = useState('');
  const [todoC, setTodoC] = useState('');

  const { loading, error, todos } = useSelector((state: any) => state.todosSlice);
  useEffect(() => {
    dispatch(getTodos());
    dispatch(getTheme());
  }, []);

  useEffect(() => {
    const c = todos.filter((a: any) => a.completed == false);
    setTodo(c);
    const f = todos.filter((a: any) => a.completed == true);
    setTodoC(f);
  }, [todos]);

  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const convertTo12HourFormat = (time: string) => {
    const formattedTime = new Date(time).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });

    return formattedTime;
  };

  const toggleCompleted = (id: any) => {
    const updatedTodos = todos.map((item: any) => {
      if (item._id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    
    dispatch(updateTodo({ id, data: updatedTodos }));
  };

  const toggleUnCompleted = (id: any) => {
    const updatedTodos = todos.map((item: any) => {
      if (item._id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    
    dispatch(toggleUncompleted({ id, data: updatedTodos }));
  };

  const renderTodoItem = ({ item }: { item: any }) => {
    const formattedTime = convertTo12HourFormat(item.time);

    const deleted = (id: any) => {
      dispatch(deleteTodo(id))
      .then(() => {
        dispatch(getTodos());
      });
    };

    return (
      loading === 'pending' ? (
        <ActivityIndicator />
      ) : (
        <View style={{ marginTop: 20 }}>
          <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              {item.category == 1 ? (
                <Category />
              ) : item.category == 2 ? (
                <Category1 />
              ) : (
                <Category2 />
              )}

              <View>
                <Text style={{ fontSize: 20, color: 'black' }}>{item.title}</Text>
                <Text style={{ color: 'gray' }}>{formattedTime}</Text>
              </View>
            </View>
            <View>
              <TouchableOpacity onPress={() => deleted(item._id)}>
                <Text style={{ color: 'red', fontWeight: 'bold' }}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => toggleCompleted(item._id)}>
                <Check style={{ stroke: themeMode === 'dark' ? '#deb887' : '#4A3780' }} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )
    );
  };

  const renderTodoItemC = ({ item }: { item: any }) => {
    const formattedTime = convertTo12HourFormat(item.time);

    return (
      loading === 'pending' ? (
        <ActivityIndicator />
      ) : (
        <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              {item.category == 1 ? (
                <Category />
              ) : item.category == 2 ? (
                <Category1 />
              ) : (
                <Category2 />
              )}

              <View>
                <Text style={{ fontSize: 20, color: 'black' }}>{item.title}</Text>
                <Text style={{ color: 'gray' }}>{formattedTime}</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={() => toggleUnCompleted(item._id)}>
            <CheckBox style={{ stroke: themeMode === 'dark' ? '#deb887' : '#4A3780' }} />
          </TouchableOpacity>
        </View>
      )
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: themeMode === 'dark' ? '#deb887' : '#4A3780',
          height: '28%',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        <View style={{ marginBottom: 60 }}>
          <Text style={{ fontSize: 20, color: 'white' }}>{currentDate}</Text>
        </View>
        <View style={{ marginBottom: 70 }}>
          <Text style={{ fontSize: 30, color: 'white', fontWeight: '500' }}>My Todo List</Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ position: 'absolute', bottom: 0, right: 20 }}></View>

        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 60,
            gap: 60,
          }}
        >
          <Image style={{ width: 100, height: 100 }} source={require('../assets/images/Right.png')} />
        </View>
        <View
          style={{
            position: 'absolute',
            top: 0,
            right: -19,
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 0,
            gap: 60,
          }}
        >
          <Image style={{ width: 100, height: 100 }} source={require('../assets/images/Left.png')} />
        </View>
      </View>

      <View style={{ flex: 1, marginTop: '35%' }}>
        <View style={{ backgroundColor: '#fff', margin: 20, padding: 20, borderRadius: 10 }}>
          <FlatList data={todo} renderItem={renderTodoItem} style={{ height: 230 }} />
        </View>
      </View>

      <View style={{ marginTop: 20, left: 20 }}>
        <Text style={{ fontSize: 20, color: 'black', fontWeight: '400' }}>Completed</Text>
      </View>

      <View style={{ backgroundColor: 'white', margin: 20, padding: 20, borderRadius: 10, marginTop: 10 }}>
        <FlatList data={todoC} renderItem={renderTodoItemC} style={{ height: 230 }} />
      </View>
    </View>
  );
};

export default List;
