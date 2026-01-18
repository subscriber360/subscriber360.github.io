import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/sections/Home";
import WorkExperience from "./components/sections/WorkExperience";
import Resume from "./components/sections/Resume";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<WorkExperience />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
