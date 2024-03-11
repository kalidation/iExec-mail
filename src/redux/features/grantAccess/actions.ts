import { createAsyncThunk } from "@reduxjs/toolkit/react";
import { dataProtector } from "../../../main";
import { GrantAccessParams } from "@iexec/dataprotector";

export const grantAccessAsyncThunk = createAsyncThunk<void, GrantAccessParams>(
  "grantAccess/grantAccess",
  async ({ protectedData, authorizedApp, authorizedUser }) => {
    try {
      await dataProtector.grantAccess({
        protectedData,
        authorizedApp,
        authorizedUser,
      });
    } catch (e) {
      throw Error(`Error: ${(e as Error).message}`);
    }
  }
);
