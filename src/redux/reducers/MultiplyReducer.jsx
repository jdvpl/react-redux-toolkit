import { createReducer } from "@reduxjs/toolkit";
import { multiply } from "../slices/multiplySlices";

// reducers
// builder notations
const initialState = {
  value: 1,
};

// map notation
// it uses an array to declar the action type
export const multiplySlices = createReducer(initialState, {
  [multiply]: (state, action) => {
    state.value *= action.payload;
  },
});
