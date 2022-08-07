import { configureStore } from "@reduxjs/toolkit";
import { counterSlices } from "../reducers/CounterReducers";
import { multiplySlices } from "../reducers/MultiplyReducer";

const store = configureStore({
  reducer: {
    counter: counterSlices,
    multiples: multiplySlices,
  },
});

export default store;
