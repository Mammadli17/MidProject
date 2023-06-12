// todoSlice.ts

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios';

interface TodoState {
  todos: any[];
  loading: 'rejected' | 'pending' | 'fulfilled' | null;
  error: any;
  length: number;
}

const initialState: TodoState = {
  todos: [],
  loading: null,
  error: null,
  length: 0,
};

export const getTodos = createAsyncThunk('todos/getTodos', async () => {
  const response = await axios.get("http://172.16.0.79:8080/api/users");
  return response.data;
});

export const postTodo = createAsyncThunk('todos/postTodo', async (payload: any) => {
  const response = await axios.post("http://172.16.0.79:8080/api/users", payload);
  return response.data;
});

export const updateTodo = createAsyncThunk('todos/updateTodo', async (payload: any) => {
  const { id, data } = payload;
  console.log(id);
  const updatedData = { ...data, completed: true };
  const response = await axios.put(`http://172.16.0.79:8080/api/users/${id}`, updatedData);
  return response.data;
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id: number) => {
  await axios.delete(`http://172.16.0.79:8080/api/users/${id}`);
  return id;
});

export const toggleUncompleted = createAsyncThunk('todos/toggleUncompleted', async (payload: any) => {
  const { id, data } = payload;
  const updatedData = { ...data, completed: false };
  const response = await axios.put(`http://172.16.0.79:8080/api/users/${id}`, updatedData);
  return response.data;
});

const todoSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    updateTodoState: (state, action: PayloadAction<any>) => {
      const { id, completed } = action.payload;
      const todoIndex = state.todos.findIndex(todo => todo.id === id);
      if (todoIndex !== -1) {
        state.todos[todoIndex].completed = completed;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.loading = 'fulfilled';
        state.todos = action.payload;
        state.length = action.payload.length;
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.loading = 'rejected';
        state.error = action.error.message;
      })
      .addCase(postTodo.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(postTodo.fulfilled, (state, action) => {
        state.loading = 'fulfilled';
        state.todos.push(action.payload);
        state.length++;
      })
      .addCase(updateTodo.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.loading = 'fulfilled';
        const updatedTodo = action.payload;
        const index = state.todos.findIndex((todo) => todo.id === updatedTodo.id);
        if (index !== -1) {
          state.todos[index] = updatedTodo;
        }
      })
      .addCase(updateTodo.rejected, (state, action) => {
        state.loading = 'rejected';
        state.error = action.error.message;
      })
      .addCase(deleteTodo.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.loading = 'fulfilled';
        const deletedTodoId = action.payload;
        state.todos = state.todos.filter(todo => todo.id !== deletedTodoId);
        state.length--;
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.loading = 'rejected';
        state.error = action.error.message;
      })
      .addCase(toggleUncompleted.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(toggleUncompleted.fulfilled, (state, action) => {
        state.loading = 'fulfilled';
        const updatedTodo = action.payload;
        const index = state.todos.findIndex((todo) => todo.id === updatedTodo.id);
        if (index !== -1) {
          state.todos[index] = updatedTodo;
        }
      })
      .addCase(toggleUncompleted.rejected, (state, action) => {
        state.loading = 'rejected';
        state.error = action.error.message;
      });
  },
});

export const { updateTodoState } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
