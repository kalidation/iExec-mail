import { createSlice } from "@reduxjs/toolkit/react";
import { grantAccessAsyncThunk } from "./actions";
import { IRequestState } from "../../../utils/types";

interface IState extends IRequestState<undefined> {}

const initialState: IState = {
  isError: false,
  isLoading: false,
};

export const grantAccessSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(grantAccessAsyncThunk.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = undefined;
      // state.isSuccess = false;
    }),
      builder.addCase(grantAccessAsyncThunk.fulfilled, (state) => {
        state.isLoading = false;
        // state.isSuccess = true;
      }),
      builder.addCase(grantAccessAsyncThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});
