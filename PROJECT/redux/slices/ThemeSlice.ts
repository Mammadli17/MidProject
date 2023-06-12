import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

interface ThemeState {
  themeMode: 'light' | 'dark';
}

const initialState = {
  themeMode: 'light',
};

export const getTheme = createAsyncThunk('theme/getTheme', async () => {
  try {
    const theme = await AsyncStorage.getItem('theme');

    if (theme) {
      return theme;
    }
    return 'light';
  } catch (error) {
    return 'light';
  }
});

export const setTheme = createAsyncThunk(
  'theme/setTheme',
  async (theme: string) => {
    try {
      await AsyncStorage.setItem('theme', theme);
      return theme;
    } catch (error) {
      return 'light';
    }
  },
);

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.themeMode = state.themeMode === 'light' ? 'dark' : 'light';
    },
  },
  extraReducers: builder => {
    builder.addCase(getTheme.fulfilled, (state, action) => {
      state.themeMode = action.payload;
    });
    builder.addCase(setTheme.fulfilled, (state, action) => {
      state.themeMode = action.payload;
    });
  },
});

export const {toggleTheme} = themeSlice.actions;
export const themeReducer = themeSlice.reducer;