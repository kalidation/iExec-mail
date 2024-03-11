import React from "react";
import ReactDOM from "react-dom/client";
import { IExecDataProtector } from "@iexec/dataprotector";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { store } from "./redux/App/store.ts";
import App from "./App.tsx";
import "./index.css";
import "./assets/fonts/Mulish-Regular.ttf";
import "./utils/lang/i18n";

const web3Provider = window.ethereum;
export const dataProtector = new IExecDataProtector(web3Provider);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
