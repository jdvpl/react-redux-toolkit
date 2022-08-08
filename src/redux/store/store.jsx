import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/createSlice/counterSlices";
import userReducer from "../slices/userSlices";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});

export default store;
