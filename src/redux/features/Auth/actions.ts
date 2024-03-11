import { createAsyncThunk } from "@reduxjs/toolkit";
import { printMessage, setAdress } from "../App/appSlice";
import { fetchProtectedDataAsyncThunk } from "../data/actions";

export const connectToMetaMaskAsyncThunk = createAsyncThunk(
  "auth/connectToMetaMask",
  async (_, { dispatch }) => {
    try {
      if (!window.ethereum || !window.ethereum.isMetaMask) {
        throw Error(
          "Please install MetaMask plugin first, visit https://metamask.io/download"
        );
      }

      const [address] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      dispatch(printMessage(`MetaMask unlocked for address ${address}`));
      dispatch(setAdress(address as string))

      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0x86",
            chainName: "iExec Sidechain",
            nativeCurrency: {
              name: "xRLC",
              symbol: "xRLC",
              decimals: 18,
            },
            rpcUrls: ["https://bellecour.iex.ec"],
            blockExplorerUrls: ["https://blockscout-bellecour.iex.ec"],
          },
        ],
      });
      dispatch(printMessage("iExec  Sidechain added to MetaMask"));

      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [
          {
            chainId: "0x86",
          },
        ],
      });
      dispatch(printMessage(`MetaMask network switched to iExec Sidechain`));
      dispatch(fetchProtectedDataAsyncThunk())
    } catch (e) {
      dispatch(printMessage(""));
      throw Error(`Error: ${(e as Error).message}`);
    }
  }
);
