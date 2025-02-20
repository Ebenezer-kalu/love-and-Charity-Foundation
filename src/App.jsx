import React from "react";

import Hero from "./hero";
import Header from "./header";
import Navbar from "./navbar";
import AboutUs from "./aboutus";
import Environmental from "./environmental";
import Social from "./social";
import Governmental from "./governmental";
import Contact from "./contact";
import Footer from "./footer";
import Support from "./support"



function App() {
 
  return (
    <div>
      <Header/>
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <Environmental/>
      <Social/>
      <Governmental/>
      <Support/>
      <Contact/>
      <Footer/>
     
      
    </div>
  );
}

export default App;
