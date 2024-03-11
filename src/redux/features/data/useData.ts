import { protectDataAsyncThunk } from "./actions";
import { useAppDispatch } from "../../App/typedHooks";
import { ProtectDataParams } from "@iexec/dataprotector";

export const useData = () => {
  const dispatch = useAppDispatch();

  const protectData = async (formData: ProtectDataParams) => {
   await dispatch(protectDataAsyncThunk(formData));
  };

  return {
    protectData,
  };
};
