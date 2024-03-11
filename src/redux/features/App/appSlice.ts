import { PayloadAction, createSlice } from "@reduxjs/toolkit/react";

interface IAppState {
  message: string;
  adress?: string;
}

const initialState: IAppState = {
  message: "",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    printMessage: (state: IAppState, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    setAdress: (state: IAppState, action: PayloadAction<string>) => {
      state.adress = action.payload
    }
  },
});

export const { printMessage , setAdress } = appSlice.actions
