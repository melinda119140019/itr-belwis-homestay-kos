// store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import exampleReducer from './slices/slicesA';
import themeReducer from "./slices/themeSlice";


export const store = configureStore({
  reducer: {
    example: exampleReducer,
    theme: themeReducer, // tambahkan di sini
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
