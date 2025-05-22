import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Vault from "./Pages/Vault";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vault" element={<Vault />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
    </>
  );
};

export default App;
