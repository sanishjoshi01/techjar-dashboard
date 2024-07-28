import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./slices/loginSlice";
import { changeEmail, changePassword, logoutReset } from "./slices/loginSlice";
import { reportsReducer } from "./slices/reportsSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    reports: reportsReducer,
  },
});

export { store };
export { changeEmail, changePassword, logoutReset };
