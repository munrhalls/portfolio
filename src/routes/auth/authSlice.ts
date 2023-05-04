import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    value: false,
  },
  reducers: {
    setLoggedIn: (state) => {
      state.value = true;
    },
    setLoggedOut: (state) => {
      state.value = false;
    },
  },
});

export const { setLoggedIn, setLoggedOut } = authSlice.actions;

export default authSlice.reducer;
