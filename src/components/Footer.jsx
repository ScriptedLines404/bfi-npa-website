/* src/components/Footer.jsx - Consistent Navy + Amber Color Scheme */
import React from "react";
import { useNavigate } from "react-router-dom";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();

  // Consistent color scheme matching Navbar and Home page
  const footerColor = "#0A2540"; // Navy Blue
  const textColor = "#9CA3AF"; // Light gray
  const headingColor = "#FFFFFF"; // White
  const accentColor = "#F59E0B"; // Amber for hover states

  const serviceMapping = {
    "Collections & Recovery": "collections-recovery",
    "SARFAESI Actions": "sarfaesi-actions",
    "Legal Coordination & DRT Support": "legal-coordination",
    "Asset Identification & Skip Tracing": "skip-tracing",
    "E-Auction & Sale Facilitation": "e-auction",
    "Custodial, Security & Handover": "custody-services"
  };

  // Auction platforms for the Auction Properties page
  const auctionPlatforms = [
    { name: "BAANKNET", url: "https://baanknet.com/" },
    { name: "BankeAuctions", url: "https://www.bankeauctions.com/" },
    { name: "Auction Tiger (SARFAESI)", url: "https://sarfaesi.auctiontiger.net/EPROC/" },
    { name: "BankAuctions.in", url: "https://bankauctions.in/" },
    { name: "Matex Auctions", url: "https://assets.matexauctions.com/properties?type=1" },
    { name: "Auction Bazaar", url: "https://www.auctionbazaar.com/" }
  ];

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

  const handleAuctionPlatformClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Track Record", path: "/track-record" },
    { name: "Auction Properties", path: "/auction-properties" },
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
          
          {/* Auction Platforms */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: headingColor }}>Auction Platforms</h3>
            <ul className="space-y-2">
              {auctionPlatforms.map((platform) => (
                <li key={platform.name}>
                  <button 
                    onClick={() => handleAuctionPlatformClick(platform.url)}
                    className="text-sm cursor-pointer text-left transition-colors hover:text-[#F59E0B] flex items-center gap-1"
                    style={{ color: textColor }}
                  >
                    {platform.name}
                    <ExternalLink size={12} className="opacity-70" />
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