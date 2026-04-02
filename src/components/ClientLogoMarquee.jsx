/* src/components/ClientLogoMarquee.jsx */
import React from "react";

const ClientLogoMarquee = () => {
  // Replace these with your actual image URLs
  const logos = [
    { name: "PNB", imageUrl: "src/logo/PNB.jpg", type: "image" },
    { name: "IDFC First Bank", imageUrl: "src/logo/IDFC.jpg", type: "image" },
    { name: "Edelweiss ARC", imageUrl: "src/logo/Edelweiss_ARC.jpg", type: "image" },
    { name: "JM Financial", imageUrl: "src/logo/JM.jpg", type: "image" },
    { name: "Reliance ARC", imageUrl: "src/logo/Reliance.jpg", type: "image" },
  ];

  // Double the array for seamless looping
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="bg-primary-grey py-12 overflow-hidden">
      <div className="container-custom">
        <p className="text-center text-gray-600 mb-8 font-semibold tracking-wide">
          TRUSTED BY LEADING FINANCIAL INSTITUTIONS
        </p>
        <div className="relative">
          <div className="flex animate-marquee whitespace-nowrap">
            {duplicatedLogos.map((logo, idx) => (
              <div
                key={idx}
                className="mx-4 bg-white rounded-xl shadow-md inline-flex items-center justify-center transition-all hover:shadow-xl"
                style={{ 
                  width: "300px", 
                  height: "80px",
                  aspectRatio: "15/4"
                }}
              >
                {logo.type === "image" && logo.imageUrl ? (
                  <img 
                    src={logo.imageUrl} 
                    alt={logo.name}
                    className="max-h-14 w-auto object-contain px-4"
                    style={{ maxWidth: "90%" }}
                    onError={(e) => {
                      // Fallback to text if image fails to load
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `<span class="font-bold text-primary-dark text-lg">${logo.name}</span>`;
                    }}
                  />
                ) : (
                  <span className="font-bold text-primary-dark text-lg px-4">{logo.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientLogoMarquee;