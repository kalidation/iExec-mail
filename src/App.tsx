import { Route, Routes } from "react-router-dom";
import './App.css'
import Authorize from "./pages/Authorize";
import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";

function App() {

  return (
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Home /> } />
          <Route path="/authorize" element={<Authorize />} />
        </Route>
      </Routes>
  );
}

export default App;
