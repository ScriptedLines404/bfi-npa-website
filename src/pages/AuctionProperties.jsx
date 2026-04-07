/* src/pages/AuctionProperties.jsx */
import React from "react";
import { Link } from "react-router-dom";
import { 
  Building, Gavel, FileCheck, Shield, Users, Award, 
  ExternalLink, Clock, MapPin, TrendingUp, CheckCircle,
  Sparkles, Landmark, Briefcase, Search, Scale
} from "lucide-react";
import AnimatedCard from "../components/AnimatedCard";
import AnimatedSection from "../components/AnimatedSection";

const AuctionProperties = () => {
  const auctionWebsites = [
    {
      name: "BAANKNET",
      url: "https://baanknet.com/",
      description: "Bank Asset Auction Network - A state-of-the-art innovative property listing and e-auction platform designed specifically for banks and lending institutions.",
      features: ["87,204+ properties listed", "2,64,556+ auctions conducted", "₹20,524+ Cr auction value", "Mobile app available"],
      icon: Building,
      color: "from-[#5C3D2E] to-[#4A2F22]"
    },
    {
      name: "BankeAuctions",
      url: "https://www.bankeauctions.com/",
      description: "Most trusted portal in India for auction of bank foreclosed properties including movable and immovable properties.",
      features: ["Leading public & private banks using the portal", "Opportunity to own property below market price", "End-to-end transparency", "User-friendly interface"],
      icon: Gavel,
      color: "from-[#6B4226] to-[#5C3520]"
    },
    {
      name: "Auction Tiger (SARFAESI)",
      url: "https://sarfaesi.auctiontiger.net/EPROC/",
      description: "E-procurement platform specializing in SARFAESI Act auctions for bank-repossessed assets.",
      features: ["SARFAESI Act compliant", "Bank authorized auctions", "Secure bidding process", "PAN India coverage"],
      icon: Shield,
      color: "from-[#4A3728] to-[#3D2A22]"
    },
    {
      name: "BankAuctions.in",
      url: "https://bankauctions.in/",
      description: "Free, fair, and transparent platform for bank auctions across India.",
      features: ["Free access to auction information", "Transparent bidding process", "Multiple participating banks", "Live auction updates"],
      icon: Landmark,
      color: "from-[#5C3D2E] to-[#4A2F22]"
    },
    {
      name: "Matex Auctions",
      url: "https://assets.matexauctions.com/properties?type=1",
      description: "Asset auction platform featuring residential plots, commercial spaces, and industrial properties.",
      features: ["Residential & commercial properties", "Industrial assets available", "Contract-based listings", "Detailed property specifications"],
      icon: Briefcase,
      color: "from-[#6B4226] to-[#5C3520]"
    },
    {
      name: "Auction Bazaar",
      url: "https://www.auctionbazaar.com/",
      description: "Trusted marketplace for property needs - Bid, Buy, Borrow, Sell with transparent bidding process.",
      features: ["30+ locations across India", "₹500+ Cr value recovered", "10,000+ subscribed users", "Expert support available"],
      icon: Users,
      color: "from-[#4A3728] to-[#3D2A22]"
    }
  ];

  const processSteps = [
    {
      title: "Loan Default",
      description: "When a borrower fails to repay a secured loan, the account becomes a Non-Performing Asset (NPA).",
      icon: Clock,
      color: "from-[#8B5A3C] to-[#6B4226]"
    },
    {
      title: "Legal Notice",
      description: "Bank issues a demand notice under the SARFAESI Act, giving 60 days to repay the dues.",
      icon: FileCheck,
      color: "from-[#7A5238] to-[#5C3D2E]"
    },
    {
      title: "Asset Possession",
      description: "If dues remain unpaid, the bank takes symbolic or physical possession of the secured asset.",
      icon: Shield,
      color: "from-[#6B4226] to-[#4A2F22]"
    },
    {
      title: "Property Auction",
      description: "The property is listed on authorized e-auction platforms for transparent bidding.",
      icon: Gavel,
      color: "from-[#8B5A3C] to-[#6B4226]"
    },
    {
      title: "Successful Bid",
      description: "Registered bidders participate in the auction; the highest bidder wins the property.",
      icon: Award,
      color: "from-[#7A5238] to-[#5C3D2E]"
    },
    {
      title: "Sale Confirmation",
      description: "Bank issues a sale certificate, transferring ownership to the winning bidder.",
      icon: CheckCircle,
      color: "from-[#6B4226] to-[#4A2F22]"
    }
  ];

  const legalFrameworks = [
    {
      name: "SARFAESI Act, 2002",
      description: "Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act",
      details: "Allows banks and financial institutions to auction residential or commercial properties to recover loans without court intervention.",
      icon: Scale
    },
    {
      name: "RDDB Act, 1993",
      description: "Recovery of Debts Due to Banks and Financial Institutions Act",
      details: "Provides establishment of Debt Recovery Tribunals (DRTs) for expeditious adjudication and recovery of debts.",
      icon: Landmark
    },
    {
      name: "IBC, 2016",
      description: "Insolvency and Bankruptcy Code",
      details: "Time-bound process for resolution of stressed assets through NCLT, ensuring maximum value realization.",
      icon: Building
    }
  ];

  const handleNavigate = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="relative bg-[#3D2A22] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#FFF3E4] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFF3E4] rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection direction="up" threshold={0.3}>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-[#FFF3E4]/10 px-4 py-2 rounded-full mb-6">
                <Gavel className="w-4 h-4 text-[#FFF3E4]" />
                <span className="text-sm font-semibold text-[#FFF3E4]">Legal Property Auctions</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Auction Properties
              </h1>
              <p className="text-xl max-w-3xl mx-auto text-[#E8DCD0] leading-relaxed">
                Properties used as collateral for loans are auctioned legally after borrowers default. 
                These authorized platforms host transparent e-auctions for bank-repossessed assets.
              </p>
              <div className="w-24 h-1 bg-[#FFF3E4] rounded-full mx-auto mt-6"></div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Legal Process Explanation */}
      <section className="py-16 bg-[#FFF3E4]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3D2A22] mb-4">
              How Bank Property Auctions Work
            </h2>
            <p className="text-xl text-[#5C3D2E] max-w-3xl mx-auto">
              The entire auction process is fully legal and governed by Indian banking laws
            </p>
            <div className="w-24 h-1 bg-[#8B5A3C] rounded-full mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, idx) => (
              <AnimatedCard key={idx} delay={idx * 100} direction="up" className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-[#D4C5B5] hover:border-[#8B5A3C]">
                <div className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-4`}>
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-bold text-[#8B5A3C]">Step {idx + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-[#3D2A22] mb-2">{step.title}</h3>
                <p className="text-[#5C3D2E] text-sm">{step.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Frameworks Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3D2A22] mb-4">
              Legal Frameworks Governing Property Auctions
            </h2>
            <p className="text-xl text-[#5C3D2E] max-w-3xl mx-auto">
              These laws empower banks to recover dues through asset auction without court intervention
            </p>
            <div className="w-24 h-1 bg-[#8B5A3C] rounded-full mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {legalFrameworks.map((framework, idx) => (
              <AnimatedCard key={idx} delay={idx * 100} direction="up" className="bg-[#FFF3E4] rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-[#D4C5B5] hover:border-[#8B5A3C]">
                <div className="w-14 h-14 bg-[#8B5A3C]/10 rounded-xl flex items-center justify-center mb-4">
                  <framework.icon className="w-7 h-7 text-[#8B5A3C]" />
                </div>
                <h3 className="text-xl font-bold text-[#3D2A22] mb-2">{framework.name}</h3>
                <p className="text-sm text-[#8B5A3C] font-semibold mb-2">{framework.description}</p>
                <p className="text-[#5C3D2E] text-sm">{framework.details}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Auction Platforms Section */}
      <section className="py-16 bg-[#FFF3E4]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3D2A22] mb-4">
              Authorized Auction Platforms
            </h2>
            <p className="text-xl text-[#5C3D2E] max-w-3xl mx-auto">
              These government-approved platforms host transparent e-auctions for bank-repossessed properties
            </p>
            <div className="w-24 h-1 bg-[#8B5A3C] rounded-full mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {auctionWebsites.map((site, idx) => (
              <AnimatedCard key={idx} delay={idx * 100} direction="up" className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group border border-[#D4C5B5] hover:border-[#8B5A3C]">
                <div className={`bg-gradient-to-r ${site.color} p-4`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <site.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{site.name}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-[#5C3D2E] text-sm mb-4">{site.description}</p>
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-[#8B5A3C] mb-2">Key Features:</p>
                    <ul className="space-y-1">
                      {site.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-xs text-[#5C3D2E]">
                          <CheckCircle size={12} className="text-[#8B5A3C] flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={() => handleNavigate(site.url)}
                    className="w-full flex items-center justify-center gap-2 bg-[#8B5A3C] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#6B4226] transition-all duration-300"
                  >
                    Visit Platform <ExternalLink size={16} />
                  </button>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3D2A22] mb-4">
              Why Bid on Bank Auction Properties?
            </h2>
            <p className="text-xl text-[#5C3D2E] max-w-3xl mx-auto">
              Opportunity to acquire properties at competitive prices with bank-verified titles
            </p>
            <div className="w-24 h-1 bg-[#8B5A3C] rounded-full mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatedCard delay={100} direction="up" className="text-center p-6 bg-[#FFF3E4] rounded-xl shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#8B5A3C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-[#8B5A3C]" />
              </div>
              <h3 className="text-lg font-bold text-[#3D2A22] mb-2">Below Market Price</h3>
              <p className="text-[#5C3D2E] text-sm">Properties often available at 20-40% below market value</p>
            </AnimatedCard>

            <AnimatedCard delay={200} direction="up" className="text-center p-6 bg-[#FFF3E4] rounded-xl shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#8B5A3C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[#8B5A3C]" />
              </div>
              <h3 className="text-lg font-bold text-[#3D2A22] mb-2">Bank Verified Titles</h3>
              <p className="text-[#5C3D2E] text-sm">Properties come with clear and verified legal titles</p>
            </AnimatedCard>

            <AnimatedCard delay={300} direction="up" className="text-center p-6 bg-[#FFF3E4] rounded-xl shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#8B5A3C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-[#8B5A3C]" />
              </div>
              <h3 className="text-lg font-bold text-[#3D2A22] mb-2">PAN India Properties</h3>
              <p className="text-[#5C3D2E] text-sm">Access to thousands of properties across all major cities</p>
            </AnimatedCard>

            <AnimatedCard delay={400} direction="up" className="text-center p-6 bg-[#FFF3E4] rounded-xl shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#8B5A3C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCheck className="w-8 h-8 text-[#8B5A3C]" />
              </div>
              <h3 className="text-lg font-bold text-[#3D2A22] mb-2">Transparent Process</h3>
              <p className="text-[#5C3D2E] text-sm">Fully online e-auction with complete transparency</p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#FFF3E4]">
        <div className="container-custom text-center">
          <AnimatedSection direction="up" threshold={0.3}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3D2A22] mb-6">
              Ready to Explore Auction Properties?
            </h2>
            <p className="text-xl mb-8 text-[#5C3D2E] max-w-2xl mx-auto">
              Visit any of the authorized platforms above to find your next property investment
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="bg-[#8B5A3C] text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-[#6B4226] transition-all duration-300">
                Get Expert Consultation
              </Link>
              <Link to="/services" className="border-2 border-[#8B5A3C] text-[#8B5A3C] font-semibold py-3 px-8 rounded-lg hover:bg-[#8B5A3C] hover:text-white transition-all duration-300">
                Explore Our Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default AuctionProperties;