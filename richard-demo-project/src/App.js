import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./Components/Header/Header";
import Section1 from "./Components/Section1/Section1";
import Section2 from "./Components/Section2/Section2";
import Section3 from "./Components/Section3/Section3";
import Section4 from "./Components/Section4/Section4";
import Section5 from "./Components/Section5/Section5";
import Section6 from "./Components/Section6/Section6";


export default function App() {
  return (
    <>
      
      <Header />
      <Section1 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Router>
        <Routes>
        <Route path="/section2" element={<Section2 />}></Route>
        <Route path="/section4" element={<Section4 />}></Route>
        <Route path="/section5" element={<Section5 />}></Route>
        <Route path="/section6" element={<Section6 />}></Route>

        </Routes>
      </Router>

    </>
  )
}
