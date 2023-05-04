import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../routes/auth/authSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
