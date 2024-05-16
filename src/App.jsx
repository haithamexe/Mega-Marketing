import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Works from "./pages/Works";
import Prices from "./pages/Prices";
import DataAnalysis from "./pages/DataAnalysis";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/works" element={<Works />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/data-analysis" element={<DataAnalysis />} />
      </Route>
    </Routes>
  );
}

export default App;
