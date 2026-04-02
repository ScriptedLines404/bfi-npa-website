/* src/components/StickyCTA.jsx */
import React from "react";
import { Link } from "react-router-dom";

const StickyCTA = () => {
  return (
    <Link
      to="/contact"
      className="fixed left-0 top-1/2 transform -translate-y-1/2 bg-primary-orange text-white font-semibold py-4 px-4 rounded-r-lg shadow-lg hover:bg-primary-orange/90 transition-all z-40 writing-mode-vertical"
      style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
    >
      Submit Case
    </Link>
  );
};

export default StickyCTA;