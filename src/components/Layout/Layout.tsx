import { Outlet } from "react-router-dom";
import Header from "../features/Header/Header";

import "./Layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
