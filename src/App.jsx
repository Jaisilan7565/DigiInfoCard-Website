import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Individual from "./pages/Individual";
import ScrollToHashElement from "./components/ScrollToHashElement";

const App = () => {
  return (
    <Router>
      <ScrollToHashElement />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/individual" element={<Individual />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

