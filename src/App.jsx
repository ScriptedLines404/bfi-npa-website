/* App.jsx */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import TrackRecord from "./pages/TrackRecord";
import LegalMechanisms from "./pages/LegalMechanisms";
import ResolutionMechanisms from "./pages/ResolutionMechanisms";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import StickyCTA from "./components/StickyCTA";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/track-record" element={<TrackRecord />} />
          <Route path="/legal-mechanisms" element={<LegalMechanisms />} />
          <Route path="/resolution-mechanisms" element={<ResolutionMechanisms />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <FloatingWhatsApp />
        <StickyCTA />
      </div>
    </Router>
  );
}

export default App;