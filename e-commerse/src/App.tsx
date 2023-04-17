import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authentication from "./Screens/LogIn";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { AddProducts } from "./Screens/Addproduct";
import { GlobalStyle } from "./GlobalStyle";

const App = () => {

  return (
    <BrowserRouter>
    <GlobalStyle/>
      <Authentication />
      <AddProducts/>

      <Routes>
        <Route path="/home" element={<div>hii</div>} />
        <Route path="/about" element={<div>hii</div>} />
        <Route path="/skills" element={<div>hii</div>} />
        <Route path="/contact" element={<div>hii</div>} />
        <Route path="/services" element={<div>hii</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
