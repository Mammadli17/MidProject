import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./slices/todoslice";
import { themeReducer } from "./slices/ThemeSlice";

export const store = configureStore({
  reducer: {
    todosSlice: todoReducer,
    theme: themeReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type StateType = ReturnType<typeof store.getState>;