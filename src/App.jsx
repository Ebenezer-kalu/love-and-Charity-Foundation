import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";

import Environmental from "./Environmental";
import Social from "./Social";
import Governmental from "./Governmental";
import ContactUs from "./ContactUs";
import Support from "./Support";

function App() {
  return (
    <div className="content">
      <Navbar />
      <Routes>  {/* ✅ No BrowserRouter here */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        <Route path="/environmental" element={<Environmental />} />
        <Route path="/social" element={<Social />} />  // ✅ Path should be lowercase
        <Route path="/governmental" element={<Governmental />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </div>
  );
}

export default App;
