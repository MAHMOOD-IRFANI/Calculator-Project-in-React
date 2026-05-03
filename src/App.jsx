import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home Page/Home";
import Navbar from "./Components/Home Page/Navbar/Navbar";
import Notification from "./Components/Notification/Notification";
import Rendering from "./Components/Conditional/Rendering";
import Calculator from "./Components/Calculator/Calculator";

// import Navbar from "./assets/component/Navbar";
// import Home from "./assets/component/Home";
// import About from "./assets/component/about/About";
// import Contact from "./assets/component/contact/Contact";
// import Footer from "./assets/component/footer/Footer";

// Example pages

function App() {
  return (
    <div className="bg-[#101216] h-[100vh] flex items-center justify-center flex-col">
      <div>
        <h1 className="text-white text-2xl font-bold mb-4">
          Calculator for Calculation
        </h1>

        <p className="text-white">MAHMOOD IRFANI (SB)</p>
      </div>
      <Calculator />
      {/* 

      <Navbar >
        
      </Navbar> */}

      {/* <Rendering /> */}

      {/* <Home /> */}
      {/* <Navbar />
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer /> */}
    </div>
  );
}

export default App;
