import { createSlice } from "@reduxjs/toolkit/react";
import { connectToMetaMaskAsyncThunk } from "./actions";
import { IRequestState } from "../../../utils/types";

interface IAuthState extends IRequestState<undefined> {}

const initialState: IAuthState = {
  isLoading: false,
  isError: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(connectToMetaMaskAsyncThunk.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = undefined;
    });
    builder.addCase(connectToMetaMaskAsyncThunk.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(connectToMetaMaskAsyncThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });
  },
});
