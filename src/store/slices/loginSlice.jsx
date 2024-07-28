import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    email: null,
    password: null,
  },
  reducers: {
    changeEmail(state, action) {
      state.email = action.payload;
    },
    changePassword(state, action) {
      state.password = action.payload;
    },
  },
});

export const { changeEmail, changePassword } = loginSlice.actions;
export const loginReducer = loginSlice.reducer;
