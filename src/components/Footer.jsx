/* src/components/Footer.jsx - Deep Navy + Amber Color Scheme */
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [footerColor, setFooterColor] = useState("#0A2540");
  const [textColor, setTextColor] = useState("#9CA3AF");
  const [headingColor, setHeadingColor] = useState("#FFFFFF");

  // Define color schemes for each page (keeping Deep Navy + Amber theme)
  const getColorScheme = (path) => {
    // All pages now use Deep Navy + Amber theme
    return { bg: "#0A2540", text: "#9CA3AF", heading: "#FFFFFF" };
  };

  useEffect(() => {
    const scheme = getColorScheme(location.pathname);
    setFooterColor(scheme.bg);
    setTextColor(scheme.text);
    setHeadingColor(scheme.heading);
  }, [location.pathname]);

  const serviceMapping = {
    "Collections & Recovery": "collections-recovery",
    "SARFAESI Actions": "sarfaesi-actions",
    "Legal Coordination & DRT Support": "legal-coordination",
    "Asset Identification & Skip Tracing": "skip-tracing",
    "E-Auction & Sale Facilitation": "e-auction",
    "Custodial, Security & Handover": "custody-services"
  };

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
    <footer 
      className="pt-12 pb-6 transition-colors duration-500"
      style={{ backgroundColor: footerColor }}
    >
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
                className="h-12 w-auto object-contain brightness-0 invert"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `<h3 style={{ color: headingColor }} className="text-xl font-bold">BFI-NPA</h3>`;
                }}
              />
            </button>
            <p className="text-sm leading-relaxed" style={{ color: textColor }}>
              India's trusted NPA recovery partner for banks, NBFCs & ARCs. 
              25+ years of excellence.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: headingColor }}>Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <button 
                    onClick={() => handleNavigation(item.path)}
                    className="text-sm cursor-pointer transition-colors hover:text-[#F59E0B]"
                    style={{ color: textColor }}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: headingColor }}>Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <button 
                    onClick={() => handleServiceNavigation(service)}
                    className="text-sm cursor-pointer text-left transition-colors hover:text-[#F59E0B]"
                    style={{ color: textColor }}
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: headingColor }}>Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm" style={{ color: textColor }}>
                <Phone size={16} className="flex-shrink-0 text-[#F59E0B]" /> 
                <span>+91 94440 35070</span>
              </li>
              <li className="flex items-center gap-2 text-sm" style={{ color: textColor }}>
                <Mail size={16} className="flex-shrink-0 text-[#F59E0B]" /> 
                <span>bfirspl@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 text-sm" style={{ color: textColor }}>
                <MapPin size={16} className="flex-shrink-0 text-[#F59E0B]" /> 
                <span>Chennai, Tamil Nadu</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div 
          className="mt-8 pt-6 text-center text-sm"
          style={{ borderTop: `1px solid ${textColor}20`, color: textColor }}
        >
          <p>&copy; 2024 BFI-NPA Resolution Services Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;