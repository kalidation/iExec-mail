import { Route, Routes } from "react-router-dom";
import "./App.css";
import Authorize from "./pages/Authorize";
import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";
import { ROUTES_URL } from "./pages/routes";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path={ROUTES_URL.HOME_ROUTE} element={<Home />} />
        <Route path={ROUTES_URL.AUTH_ROUTE} element={<Authorize />} />
      </Route>
    </Routes>
  );
}

export default App;
