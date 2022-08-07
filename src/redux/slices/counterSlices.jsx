import { createAction } from "@reduxjs/toolkit";

export const increment = createAction("INCREMENT/COUNTER");
export const decrement = createAction("DECREMENT/COUNTER");
export const increaseAmount = createAction("INCREASEAMOUNT/COUNTER");
