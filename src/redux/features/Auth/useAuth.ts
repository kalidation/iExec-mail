import { useAppDispatch } from "../../App/typedHooks";
import { connectToMetaMaskAsyncThunk } from "./actions";

export const useAuth = () => {
  const dispatch = useAppDispatch();

  const connectToMetaMask = () => {
    dispatch(connectToMetaMaskAsyncThunk());
  };

  return {
    connectToMetaMask,
  };
};