/* src/pages/Services.jsx */
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Briefcase, Gavel, Scale, Search, TrendingUp, Shield,
  CheckCircle, ArrowRight, Clock, FileText, Building, Users 
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import AnimatedCard from "../components/AnimatedCard";
import AnimatedSection from "../components/AnimatedSection";

const Services = () => {
  const location = useLocation();
  const [activeService, setActiveService] = useState(0);
  const [hasScrolledToHash, setHasScrolledToHash] = useState(false);
  
  const services = [
    {
      id: "collections-recovery",
      icon: Briefcase,
      title: "Collections & Recovery",
      shortDesc: "Soft and hard collections, including follow-ups and enforcement",
      description: "Comprehensive debt recovery solutions combining professional follow-ups with legal enforcement when necessary.",
      longDescription: "We provide end-to-end collections and recovery services that combine systematic follow-ups with strategic enforcement actions. Our approach ensures maximum recovery while maintaining professional relationships with borrowers.",
      benefits: [
        "Structured follow-up processes",
        "Professional negotiation techniques",
        "Legal enforcement when required",
        "Regular progress reporting",
        "Customized recovery strategies"
      ],
      process: ["Initial assessment", "Soft collection calls", "Legal notices", "Enforcement action", "Recovery closure"]
    },
    {
      id: "sarfaesi-actions",
      icon: Gavel,
      title: "SARFAESI Actions",
      shortDesc: "Section 14 orders, evictions, and physical possession",
      description: "Fast-track enforcement of security interests under SARFAESI Act 2002.",
      longDescription: "We specialize in complete SARFAESI enforcement actions including Section 13(2) notices, Section 13(4) possession, and Section 14 magistrate orders. Our experienced team handles the entire process from notice issuance to physical possession.",
      benefits: [
        "Section 13(2) demand notice management",
        "Section 13(4) symbolic possession",
        "Section 14 magistrate order execution",
        "Physical possession and eviction",
        "Complete documentation and compliance"
      ],
      process: ["Demand notice (13(2))", "Symbolic possession (13(4))", "Magistrate order (14)", "Physical possession", "Asset takeover"]
    },
    {
      id: "legal-coordination",
      icon: Scale,
      title: "Legal Coordination & DRT Support",
      shortDesc: "Liaison with legal authorities, assisting in DRT proceedings",
      description: "End-to-end legal coordination for DRT proceedings and recovery orders.",
      longDescription: "We provide comprehensive legal coordination services including DRT representation, filing of recovery applications, and execution of recovery certificates. Our legal team ensures seamless coordination with courts and authorities.",
      benefits: [
        "DRT representation and filings",
        "Recovery certificate execution",
        "Coordination with legal authorities",
        "Documentation and evidence preparation",
        "Appellate tribunal support"
      ],
      process: ["Case analysis", "Document preparation", "Filing in DRT", "Hearings", "Order execution"]
    },
    {
      id: "skip-tracing",
      icon: Search,
      title: "Asset Identification & Skip Tracing",
      shortDesc: "Tracing borrowers and identifying movable/immovable assets",
      description: "Advanced skip tracing and asset identification services for locating borrowers and hidden assets.",
      longDescription: "Our specialized skip tracing services help locate absconding borrowers and identify both movable and immovable assets. We use advanced techniques and field investigations to trace individuals and uncover undisclosed properties.",
      benefits: [
        "Borrower location and verification",
        "Movable asset identification",
        "Immovable property discovery",
        "Hidden asset investigation",
        "Comprehensive asset reports"
      ],
      process: ["Profile analysis", "Field investigation", "Asset search", "Verification", "Detailed reporting"]
    },
    {
      id: "e-auction",
      icon: TrendingUp,
      title: "E-Auction & Sale Facilitation",
      shortDesc: "Property identification, buyer sourcing, and complete auction support",
      description: "Complete e-auction management and sale facilitation for maximum asset value realization.",
      longDescription: "We facilitate high-value asset auctions through public e-auctions and private treaty sales. Our team identifies potential buyers, coordinates with valuers, ensures transparent bidding processes, and manages complete sale documentation.",
      benefits: [
        "Property identification and valuation",
        "Wide buyer network across India",
        "Transparent e-auction process",
        "Buyer onboarding and education",
        "Complete sale documentation"
      ],
      process: ["Asset valuation", "Buyer sourcing", "Auction setup", "Bidding process", "Sale confirmation", "Registration"]
    },
    {
      id: "custody-services",
      icon: Shield,
      title: "Custodial, Security & Handover",
      shortDesc: "Asset protection, registration support, and possession handover",
      description: "Professional custody services for asset protection during recovery process.",
      longDescription: "We provide professional custody services to protect and preserve assets during the recovery process. Our security teams ensure 24/7 protection, maintenance, and proper handover of secured assets with complete registration support.",
      benefits: [
        "24/7 security surveillance",
        "Asset maintenance and upkeep",
        "Inventory management",
        "Legal handover documentation",
        "Registration support services"
      ],
      process: ["Asset takeover", "Security deployment", "Maintenance", "Monitoring", "Legal handover", "Registration"]
    }
  ];

  // Handle hash navigation from home page
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && !hasScrolledToHash) {
      const serviceIndex = services.findIndex(service => service.id === hash);
      if (serviceIndex !== -1) {
        setActiveService(serviceIndex);
        setHasScrolledToHash(true);
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
          }
        }, 500);
      }
    }
  }, [location, services, hasScrolledToHash]);

  return (
    <div className="animate-fade-in">
      {/* Hero Section - No Animation */}
      <div className="relative bg-gradient-to-r from-primary-dark via-primary-dark to-primary-dark/95 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary-orange rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-orange rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Briefcase className="w-4 h-4 text-primary-orange" />
              <span className="text-sm font-semibold">Our Expertise</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-200 leading-relaxed">
              Comprehensive NPA Resolution Solutions tailored to your needs
            </p>
          </div>
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <AnimatedCard delay={100} direction="right" className="bg-primary-grey rounded-xl p-4 sticky top-24">
                <h3 className="font-bold text-lg mb-4 px-3 text-primary-dark">Our Services</h3>
                {services.map((service, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveService(idx);
                      setHasScrolledToHash(false);
                      setTimeout(() => {
                        const element = document.getElementById(service.id);
                        if (element) {
                          const offset = 80;
                          const elementPosition = element.getBoundingClientRect().top;
                          const offsetPosition = elementPosition + window.pageYOffset - offset;
                          window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth"
                          });
                        }
                      }, 100);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3 ${
                      activeService === idx 
                        ? "bg-primary-orange text-white" 
                        : "hover:bg-primary-orange/10 text-gray-700"
                    }`}
                  >
                    <service.icon size={20} />
                    <span className="text-sm">{service.title}</span>
                  </button>
                ))}
              </AnimatedCard>
            </div>

            {/* Content Panel */}
            <div className="lg:col-span-3">
              {services.map((service, idx) => (
                <AnimatedCard 
                  key={idx}
                  delay={200}
                  direction="left"
                  className={`mb-8 ${activeService === idx ? 'block' : 'hidden'}`}
                >
                  <div 
                    id={service.id}
                    className={`card scroll-mt-24 ${activeService === idx ? 'ring-2 ring-primary-orange' : ''}`}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-primary-orange/10 rounded-lg">
                        {React.createElement(service.icon, { 
                          className: "w-10 h-10 text-primary-orange" 
                        })}
                      </div>
                      <h2 className="text-3xl font-bold text-primary-dark">
                        {service.title}
                      </h2>
                    </div>
                    
                    <p className="text-primary-orange font-semibold text-lg mb-3">
                      {service.shortDesc}
                    </p>
                    <p className="text-gray-700 text-lg mb-4">
                      {service.description}
                    </p>
                    <p className="text-gray-600 mb-6">
                      {service.longDescription}
                    </p>
                    
                    <div className="mb-8">
                      <h3 className="font-bold text-xl mb-3 text-primary-dark">Key Benefits:</h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, bidx) => (
                          <li key={bidx} className="flex items-center gap-2">
                            <CheckCircle className="text-primary-orange" size={18} />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-primary-grey rounded-lg p-4">
                      <h3 className="font-bold text-xl mb-3 text-primary-dark">Our Process:</h3>
                      <div className="flex flex-wrap gap-4">
                        {service.process.map((step, sidx) => (
                          <div key={sidx} className="flex items-center">
                            <div className="bg-primary-orange text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-2">
                              {sidx + 1}
                            </div>
                            <span className="text-gray-700 text-sm">{step}</span>
                            {sidx < service.process.length - 1 && (
                              <ArrowRight className="text-primary-orange mx-2" size={16} />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Service Highlights */}
      <section className="py-16 bg-primary-grey">
        <div className="container-custom">
          <SectionTitle 
            title="Why Choose Our Services?" 
            subtitle="We combine expertise, efficiency, and compliance to deliver exceptional results"
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <AnimatedCard delay={100} direction="up" className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary-orange" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark mb-2">Fast Execution</h3>
              <p className="text-gray-600">Time-bound recovery processes with dedicated teams</p>
            </AnimatedCard>
            
            <AnimatedCard delay={200} direction="up" className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary-orange" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark mb-2">Maximized Recovery</h3>
              <p className="text-gray-600">Strategic approach to achieve highest recovery value</p>
            </AnimatedCard>
            
            <AnimatedCard delay={300} direction="up" className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-primary-orange" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark mb-2">Legal Compliance</h3>
              <p className="text-gray-600">All actions strictly within legal framework</p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Service Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-6">
            <AnimatedCard delay={100} direction="up" className="text-center p-6 bg-primary-grey rounded-xl shadow-md hover:shadow-xl transition-all">
              <div className="text-3xl font-bold text-primary-orange mb-2">1000+</div>
              <p className="text-gray-600">Cr Transactions</p>
            </AnimatedCard>
            
            <AnimatedCard delay={200} direction="up" className="text-center p-6 bg-primary-grey rounded-xl shadow-md hover:shadow-xl transition-all">
              <div className="text-3xl font-bold text-primary-orange mb-2">25+</div>
              <p className="text-gray-600">Years Experience</p>
            </AnimatedCard>
            
            <AnimatedCard delay={300} direction="up" className="text-center p-6 bg-primary-grey rounded-xl shadow-md hover:shadow-xl transition-all">
              <div className="text-3xl font-bold text-primary-orange mb-2">100%</div>
              <p className="text-gray-600">Success-Based Fees</p>
            </AnimatedCard>
            
            <AnimatedCard delay={400} direction="up" className="text-center p-6 bg-primary-grey rounded-xl shadow-md hover:shadow-xl transition-all">
              <div className="text-3xl font-bold text-primary-orange mb-2">50+</div>
              <p className="text-gray-600">Happy Clients</p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* CTA Section - No Animation */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Expert Recovery Services?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our experienced team handle your recovery needs with professionalism and efficiency
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Get Free Consultation
            </Link>
            <Link to="/track-record" className="btn-outline border-white text-white hover:bg-white hover:text-primary-dark">
              View Our Track Record
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;