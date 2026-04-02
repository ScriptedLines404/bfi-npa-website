/* src/pages/LegalMechanisms.jsx */
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Scale, Gavel, Building, FileText, 
  CheckCircle, ArrowRight, BookOpen, 
  Timer, Banknote, Shield, AlertCircle,
  Landmark, Users, Briefcase, Zap, Award,
  TrendingUp, Clock, Target
} from "lucide-react";

const LegalMechanisms = () => {
  const location = useLocation();
  const [activeFramework, setActiveFramework] = useState(0);
  const [hasScrolledToHash, setHasScrolledToHash] = useState(false);

  const legalFrameworks = [
    {
      id: "rddb-act",
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
      borderColor: "border-blue-200",
      iconColor: "text-blue-600"
    },
    {
      id: "sarfaesi",
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
      borderColor: "border-orange-200",
      iconColor: "text-orange-600"
    },
    {
      id: "ibc",
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
      borderColor: "border-red-200",
      iconColor: "text-red-600"
    }
  ];

  const comparisonTable = [
    { feature: "Focus", ibc: "Business resolution", sarfaesi: "Asset recovery", rdbb: "Legal recovery" },
    { feature: "Authority", ibc: "NCLT", sarfaesi: "Bank", rdbb: "DRT" },
    { feature: "Outcome", ibc: "Revival / liquidation", sarfaesi: "Asset sale", rdbb: "Recovery order" },
    { feature: "Speed", ibc: "Time-bound (180-330 days)", sarfaesi: "Fast (no court intervention)", rdbb: "Moderate" },
    { feature: "Use Case", ibc: "Large corporate insolvency", sarfaesi: "Secured loans", rdbb: "Disputed/unsecured cases" }
  ];

  // Handle hash navigation
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && !hasScrolledToHash) {
      const frameworkIndex = legalFrameworks.findIndex(framework => framework.id === hash);
      if (frameworkIndex !== -1) {
        setActiveFramework(frameworkIndex);
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
  }, [location, legalFrameworks, hasScrolledToHash]);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-dark to-primary-dark/90 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Legal Mechanisms for NPAs</h1>
            <p className="text-xl leading-relaxed">
              Comprehensive legal frameworks enabling effective recovery and resolution of stressed assets through 
              specialized tribunals, enforcement mechanisms, and insolvency proceedings.
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
              <div className="bg-primary-grey rounded-xl p-4 sticky top-24">
                <h3 className="font-bold text-lg mb-4 px-3">Legal Frameworks</h3>
                {legalFrameworks.map((framework, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveFramework(idx);
                      setHasScrolledToHash(false);
                      setTimeout(() => {
                        const element = document.getElementById(framework.id);
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
                      activeFramework === idx 
                        ? "bg-primary-orange text-white" 
                        : "hover:bg-primary-orange/10"
                    }`}
                  >
                    <framework.icon size={20} />
                    <span className="text-sm">{framework.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Content Panel */}
            <div className="lg:col-span-3">
              {legalFrameworks.map((framework, idx) => (
                <div 
                  key={idx}
                  id={framework.id}
                  className={`card mb-8 scroll-mt-24 ${activeFramework === idx ? 'ring-2 ring-primary-orange' : ''}`}
                  style={{ display: activeFramework === idx ? 'block' : 'none' }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 ${framework.color} rounded-lg`}>
                      {React.createElement(framework.icon, { 
                        className: `w-10 h-10 ${framework.iconColor}` 
                      })}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-primary-dark">
                        {framework.title}
                      </h2>
                      <p className="text-sm text-gray-500 mt-1">{framework.fullName}</p>
                    </div>
                  </div>
                  
                  {/* Definition */}
                  <div className="mb-6">
                    <p className="text-primary-orange font-semibold text-lg mb-2">What is {framework.title}?</p>
                    <p className="text-gray-700 text-lg leading-relaxed">{framework.definition}</p>
                  </div>

                  {/* Simple Explanation */}
                  <div className="mb-6 bg-primary-grey rounded-lg p-4">
                    <p className="font-bold text-primary-dark mb-2 flex items-center gap-2">
                      <BookOpen size={18} /> Simple Explanation
                    </p>
                    <p className="text-gray-700">{framework.simpleExplanation}</p>
                  </div>

                  {/* Key Features for SARFAESI */}
                  {framework.keyFeatures && (
                    <div className="mb-6">
                      <h3 className="font-bold text-xl mb-3 text-primary-dark">Key Features:</h3>
                      <ul className="space-y-2">
                        {framework.keyFeatures.map((feature, fidx) => (
                          <li key={fidx} className="flex items-center gap-2">
                            <CheckCircle className="text-primary-orange" size={18} />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Key Feature for RDDB */}
                  {framework.keyFeature && (
                    <div className="mb-6">
                      <h3 className="font-bold text-xl mb-3 text-primary-dark">Key Feature:</h3>
                      <p className="text-gray-700">{framework.keyFeature}</p>
                    </div>
                  )}

                  {/* Main Objective for IBC */}
                  {framework.mainObjective && (
                    <div className="mb-6">
                      <h3 className="font-bold text-xl mb-3 text-primary-dark">Main Objective:</h3>
                      <ul className="space-y-2">
                        {framework.mainObjective.map((objective, oidx) => (
                          <li key={oidx} className="flex items-center gap-2">
                            <Target className="text-primary-orange" size={18} />
                            <span className="text-gray-700">{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Who Can Use */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl mb-3 text-primary-dark flex items-center gap-2">
                      <Users size={20} /> Who Can Use {framework.title}?
                    </h3>
                    <ul className="space-y-2">
                      {framework.whoCanUse.map((user, uidx) => (
                        <li key={uidx} className="flex items-center gap-2">
                          <CheckCircle className="text-primary-orange" size={18} />
                          <span className="text-gray-700">{user}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* How it Works */}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl mb-3 text-primary-dark flex items-center gap-2">
                      <Zap size={20} /> How {framework.title} Works
                    </h3>
                    <div className="space-y-3">
                      {framework.process.map((step, sidx) => (
                        <div key={sidx} className="flex items-start gap-3">
                          <div className="bg-primary-orange text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                            {sidx + 1}
                          </div>
                          <span className="text-gray-700">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Types of Actions (RDDB) */}
                  {framework.actions && (
                    <div className="mb-6">
                      <h3 className="font-bold text-xl mb-3 text-primary-dark">Types of Actions Under {framework.title}:</h3>
                      <ul className="space-y-2">
                        {framework.actions.map((action, aidx) => (
                          <li key={aidx} className="flex items-center gap-2">
                            <ArrowRight className="text-primary-orange" size={18} />
                            <span className="text-gray-700">{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Example for SARFAESI or IBC */}
                  {framework.example && (
                    <div className="mb-6 bg-primary-grey rounded-lg p-4">
                      <h3 className="font-bold text-primary-dark mb-2 flex items-center gap-2">
                        <Landmark size={18} /> Example
                      </h3>
                      <p className="text-gray-700">{framework.example}</p>
                    </div>
                  )}

                  {/* Authorities Involved (SARFAESI) */}
                  {framework.authorities && (
                    <div className="mb-6">
                      <h3 className="font-bold text-xl mb-3 text-primary-dark">Important Authorities Involved:</h3>
                      <ul className="space-y-2">
                        {framework.authorities.map((authority, aidx) => (
                          <li key={aidx} className="flex items-center gap-2">
                            <Shield className="text-primary-orange" size={18} />
                            <span className="text-gray-700">{authority}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Participants for IBC */}
                  {framework.participants && (
                    <div className="mb-6">
                      <h3 className="font-bold text-xl mb-3 text-primary-dark">Key Participants in {framework.title}:</h3>
                      <ul className="space-y-2">
                        {framework.participants.map((participant, pidx) => (
                          <li key={pidx} className="flex items-center gap-2">
                            <Users className="text-primary-orange" size={18} />
                            <span className="text-gray-700">{participant}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Resolution Types for IBC */}
                  {framework.resolutionTypes && (
                    <div className="mb-6">
                      <h3 className="font-bold text-xl mb-3 text-primary-dark">Types of Resolution Under {framework.title}:</h3>
                      <ul className="space-y-2">
                        {framework.resolutionTypes.map((type, tidx) => (
                          <li key={tidx} className="flex items-center gap-2">
                            <TrendingUp className="text-primary-orange" size={18} />
                            <span className="text-gray-700">{type}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* When Used for RDDB */}
                  {framework.whenUsed && (
                    <div className="mb-6">
                      <h3 className="font-bold text-xl mb-3 text-primary-dark">When is {framework.title} Used?</h3>
                      <ul className="space-y-2">
                        {framework.whenUsed.map((use, uidx) => (
                          <li key={uidx} className="flex items-center gap-2">
                            <Clock className="text-primary-orange" size={18} />
                            <span className="text-gray-700">{use}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* VS Comparison for RDDB */}
                  {framework.vsSARFAESI && (
                    <div className="mb-6 bg-primary-grey rounded-lg p-4">
                      <h3 className="font-bold text-primary-dark mb-3">RDDB vs SARFAESI (Quick Difference):</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="font-semibold text-primary-dark">RDDB Act:</p>
                          <p className="text-gray-600 text-sm">{framework.vsSARFAESI.rdbb}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-primary-dark">SARFAESI:</p>
                          <p className="text-gray-600 text-sm">{framework.vsSARFAESI.sarfaesi}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Importance */}
                  <div className="mb-6 bg-green-50 rounded-lg p-4">
                    <h3 className="font-bold text-xl mb-2 text-green-700 flex items-center gap-2">
                      <Award size={20} /> Why {framework.title} is Important
                    </h3>
                    <p className="text-gray-700">{framework.importance}</p>
                  </div>

                  {/* Limitations for SARFAESI */}
                  {framework.limitations && (
                    <div className="bg-yellow-50 rounded-lg p-4">
                      <h3 className="font-bold text-xl mb-2 text-yellow-700 flex items-center gap-2">
                        <AlertCircle size={20} /> Limitations
                      </h3>
                      <p className="text-gray-700">{framework.limitations}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-primary-grey">
        <div className="container-custom">
          <h2 className="section-title text-center">IBC vs SARFAESI vs RDDB (Quick View)</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-primary-dark text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Feature</th>
                  <th className="px-6 py-4 text-left">IBC</th>
                  <th className="px-6 py-4 text-left">SARFAESI</th>
                  <th className="px-6 py-4 text-left">RDDB</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comparisonTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-primary-dark">{row.feature}</td>
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

      {/* CTA Section */}
      <section className="py-16 bg-primary-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Expert Legal Assistance?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our legal experts can guide you through the appropriate legal mechanism for your specific case
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Get Free Consultation
            </Link>
            <Link to="/services" className="btn-outline border-white text-white hover:bg-white hover:text-primary-dark">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalMechanisms;