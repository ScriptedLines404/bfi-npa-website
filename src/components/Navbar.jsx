/* src/components/Navbar.jsx - Deep Navy + Amber Color Scheme */
import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [navbarColor, setNavbarColor] = useState("#0A2540");
  const [textColor, setTextColor] = useState("#FFFFFF");
  const [activeColor, setActiveColor] = useState("#F59E0B");

  // Define color schemes for each page (keeping Deep Navy + Amber theme)
  const getColorScheme = (path) => {
    // All pages now use Deep Navy + Amber theme
    return { bg: "#0A2540", text: "#FFFFFF", active: "#F59E0B" };
  };

  useEffect(() => {
    const scheme = getColorScheme(location.pathname);
    setNavbarColor(scheme.bg);
    setTextColor(scheme.text);
    setActiveColor(scheme.active);
  }, [location.pathname]);

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