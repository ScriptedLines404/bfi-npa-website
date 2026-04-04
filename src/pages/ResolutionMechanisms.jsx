/* src/pages/ResolutionMechanisms.jsx */
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Banknote, Gavel, TrendingUp, Scale, Building, 
  Handshake, Briefcase, Zap, Target, CheckCircle, 
  ArrowRight, Clock, BarChart, Users, Landmark,
  Award, AlertCircle, HeartHandshake
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import AnimatedCard from "../components/AnimatedCard";
import AnimatedSection from "../components/AnimatedSection";

const ResolutionMechanisms = () => {
  const location = useLocation();
  const [activeResolution, setActiveResolution] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef(null);
  const viewportRef = useRef(null);
  const scrollTimeoutRef = useRef(null);
  const wheelDeltaRef = useRef(0);
  const contentScrollRefs = useRef([]);

  const resolutionTypes = [
    {
      id: "recovery-based",
      icon: Banknote,
      title: "Recovery-Based Resolution",
      definition: "Direct recovery of dues from the borrower without selling assets.",
      longDescription: "This approach focuses on recovering dues directly from the borrower through structured follow-ups, negotiations, and mutually agreed repayment plans. It is the least adversarial method and works best when the borrower is cooperative and operational.",
      methods: ["Follow-ups and negotiations", "One-Time Settlement (OTS)", "Structured repayment plans"],
      bestFor: "Accounts where the borrower is still operational and willing to pay.",
      timeline: "Short to medium term",
      color: "bg-blue-50",
      borderColor: "border-blue-200",
      iconColor: "text-blue-600"
    },
    {
      id: "enforcement-based",
      icon: Gavel,
      title: "Enforcement-Based Resolution",
      definition: "Recovery through legal enforcement of security interests under SARFAESI Act.",
      longDescription: "This powerful mechanism allows lenders to enforce security interests without court intervention. It involves taking possession of secured assets through legal procedures, providing a faster route to recovery for secured loans.",
      methods: ["Taking symbolic/physical possession", "Issuing demand notices", "Asset seizure and control"],
      bestFor: "Secured loans where borrower defaults but assets are available.",
      framework: "SARFAESI Act",
      timeline: "Medium term",
      color: "bg-orange-50",
      borderColor: "border-orange-200",
      iconColor: "text-orange-600"
    },
    {
      id: "asset-monetization",
      icon: TrendingUp,
      title: "Asset Monetization Resolution",
      definition: "Recovery through sale of secured assets via auctions or private treaties.",
      longDescription: "This approach focuses on converting secured assets into cash through strategic sale processes. We identify potential buyers, conduct valuations, and facilitate transparent auctions to maximize recovery value from high-value assets.",
      methods: ["Public E-auctions", "Private treaty sales", "Buyer identification and onboarding"],
      bestFor: "High-value mortgaged properties or industrial assets.",
      timeline: "Medium term",
      color: "bg-green-50",
      borderColor: "border-green-200",
      iconColor: "text-green-600"
    },
    {
      id: "legal-resolution",
      icon: Scale,
      title: "Legal Resolution (Tribunal/Court Driven)",
      definition: "Recovery through judicial processes before specialized tribunals and courts.",
      longDescription: "For disputed cases or uncooperative borrowers, we pursue recovery through legal channels including Debt Recovery Tribunals (DRT) and civil courts. Our legal team manages the entire process from filing to execution of recovery orders.",
      methods: ["Filing recovery applications", "Obtaining possession orders", "Execution through legal authorities"],
      bestFor: "Disputed cases or uncooperative borrowers.",
      platforms: ["Debt Recovery Tribunal (DRT)", "Civil Courts / Magistrate Orders (CMM/CJM/DM)"],
      timeline: "Long term",
      color: "bg-purple-50",
      borderColor: "border-purple-200",
      iconColor: "text-purple-600"
    },
    {
      id: "insolvency-strategic",
      icon: Building,
      title: "Insolvency & Strategic Resolution",
      definition: "Resolution through IBC proceedings or strategic restructuring outside IBC.",
      longDescription: "This comprehensive approach handles large corporate NPAs through insolvency resolution under IBC or strategic restructuring. It aims to preserve business value, avoid liquidation, and maximize recovery through investor-led resolution plans.",
      approaches: [
        "Insolvency Resolution (IBC Route) - Sale as going concern",
        "Strategic / Corporate Resolution (Non-IBC Route) - Investor induction"
      ],
      methods: ["Takeover / Acquisition", "Merger", "Amalgamation"],
      bestFor: "Large corporate NPAs with operational viability",
      valueDelivered: [
        "Maximise recovery for lenders",
        "Avoid liquidation wherever possible",
        "Preserve business value and continuity",
        "Ensure ongoing operations and employment"
      ],
      timeline: "Time-bound (180-330 days)",
      color: "bg-red-50",
      borderColor: "border-red-200",
      iconColor: "text-red-600"
    },
    {
      id: "restructuring",
      icon: Handshake,
      title: "Restructuring Resolution",
      definition: "Modifying loan terms to help borrower repay and regain financial stability.",
      longDescription: "For viable businesses facing temporary financial stress, we restructure loan terms to provide breathing room. This includes extending tenures, reducing interest rates, or rescheduling payments to enable the borrower to recover and repay.",
      methods: ["Tenure extension", "Interest reduction", "Debt rescheduling", "Additional funding support"],
      bestFor: "Viable businesses facing temporary financial stress.",
      timeline: "Short to medium term",
      color: "bg-teal-50",
      borderColor: "border-teal-200",
      iconColor: "text-teal-600"
    },
    {
      id: "compromise-settlement",
      icon: Briefcase,
      title: "Compromise / Settlement Resolution",
      definition: "Mutual agreement between lender and borrower for partial recovery.",
      longDescription: "When full recovery is not feasible, we negotiate compromise settlements that allow partial recovery while closing the account. This pragmatic approach helps both parties reach closure without prolonged litigation.",
      methods: ["One-Time Settlement (OTS)", "Negotiated haircut"],
      bestFor: "Cases where full recovery is not feasible.",
      timeline: "Short term",
      color: "bg-yellow-50",
      borderColor: "border-yellow-200",
      iconColor: "text-yellow-600"
    },
    {
      id: "hybrid",
      icon: Zap,
      title: "Hybrid Resolution",
      definition: "Combination of multiple methods for optimal recovery in complex cases.",
      longDescription: "Complex, high-value accounts often require flexible strategies combining multiple approaches. We design customized hybrid solutions that may include SARFAESI action, followed by auction and settlement, ensuring maximum recovery through strategic sequencing.",
      methods: ["SARFAESI action + Auction + Settlement", "Legal enforcement + Restructuring", "Multiple strategic approaches"],
      bestFor: "Complex, high-value accounts requiring flexible strategies.",
      timeline: "Flexible based on case",
      color: "bg-indigo-50",
      borderColor: "border-indigo-200",
      iconColor: "text-indigo-600"
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

  // Handle hash navigation
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      const resolutionIndex = resolutionTypes.findIndex(resolution => resolution.id === hash);
      if (resolutionIndex !== -1) {
        setActiveResolution(resolutionIndex);
        if (containerRef.current) {
          containerRef.current.style.transform = `translateY(-${resolutionIndex * viewportHeight}px)`;
        }
      }
    }
  }, [location, resolutionTypes]);

  useEffect(() => {
    if (containerRef.current && !isTransitioning) {
      containerRef.current.style.transform = `translateY(-${activeResolution * viewportHeight}px)`;
    }
  }, [activeResolution, viewportHeight, isTransitioning]);

  // Handle wheel scroll with content scroll detection
  const handleWheel = useCallback((e) => {
    if (isTransitioning) return;

    const currentContent = contentScrollRefs.current[activeResolution];
    const direction = e.deltaY > 0 ? 'down' : 'up';
    
    if (currentContent) {
      const isAtTop = isContentAtTop(activeResolution);
      const isAtBottom = isContentAtBottom(activeResolution);
      
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
      
      if (navigateDirection === 'up' && activeResolution === 0) {
        window.scrollBy({ top: -pageScrollAmount, behavior: 'smooth' });
        return;
      }
      
      if (navigateDirection === 'down' && activeResolution === resolutionTypes.length - 1) {
        window.scrollBy({ top: pageScrollAmount, behavior: 'smooth' });
        return;
      }
      
      const newIndex = navigateDirection === 'down' ? activeResolution + 1 : activeResolution - 1;
      
      if (newIndex >= 0 && newIndex < resolutionTypes.length) {
        setIsTransitioning(true);
        setActiveResolution(newIndex);
        
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
  }, [isTransitioning, activeResolution, resolutionTypes.length, viewportHeight, pageScrollAmount]);

  const handleResolutionClick = (index) => {
    if (index === activeResolution || isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveResolution(index);
    
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

  const selectionFactors = [
    { icon: Users, title: "Borrower's Financial Condition", desc: "Assess repayment capacity and willingness" },
    { icon: Landmark, title: "Nature of Asset", desc: "Secured vs unsecured, asset quality and value" },
    { icon: Scale, title: "Legal Stage", desc: "Current status of recovery proceedings" },
    { icon: Clock, title: "Recovery Timeline", desc: "Urgency and time sensitivity of recovery" },
    { icon: BarChart, title: "Asset Value & Marketability", desc: "Market demand and potential realization value" }
  ];

  const quickGuide = [
    { condition: "Borrower Willing & Operational", resolution: "Recovery-Based", color: "bg-blue-100 text-blue-800" },
    { condition: "Secured Assets Available", resolution: "Enforcement-Based / Asset Monetization", color: "bg-orange-100 text-orange-800" },
    { condition: "Disputed / Complex Cases", resolution: "Legal Resolution (DRT)", color: "bg-purple-100 text-purple-800" },
    { condition: "Large Corporate with Going-Concern Value", resolution: "Insolvency & Strategic Resolution", color: "bg-red-100 text-red-800" },
    { condition: "Temporary Stress, Viable Business", resolution: "Restructuring", color: "bg-teal-100 text-teal-800" },
    { condition: "Full Recovery Not Feasible", resolution: "Compromise / Settlement", color: "bg-yellow-100 text-yellow-800" },
    { condition: "Complex, High-Value Accounts", resolution: "Hybrid Resolution", color: "bg-indigo-100 text-indigo-800" }
  ];

  const comparisonTable = [
    { type: "Recovery-Based", features: "Direct recovery, OTS, repayment plans", bestFor: "Operational willing borrowers", timeline: "Short to medium" },
    { type: "Enforcement-Based", features: "SARFAESI, possession, seizure", bestFor: "Secured loans with default", timeline: "Medium" },
    { type: "Asset Monetization", features: "E-auctions, private sales", bestFor: "High-value assets", timeline: "Medium" },
    { type: "Legal Resolution", features: "DRT, court proceedings", bestFor: "Disputed/uncooperative cases", timeline: "Long" },
    { type: "Insolvency & Strategic", features: "IBC, takeovers, mergers", bestFor: "Large corporate NPAs", timeline: "180-330 days" },
    { type: "Restructuring", features: "Tenure extension, interest reduction", bestFor: "Temporary financial stress", timeline: "Short to medium" },
    { type: "Compromise/Settlement", features: "OTS, negotiated haircut", bestFor: "Full recovery not feasible", timeline: "Short" },
    { type: "Hybrid Resolution", features: "Combined multiple methods", bestFor: "Complex, high-value accounts", timeline: "Flexible" }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section - Light Background */}
      <div className="relative bg-gradient-to-r from-primary-grey to-white text-primary-dark py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary-orange rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-orange rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection direction="up" threshold={0.3}>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary-orange/10 px-4 py-2 rounded-full mb-6">
                <Target className="w-4 h-4 text-primary-orange" />
                <span className="text-sm font-semibold text-primary-orange">Resolution Strategies</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary-dark">
                Resolution Mechanisms
              </h1>
              <p className="text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed">
                Resolution of stressed assets can be achieved through recovery, legal enforcement, asset sale, 
                insolvency proceedings, or restructuring—depending on the nature and stage of the account.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Main Content with Sidebar and Viewport */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar - Fixed */}
            <div className="lg:w-1/3 xl:w-1/4">
              <AnimatedCard delay={100} direction="right" className="bg-primary-grey rounded-xl p-4 sticky top-24">
                <h3 className="font-bold text-lg mb-4 px-3 text-primary-dark">Resolution Types</h3>
                <div className="space-y-1">
                  {resolutionTypes.map((resolution, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleResolutionClick(idx)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3 ${
                        activeResolution === idx 
                          ? "bg-primary-orange text-white shadow-md" 
                          : "hover:bg-primary-orange/10 text-gray-700"
                      }`}
                    >
                      <resolution.icon size={20} />
                      <span className="text-sm font-medium">{resolution.title}</span>
                      {activeResolution === idx && (
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
                  className="relative overflow-hidden rounded-2xl shadow-xl bg-primary-grey"
                  style={{ height: `${viewportHeight}px` }}
                >
                  <div
                    ref={containerRef}
                    className="absolute top-0 left-0 w-full transition-transform duration-500 ease-out"
                    style={{ 
                      transform: `translateY(-${activeResolution * viewportHeight}px)`,
                      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  >
                    {resolutionTypes.map((resolution, idx) => (
                      <div
                        key={idx}
                        className="w-full overflow-y-auto hide-scrollbar"
                        style={{ height: `${viewportHeight}px` }}
                        ref={el => contentScrollRefs.current[idx] = el}
                      >
                        <div className="p-6 md:p-8">
                          <div className="flex items-center gap-4 mb-6">
                            <div className={`p-3 ${resolution.color} rounded-lg`}>
                              {React.createElement(resolution.icon, { 
                                className: `w-8 h-8 md:w-10 md:h-10 ${resolution.iconColor}` 
                              })}
                            </div>
                            <h2 className="text-xl md:text-2xl font-bold text-primary-dark">
                              {resolution.title}
                            </h2>
                          </div>
                          
                          <p className="text-primary-orange font-semibold text-base md:text-lg mb-3">
                            Definition
                          </p>
                          <p className="text-gray-700 text-sm md:text-base mb-6">
                            {resolution.definition}
                          </p>
                          
                          <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
                            {resolution.longDescription}
                          </p>
                          
                          <div className="mb-6">
                            <h3 className="font-bold text-lg md:text-xl mb-3 text-primary-dark">Methods:</h3>
                            <ul className="space-y-2">
                              {resolution.methods.map((method, midx) => (
                                <li key={midx} className="flex items-center gap-2">
                                  <CheckCircle className="text-primary-orange flex-shrink-0" size={16} />
                                  <span className="text-gray-700 text-sm md:text-base">{method}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {resolution.framework && (
                            <div className="mb-6">
                              <h3 className="font-bold text-lg md:text-xl mb-3 text-primary-dark">Key Framework:</h3>
                              <p className="text-gray-700 text-sm md:text-base">{resolution.framework}</p>
                            </div>
                          )}

                          {resolution.platforms && (
                            <div className="mb-6">
                              <h3 className="font-bold text-lg md:text-xl mb-3 text-primary-dark">Platforms:</h3>
                              <ul className="space-y-2">
                                {resolution.platforms.map((platform, pidx) => (
                                  <li key={pidx} className="flex items-center gap-2">
                                    <ArrowRight className="text-primary-orange flex-shrink-0" size={16} />
                                    <span className="text-gray-700 text-sm md:text-base">{platform}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {resolution.approaches && (
                            <div className="mb-6">
                              <h3 className="font-bold text-lg md:text-xl mb-3 text-primary-dark">Resolution Approaches:</h3>
                              <ul className="space-y-2">
                                {resolution.approaches.map((approach, aidx) => (
                                  <li key={aidx} className="flex items-center gap-2">
                                    <CheckCircle className="text-primary-orange flex-shrink-0" size={16} />
                                    <span className="text-gray-700 text-sm md:text-base">{approach}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {resolution.valueDelivered && (
                            <div className="mb-6 bg-green-50 rounded-lg p-4">
                              <h3 className="font-bold text-lg md:text-xl mb-3 text-green-700">Value Delivered:</h3>
                              <ul className="space-y-2">
                                {resolution.valueDelivered.map((value, vidx) => (
                                  <li key={vidx} className="flex items-center gap-2">
                                    <Award className="text-green-600 flex-shrink-0" size={16} />
                                    <span className="text-gray-700 text-sm md:text-base">{value}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          <div className="mt-6 pt-4 border-t border-gray-200">
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="bg-primary-grey rounded-lg p-3">
                                <p className="font-semibold text-primary-dark text-sm">Best For:</p>
                                <p className="text-gray-700 text-xs md:text-sm">{resolution.bestFor}</p>
                              </div>
                              <div className="bg-primary-grey rounded-lg p-3">
                                <p className="font-semibold text-primary-dark text-sm">Typical Timeline:</p>
                                <p className="text-gray-700 text-xs md:text-sm">{resolution.timeline}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Scroll Indicator - Top */}
                  {activeResolution > 0 && (
                    <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-primary-grey to-transparent pointer-events-none z-10">
                      <div className="flex justify-center items-center h-full">
                        <div className="w-6 h-6 md:w-8 md:h-8 bg-white/80 rounded-full flex items-center justify-center shadow-md">
                          <svg className="w-3 h-3 md:w-4 md:h-4 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Scroll Indicator - Bottom */}
                  {activeResolution < resolutionTypes.length - 1 && (
                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-primary-grey to-transparent pointer-events-none z-10">
                      <div className="flex justify-center items-center h-full">
                        <div className="w-6 h-6 md:w-8 md:h-8 bg-white/80 rounded-full flex items-center justify-center shadow-md">
                          <svg className="w-3 h-3 md:w-4 md:h-4 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Resolution Types Comparison Table */}
      <section className="py-16 bg-primary-grey">
        <div className="container-custom">
          <SectionTitle 
            title="Resolution Types Comparison" 
            subtitle="Compare different resolution approaches to find the right fit"
          />
          
          <AnimatedSection direction="up" threshold={0.3}>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-primary-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Resolution Type</th>
                    <th className="px-6 py-4 text-left">Key Features</th>
                    <th className="px-6 py-4 text-left">Best Suited For</th>
                    <th className="px-6 py-4 text-left">Timeline</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparisonTable.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-primary-dark">{item.type}</td>
                      <td className="px-6 py-4 text-gray-600">{item.features}</td>
                      <td className="px-6 py-4 text-gray-600">{item.bestFor}</td>
                      <td className="px-6 py-4 text-gray-600">{item.timeline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* How to Choose Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Target className="w-16 h-16 text-primary-orange mx-auto mb-4" />
            <SectionTitle 
              title="How to Choose the Right Resolution Type" 
              subtitle="Selecting the optimal resolution strategy depends on multiple factors unique to each case"
            />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectionFactors.map((factor, idx) => (
              <AnimatedCard key={idx} delay={idx * 100} direction="up" className="bg-primary-grey rounded-xl p-6 hover:shadow-lg transition-all">
                <factor.icon className="w-12 h-12 text-primary-orange mb-4" />
                <h3 className="text-lg font-bold text-primary-dark mb-2">{factor.title}</h3>
                <p className="text-gray-600 text-sm">{factor.desc}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Light Background */}
      <section className="py-20 bg-primary-grey">
        <div className="container-custom text-center">
          <AnimatedSection direction="up" threshold={0.3}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">Need Expert Resolution Strategy?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-600">
              Our team of experts will analyze your stressed assets and recommend the optimal resolution framework
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="btn-primary">
                Get Free Consultation
              </Link>
              <Link to="/services" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="btn-outline">
                Explore Our Services
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

export default ResolutionMechanisms;