import React from "react";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Produtos from "./components/Produtos";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="produto" element={<Produtos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
