import { combineReducers } from "@reduxjs/toolkit";
import { appSlice } from "../features/App/appSlice";
import { authSlice } from "../features/Auth/authSlice";
import { dataSlice } from "../features/data/dataSlice";
import { grantAccessSlice } from "../features/grantAccess/grantAccessSlice";

export const rootReducer = combineReducers({
  app: appSlice.reducer,
  auth: authSlice.reducer,
  data: dataSlice.reducer,
  grantAccess: grantAccessSlice.reducer,
});
