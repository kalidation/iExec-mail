import { GrantAccessParams } from "@iexec/dataprotector";
import { useAppDispatch } from "../../App/typedHooks";
import { grantAccessAsyncThunk } from "./actions";

export const useGrantAccess = () => {
  const dispatch = useAppDispatch();

  const grantAccess = async (params: GrantAccessParams) => {
    await dispatch(grantAccessAsyncThunk({ ...params }));
  };

  return {
    grantAccess,
  };
};
