/* src/pages/Home.jsx */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Clock, Gavel, Users, 
  Scale, Hammer, Landmark, Search, Shield, 
  ArrowRight, Phone, CheckCircle, Briefcase, FileText, TrendingUp, Building 
} from "lucide-react";
import AnimatedCounter from "../components/AnimatedCounter";

const Home = () => {
  const navigate = useNavigate();
  
  const problems = [
    { icon: Clock, title: "Delayed Recoveries", desc: "Lengthy legal processes causing value erosion" },
    { icon: Scale, title: "Legal Complications", desc: "Complex SARFAESI, NCLT procedures" },
    { icon: Gavel, title: "Low Auction Participation", desc: "Poor buyer interest in asset sales" },
    { icon: Users, title: "Difficult Borrowers", desc: "Non-cooperative & avoidance tactics" },
  ];

  const solutions = [
    { 
      icon: Briefcase, 
      title: "Collections & Recovery", 
      desc: "Soft and hard collections, including follow-ups and enforcement",
      serviceId: "collections-recovery"
    },
    { 
      icon: Gavel, 
      title: "SARFAESI Actions", 
      desc: "Section 14 orders, evictions, and physical possession",
      serviceId: "sarfaesi-actions"
    },
    { 
      icon: Scale, 
      title: "Legal Coordination & DRT Support", 
      desc: "Liaison with legal authorities, assisting in DRT proceedings",
      serviceId: "legal-coordination"
    },
    { 
      icon: Search, 
      title: "Asset Identification & Skip Tracing", 
      desc: "Tracing borrowers and identifying movable/immovable assets",
      serviceId: "skip-tracing"
    },
    { 
      icon: TrendingUp, 
      title: "E-Auction & Sale Facilitation", 
      desc: "Property identification, buyer sourcing, and complete auction support",
      serviceId: "e-auction"
    },
    { 
      icon: Shield, 
      title: "Custodial, Security & Handover", 
      desc: "Asset protection, registration support, and possession handover",
      serviceId: "custody-services"
    },
  ];

  const results = [
    { amount: 165, client: "Padmaadevi Sugar", type: "Sugar Industry" },
    { amount: 107, client: "IVRCL Land", type: "Real Estate" },
    { amount: 81, client: "Siva Industries", type: "Manufacturing" },
  ];

  // Function to handle navigation to contact page with scroll to top
  const handleNavigateToContact = () => {
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Function to handle navigation to specific service on services page
  const handleNavigateToService = (serviceId) => {
    navigate(`/services#${serviceId}`);
    window.scrollTo({ top: 0, behavior: "auto" });
    setTimeout(() => {
      const element = document.getElementById(serviceId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-primary-dark">
                Turn NPAs Into Cash—<span className="text-primary-orange">Fast & Legally</span>
              </h1>
              <p className="text-xl mb-8 text-gray-600">
                Trusted recovery partner for Banks, NBFCs & ARCs
              </p>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-primary-orange" />
                  <span className="text-primary-dark font-semibold">
                    <span className="text-primary-dark">
                      <AnimatedCounter end={1000} suffix="+ Cr" />
                    </span> Transactions
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-primary-orange" />
                  <span className="text-primary-dark font-semibold">
                    <span className="text-primary-dark">
                      <AnimatedCounter end={25} suffix="+ Years" />
                    </span> Experience
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-primary-orange" />
                  <span className="text-primary-dark font-semibold">SARFAESI | NCLT | DRT Experts</span>
                </div>
              </div>              
            </div>
            
            <div className="hidden md:block">
              <img 
                src="src/images/industrial-manufacturing.avif" 
                alt="Legal Banking" 
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Struggling with NPA Recovery?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {problems.map((problem, idx) => (
              <div key={idx} className="card text-center">
                <problem.icon className="w-12 h-12 text-primary-orange mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-primary-dark">{problem.title}</h3>
                <p className="text-gray-600">{problem.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-lg font-semibold mt-8 text-primary-dark">
            We solve these with execution-driven strategies.
          </p>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-20 bg-primary-grey">
        <div className="container-custom">
          <h2 className="section-title text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {solutions.map((solution, idx) => (
              <button
                key={idx}
                onClick={() => handleNavigateToService(solution.serviceId)}
                className="card text-left w-full transition-all hover:shadow-xl hover:scale-105 transform duration-300 cursor-pointer group"
              >
                <solution.icon className="w-12 h-12 text-primary-orange mb-4" />
                <h3 className="text-xl font-bold mb-2 text-primary-dark group-hover:text-primary-orange transition-colors">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-4">{solution.desc}</p>
                <div className="text-primary-orange font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <ArrowRight size={16} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">How We Work</h2>
          
          {/* Desktop layout */}
          <div className="hidden md:block mt-12">
            <div className="flex justify-between items-start relative max-w-5xl mx-auto">
              {["Case Evaluation", "Strategy Planning", "Execution", "Recovery & Closure"].map((step, idx) => (
                <div key={idx} className="text-center relative z-10" style={{ width: '22%' }}>
                  <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-3 shadow-lg">
                    {idx + 1}
                  </div>
                  <span className="font-semibold text-lg block text-primary-dark">{step}</span>
                </div>
              ))}
              
              {/* Arrows positioned in the gaps */}
              <div className="absolute top-5 left-0 w-full flex justify-between px-8 pointer-events-none" style={{ paddingLeft: '15%', paddingRight: '12%' }}>
                <div className="flex justify-center" style={{ width: '22%' }}>
                  <ArrowRight className="w-6 h-6 text-primary-orange" />
                </div>
                <div className="flex justify-center" style={{ width: '22%' }}>
                  <ArrowRight className="w-6 h-6 text-primary-orange" />
                </div>
                <div className="flex justify-center" style={{ width: '22%' }}>
                  <ArrowRight className="w-6 h-6 text-primary-orange" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile layout */}
          <div className="md:hidden space-y-6 mt-8">
            {["Case Evaluation", "Strategy Planning", "Execution", "Recovery & Closure"].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-3 shadow-lg">
                  {idx + 1}
                </div>
                <span className="font-semibold text-lg block text-primary-dark">{step}</span>
                {idx < 3 && (
                  <div className="flex justify-center my-4">
                    <svg className="w-6 h-6 text-primary-orange transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Proven Results That Speak</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {results.map((result, idx) => (
              <div key={idx} className="text-center p-6 bg-primary-grey rounded-xl hover:shadow-xl transition-all">
                <div className="text-4xl md:text-5xl font-bold text-primary-orange mb-2">
                  ₹{result.amount} Cr
                </div>
                <p className="text-xl font-semibold mb-1 text-primary-dark">{result.client}</p>
                <p className="text-gray-600">{result.type}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="btn-primary inline-block">
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Institutional Associations - Styled like About page */}
      <section className="py-20 bg-primary-grey">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">Institutional Associations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by leading financial institutions across India
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-gray-700 mb-4 leading-relaxed">
              We are empanelled with leading <strong className="text-primary-orange">Nationalised Banks</strong>, 
              <strong className="text-primary-orange"> Private Sector Banks</strong>, and 
              <strong className="text-primary-orange"> Asset Reconstruction Companies (ARCs)</strong> across key financial hubs such as 
              Chennai, Mumbai and Delhi, along with select Non-Banking Financial Companies (NBFCs).
            </p>
            <p className="text-gray-600 italic">
              Our strong institutional associations reflect the trust placed in us by prominent financial institutions, 
              enabling us to consistently deliver effective recovery and resolution solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Nationalised Banks", icon: Building },
              { name: "Private Sector Banks", icon: Building },
              { name: "Asset Reconstruction Companies", icon: TrendingUp },
              { name: "Non-Banking Financial Companies", icon: Briefcase }
            ].map((item, idx) => (
              <div key={idx} className="group bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <item.icon className="w-12 h-12 text-primary-orange mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-primary-dark">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Why Choose Us</h2>
              <div className="space-y-4">
                {["Success-based fees", "Fast execution", "Legal expertise", "Ethical approach"].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="text-primary-orange" />
                    <span className="text-lg text-primary-dark">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Business Trust" 
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary-dark py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Have NPAs to Resolve? Let's Fix It.
          </h2>
          <Link 
            to="/contact" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="btn-primary inline-block text-lg px-8 py-3"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;