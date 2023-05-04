import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    value: false,
  },
  reducers: {
    logIn: (state) => {
      state.value = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { logIn } = authSlice.actions;

export default authSlice.reducer;
