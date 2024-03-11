import { createAsyncThunk } from "@reduxjs/toolkit/react";
import { dataProtector } from "../../../main";
import { RootState } from "../../App/store";
import { ProtectDataParams, ProtectedData } from "@iexec/dataprotector";

export const fetchProtectedDataAsyncThunk = createAsyncThunk<ProtectedData[]>(
  "data/fetchProtectedData",
  async (_, { getState }) => {
    try {
      const owner = (getState() as RootState).app.adress;

      const listProtectedData = await dataProtector.fetchProtectedData({
        requiredSchema: {
          email: "string",
        },
        owner,
      });
      console.log(listProtectedData);
      
      return listProtectedData;
    } catch (e) {
      throw Error(`Error: ${(e as Error).message}`);
    }
  },
  {
    condition: (_, thunk) => {
      if ((thunk.getState() as RootState).app.adress) {
        return true;
      }
    },
  }
);

export const protectDataAsyncThunk = createAsyncThunk<void, ProtectDataParams>(
  "data/protectData",
  async (formData, { dispatch }) => {
    try {
      await dataProtector.protectData(formData);
      dispatch(fetchProtectedDataAsyncThunk());
    } catch (e) {
      throw Error(`Error: ${(e as Error).message}`);
    }
  }
);
