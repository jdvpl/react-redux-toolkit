import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import clientAxios from "../../config/Axios";

// create the action

export const fetchUsers = createAsyncThunk(
  "getall/users",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await clientAxios("/users/getAll");
      return data;
    } catch (error) {
      return error?.response;
    }
  }
);

const userSlices = createSlice({
  name: "users",
  initialState: {},
  extraReducers: {
    // handling pending state
    [fetchUsers.pending]: (state, action) => {
      state.loading = true;
    },
    // handling fulfilled
    [fetchUsers.fulfilled]: (state, action) => {
      state.usersList = action.payload;
      state.loading = false;
    },
    // handling reject
    [fetchUsers.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default userSlices.reducer;
