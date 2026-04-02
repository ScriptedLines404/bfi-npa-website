/* src/pages/ResolutionMechanisms.jsx */
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Banknote, Gavel, TrendingUp, Scale, Building, 
  Handshake, Briefcase, Zap, Target, CheckCircle, 
  ArrowRight, Clock, BarChart, Users, Landmark,
  Award, AlertCircle, HeartHandshake
} from "lucide-react";

const ResolutionMechanisms = () => {
  const location = useLocation();
  const [activeResolution, setActiveResolution] = useState(0);
  const [hasScrolledToHash, setHasScrolledToHash] = useState(false);

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
      borderColor: "border-blue-200"
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
      borderColor: "border-orange-200"
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
      borderColor: "border-green-200"
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
      borderColor: "border-purple-200"
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
      borderColor: "border-red-200"
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
      borderColor: "border-teal-200"
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
      borderColor: "border-yellow-200"
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
      borderColor: "border-indigo-200"
    }
  ];

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

  // Handle hash navigation
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && !hasScrolledToHash) {
      const resolutionIndex = resolutionTypes.findIndex(resolution => resolution.id === hash);
      if (resolutionIndex !== -1) {
        setActiveResolution(resolutionIndex);
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
  }, [location, resolutionTypes, hasScrolledToHash]);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-dark to-primary-dark/90 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Resolution Mechanisms</h1>
            <p className="text-xl leading-relaxed">
              Resolution of stressed assets can be achieved through recovery, legal enforcement, asset sale, 
              insolvency proceedings, or restructuring—depending on the nature and stage of the account.
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
                <h3 className="font-bold text-lg mb-4 px-3">Resolution Types</h3>
                {resolutionTypes.map((resolution, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveResolution(idx);
                      setHasScrolledToHash(false);
                      setTimeout(() => {
                        const element = document.getElementById(resolution.id);
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
                      activeResolution === idx 
                        ? "bg-primary-orange text-white" 
                        : "hover:bg-primary-orange/10"
                    }`}
                  >
                    <resolution.icon size={20} />
                    <span className="text-sm">{resolution.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Content Panel */}
            <div className="lg:col-span-3">
              {resolutionTypes.map((resolution, idx) => (
                <div 
                  key={idx}
                  id={resolution.id}
                  className={`card mb-8 scroll-mt-24 ${activeResolution === idx ? 'ring-2 ring-primary-orange' : ''}`}
                  style={{ display: activeResolution === idx ? 'block' : 'none' }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 ${resolution.color} rounded-lg`}>
                      {React.createElement(resolution.icon, { 
                        className: "w-10 h-10 text-primary-orange" 
                      })}
                    </div>
                    <h2 className="text-3xl font-bold text-primary-dark">
                      {resolution.title}
                    </h2>
                  </div>
                  
                  <p className="text-primary-orange font-semibold text-lg mb-3">
                    Definition
                  </p>
                  <p className="text-gray-700 text-lg mb-6">
                    {resolution.definition}
                  </p>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {resolution.longDescription}
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="font-bold text-xl mb-3 text-primary-dark">Methods:</h3>
                    <ul className="space-y-2">
                      {resolution.methods.map((method, midx) => (
                        <li key={midx} className="flex items-center gap-2">
                          <CheckCircle className="text-primary-orange" size={18} />
                          <span className="text-gray-700">{method}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {resolution.framework && (
                    <div className="mb-6">
                      <h3 className="font-bold text-xl mb-3 text-primary-dark">Key Framework:</h3>
                      <p className="text-gray-700">{resolution.framework}</p>
                    </div>
                  )}

                  {resolution.platforms && (
                    <div className="mb-6">
                      <h3 className="font-bold text-xl mb-3 text-primary-dark">Platforms:</h3>
                      <ul className="space-y-2">
                        {resolution.platforms.map((platform, pidx) => (
                          <li key={pidx} className="flex items-center gap-2">
                            <ArrowRight className="text-primary-orange" size={18} />
                            <span className="text-gray-700">{platform}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resolution.approaches && (
                    <div className="mb-6">
                      <h3 className="font-bold text-xl mb-3 text-primary-dark">Resolution Approaches:</h3>
                      <ul className="space-y-2">
                        {resolution.approaches.map((approach, aidx) => (
                          <li key={aidx} className="flex items-center gap-2">
                            <CheckCircle className="text-primary-orange" size={18} />
                            <span className="text-gray-700">{approach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resolution.valueDelivered && (
                    <div className="mb-6 bg-green-50 rounded-lg p-4">
                      <h3 className="font-bold text-xl mb-3 text-green-700">Value Delivered:</h3>
                      <ul className="space-y-2">
                        {resolution.valueDelivered.map((value, vidx) => (
                          <li key={vidx} className="flex items-center gap-2">
                            <Award className="text-green-600" size={18} />
                            <span className="text-gray-700">{value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-primary-grey rounded-lg p-3">
                        <p className="font-semibold text-primary-dark">Best For:</p>
                        <p className="text-gray-700 text-sm">{resolution.bestFor}</p>
                      </div>
                      <div className="bg-primary-grey rounded-lg p-3">
                        <p className="font-semibold text-primary-dark">Typical Timeline:</p>
                        <p className="text-gray-700 text-sm">{resolution.timeline}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resolution Types Comparison Table */}
      <section className="py-16 bg-primary-grey">
        <div className="container-custom">
          <h2 className="section-title text-center">Resolution Types Comparison</h2>
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
        </div>
      </section>

      {/* How to Choose Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Target className="w-16 h-16 text-primary-orange mx-auto mb-4" />
            <h2 className="section-title">How to Choose the Right Resolution Type</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Selecting the optimal resolution strategy depends on multiple factors unique to each case
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectionFactors.map((factor, idx) => (
              <div key={idx} className="bg-primary-grey rounded-xl p-6 hover:shadow-lg transition-all">
                <factor.icon className="w-12 h-12 text-primary-orange mb-4" />
                <h3 className="text-lg font-bold text-primary-dark mb-2">{factor.title}</h3>
                <p className="text-gray-600 text-sm">{factor.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Decision Guide */}
      <section className="py-16 bg-primary-grey">
        <div className="container-custom">
          <div className="bg-primary-dark rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-6 text-center">Quick Decision Guide</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {quickGuide.map((guide, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all">
                  <span className="font-semibold">{guide.condition}</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${guide.color}`}>
                    {guide.resolution}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Expert Resolution Strategy?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our team of experts will analyze your stressed assets and recommend the optimal resolution framework
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

export default ResolutionMechanisms;