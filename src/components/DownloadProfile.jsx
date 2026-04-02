/* src/components/DownloadProfile.jsx */
import React from "react";
import { Download } from "lucide-react";

const DownloadProfile = () => {
  const handleDownload = () => {
    // In production, this would link to an actual PDF
    alert("Company profile PDF would download here.");
  };

  return (
    <button
      onClick={handleDownload}
      className="flex items-center gap-2 bg-primary-dark text-white px-6 py-3 rounded-lg hover:bg-primary-dark/90 transition-all"
    >
      <Download size={18} />
      Download Profile (PDF)
    </button>
  );
};

export default DownloadProfile;