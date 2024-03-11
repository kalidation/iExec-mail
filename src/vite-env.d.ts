/// <reference types="vite/client" />
/// <reference types="vitest" />

import { ExternalProvider } from "ethers"

declare global {
  interface Window {
    ethereum: ExternalProvider;
  }
}
