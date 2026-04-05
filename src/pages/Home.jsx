/* src/pages/Home.jsx - Original Navy + Amber */
import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  Clock, Gavel, Users, Scale, Hammer, Landmark, Search, Shield, 
  ArrowRight, CheckCircle, Briefcase, TrendingUp, Building,
  Award, Target, Zap, Heart, Crown, Handshake, Star
} from "lucide-react";
import AnimatedCounter from "../components/AnimatedCounter";
import SectionTitle from "../components/SectionTitle";
import AnimatedCard from "../components/AnimatedCard";
import AnimatedSection from "../components/AnimatedSection";

const Home = () => {
  const navigate = useNavigate();
  
  const problems = [
    { icon: Clock, title: "Delayed Recoveries", desc: "Lengthy legal processes causing value erosion" },
    { icon: Scale, title: "Legal Complications", desc: "Complex SARFAESI, NCLT procedures" },
    { icon: Gavel, title: "Low Auction Participation", desc: "Poor buyer interest in asset sales" },
    { icon: Users, title: "Difficult Borrowers", desc: "Non-cooperative & avoidance tactics" },
  ];

  const solutions = [
    { icon: Briefcase, title: "Collections & Recovery", desc: "Soft and hard collections, including follow-ups and enforcement", serviceId: "collections-recovery" },
    { icon: Gavel, title: "SARFAESI Actions", desc: "Section 14 orders, evictions, and physical possession", serviceId: "sarfaesi-actions" },
    { icon: Scale, title: "Legal Coordination & DRT Support", desc: "Liaison with legal authorities, assisting in DRT proceedings", serviceId: "legal-coordination" },
    { icon: Search, title: "Asset Identification & Skip Tracing", desc: "Tracing borrowers and identifying movable/immovable assets", serviceId: "skip-tracing" },
    { icon: TrendingUp, title: "E-Auction & Sale Facilitation", desc: "Property identification, buyer sourcing, and complete auction support", serviceId: "e-auction" },
    { icon: Shield, title: "Custodial, Security & Handover", desc: "Asset protection, registration support, and possession handover", serviceId: "custody-services" },
  ];

  const trackRecordStats = [
    { amount: "₹165 Cr", client: "Padmaadevi Sugar", type: "Sugar Industry - NCLT Process", description: "Successfully identified buyer for 90+ acre sugar mill property" },
    { amount: "₹107 Cr", client: "Land Parcel", type: "Real Estate - SARFAESI Sale", description: "Facilitated sale of 254 acres of land near Chennai" },
    { amount: "₹66 Cr", client: "Battery Manufacturing Facility", type: "Manufacturing", description: "Successfully identified buyer near Hosur" },
    { amount: "₹66 Cr", client: "Wind Turbine Plant", type: "Energy", description: "Facilitated buyer identification near Thiruvallur" },
    { amount: "₹17 Cr", client: "Industrial Land", type: "Logistics", description: "Enabled sale of 27 acres near Oragadam, Chennai" },
    { amount: "₹16 Cr", client: "Agricultural Land", type: "Land Asset", description: "Identified investor for 75 acres near Puducherry" },
  ];

  const institutionalPartners = [
    { name: "Nationalised Banks", icon: Building },
    { name: "Private Sector Banks", icon: Building },
    { name: "Asset Reconstruction Companies", icon: TrendingUp },
    { name: "Non-Banking Financial Companies", icon: Briefcase }
  ];

  const whyChooseItems = [
    { icon: Shield, title: "No-Risk Engagement Model", desc: "100% success-based fee structure - you pay only when we deliver results" },
    { icon: Crown, title: "Experienced Leadership", desc: "28+ years of combined industry expertise with proven track record" },
    { icon: Handshake, title: "Strong Institutional Relationships", desc: "Empanelled with leading banks, ARCs, and NBFCs across India" },
    { icon: Zap, title: "End-to-End Execution Capability", desc: "Complete recovery solutions from identification to asset monetization" },
    { icon: Target, title: "Strategic Buyer Identification", desc: "Extensive network of investors and buyers for stressed assets" },
    { icon: Heart, title: "Ethical & Transparent Approach", desc: "Professional practices with strict confidentiality and compliance" }
  ];

  const handleNavigateToContact = () => {
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigateToService = (serviceId) => {
    sessionStorage.setItem('targetService', serviceId);
    navigate("/services");
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const handleNavigateToTrackRecord = () => {
    navigate("/track-record");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="animate-fade-in">

{/* Hero Section */}
<section className="bg-[#0A2540] py-20">
  <div className="container-custom">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
          Turn NPAs Into Cash—<span className="text-[#F59E0B]">Fast & Legally</span>
        </h1>
        <p className="text-xl mb-8 text-gray-300">
          Trusted recovery partner for Banks, NBFCs & ARCs
        </p>
        
        <div className="flex flex-wrap gap-6 mb-8">
          <div className="flex items-center gap-2">
            <CheckCircle className="text-[#F59E0B]" />
            <span className="text-white font-semibold">
              <AnimatedCounter end={1000} suffix="+ Cr" /> Transactions
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="text-[#F59E0B]" />
            <span className="text-white font-semibold">
              <AnimatedCounter end={25} suffix="+ Years" /> Experience
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="text-[#F59E0B]" />
            <span className="text-white font-semibold">SARFAESI | NCLT | DRT Experts</span>
          </div>
        </div>
      </div>
      
      {/* Image Collage Section - Proper Overlap between Top and Bottom Rows */}
      <div className="hidden md:block relative h-[550px] w-full">
        {/* Top-Left Frame - overlaps bottom-left */}
        <div className="absolute top-20 left-0 z-30 w-[300px] transform -rotate-6 hover:scale-105 transition-transform duration-300 shadow-2xl rounded-xl overflow-hidden">
          <img 
            src="src/images/home-1.jpeg" 
            alt="Industrial Manufacturing" 
            className="w-full h-[200px] object-cover"
          />
        </div>
        
        {/* Top-Right Frame - overlaps bottom-right */}
        <div className="absolute top-20 right-0 z-30 w-[300px] transform rotate-3 hover:scale-105 transition-transform duration-300 shadow-2xl rounded-xl overflow-hidden">
          <img 
            src="src\images\home-2.jpeg"
            alt="Sugar Mill Property" 
            className="w-full h-[200px] object-cover"
          />
        </div>
        
        {/* Bottom-Left Frame - overlapped by top-left, counterclockwise rotation */}
        <div className="absolute bottom-20 left-0 z-20 w-[300px] transform -rotate-3 hover:scale-105 transition-transform duration-300 shadow-2xl rounded-xl overflow-hidden">
          <img 
            src="src/images/home-3.jpeg" 
            alt="Land Parcel" 
            className="w-full h-[200px] object-cover"
          />
        </div>
        
        {/* Bottom-Right Frame - overlapped by top-right, clockwise rotation */}
        <div className="absolute bottom-20 right-0 z-20 w-[300px] transform rotate-2 hover:scale-105 transition-transform duration-300 shadow-2xl rounded-xl overflow-hidden">
          <img 
            src="src/images/home-4.jpeg" 
            alt="Battery Facility" 
            className="w-full h-[200px] object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Problems We Solve Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionTitle 
  title="Struggling with NPA Recovery?" 
  subtitle="We understand the challenges you face in recovering stressed assets"
  titleColor="#0A2540"
  accentColor="#F59E0B"
  subtitleColor="#4B5563"
/>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {problems.map((problem, idx) => (
              <AnimatedCard 
                key={idx} 
                className="card text-center h-full"
                delay={idx * 100}
                direction="up"
              >
                <problem.icon className="w-12 h-12 text-[#F59E0B] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-[#0A2540]">{problem.title}</h3>
                <p className="text-gray-600">{problem.desc}</p>
              </AnimatedCard>
            ))}
          </div>
          
          <AnimatedCard className="text-center mt-8" delay={400} direction="up">
            <p className="text-lg font-semibold text-[#0A2540]">
              We solve these with execution-driven strategies.
            </p>
          </AnimatedCard>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-[#F3F4F6]">
        <div className="container-custom">
          <SectionTitle 
            title="Our Services" 
            subtitle="Comprehensive solutions for all your NPA recovery needs"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {solutions.map((solution, idx) => (
              <AnimatedCard key={idx} className="h-full" delay={idx * 80} direction="up">
                <button
                  onClick={() => handleNavigateToService(solution.serviceId)}
                  className="card text-left w-full transition-all hover:shadow-xl hover:scale-105 transform duration-300 cursor-pointer group"
                >
                  <solution.icon className="w-12 h-12 text-[#F59E0B] mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-[#0A2540] group-hover:text-[#F59E0B] transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{solution.desc}</p>
                  <div className="text-[#F59E0B] font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight size={16} />
                  </div>
                </button>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="How We Work" 
            subtitle="A systematic approach to ensure successful recovery"
          />
          
          {/* Desktop layout */}
          <div className="hidden md:block mt-12">
            <div className="flex justify-between items-start relative max-w-5xl mx-auto">
              {["Case Evaluation", "Strategy Planning", "Execution", "Recovery & Closure"].map((step, idx) => (
                <AnimatedCard 
                  key={idx} 
                  className="text-center relative z-10" 
                  style={{ width: '22%' }}
                  delay={idx * 100}
                  direction="up"
                >
                  <div className="w-16 h-16 bg-[#F59E0B] rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-3 shadow-lg">
                    {idx + 1}
                  </div>
                  <span className="font-semibold text-lg block text-[#0A2540]">{step}</span>
                </AnimatedCard>
              ))}
              
              <div className="absolute top-5 left-0 w-full flex justify-between px-8 pointer-events-none" style={{ paddingLeft: '15%', paddingRight: '12%' }}>
                <div className="flex justify-center" style={{ width: '22%' }}>
                  <ArrowRight className="w-6 h-6 text-[#F59E0B]" />
                </div>
                <div className="flex justify-center" style={{ width: '22%' }}>
                  <ArrowRight className="w-6 h-6 text-[#F59E0B]" />
                </div>
                <div className="flex justify-center" style={{ width: '22%' }}>
                  <ArrowRight className="w-6 h-6 text-[#F59E0B]" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile layout */}
          <div className="md:hidden space-y-6 mt-8">
            {["Case Evaluation", "Strategy Planning", "Execution", "Recovery & Closure"].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-[#F59E0B] rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-3 shadow-lg">
                  {idx + 1}
                </div>
                <span className="font-semibold text-lg block text-[#0A2540]">{step}</span>
                {idx < 3 && (
                  <div className="flex justify-center my-4">
                    <svg className="w-6 h-6 text-[#F59E0B] transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Track Record Results Section */}
      <section className="py-20 bg-[#F3F4F6]">
        <div className="container-custom">
          <SectionTitle 
            title="Proven Results That Speak" 
            subtitle="Real success stories from our valued clients"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {trackRecordStats.map((result, idx) => (
              <AnimatedCard key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-200 hover:border-[#F59E0B]" delay={idx * 100} direction="up">
                <div className="text-3xl md:text-4xl font-bold text-[#F59E0B] mb-2">
                  {result.amount}
                </div>
                <h3 className="text-lg font-bold text-[#0A2540] mb-1">{result.client}</h3>
                <p className="text-sm text-[#F59E0B] font-semibold mb-2">{result.type}</p>
                <p className="text-gray-600 text-sm">{result.description}</p>
              </AnimatedCard>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <AnimatedCard delay={300} direction="up">
              <button onClick={handleNavigateToTrackRecord} className="bg-[#F59E0B] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-[#D97706] transition-all duration-300 transform hover:scale-105">
                View Full Track Record
              </button>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Institutional Associations Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Institutional Associations" 
            subtitle="Trusted by leading financial institutions across India"
          />
          
          <AnimatedSection direction="up" threshold={0.3}>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <p className="text-gray-700 mb-4 leading-relaxed">
                We are empanelled with leading <strong className="text-[#F59E0B]">Nationalised Banks</strong>, 
                <strong className="text-[#F59E0B]"> Private Sector Banks</strong>, and 
                <strong className="text-[#F59E0B]"> Asset Reconstruction Companies (ARCs)</strong> across key financial hubs such as 
                Chennai, Mumbai and Delhi, along with select Non-Banking Financial Companies (NBFCs).
              </p>
              <p className="text-gray-600 italic">
                Our strong institutional associations reflect the trust placed in us by prominent financial institutions, 
                enabling us to consistently deliver effective recovery and resolution solutions.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {institutionalPartners.map((item, idx) => (
              <AnimatedCard key={idx} className="group bg-[#F3F4F6] rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1" delay={idx * 100} direction="up">
                <item.icon className="w-12 h-12 text-[#F59E0B] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-[#0A2540]">{item.name}</span>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#F3F4F6]">
        <div className="container-custom">
          <SectionTitle 
            title="Why Choose BFI-NPA?" 
            subtitle="We combine expertise, ethics, and execution to deliver exceptional results"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {whyChooseItems.map((item, idx) => (
              <AnimatedCard key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-200 hover:border-[#F59E0B]" delay={idx * 100} direction="up">
                <div className="w-14 h-14 bg-[#F59E0B]/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-[#F59E0B]" />
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </AnimatedCard>
            ))}
          </div>

          <AnimatedCard delay={500} direction="up" className="mt-12 text-center bg-[#0A2540] text-white rounded-2xl p-10 shadow-2xl">
            <svg className="w-12 h-12 text-[#F59E0B] mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <p className="text-3xl md:text-4xl font-bold italic mb-3">"If we don't perform, we don't get paid."</p>
            <p className="text-[#F59E0B] text-lg">Our Philosophy - Results-Driven Excellence</p>
          </AnimatedCard>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <AnimatedSection direction="up" threshold={0.3}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-6">
              Have NPAs to Resolve? Let's Fix It.
            </h2>
            <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
              Get in touch with our experts today for a free consultation
            </p>
            <button 
              onClick={handleNavigateToContact}
              className="bg-[#F59E0B] text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-[#D97706] transition-all duration-300 transform hover:scale-105 inline-block text-lg"
            >
              Get Free Consultation
            </button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;