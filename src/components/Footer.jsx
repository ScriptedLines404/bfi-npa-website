/* src/components/Footer.jsx */
import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-gray-300 pt-12 pb-6">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About with Logo */}
          <div>
            <Link to="/" className="block mb-4">
              <img 
                src="/src/images/BFI-NPA_Logo-1.png" 
                alt="BFI-NPA" 
                className="h-12 w-auto object-contain mb-3"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<h3 className="text-white text-xl font-bold">BFI-NPA</h3>';
                }}
              />
            </Link>
            <p className="text-sm leading-relaxed">
              India's trusted NPA recovery partner for banks, NBFCs & ARCs. 
              25+ years of excellence.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Track Record", path: "/track-record" },
                { name: "Legal Mechanisms for NPAs", path: "/legal-mechanisms" },
                { name: "Resolution Mechanisms", path: "/resolution-mechanisms" },
                { name: "Contact", path: "/contact" }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-gray-400 hover:text-primary-orange transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                "Collections & Recovery",
                "SARFAESI Actions",
                "Legal Coordination & DRT Support",
                "Asset Identification & Skip Tracing",
                "E-Auction & Sale Facilitation",
                "Custodial, Security & Handover"
              ].map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-gray-400 hover:text-primary-orange transition-colors text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone size={16} className="text-primary-orange" /> 
                <span>+91 94440 35070</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail size={16} className="text-primary-orange" /> 
                <span>bfirspl@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin size={16} className="text-primary-orange" /> 
                <span>Chennai, Tamil Nadu</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
          <p>&copy; 2024 BFI-NPA Resolution Services Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;