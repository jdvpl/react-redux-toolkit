import { createReducer } from "@reduxjs/toolkit";
import { decrement, increaseAmount, increment } from "../slices/counterSlices";

// reducers
// builder notations
const initialState = {
  value: 0,
};
export const counterSlices = createReducer(initialState, (buider) => {
  buider.addCase(increment, (state, action) => {
    state.value++;
  });
  buider.addCase(decrement, (state, action) => {
    state.value--;
  });
  buider.addCase(increaseAmount, (state, action) => {
    state.value = action.payload;
  });
});
