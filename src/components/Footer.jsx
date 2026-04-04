/* src/components/Footer.jsx */
import React from "react";
import { useNavigate } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();

  // Service ID mapping for navigation
  const serviceMapping = {
    "Collections & Recovery": "collections-recovery",
    "SARFAESI Actions": "sarfaesi-actions",
    "Legal Coordination & DRT Support": "legal-coordination",
    "Asset Identification & Skip Tracing": "skip-tracing",
    "E-Auction & Sale Facilitation": "e-auction",
    "Custodial, Security & Handover": "custody-services"
  };

  // Handle navigation to any page with scroll to top
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle service navigation using sessionStorage
  const handleServiceNavigation = (serviceName) => {
    const serviceId = serviceMapping[serviceName];
    if (serviceId) {
      sessionStorage.setItem('targetService', serviceId);
      navigate("/services");
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Track Record", path: "/track-record" },
    { name: "Legal Mechanisms for NPAs", path: "/legal-mechanisms" },
    { name: "Resolution Mechanisms", path: "/resolution-mechanisms" },
    { name: "Contact", path: "/contact" }
  ];

  const services = [
    "Collections & Recovery",
    "SARFAESI Actions",
    "Legal Coordination & DRT Support",
    "Asset Identification & Skip Tracing",
    "E-Auction & Sale Facilitation",
    "Custodial, Security & Handover"
  ];

  return (
    <footer className="bg-primary-dark text-gray-300 pt-12 pb-6">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About with Logo */}
          <div>
            <button 
              onClick={() => handleNavigation("/")}
              className="block mb-4 cursor-pointer"
            >
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
            </button>
            <p className="text-sm leading-relaxed">
              India's trusted NPA recovery partner for banks, NBFCs & ARCs. 
              25+ years of excellence.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <button 
                    onClick={() => handleNavigation(item.path)}
                    className="text-gray-400 hover:text-primary-orange transition-colors text-sm cursor-pointer"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <button 
                    onClick={() => handleServiceNavigation(service)}
                    className="text-gray-400 hover:text-primary-orange transition-colors text-sm cursor-pointer text-left"
                  >
                    {service}
                  </button>
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