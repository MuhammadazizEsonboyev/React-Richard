import React from "react";
import Header from "./Components/Header/Header";
import Section1 from "./Components/Section1/Section1";
import Section5 from "./Components/Section5/Section5";
import Section2 from "./Components/Section2/Section2"
import Section6 from "./Components/Section6/Section6";
import Footer from "./Components/Footer/Footer";


export default function App() {
  return (
    <div className="app">

      <Header />
      <Section1/>
      <Section2 />
      <Section5/>
      <Section6 />
      <Footer />
 
    </div>
  )
}

