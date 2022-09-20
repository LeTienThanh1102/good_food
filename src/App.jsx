import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import InFor from "./compontents/information/InFor";
import Layout from "./compontents/layout/Layout";
import Login from "./compontents/login/Login";
import Sale from "./compontents/sales/Sale";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/infor" element={<InFor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
