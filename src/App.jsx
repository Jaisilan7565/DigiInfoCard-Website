import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Individual from "./pages/Individual";
import Corporate from "./pages/Corporate";
import AboutUs from "./pages/AboutUs";
import ScrollToHashElement from "./components/ScrollToHashElement";

const App = () => {
  return (
    <Router>
      <ScrollToHashElement />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/individual" element={<Individual />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
