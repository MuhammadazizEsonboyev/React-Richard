import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./Components/Header/Header";
import "./App.css"




function App() {
  

  return (
    <div className="app">
      <Router>
      <Navbar/>
      <Header/>

        <Routes>
        <Route />
         
        </Routes>
      </Router>
      <div className="container">
        <div className="row">
          <div className="col-8">
           
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
