/* src/pages/About.jsx - Navy + Amber Color Scheme with Diagonal Flow Leadership Layout */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Target, Eye, MapPin, Award, Briefcase, Scale, 
  Shield, Users, Building, TrendingUp, FileText, 
  CheckCircle, Mail, Phone, Calendar, Heart, 
  Star, ArrowRight, Sparkles, Zap, Globe, 
  Clock, BarChart, Handshake, Crown, Gavel
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import AnimatedCard from "../components/AnimatedCard";
import AnimatedSection from "../components/AnimatedSection";

const About = () => {
  const navigate = useNavigate();
  const [imageErrors, setImageErrors] = useState({});

  const leaders = [
    { 
      name: "Mr. A. Velmurugan", 
      title: "Director",
      headline: "28+ Years of Corporate Collections & Financial Recovery Excellence",
      description: "A graduate in Management and Law, he is the former Promoter-Director of a similar Pvt. Ltd. company (2002–2021), where he played a pivotal role in building and scaling operations. He has successfully led and managed 16+ branches, working closely with leading Banks, NBFCs, and Asset Reconstruction Companies (ARCs).",
      keyStrengths: [
        "Execution of statutory possession proceedings through DRT, DM, CJM, and CMM",
        "Resolution and sale of high-value secured assets",
        "Handling large and complex recovery portfolios across multiple jurisdictions"
      ],
      image: "src/images/specialised-capabilities.jpg",
      layout: "top" // top-left text, top-right image
    },
    { 
      name: "Mr. A. Velraja", 
      title: "Director",
      headline: "Driving Business Development & Field Operations with Precision",
      description: "Built his career through hands-on experience in vehicle financing, repossession, and recovery operations. Starting as an Executive, he progressed to the role of Branch Manager across various NBFCs, gaining deep operational expertise. A graduate in Economics and Law, he plays a key role in driving business development and field operations, ensuring efficiency and execution excellence.",
      keyStrengths: [
        "Expertise in vehicle finance and repossession operations",
        "Strong branch-level leadership and team management",
        "Active involvement in business growth and client servicing"
      ],
      image: "src/images/home-1.jpeg",
      layout: "bottom" // bottom-left image, bottom-right text
    },
  ];

  const assetClasses = [
    "Industrial Units - Textile, Dyeing, Leather, Engineering, Steel, Manufacturing",
    "Infrastructure & Energy - Wind Turbine, Windmills, Hydro and GAS Power Units",
    "Hospitality Sector - Operational Star Hotels",
    "Healthcare - Private Nursing Homes with Patients",
    "Food Processing - Mango Pulp Manufacturing Facilities",
    "Commercial Assets - Supermarkets, Showrooms, Complexes",
    "Residential Properties - Bungalows, Individual Houses, Apartments"
  ];

  const statutoryExperience = [
    {
      title: "DRT, CMM & CJM Authorities",
      description: "Orders obtained from specialized tribunals and courts",
      icon: Scale
    },
    {
      title: "SARFAESI Act",
      description: "Direct possession without court intervention",
      icon: Gavel
    }
  ];

  const specializedCapabilities = [
    "Asset Identification & Demarcation",
    "Saleability Analysis with Risk Assessment",
    "Coordination with Valuers & Site Inspections",
    "Buyer Education, Engagement & Onboarding",
    "Risk Mitigation through Periodic Property Monitoring"
  ];

  const whyChooseItems = [
    { icon: Shield, title: "No-Risk Engagement Model", desc: "100% success-based fee structure - you pay only when we deliver results" },
    { icon: Crown, title: "Experienced Leadership", desc: "28+ years of combined industry expertise with proven track record" },
    { icon: Handshake, title: "Strong Institutional Relationships", desc: "Empanelled with leading banks, ARCs, and NBFCs across India" },
    { icon: Zap, title: "End-to-End Execution Capability", desc: "Complete recovery solutions from identification to asset monetization" },
    { icon: Heart, title: "Ethical & Transparent Approach", desc: "Professional practices with strict confidentiality and compliance" }
  ];

  const handleNavigateToContact = () => {
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigateToServices = () => {
    navigate("/services");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section - Navy Blue like Home page */}
      <div className="relative bg-[#0A2540] text-white min-h-screen flex items-center py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#F59E0B] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F59E0B] rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection direction="up" threshold={0.3}>
            <div className="max-w-5xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-[#F59E0B]/10 px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-[#F59E0B]" />
                <span className="text-sm font-semibold text-[#F59E0B]">Est. 2020</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                About BFI-NPA
              </h1>
              <div className="space-y-4">
                <p className="text-lg text-gray-300 leading-relaxed">
                  <strong className="text-[#F59E0B]">BFI-NPA Resolution Services Private Limited</strong> is a professionally managed company incorporated under the Companies Act, 2013 on <strong>5th February 2020</strong>. 
                  We specialize in debt collection, debt recovery, property disposition, and allied financial services, working closely with Nationalised Banks, Private Sector Banks, Asset Reconstruction Companies (ARCs), and Non-Banking Financial Companies (NBFCs).
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  With a strong presence across key districts of Tamil Nadu, we are well-positioned to deliver timely and effective solutions.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Our clientele includes Banks, ARCs, Corporates, NBFCs and Financial Institutions. We are committed to providing services that are efficient, cost-effective, and driven by integrity, transparency, and professional excellence.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Leadership Section - Diagonal Flow Layout */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Meet Our Leadership" 
            subtitle="Our leadership team combines decades of industry experience with strong execution capabilities"
            titleColor="#0A2540"
            accentColor="#F59E0B"
            subtitleColor="#4B5563"
          />
          
          <div className="space-y-16 mt-12">
            {/* Top Section: Text Left, Image Right */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Side - Text Block */}
              <AnimatedSection direction="left" threshold={0.3} className="order-1">
                <div className="pr-0 md:pr-8">
                  <div className="inline-flex items-center gap-2 bg-[#F59E0B]/10 px-4 py-2 rounded-full mb-6">
                    <Crown className="w-4 h-4 text-[#F59E0B]" />
                    <span className="text-sm font-semibold text-[#F59E0B]">Director</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
                    {leaders[0].name}
                  </h2>
                  <h3 className="text-xl font-semibold text-[#F59E0B] mb-4">
                    {leaders[0].headline}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {leaders[0].description}
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold text-[#0A2540]">Key Strengths:</p>
                    <ul className="space-y-1">
                      {leaders[0].keyStrengths.map((strength, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2 text-gray-600">
                          <CheckCircle className="w-4 h-4 text-[#F59E0B] mt-1 flex-shrink-0" />
                          <span className="text-sm">{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>

              {/* Right Side - Image */}
              <AnimatedSection direction="right" threshold={0.3} className="order-2">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#F59E0B]/20 to-[#F59E0B]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    {leaders[0].image && !imageErrors[leaders[0].name] ? (
                      <img 
                        src={leaders[0].image} 
                        alt={leaders[0].name}
                        className="w-full h-[400px] object-cover"
                        onError={() => setImageErrors(prev => ({ ...prev, [leaders[0].name]: true }))}
                      />
                    ) : (
                      <div className="w-full h-[400px] bg-gradient-to-br from-[#0A2540] to-[#1a3a5c] flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-24 h-24 bg-[#F59E0B]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-4xl font-bold text-[#F59E0B]">
                              {leaders[0].name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <p className="text-gray-300">{leaders[0].name}</p>
                          <p className="text-[#F59E0B] text-sm">{leaders[0].title}</p>
                        </div>
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                      <p className="text-white font-semibold">{leaders[0].name}</p>
                      <p className="text-[#F59E0B] text-sm">{leaders[0].title}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Bottom Section: Image Left, Text Right */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Side - Image */}
              <AnimatedSection direction="left" threshold={0.3} className="order-1 md:order-1">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#F59E0B]/20 to-[#F59E0B]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    {leaders[1].image && !imageErrors[leaders[1].name] ? (
                      <img 
                        src={leaders[1].image} 
                        alt={leaders[1].name}
                        className="w-full h-[400px] object-cover"
                        onError={() => setImageErrors(prev => ({ ...prev, [leaders[1].name]: true }))}
                      />
                    ) : (
                      <div className="w-full h-[400px] bg-gradient-to-br from-[#0A2540] to-[#1a3a5c] flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-24 h-24 bg-[#F59E0B]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-4xl font-bold text-[#F59E0B]">
                              {leaders[1].name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <p className="text-gray-300">{leaders[1].name}</p>
                          <p className="text-[#F59E0B] text-sm">{leaders[1].title}</p>
                        </div>
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                      <p className="text-white font-semibold">{leaders[1].name}</p>
                      <p className="text-[#F59E0B] text-sm">{leaders[1].title}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Right Side - Text Block */}
              <AnimatedSection direction="right" threshold={0.3} className="order-2 md:order-2">
                <div className="pl-0 md:pl-8">
                  <div className="inline-flex items-center gap-2 bg-[#F59E0B]/10 px-4 py-2 rounded-full mb-6">
                    <Crown className="w-4 h-4 text-[#F59E0B]" />
                    <span className="text-sm font-semibold text-[#F59E0B]">Director</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
                    {leaders[1].name}
                  </h2>
                  <h3 className="text-xl font-semibold text-[#F59E0B] mb-4">
                    {leaders[1].headline}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {leaders[1].description}
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold text-[#0A2540]">Key Strengths:</p>
                    <ul className="space-y-1">
                      {leaders[1].keyStrengths.map((strength, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2 text-gray-600">
                          <CheckCircle className="w-4 h-4 text-[#F59E0B] mt-1 flex-shrink-0" />
                          <span className="text-sm">{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Execution Experience - Asset Classes Only */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Execution Experience" 
            subtitle="End-to-end recovery and resolution solutions with extensive experience in taking physical possession of secured assets"
            titleColor="#0A2540"
            accentColor="#F59E0B"
            subtitleColor="#4B5563"
          />
          
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-[#0A2540] mb-6 flex items-center gap-2">
              <Briefcase className="text-[#F59E0B]" /> Asset Classes Handled
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {assetClasses.map((asset, idx) => (
                <AnimatedCard key={idx} delay={idx * 30} direction="up" className="flex items-start gap-3 p-3 bg-[#F3F4F6] rounded-lg hover:shadow-md transition-all">
                  <CheckCircle className="text-[#F59E0B] mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700 text-sm">{asset}</span>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Capabilities */}
      <section className="py-20 bg-[#F3F4F6]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left" threshold={0.3}>
              <div className="inline-flex items-center gap-2 bg-[#F59E0B]/10 px-4 py-2 rounded-full mb-4">
                <TrendingUp className="w-4 h-4 text-[#F59E0B]" />
                <span className="text-sm font-semibold text-[#F59E0B]">Expertise</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-6">Specialized Capabilities</h2>
              <p className="text-gray-700 mb-8 text-lg">
                Deep expertise in preparing and positioning stressed assets for successful e-auction sales, maximizing value realisation.
              </p>
              <div className="space-y-4">
                {specializedCapabilities.map((cap, idx) => (
                  <AnimatedCard key={idx} delay={idx * 100} direction="left" className="flex items-center gap-3 group">
                    <div className="w-8 h-8 bg-[#F59E0B]/10 rounded-lg flex items-center justify-center group-hover:bg-[#F59E0B] transition-colors">
                      <CheckCircle className="text-[#F59E0B] group-hover:text-white" size={16} />
                    </div>
                    <span className="text-gray-700 group-hover:text-[#0A2540] transition-colors">{cap}</span>
                  </AnimatedCard>
                ))}
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right" threshold={0.3}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#F59E0B]/20 to-[#F59E0B]/10 rounded-2xl blur-xl"></div>
                <img 
                  src="src/images/specialised-capabilities.jpg" 
                  alt="Asset Auction" 
                  className="rounded-2xl shadow-2xl relative z-10"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Statutory Authority Experience - Moved after Specialized Capabilities */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h3 className="text-2xl font-bold text-[#0A2540] mb-6 flex items-center gap-2">
            <Scale className="text-[#F59E0B]" /> Statutory Authority Experience
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {statutoryExperience.map((item, idx) => (
              <AnimatedCard key={idx} delay={idx * 100} direction="up" className="bg-[#F3F4F6] rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-[#F59E0B]/10 rounded-xl flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-[#F59E0B]" />
                  </div>
                  <p className="font-semibold text-[#0A2540] text-lg">{item.title}</p>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </AnimatedCard>
            ))}
            <AnimatedCard delay={300} direction="up" className="md:col-span-2 bg-gradient-to-r from-[#F59E0B]/10 to-[#F59E0B]/5 rounded-xl p-5 border-l-4 border-[#F59E0B]">
              <p className="font-semibold text-[#0A2540]">Diverse on-ground experience handling complex, sensitive, and high-value possessions with efficiency, compliance, and professionalism</p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Mission, Ethics & Commitment Section */}
      <section className="py-20 bg-[#F3F4F6]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedCard delay={100} direction="up" className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#F59E0B]/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#F59E0B]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A2540] mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To enable businesses and financial institutions to recover outstanding dues efficiently and ethically, allowing them to focus on growth while we manage the complexities of debt resolution.
              </p>
            </AnimatedCard>
            
            <AnimatedCard delay={200} direction="up" className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#F59E0B]/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-[#F59E0B]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A2540] mb-4">Our Objectives</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[#F59E0B] mt-1 flex-shrink-0" size={18} />
                  <span>To maximize recovery within the shortest possible timeframe</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[#F59E0B] mt-1 flex-shrink-0" size={18} />
                  <span>To become the preferred recovery and resolution partner through performance, reliability, and trust</span>
                </li>
              </ul>
            </AnimatedCard>

            <AnimatedCard delay={100} direction="up" className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#F59E0B]/10 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-[#F59E0B]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A2540] mb-4">Ethics & Confidentiality</h3>
              <p className="text-gray-600 mb-4">We adhere to the highest standards of:</p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-[#F59E0B]" size={16} />
                  <span>Integrity and transparency</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-[#F59E0B]" size={16} />
                  <span>Strict client confidentiality</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-[#F59E0B]" size={16} />
                  <span>Responsible and compliant recovery practices</span>
                </li>
              </ul>
              <p className="text-gray-600 text-sm bg-[#F3F4F6] p-3 rounded-lg">
                We also execute Non-Disclosure Agreements (NDAs) to ensure complete protection of client data and sensitive information.
              </p>
            </AnimatedCard>
            
            <AnimatedCard delay={200} direction="up" className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#F59E0B]/10 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-[#F59E0B]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A2540] mb-4">Our Commitment</h3>
              <p className="text-gray-600 mb-4">Every assignment is handled with:</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-[#F59E0B]" size={16} />
                  <span>Strategic planning and execution</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-[#F59E0B]" size={16} />
                  <span>Continuous communication and updates</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-[#F59E0B]" size={16} />
                  <span>Strict legal and regulatory compliance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-[#F59E0B]" size={16} />
                  <span>Tailored recovery strategies for each case</span>
                </li>
              </ul>
            </AnimatedCard>
          </div>
        </div>
      </section>
      
      {/* CTA Banner */}
      <section className="py-16 bg-[#F3F4F6]">
        <div className="container-custom text-center">
          <AnimatedSection direction="up" threshold={0.3}>
            <Handshake className="w-16 h-16 text-[#F59E0B] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">Partner With Us</h2>
            <p className="text-xl mb-6 max-w-3xl mx-auto text-gray-600 leading-relaxed">
              At BFI-NPA Resolution Services Private Limited, we believe in building long-term partnerships that deliver measurable results.
            </p>
            <p className="text-lg mb-8 text-gray-500">
              We invite you to entrust us with your recovery assignments across Tamil Nadu and experience our expertise, efficiency, and commitment firsthand.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button onClick={handleNavigateToContact} className="bg-[#F59E0B] text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:bg-[#D97706] transition-all duration-300 hover:scale-105">
                Get Consultation
              </button>
              <button onClick={handleNavigateToServices} className="border-2 border-[#F59E0B] text-[#F59E0B] font-semibold py-3 px-8 rounded-xl hover:bg-[#F59E0B] hover:text-white transition-all duration-300">
                Explore Our Services
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;