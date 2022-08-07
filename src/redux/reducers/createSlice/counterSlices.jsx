import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlices = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value++;
    },
    decrement: (state, action) => {
      state.value--;
    },
    increaseAmount: (state, action) => {
      state.value += action.payload;
    },
    multiplication: (state, action) => {
      state.value *= action.payload;
    },
    divide: (state, action) => {
      state.value /= action.payload;
    },
  },
});

// generate the action creator
export const { increment, decrement, increaseAmount, multiplication, divide } =
  counterSlices.actions;

// export reducers
export default counterSlices.reducer;
