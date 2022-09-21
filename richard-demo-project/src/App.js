import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import "./App.css";
import Section_5 from "./Components/Section_5/Section_5";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Header />
        <Section_5/>

        <Routes>
          <Route />
        </Routes>
      </Router>
      <div className="container">
        <div className="row">
          <div className="col-8"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
