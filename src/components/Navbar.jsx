/* src/components/Navbar.jsx - Consistent Navy + Amber Color Scheme */
import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Consistent color scheme matching Home page
  const navbarColor = "#0A2540"; // Navy Blue
  const textColor = "#FFFFFF"; // White
  const activeColor = "#F59E0B"; // Amber
  const hoverColor = "#F59E0B"; // Amber on hover

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Track Record", path: "/track-record" },
    { name: "Auction Properties", path: "/auction-properties" },
    { name: "Legal Mechanisms for NPAs", path: "/legal-mechanisms" },
    { name: "Resolution Mechanisms", path: "/resolution-mechanisms" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav 
      className="sticky top-0 z-50 shadow-lg transition-colors duration-500"
      style={{ backgroundColor: navbarColor }}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link 
            to="/" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center"
          >
            <img 
              src="/src/images/BFI-NPA_Logo-1.png" 
              alt="BFI-NPA" 
              className="h-12 w-auto object-contain brightness-0 invert"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/120x40/0A2540/F59E0B?text=BFI-NPA";
              }}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                style={{ color: textColor }}
                className={({ isActive }) =>
                  `transition-colors text-sm ${
                    isActive ? "font-semibold" : "hover:text-[#F59E0B]"
                  }`
                }
                activeStyle={{ color: activeColor }}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden transition-colors"
            style={{ color: textColor }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => { 
                  setIsOpen(false); 
                  window.scrollTo({ top: 0, behavior: 'smooth' }); 
                }}
                style={{ color: textColor }}
                className={({ isActive }) =>
                  `block transition-colors py-2 ${
                    isActive ? "font-semibold" : "hover:text-[#F59E0B]"
                  }`
                }
                activeStyle={{ color: activeColor }}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;