import { createSlice } from "@reduxjs/toolkit/react";
import { ProtectedData } from "../../../../node_modules/@iexec/dataprotector/dist/dataProtector/types.ts";
import { fetchProtectedDataAsyncThunk, protectDataAsyncThunk } from "./actions.ts";
import { IRequestState } from "../../../utils/types.ts";

interface IDataState {
  fetchProtectedDataState: IRequestState<ProtectedData[]>;
  protectDataState: IRequestState<undefined>;
}

const initialState: IDataState = {
  fetchProtectedDataState: {
    isLoading: false,
    isError: false,
  },
  protectDataState: {
    isLoading: false,
    isError: false,
  },
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProtectedDataAsyncThunk.pending, (state) => {
      state.fetchProtectedDataState.isLoading = true;
      state.fetchProtectedDataState.isError = false;
      state.fetchProtectedDataState.error = undefined;
      state.fetchProtectedDataState.data = undefined;
    });
    builder.addCase(fetchProtectedDataAsyncThunk.fulfilled, (state, action) => {
      state.fetchProtectedDataState.isLoading = false;
      state.fetchProtectedDataState.data = action.payload;
    });
    builder.addCase(fetchProtectedDataAsyncThunk.rejected, (state, action) => {
      state.fetchProtectedDataState.isLoading = false;
      state.fetchProtectedDataState.isError = true;
      state.fetchProtectedDataState.error = action.error.message;
    });
    /**
     * PROTECT DATA REDUCER
     */
    builder.addCase(protectDataAsyncThunk.pending, (state) => {
      state.protectDataState.isLoading = true;
      state.protectDataState.isError = false;
      state.protectDataState.error = undefined;
    });
    builder.addCase(protectDataAsyncThunk.fulfilled, (state) => {
      state.protectDataState.isLoading = false;
    });
    builder.addCase(protectDataAsyncThunk.rejected, (state, action) => {
      state.protectDataState.isLoading = false;
      state.protectDataState.isError = true;
      state.protectDataState.error = action.error.message;
    });
  },
});
