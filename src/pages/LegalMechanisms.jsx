/* src/pages/LegalMechanisms.jsx - Navy + Amber with Full-Screen Hero & Unified Scroll */
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Scale, Gavel, Building, FileText, 
  CheckCircle, ArrowRight, BookOpen, 
  Timer, Banknote, Shield, AlertCircle,
  Landmark, Users, Briefcase, Zap, Award,
  TrendingUp, Clock, Target, Sparkles,
  BarChart, Globe, ShieldCheck
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import AnimatedCard from "../components/AnimatedCard";
import AnimatedSection from "../components/AnimatedSection";

const LegalMechanisms = () => {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef(null);
  const viewportRef = useRef(null);
  const scrollTimeoutRef = useRef(null);
  const wheelDeltaRef = useRef(0);
  const contentScrollRefs = useRef([]);

  // Combined content array - Legal Frameworks + Quasi-Judicial Bodies
  const allContent = [
    // Legal Frameworks
    {
      id: "rddb-act",
      type: "framework",
      icon: Scale,
      title: "RDDB Act",
      fullName: "Recovery of Debts Due to Banks and Financial Institutions Act, 1993",
      definition: "The RDDB Act enables banks and financial institutions to recover debts through specialized tribunals (DRT), ensuring faster and legally enforceable recovery.",
      simpleExplanation: "When a borrower defaults and recovery becomes difficult, banks can file a case under the RDDB Act to legally recover the outstanding loan amount through a tribunal.",
      keyFeature: "Created dedicated recovery bodies: Debt Recovery Tribunal (DRT) and Debt Recovery Appellate Tribunal (DRAT). These replace slow civil courts for loan recovery cases.",
      whoCanUse: ["Banks", "Financial Institutions", "Some NBFCs (in specific cases)"],
      process: [
        "Loan Default - Borrower fails to repay dues",
        "Case Filed in DRT - Bank files application before DRT",
        "Tribunal Proceedings - Evidence examined, borrower heard",
        "Recovery Certificate Issued - DRT passes order confirming amount due",
        "Execution of Recovery - Recovery Officer attaches property, sells assets"
      ],
      actions: [
        "Filing recovery applications",
        "Attachment of movable/immovable property",
        "Appointment of recovery officer",
        "Auction of assets"
      ],
      vsSARFAESI: {
        rdbb: "Court-driven, moderate speed, DRT authority",
        sarfaesi: "No court needed initially, faster, Bank authority"
      },
      whenUsed: [
        "When borrower disputes the claim",
        "When SARFAESI is not sufficient",
        "For unsecured loans",
        "For legally complex recovery cases"
      ],
      importance: "Faster than civil courts, specialized recovery system, legal backing for enforcement, structured recovery process",
      color: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      id: "sarfaesi",
      type: "framework",
      icon: Gavel,
      title: "SARFAESI",
      fullName: "Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002",
      definition: "SARFAESI is a legal mechanism that enables lenders to enforce security interests and recover dues by taking possession and selling secured assets without court intervention.",
      simpleExplanation: "When a borrower fails to repay a loan and it becomes an NPA, SARFAESI allows the lender to take possession of the secured asset and sell it to recover the loan amount.",
      keyFeatures: [
        "No need for lengthy court procedures",
        "Faster recovery process",
        "Applies to secured loans only",
        "Empowers banks, NBFCs, and ARCs"
      ],
      whoCanUse: ["Banks", "NBFCs", "Asset Reconstruction Companies (ARCs)"],
      process: [
        "Loan Becomes NPA - Borrower defaults for 90 days → account classified as NPA",
        "Demand Notice (Section 13(2)) - Bank issues notice giving 60 days to repay",
        "Possession (Section 13(4)) - If unpaid, bank takes symbolic or physical possession",
        "Sale of Asset - Property auctioned (E-auction), loan recovered"
      ],
      example: "A borrower takes a housing loan and stops paying. Bank issues SARFAESI notice, takes possession of the house, and auctions it to recover dues.",
      authorities: [
        "Magistrate (CMM/CJM/DM) for physical possession",
        "Debt Recovery Tribunal (DRT) for borrower appeals"
      ],
      importance: "Speeds up recovery, reduces bad loans (NPAs), strengthens banking system, gives lenders strong enforcement power",
      limitations: "Applies only to secured loans, minimum loan threshold applies, borrower can challenge in DRT",
      color: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      id: "ibc",
      type: "framework",
      icon: Building,
      title: "IBC",
      fullName: "Insolvency and Bankruptcy Code, 2016",
      definition: "IBC is a legal framework that enables time-bound resolution of insolvency through business revival or liquidation under the supervision of NCLT.",
      simpleExplanation: "When a company or individual is unable to repay debts, IBC provides a structured process to either revive the business or liquidate it to recover money for lenders.",
      mainObjective: [
        "Maximize recovery for lenders",
        "Resolve stressed assets quickly",
        "Promote business continuity (if possible)",
        "Improve credit discipline"
      ],
      whoCanUse: ["Banks", "Financial Institutions", "Operational creditors (vendors, suppliers)", "Corporates"],
      process: [
        "Default Occurs - Borrower fails to repay debt (above threshold limit)",
        "Case Filed - Application filed before National Company Law Tribunal (NCLT)",
        "Moratorium Begins - All legal actions stop, assets are protected",
        "Resolution Professional Appointed - Takes control, manages operations",
        "Resolution Plan - Investors submit plans, creditors evaluate and approve",
        "Outcome - If approved: Company revived (takeover/merger possible). If not: Company goes into liquidation"
      ],
      participants: [
        "Creditors (Banks, NBFCs, ARCs)",
        "Resolution Professional (RP)",
        "Committee of Creditors (CoC)",
        "Investors / Resolution Applicants"
      ],
      resolutionTypes: [
        "Business takeover",
        "Merger / amalgamation",
        "Debt restructuring",
        "Sale of company as a going concern",
        "Liquidation (last option)"
      ],
      example: "A company defaults on ₹200 Cr loan. Case filed under IBC. NCLT admits case. Investor submits resolution plan. Company is taken over for ₹120 Cr.",
      importance: "Time-bound process (180–330 days), improves recovery rates, prevents value erosion, encourages serious bidders/investors",
      color: "bg-red-50",
      iconColor: "text-red-600"
    },
    // Quasi-Judicial Bodies
    {
      id: "drt",
      type: "judicial",
      name: "DRT",
      fullName: "Debt Recovery Tribunal",
      establishedUnder: "Recovery of Debts and Bankruptcy Act, 1993",
      jurisdiction: "Handles cases where debt amount is ₹20 Lakhs or more (threshold adjustable by government)",
      primaryObjective: "To provide expeditious adjudication and recovery of debts due to banks and financial institutions",
      keyPowers: [
        "Issue 'Recovery Certificates' - final order for recovery officer to seize and sell assets",
        "Handle applications under SARFAESI Act where borrowers challenge bank's possession measures"
      ],
      processDesc: "Cases are presided over by a 'Presiding Officer' (District Judge rank official). Procedure governed by principles of natural justice rather than strict Code of Civil Procedure (CPC).",
      icon: Scale,
      color: "bg-blue-50",
      iconColor: "text-blue-600",
      gradientColor: "from-blue-500 to-blue-600"
    },
    {
      id: "nclt",
      type: "judicial",
      name: "NCLT",
      fullName: "National Company Law Tribunal",
      establishedUnder: "Companies Act, 2013 (prominence through IBC, 2016)",
      jurisdiction: "Exclusively deals with corporate matters - company registration, shareholder disputes, Corporate Insolvency Resolution Processes (CIRP)",
      primaryObjective: "To manage the 'exit' or 'revival' of distressed companies under IBC",
      keyPowers: [
        "Freeze assets and replace company's board with Insolvency Professional",
        "Approve 'Resolution Plans'",
        "Handle cases of 'Oppression and Mismanagement' within a company"
      ],
      processDesc: "Bench-based system consisting of both Judicial Members and Technical Members (experts in finance or law)",
      icon: Building,
      color: "bg-purple-50",
      iconColor: "text-purple-600",
      gradientColor: "from-purple-500 to-purple-600"
    },
    {
      id: "drat",
      type: "judicial",
      name: "DRAT",
      fullName: "Debt Recovery Appellate Tribunal",
      establishedUnder: "Recovery of Debts and Bankruptcy Act, 1993",
      jurisdiction: "Appellate Authority for any person/institution aggrieved by an order passed by DRT",
      primaryObjective: "To hear appeals against DRT orders",
      keyPowers: [
        "Pre-deposit requirement - appellant must deposit significant portion (often 50%) of debt amount before appeal is heard",
        "Prevents frivolous appeals intended only to delay recovery"
      ],
      processDesc: "Headed by a 'Chairperson' (usually a person who has been a Judge of a High Court). Decisions can only be challenged further in High Court or Supreme Court.",
      icon: Gavel,
      color: "bg-amber-50",
      iconColor: "text-amber-600",
      gradientColor: "from-amber-500 to-amber-600"
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

  useEffect(() => {
    const targetItem = sessionStorage.getItem('targetLegalItem');
    if (targetItem) {
      sessionStorage.removeItem('targetLegalItem');
      const itemIndex = allContent.findIndex(item => item.id === targetItem);
      if (itemIndex !== -1) {
        setActiveIndex(itemIndex);
        if (containerRef.current) {
          containerRef.current.style.transform = `translateY(-${itemIndex * viewportHeight}px)`;
        }
      }
    }
  }, [allContent]);

  useEffect(() => {
    if (containerRef.current && !isTransitioning) {
      containerRef.current.style.transform = `translateY(-${activeIndex * viewportHeight}px)`;
    }
  }, [activeIndex, viewportHeight, isTransitioning]);

  const handleWheel = useCallback((e) => {
    if (isTransitioning) return;

    const currentContent = contentScrollRefs.current[activeIndex];
    const direction = e.deltaY > 0 ? 'down' : 'up';
    
    if (currentContent) {
      const isAtTop = isContentAtTop(activeIndex);
      const isAtBottom = isContentAtBottom(activeIndex);
      
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
      
      if (navigateDirection === 'up' && activeIndex === 0) {
        window.scrollBy({ top: -pageScrollAmount, behavior: 'smooth' });
        return;
      }
      
      if (navigateDirection === 'down' && activeIndex === allContent.length - 1) {
        window.scrollBy({ top: pageScrollAmount, behavior: 'smooth' });
        return;
      }
      
      const newIndex = navigateDirection === 'down' ? activeIndex + 1 : activeIndex - 1;
      
      if (newIndex >= 0 && newIndex < allContent.length) {
        setIsTransitioning(true);
        setActiveIndex(newIndex);
        
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
  }, [isTransitioning, activeIndex, allContent.length, viewportHeight, pageScrollAmount]);

  const handleItemClick = (index) => {
    if (index === activeIndex || isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveIndex(index);
    
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

  const comparisonTable = [
    { feature: "Focus", ibc: "Business resolution", sarfaesi: "Asset recovery", rdbb: "Legal recovery" },
    { feature: "Authority", ibc: "NCLT", sarfaesi: "Bank", rdbb: "DRT" },
    { feature: "Outcome", ibc: "Revival / liquidation", sarfaesi: "Asset sale", rdbb: "Recovery order" },
    { feature: "Speed", ibc: "Time-bound (180-330 days)", sarfaesi: "Fast (no court intervention)", rdbb: "Moderate" },
    { feature: "Use Case", ibc: "Large corporate insolvency", sarfaesi: "Secured loans", rdbb: "Disputed/unsecured cases" }
  ];

  const judicialComparisonTable = [
    { feature: "Establishment", drt: "Recovery of Debts and Bankruptcy Act, 1993", nclt: "Companies Act, 2013 / IBC, 2016", drat: "Recovery of Debts and Bankruptcy Act, 1993" },
    { feature: "Jurisdiction", drt: "Debt recovery (₹20 Lakhs+ threshold)", nclt: "Corporate insolvency & company matters", drat: "Appeals against DRT orders" },
    { feature: "Presiding Authority", drt: "Presiding Officer (District Judge rank)", nclt: "Judicial + Technical Members (Benches)", drat: "Chairperson (High Court Judge rank)" },
    { feature: "Key Power", drt: "Issue Recovery Certificates", nclt: "Approve Resolution Plans / Liquidation", drat: "Pre-deposit requirement (50% of debt)" },
    { feature: "Appeal Body", drt: "DRAT", nclt: "NCLAT (National Company Law Appellate Tribunal)", drat: "High Court / Supreme Court" },
    { feature: "Primary Focus", drt: "Debt recovery for banks & FIs", nclt: "Corporate revival or liquidation", drat: "Judicial review of DRT orders" }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section - Full Screen Navy Blue */}
      <div className="relative bg-[#0A2540] text-white min-h-screen flex items-center justify-center py-12 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#F59E0B] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F59E0B] rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection direction="up" threshold={0.3}>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-[#F59E0B]/10 px-4 py-2 rounded-full mb-6">
                <BookOpen className="w-4 h-4 text-[#F59E0B]" />
                <span className="text-sm font-semibold text-[#F59E0B]">Legal Frameworks & Tribunals</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Legal Mechanisms for NPAs
              </h1>
              <p className="text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
                Comprehensive legal frameworks and quasi-judicial bodies enabling effective recovery and 
                resolution of stressed assets through specialized tribunals, enforcement mechanisms, and insolvency proceedings.
              </p>
              <div className="w-24 h-1 bg-[#F59E0B] rounded-full mx-auto mt-8"></div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Main Content with Sidebar and Viewport */}
      <section className="py-16 bg-[#F3F4F6]">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar - All Items */}
            <div className="lg:w-1/3 xl:w-1/4">
              <AnimatedCard delay={100} direction="right" className="bg-white rounded-xl p-4 sticky top-24 shadow-md border border-gray-100">
                <h3 className="font-bold text-lg mb-4 px-3 text-[#0A2540] border-b border-gray-200 pb-2">
                  Legal Frameworks & Tribunals
                </h3>
                <div className="space-y-1">
                  {allContent.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleItemClick(idx)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3 ${
                        activeIndex === idx 
                          ? "bg-[#F59E0B] text-white shadow-md" 
                          : "hover:bg-[#F59E0B]/10 text-gray-700"
                      }`}
                    >
                      <item.icon size={20} />
                      <span className="text-sm font-medium">{item.type === "framework" ? item.title : item.name}</span>
                      {activeIndex === idx && (
                        <ArrowRight size={16} className="ml-auto" />
                      )}
                    </button>
                  ))}
                </div>
              </AnimatedCard>
            </div>

            {/* Right Side - Viewport Container with Continuous Scroll */}
            <div className="lg:w-2/3 xl:w-3/4">
              <AnimatedCard delay={200} direction="left">
                <div 
                  ref={viewportRef}
                  className="relative overflow-hidden rounded-2xl shadow-xl bg-white border border-gray-100"
                  style={{ height: `${viewportHeight}px` }}
                >
                  <div
                    ref={containerRef}
                    className="absolute top-0 left-0 w-full transition-transform duration-500 ease-out"
                    style={{ 
                      transform: `translateY(-${activeIndex * viewportHeight}px)`,
                      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  >
                    {allContent.map((item, idx) => (
                      <div
                        key={idx}
                        className="w-full overflow-y-auto hide-scrollbar"
                        style={{ height: `${viewportHeight}px` }}
                        ref={el => contentScrollRefs.current[idx] = el}
                      >
                        <div className="p-6 md:p-8">
                          {item.type === "framework" ? (
                            // Legal Framework Content
                            <>
                              <div className="flex items-center gap-4 mb-6">
                                <div className={`p-3 ${item.color} rounded-lg`}>
                                  {React.createElement(item.icon, { 
                                    className: `w-8 h-8 md:w-10 md:h-10 ${item.iconColor}` 
                                  })}
                                </div>
                                <div>
                                  <h2 className="text-xl md:text-2xl font-bold text-[#0A2540]">
                                    {item.title}
                                  </h2>
                                  <p className="text-xs md:text-sm text-gray-500 mt-1">{item.fullName}</p>
                                </div>
                              </div>
                              
                              <div className="mb-6">
                                <p className="text-[#F59E0B] font-semibold text-base md:text-lg mb-2">What is {item.title}?</p>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">{item.definition}</p>
                              </div>

                              <div className="mb-6 bg-[#F3F4F6] rounded-lg p-4">
                                <p className="font-bold text-[#0A2540] mb-2 flex items-center gap-2 text-sm md:text-base">
                                  <BookOpen size={18} /> Simple Explanation
                                </p>
                                <p className="text-gray-600 text-sm md:text-base">{item.simpleExplanation}</p>
                              </div>

                              {item.keyFeatures && (
                                <div className="mb-6">
                                  <h3 className="font-bold text-lg md:text-xl mb-3 text-[#0A2540]">Key Features:</h3>
                                  <ul className="space-y-2">
                                    {item.keyFeatures.map((feature, fidx) => (
                                      <li key={fidx} className="flex items-center gap-2">
                                        <CheckCircle className="text-[#F59E0B] flex-shrink-0" size={16} />
                                        <span className="text-gray-600 text-sm md:text-base">{feature}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {item.keyFeature && (
                                <div className="mb-6">
                                  <h3 className="font-bold text-lg md:text-xl mb-3 text-[#0A2540]">Key Feature:</h3>
                                  <p className="text-gray-600 text-sm md:text-base">{item.keyFeature}</p>
                                </div>
                              )}

                              {item.mainObjective && (
                                <div className="mb-6">
                                  <h3 className="font-bold text-lg md:text-xl mb-3 text-[#0A2540]">Main Objective:</h3>
                                  <ul className="space-y-2">
                                    {item.mainObjective.map((objective, oidx) => (
                                      <li key={oidx} className="flex items-center gap-2">
                                        <Target className="text-[#F59E0B] flex-shrink-0" size={16} />
                                        <span className="text-gray-600 text-sm md:text-base">{objective}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              <div className="mb-6">
                                <h3 className="font-bold text-lg md:text-xl mb-3 text-[#0A2540] flex items-center gap-2">
                                  <Users size={20} /> Who Can Use {item.title}?
                                </h3>
                                <ul className="space-y-2">
                                  {item.whoCanUse.map((user, uidx) => (
                                    <li key={uidx} className="flex items-center gap-2">
                                      <CheckCircle className="text-[#F59E0B] flex-shrink-0" size={16} />
                                      <span className="text-gray-600 text-sm md:text-base">{user}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div className="mb-6">
                                <h3 className="font-bold text-lg md:text-xl mb-3 text-[#0A2540] flex items-center gap-2">
                                  <Zap size={20} /> How {item.title} Works
                                </h3>
                                <div className="space-y-3">
                                  {item.process.map((step, sidx) => (
                                    <div key={sidx} className="flex items-start gap-3">
                                      <div className="bg-[#F59E0B] text-white rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center font-bold text-xs md:text-sm flex-shrink-0 mt-0.5">
                                        {sidx + 1}
                                      </div>
                                      <span className="text-gray-600 text-sm md:text-base">{step}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {item.actions && (
                                <div className="mb-6">
                                  <h3 className="font-bold text-lg md:text-xl mb-3 text-[#0A2540]">Types of Actions Under {item.title}:</h3>
                                  <ul className="space-y-2">
                                    {item.actions.map((action, aidx) => (
                                      <li key={aidx} className="flex items-center gap-2">
                                        <ArrowRight className="text-[#F59E0B] flex-shrink-0" size={16} />
                                        <span className="text-gray-600 text-sm md:text-base">{action}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {item.example && (
                                <div className="mb-6 bg-[#F3F4F6] rounded-lg p-4">
                                  <h3 className="font-bold text-[#0A2540] mb-2 flex items-center gap-2 text-sm md:text-base">
                                    <Landmark size={18} /> Example
                                  </h3>
                                  <p className="text-gray-600 text-sm md:text-base">{item.example}</p>
                                </div>
                              )}

                              {item.authorities && (
                                <div className="mb-6">
                                  <h3 className="font-bold text-lg md:text-xl mb-3 text-[#0A2540]">Important Authorities Involved:</h3>
                                  <ul className="space-y-2">
                                    {item.authorities.map((authority, aidx) => (
                                      <li key={aidx} className="flex items-center gap-2">
                                        <Shield className="text-[#F59E0B] flex-shrink-0" size={16} />
                                        <span className="text-gray-600 text-sm md:text-base">{authority}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {item.participants && (
                                <div className="mb-6">
                                  <h3 className="font-bold text-lg md:text-xl mb-3 text-[#0A2540]">Key Participants in {item.title}:</h3>
                                  <ul className="space-y-2">
                                    {item.participants.map((participant, pidx) => (
                                      <li key={pidx} className="flex items-center gap-2">
                                        <Users className="text-[#F59E0B] flex-shrink-0" size={16} />
                                        <span className="text-gray-600 text-sm md:text-base">{participant}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {item.resolutionTypes && (
                                <div className="mb-6">
                                  <h3 className="font-bold text-lg md:text-xl mb-3 text-[#0A2540]">Types of Resolution Under {item.title}:</h3>
                                  <ul className="space-y-2">
                                    {item.resolutionTypes.map((type, tidx) => (
                                      <li key={tidx} className="flex items-center gap-2">
                                        <TrendingUp className="text-[#F59E0B] flex-shrink-0" size={16} />
                                        <span className="text-gray-600 text-sm md:text-base">{type}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {item.whenUsed && (
                                <div className="mb-6">
                                  <h3 className="font-bold text-lg md:text-xl mb-3 text-[#0A2540]">When is {item.title} Used?</h3>
                                  <ul className="space-y-2">
                                    {item.whenUsed.map((use, uidx) => (
                                      <li key={uidx} className="flex items-center gap-2">
                                        <Clock className="text-[#F59E0B] flex-shrink-0" size={16} />
                                        <span className="text-gray-600 text-sm md:text-base">{use}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {item.vsSARFAESI && (
                                <div className="mb-6 bg-[#F3F4F6] rounded-lg p-4">
                                  <h3 className="font-bold text-[#0A2540] mb-3">RDDB vs SARFAESI (Quick Difference):</h3>
                                  <div className="grid grid-cols-2 gap-4">
                                    <div>
                                      <p className="font-semibold text-[#0A2540] text-sm">RDDB Act:</p>
                                      <p className="text-gray-600 text-xs md:text-sm">{item.vsSARFAESI.rdbb}</p>
                                    </div>
                                    <div>
                                      <p className="font-semibold text-[#0A2540] text-sm">SARFAESI:</p>
                                      <p className="text-gray-600 text-xs md:text-sm">{item.vsSARFAESI.sarfaesi}</p>
                                    </div>
                                  </div>
                                </div>
                              )}

                              <div className="mb-6 bg-[#F3F4F6] rounded-lg p-4">
                                <h3 className="font-bold text-lg md:text-xl mb-2 text-[#F59E0B] flex items-center gap-2">
                                  <Award size={20} /> Why {item.title} is Important
                                </h3>
                                <p className="text-gray-600 text-sm md:text-base">{item.importance}</p>
                              </div>

                              {item.limitations && (
                                <div className="bg-[#F3F4F6] rounded-lg p-4">
                                  <h3 className="font-bold text-lg md:text-xl mb-2 text-[#F59E0B] flex items-center gap-2">
                                    <AlertCircle size={20} /> Limitations
                                  </h3>
                                  <p className="text-gray-600 text-sm md:text-base">{item.limitations}</p>
                                </div>
                              )}
                            </>
                          ) : (
                            // Quasi-Judicial Body Content
                            <>
                              <div className={`bg-gradient-to-r ${item.gradientColor} p-6 rounded-xl mb-6`}>
                                <div className="flex items-center gap-4">
                                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                                    <item.icon className="w-8 h-8 text-white" />
                                  </div>
                                  <div>
                                    <h2 className="text-2xl font-bold text-white">{item.name}</h2>
                                    <p className="text-white/80">{item.fullName}</p>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="space-y-4">
                                <div>
                                  <p className="text-[#F59E0B] font-semibold mb-1">Established Under</p>
                                  <p className="text-gray-600">{item.establishedUnder}</p>
                                </div>
                                <div>
                                  <p className="text-[#F59E0B] font-semibold mb-1">Jurisdiction</p>
                                  <p className="text-gray-600">{item.jurisdiction}</p>
                                </div>
                                <div>
                                  <p className="text-[#F59E0B] font-semibold mb-1">Primary Objective</p>
                                  <p className="text-gray-600">{item.primaryObjective}</p>
                                </div>
                                <div>
                                  <p className="text-[#F59E0B] font-semibold mb-1">Key Powers</p>
                                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                                    {item.keyPowers.map((power, pidx) => (
                                      <li key={pidx}>{power}</li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <p className="text-[#F59E0B] font-semibold mb-1">Process / Composition</p>
                                  <p className="text-gray-600">{item.processDesc}</p>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Scroll Indicator - Top */}
                  {activeIndex > 0 && (
                    <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-[#F3F4F6] to-transparent pointer-events-none z-10">
                      <div className="flex justify-center items-center h-full">
                        <div className="w-6 h-6 md:w-8 md:h-8 bg-[#F59E0B]/10 rounded-full flex items-center justify-center shadow-md">
                          <svg className="w-3 h-3 md:w-4 md:h-4 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Scroll Indicator - Bottom */}
                  {activeIndex < allContent.length - 1 && (
                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#F3F4F6] to-transparent pointer-events-none z-10">
                      <div className="flex justify-center items-center h-full">
                        <div className="w-6 h-6 md:w-8 md:h-8 bg-[#F59E0B]/10 rounded-full flex items-center justify-center shadow-md">
                          <svg className="w-3 h-3 md:w-4 md:h-4 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Comparison Tables Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="IBC vs SARFAESI vs RDDB" 
            subtitle="Quick comparison of the three major legal frameworks for NPA recovery"
            titleColor="#0A2540"
            accentColor="#F59E0B"
            subtitleColor="#4B5563"
          />
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-[#F3F4F6] rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <thead className="bg-[#F59E0B] text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Feature</th>
                  <th className="px-6 py-4 text-left">IBC</th>
                  <th className="px-6 py-4 text-left">SARFAESI</th>
                  <th className="px-6 py-4 text-left">RDDB</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparisonTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white transition-colors">
                    <td className="px-6 py-4 font-semibold text-[#0A2540]">{row.feature}</td>
                    <td className="px-6 py-4 text-gray-600">{row.ibc}</td>
                    <td className="px-6 py-4 text-gray-600">{row.sarfaesi}</td>
                    <td className="px-6 py-4 text-gray-600">{row.rdbb}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Judicial Bodies Comparison Table */}
      <section className="py-16 bg-[#F3F4F6]">
        <div className="container-custom">
          <SectionTitle 
            title="Comparison of Quasi-Judicial Bodies" 
            subtitle="Understanding the key differences between DRT, NCLT, and DRAT"
            titleColor="#0A2540"
            accentColor="#F59E0B"
            subtitleColor="#4B5563"
          />
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <thead className="bg-[#F59E0B] text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Feature</th>
                  <th className="px-6 py-4 text-left">DRT</th>
                  <th className="px-6 py-4 text-left">NCLT</th>
                  <th className="px-6 py-4 text-left">DRAT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {judicialComparisonTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#F3F4F6] transition-colors">
                    <td className="px-6 py-4 font-semibold text-[#0A2540]">{row.feature}</td>
                    <td className="px-6 py-4 text-gray-600">{row.drt}</td>
                    <td className="px-6 py-4 text-gray-600">{row.nclt}</td>
                    <td className="px-6 py-4 text-gray-600">{row.drat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom text-center">
          <AnimatedSection direction="up" threshold={0.3}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-6">Need Expert Legal Assistance?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-600">
              Our legal experts can guide you through the appropriate legal mechanism for your specific case
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="bg-[#F59E0B] text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-[#D97706] transition-all duration-300">
                Get Consultation
              </Link>
              <Link to="/services" className="border-2 border-[#F59E0B] text-[#F59E0B] font-semibold py-3 px-8 rounded-lg hover:bg-[#F59E0B] hover:text-white transition-all duration-300">
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

export default LegalMechanisms;