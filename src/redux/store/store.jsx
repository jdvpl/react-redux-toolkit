import { configureStore } from "@reduxjs/toolkit";
import { counterSlices } from "../reducers/CounterReducers";

const store = configureStore({
  reducer: {
    counter: counterSlices,
  },
});

export default store;
