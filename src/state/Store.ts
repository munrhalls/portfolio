import { configureStore } from "@reduxjs/toolkit";
import aboutReducer from "../routes/aboutSlice";

export const store = configureStore({
  reducer: {
    about: aboutReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
