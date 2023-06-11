import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../routes/auth/authSlice";
import aboutReducer from "../routes/aboutSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    about: aboutReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
