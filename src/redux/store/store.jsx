import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/createSlice/counterSlices";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
