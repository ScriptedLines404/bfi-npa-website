/* src/pages/Services.jsx - Soft Cyan Color Scheme */
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Briefcase, Gavel, Scale, Search, TrendingUp, Shield,
  CheckCircle, ArrowRight, Clock, FileText, Building, Users 
} from "lucide-react";
import AnimatedCard from "../components/AnimatedCard";
import AnimatedSection from "../components/AnimatedSection";

const Services = () => {
  const location = useLocation();
  const [activeService, setActiveService] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef(null);
  const viewportRef = useRef(null);
  const scrollTimeoutRef = useRef(null);
  const wheelDeltaRef = useRef(0);
  const contentScrollRefs = useRef([]);
  
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

  const viewportHeight = 600;
  const pageScrollAmount = 200;

  const isContentAtTop = (index) => {
    const element = contentScrollRefs.current[index];
    if (!element) return true;
    return element.scrollTop <= 5;
  };

  const isContentAtBottom = (index) => {
    const element = contentScrollRefs.current[index];
    if (!element) return true;
    return element.scrollTop + element.clientHeight >= element.scrollHeight - 5;
  };

  // Handle hash navigation from home page
  useEffect(() => {
    const targetService = sessionStorage.getItem('targetService');
    if (targetService) {
      sessionStorage.removeItem('targetService');
      const serviceIndex = services.findIndex(service => service.id === targetService);
      if (serviceIndex !== -1) {
        setActiveService(serviceIndex);
        if (containerRef.current) {
          containerRef.current.style.transform = `translateY(-${serviceIndex * viewportHeight}px)`;
        }
        setTimeout(() => {
          const element = document.getElementById(targetService);
          if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
          }
        }, 300);
      }
    }
  }, [services]);

  useEffect(() => {
    if (containerRef.current && !isTransitioning) {
      containerRef.current.style.transform = `translateY(-${activeService * viewportHeight}px)`;
    }
  }, [activeService, viewportHeight, isTransitioning]);

  // Handle wheel scroll with content scroll detection
  const handleWheel = useCallback((e) => {
    if (isTransitioning) return;

    const currentContent = contentScrollRefs.current[activeService];
    const direction = e.deltaY > 0 ? 'down' : 'up';
    
    if (currentContent) {
      const isAtTop = isContentAtTop(activeService);
      const isAtBottom = isContentAtBottom(activeService);
      
      if (direction === 'down' && !isAtBottom) {
        return;
      }
      
      if (direction === 'up' && !isAtTop) {
        return;
      }
    }
    
    e.preventDefault();
    wheelDeltaRef.current += e.deltaY;
    
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    const threshold = 50;
    
    if (Math.abs(wheelDeltaRef.current) >= threshold) {
      const navigateDirection = wheelDeltaRef.current > 0 ? 'down' : 'up';
      wheelDeltaRef.current = 0;
      
      if (navigateDirection === 'up' && activeService === 0) {
        window.scrollBy({ top: -pageScrollAmount, behavior: 'smooth' });
        return;
      }
      
      if (navigateDirection === 'down' && activeService === services.length - 1) {
        window.scrollBy({ top: pageScrollAmount, behavior: 'smooth' });
        return;
      }
      
      const newIndex = navigateDirection === 'down' ? activeService + 1 : activeService - 1;
      
      if (newIndex >= 0 && newIndex < services.length) {
        setIsTransitioning(true);
        setActiveService(newIndex);
        
        if (containerRef.current) {
          containerRef.current.style.transform = `translateY(-${newIndex * viewportHeight}px)`;
        }
        
        setTimeout(() => {
          setIsTransitioning(false);
          if (contentScrollRefs.current[newIndex]) {
            contentScrollRefs.current[newIndex].scrollTop = 0;
          }
        }, 500);
      }
    }
    
    scrollTimeoutRef.current = setTimeout(() => {
      wheelDeltaRef.current = 0;
    }, 150);
  }, [isTransitioning, activeService, services.length, viewportHeight, pageScrollAmount]);

  const handleServiceClick = (index) => {
    if (index === activeService || isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveService(index);
    
    if (containerRef.current) {
      containerRef.current.style.transform = `translateY(-${index * viewportHeight}px)`;
    }
    
    setTimeout(() => {
      setIsTransitioning(false);
      if (contentScrollRefs.current[index]) {
        contentScrollRefs.current[index].scrollTop = 0;
      }
    }, 500);
  };

  useEffect(() => {
    const viewport = viewportRef.current;
    if (viewport) {
      viewport.addEventListener('wheel', handleWheel, { passive: false });
      return () => {
        viewport.removeEventListener('wheel', handleWheel);
      };
    }
  }, [handleWheel]);

  return (
    <div className="animate-fade-in">
      {/* Hero Section - Soft Cyan Background */}
      <AnimatedSection direction="up" threshold={0.3}>
        <div className="relative bg-[#D1FAFF] text-[#0F172A] py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#0284C7] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F97316] rounded-full blur-3xl"></div>
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-[#0284C7]/10 px-4 py-2 rounded-full mb-6">
                <Briefcase className="w-4 h-4 text-[#0284C7]" />
                <span className="text-sm font-semibold text-[#0284C7]">Our Expertise</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#0C4A6E]">
                Our Services
              </h1>
              <p className="text-xl max-w-3xl mx-auto text-[#475569] leading-relaxed">
                Comprehensive NPA Resolution Solutions tailored to your needs
              </p>
              <div className="w-24 h-1 bg-[#F97316] rounded-full mx-auto mt-6"></div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Main Content with Sidebar and Viewport */}
      <section className="py-16 bg-[#D1FAFF]">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar - Fixed */}
            <div className="lg:w-1/3 xl:w-1/4">
              <AnimatedCard delay={100} direction="right" className="bg-[#FFF3E4] rounded-xl p-4 sticky top-24 shadow-md">
                <h3 className="font-bold text-lg mb-4 px-3 text-[#0C4A6E]">Our Services</h3>
                <div className="space-y-1">
                  {services.map((service, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleServiceClick(idx)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3 ${
                        activeService === idx 
                          ? "bg-[#F97316] text-white shadow-md" 
                          : "hover:bg-[#F97316]/10 text-[#475569]"
                      }`}
                    >
                      <service.icon size={20} />
                      <span className="text-sm font-medium">{service.title}</span>
                      {activeService === idx && (
                        <ArrowRight size={16} className="ml-auto" />
                      )}
                    </button>
                  ))}
                </div>
              </AnimatedCard>
            </div>

            {/* Right Side - Viewport Container */}
            <div className="lg:w-2/3 xl:w-3/4">
              <AnimatedCard delay={200} direction="left">
                <div 
                  ref={viewportRef}
                  className="relative overflow-hidden rounded-2xl shadow-xl bg-[#D1FAFF] border border-[#CBD5E1]"
                  style={{ height: `${viewportHeight}px` }}
                >
                  <div
                    ref={containerRef}
                    className="absolute top-0 left-0 w-full transition-transform duration-500 ease-out"
                    style={{ 
                      transform: `translateY(-${activeService * viewportHeight}px)`,
                      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  >
                    {services.map((service, idx) => (
                      <div
                        key={idx}
                        className="w-full overflow-y-auto hide-scrollbar"
                        style={{ height: `${viewportHeight}px` }}
                        ref={el => contentScrollRefs.current[idx] = el}
                      >
                        <div className="p-6 md:p-8 bg-[#FFF3E4] m-4 rounded-xl shadow-md">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-[#F97316]/10 rounded-lg flex-shrink-0">
                              {React.createElement(service.icon, { 
                                className: "w-8 h-8 md:w-10 md:h-10 text-[#F97316]" 
                              })}
                            </div>
                            <h2 className="text-xl md:text-2xl font-bold text-[#0C4A6E]">
                              {service.title}
                            </h2>
                          </div>
                          
                          <div className="bg-[#FFEAD6] rounded-lg p-4 mb-4 border border-[#CBD5E1]">
                            <p className="text-[#F97316] font-semibold text-base md:text-lg">
                              {service.shortDesc}
                            </p>
                          </div>
                          
                          <p className="text-[#475569] text-base md:text-lg mb-4 leading-relaxed">
                            {service.description}
                          </p>
                          <p className="text-[#475569] mb-6 leading-relaxed text-sm md:text-base">
                            {service.longDescription}
                          </p>
                          
                          <div className="mb-6">
                            <h3 className="font-bold text-lg md:text-xl mb-3 text-[#0C4A6E]">Key Benefits:</h3>
                            <ul className="space-y-2">
                              {service.benefits.map((benefit, bidx) => (
                                <li key={bidx} className="flex items-start gap-2">
                                  <CheckCircle className="text-[#16A34A] mt-0.5 flex-shrink-0" size={16} />
                                  <span className="text-[#475569] text-sm md:text-base">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-[#D1FAFF] rounded-lg p-4 border border-[#CBD5E1]">
                            <h3 className="font-bold text-lg md:text-xl mb-3 text-[#0C4A6E]">Our Process:</h3>
                            <div className="flex flex-wrap gap-3">
                              {service.process.map((step, sidx) => (
                                <div key={sidx} className="flex items-center flex-wrap">
                                  <div className="bg-[#F97316] text-white rounded-full w-6 h-6 md:w-8 md:h-8 flex items-center justify-center font-bold mr-2 text-xs md:text-sm flex-shrink-0">
                                    {sidx + 1}
                                  </div>
                                  <span className="text-[#475569] text-xs md:text-sm">{step}</span>
                                  {sidx < service.process.length - 1 && (
                                    <ArrowRight className="text-[#F97316] mx-1 md:mx-2 flex-shrink-0" size={14} />
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Scroll Indicator - Top */}
                  {activeService > 0 && (
                    <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-[#D1FAFF] to-transparent pointer-events-none z-10">
                      <div className="flex justify-center items-center h-full">
                        <div className="w-6 h-6 md:w-8 md:h-8 bg-white/80 rounded-full flex items-center justify-center shadow-md">
                          <svg className="w-3 h-3 md:w-4 md:h-4 text-[#F97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Scroll Indicator - Bottom */}
                  {activeService < services.length - 1 && (
                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#D1FAFF] to-transparent pointer-events-none z-10">
                      <div className="flex justify-center items-center h-full">
                        <div className="w-6 h-6 md:w-8 md:h-8 bg-white/80 rounded-full flex items-center justify-center shadow-md">
                          <svg className="w-3 h-3 md:w-4 md:h-4 text-[#F97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Service Highlights */}
      <section className="py-16 bg-[#FFF3E4]">
        <div className="container-custom">
          <AnimatedSection direction="up" threshold={0.3}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0C4A6E] mb-4">
                Why Choose Our Services?
              </h2>
              <p className="text-xl text-[#475569] max-w-3xl mx-auto">
                We combine expertise, efficiency, and compliance to deliver exceptional results
              </p>
              <div className="w-24 h-1 bg-[#F97316] rounded-full mx-auto mt-4"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <AnimatedCard delay={100} direction="up" className="text-center p-6 bg-[#D1FAFF] rounded-xl shadow-md hover:shadow-xl transition-all border border-[#CBD5E1]">
                <div className="w-16 h-16 bg-[#F97316]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-[#F97316]" />
                </div>
                <h3 className="text-xl font-bold text-[#0C4A6E] mb-2">Fast Execution</h3>
                <p className="text-[#475569]">Time-bound recovery processes with dedicated teams</p>
              </AnimatedCard>
              
              <AnimatedCard delay={200} direction="up" className="text-center p-6 bg-[#D1FAFF] rounded-xl shadow-md hover:shadow-xl transition-all border border-[#CBD5E1]">
                <div className="w-16 h-16 bg-[#F97316]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-[#F97316]" />
                </div>
                <h3 className="text-xl font-bold text-[#0C4A6E] mb-2">Maximized Recovery</h3>
                <p className="text-[#475569]">Strategic approach to achieve highest recovery value</p>
              </AnimatedCard>
              
              <AnimatedCard delay={300} direction="up" className="text-center p-6 bg-[#D1FAFF] rounded-xl shadow-md hover:shadow-xl transition-all border border-[#CBD5E1]">
                <div className="w-16 h-16 bg-[#F97316]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-[#F97316]" />
                </div>
                <h3 className="text-xl font-bold text-[#0C4A6E] mb-2">Legal Compliance</h3>
                <p className="text-[#475569]">All actions strictly within legal framework</p>
              </AnimatedCard>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#D1FAFF]">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-6">
            <AnimatedCard delay={100} direction="up" className="text-center p-6 bg-[#FFF3E4] rounded-xl shadow-md hover:shadow-xl transition-all border border-[#CBD5E1]">
              <div className="text-3xl font-bold text-[#F97316] mb-2">1000+</div>
              <p className="text-[#475569]">Cr Transactions</p>
            </AnimatedCard>
            
            <AnimatedCard delay={200} direction="up" className="text-center p-6 bg-[#FFF3E4] rounded-xl shadow-md hover:shadow-xl transition-all border border-[#CBD5E1]">
              <div className="text-3xl font-bold text-[#F97316] mb-2">25+</div>
              <p className="text-[#475569]">Years Experience</p>
            </AnimatedCard>
            
            <AnimatedCard delay={300} direction="up" className="text-center p-6 bg-[#FFF3E4] rounded-xl shadow-md hover:shadow-xl transition-all border border-[#CBD5E1]">
              <div className="text-3xl font-bold text-[#F97316] mb-2">100%</div>
              <p className="text-[#475569]">Success-Based Fees</p>
            </AnimatedCard>
            
            <AnimatedCard delay={400} direction="up" className="text-center p-6 bg-[#FFF3E4] rounded-xl shadow-md hover:shadow-xl transition-all border border-[#CBD5E1]">
              <div className="text-3xl font-bold text-[#F97316] mb-2">50+</div>
              <p className="text-[#475569]">Happy Clients</p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#FFF3E4]">
        <div className="container-custom text-center">
          <AnimatedSection direction="up" threshold={0.3}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C4A6E] mb-6">Need Expert Recovery Services?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-[#475569]">
              Let our experienced team handle your recovery needs with professionalism and efficiency
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="bg-[#F97316] text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-[#EA580C] transition-all duration-300">
                Get Free Consultation
              </Link>
              <Link to="/track-record" className="border-2 border-[#0284C7] text-[#0284C7] font-semibold py-3 px-8 rounded-lg hover:bg-[#0284C7] hover:text-white transition-all duration-300">
                View Our Track Record
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Services;