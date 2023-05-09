import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../routes/auth/authSlice";
import homeReducer from "../routes/homeSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    home: homeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
