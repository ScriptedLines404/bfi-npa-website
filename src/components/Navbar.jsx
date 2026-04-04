/* src/components/Navbar.jsx */
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Track Record", path: "/track-record" },
    { name: "Legal Mechanisms for NPAs", path: "/legal-mechanisms" },
    { name: "Resolution Mechanisms", path: "/resolution-mechanisms" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-[#064E3B] sticky top-0 z-50 shadow-lg">
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
              className="h-12 w-auto object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/120x40/064E3B/10B981?text=BFI-NPA";
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
                className={({ isActive }) =>
                  `text-[#A7F3D0] hover:text-[#F59E0B] transition-colors text-sm ${
                    isActive ? "text-[#F59E0B] font-semibold" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#A7F3D0] hover:text-[#F59E0B] transition-colors"
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
                className={({ isActive }) =>
                  `block text-[#A7F3D0] hover:text-[#F59E0B] transition-colors py-2 ${
                    isActive ? "text-[#F59E0B] font-semibold" : ""
                  }`
                }
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