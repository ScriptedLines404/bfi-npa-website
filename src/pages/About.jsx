/* src/pages/About.jsx - Sandal + Brown with Integrated Hero */
import React from "react";
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

  const leaders = [
    { 
      name: "Mr. A. Velmurugan", 
      title: "Director",
      experience: "28+ years", 
      expertise: "SARFAESI, DRT, NCLT specialist", 
      background: "Former Promoter-Director of BFI Factoring Services Pvt. Ltd. (2002-2021)",
      achievements: "Successfully led 16+ branches, managed large recovery portfolios"
    },
    { 
      name: "Mr. A. Velraja", 
      title: "Director",
      experience: "Extensive experience", 
      expertise: "Vehicle finance & repossession operations", 
      background: "Progressed from Executive to Branch Manager across NBFCs",
      achievements: "Expertise in business development and field operations"
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

  return (
    <div className="animate-fade-in">
      {/* Hero Section with Integrated Company Overview */}
      <div className="relative bg-[#E3D1B3] text-[#3E2723] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#A16207] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#A16207] rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection direction="up" threshold={0.3}>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-[#A16207]/10 px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-[#A16207]" />
                <span className="text-sm font-semibold text-[#A16207]">Est. 2020</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#3E2723]">
                About BFI-NPA
              </h1>
              <p className="text-xl max-w-3xl mx-auto text-[#6D4C41] leading-relaxed mb-8">
                Professionally managed company specializing in Stressed Asset Resolution encompassing debt collection, 
                enforcement, and property disposition
              </p>
              <div className="w-24 h-1 bg-[#A16207] rounded-full mx-auto"></div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Company Overview - Integrated Content Section */}
      <section className="py-20 bg-[#F5E6D3]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left" threshold={0.3}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#3E2723] mb-6">
                Your Trusted Partner in<br />
                <span className="text-[#A16207]">Stressed Asset Resolution</span>
              </h2>
              <p className="text-[#6D4C41] mb-4 leading-relaxed">
                <strong className="text-[#A16207]">BFI-NPA Resolution Services Private Limited</strong> is a professionally managed company incorporated under the Companies Act, 2013 on <strong>5th February 2020</strong>. We specialize in debt collection, debt recovery, property disposition, and allied financial services, working closely with Nationalised Banks, Asset Reconstruction Companies (ARCs), and Non-Banking Financial Companies (NBFCs).
              </p>
              <p className="text-[#6D4C41] mb-4 leading-relaxed">
                With a strong presence across key districts of Tamil Nadu, we are well-positioned to deliver timely and effective solutions.
              </p>
              <p className="text-[#6D4C41] leading-relaxed">
                Our clientele includes Banks, NBFCs, ARCs, Corporates, and Financial Institutions. We are committed to providing services that are efficient, cost-effective, and driven by integrity, transparency, and professional excellence.
              </p>
            </AnimatedSection>
            
            <AnimatedSection direction="right" threshold={0.3}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#A16207]/20 to-[#A16207]/10 rounded-2xl blur-xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="BFI-NPA Office" 
                  className="rounded-2xl shadow-2xl relative z-10"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#A16207] rounded-xl p-4 shadow-lg z-20">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-[#E3D1B3]">
        <div className="container-custom">
          <SectionTitle 
            title="Meet Our Leadership" 
            subtitle="Our leadership team combines decades of industry experience with strong execution capabilities"
            titleColor="#3E2723"
            accentColor="#A16207"
            subtitleColor="#6D4C41"
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {leaders.map((leader, idx) => (
              <AnimatedCard key={idx} delay={idx * 150} direction="up" className="group bg-[#F5E6D3] rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className="relative h-32 bg-gradient-to-r from-[#A16207] to-[#A16207]/80">
                  <div className="absolute -bottom-12 left-6">
                    <div className="w-24 h-24 bg-[#F5E6D3] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <span className="text-3xl font-bold text-[#A16207]">
                        {leader.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-16">
                  <h3 className="text-2xl font-bold text-[#3E2723]">{leader.name}</h3>
                  <p className="text-[#A16207] font-semibold mb-3">{leader.title}</p>
                  <div className="space-y-2 text-[#6D4C41]">
                    <p><strong className="text-[#3E2723]">Experience:</strong> {leader.experience}</p>
                    <p><strong className="text-[#3E2723]">Expertise:</strong> {leader.expertise}</p>
                    <p>{leader.background}</p>
                    <p className="text-sm text-[#6D4C41]">{leader.achievements}</p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Execution Experience */}
      <section className="py-20 bg-[#F5E6D3]">
        <div className="container-custom">
          <SectionTitle 
            title="Execution Experience" 
            subtitle="End-to-end recovery and resolution solutions with extensive experience in taking physical possession of secured assets"
            titleColor="#3E2723"
            accentColor="#A16207"
            subtitleColor="#6D4C41"
          />
          
          <div className="grid md:grid-cols-2 gap-12 mt-8">
            <AnimatedSection direction="left" threshold={0.3}>
              <h3 className="text-2xl font-bold text-[#3E2723] mb-6 flex items-center gap-2">
                <Briefcase className="text-[#A16207]" /> Asset Classes Handled
              </h3>
              <div className="space-y-3">
                {assetClasses.map((asset, idx) => (
                  <AnimatedCard key={idx} delay={idx * 50} direction="up" className="flex items-start gap-3 p-3 bg-[#E3D1B3] rounded-lg hover:shadow-md transition-all">
                    <CheckCircle className="text-[#A16207] mt-1 flex-shrink-0" size={18} />
                    <span className="text-[#6D4C41] text-sm">{asset}</span>
                  </AnimatedCard>
                ))}
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right" threshold={0.3}>
              <h3 className="text-2xl font-bold text-[#3E2723] mb-6 flex items-center gap-2">
                <Scale className="text-[#A16207]" /> Statutory Authority Experience
              </h3>
              <div className="space-y-4">
                <AnimatedCard delay={100} direction="up" className="bg-[#E3D1B3] rounded-xl p-5 shadow-md hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-[#A16207]/20 rounded-lg flex items-center justify-center">
                      <Scale className="w-5 h-5 text-[#A16207]" />
                    </div>
                    <p className="font-semibold text-[#3E2723]">DRT, CMM & CJM Authorities</p>
                  </div>
                  <p className="text-[#6D4C41]">Orders obtained from specialized tribunals and courts</p>
                </AnimatedCard>
                
                <AnimatedCard delay={200} direction="up" className="bg-[#E3D1B3] rounded-xl p-5 shadow-md hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-[#A16207]/20 rounded-lg flex items-center justify-center">
                      <Gavel className="w-5 h-5 text-[#A16207]" />
                    </div>
                    <p className="font-semibold text-[#3E2723]">SARFAESI Act</p>
                  </div>
                  <p className="text-[#6D4C41]">Direct possession without court intervention</p>
                </AnimatedCard>
                
                <AnimatedCard delay={300} direction="up" className="bg-gradient-to-r from-[#A16207]/10 to-[#A16207]/5 rounded-xl p-5 border-l-4 border-[#A16207]">
                  <p className="font-semibold text-[#3E2723]">Diverse on-ground experience handling complex, sensitive, and high-value possessions with efficiency, compliance, and professionalism</p>
                </AnimatedCard>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Specialized Capabilities */}
      <section className="py-20 bg-[#E3D1B3]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left" threshold={0.3}>
              <div className="inline-flex items-center gap-2 bg-[#A16207]/10 px-4 py-2 rounded-full mb-4">
                <TrendingUp className="w-4 h-4 text-[#A16207]" />
                <span className="text-sm font-semibold text-[#A16207]">Expertise</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#3E2723] mb-6">Specialized Capabilities</h2>
              <p className="text-[#6D4C41] mb-8 text-lg">
                Deep expertise in preparing and positioning stressed assets for successful e-auction sales, maximizing value realisation.
              </p>
              <div className="space-y-4">
                {specializedCapabilities.map((cap, idx) => (
                  <AnimatedCard key={idx} delay={idx * 100} direction="left" className="flex items-center gap-3 group">
                    <div className="w-8 h-8 bg-[#A16207]/10 rounded-lg flex items-center justify-center group-hover:bg-[#A16207] transition-colors">
                      <CheckCircle className="text-[#A16207] group-hover:text-white" size={16} />
                    </div>
                    <span className="text-[#6D4C41] group-hover:text-[#3E2723] transition-colors">{cap}</span>
                  </AnimatedCard>
                ))}
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right" threshold={0.3}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#A16207]/20 to-[#A16207]/10 rounded-2xl blur-xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Asset Auction" 
                  className="rounded-2xl shadow-2xl relative z-10"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission, Ethics & Commitment Section */}
      <section className="py-20 bg-[#F5E6D3]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedCard delay={100} direction="up" className="bg-[#E3D1B3] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#A16207]/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#A16207]" />
              </div>
              <h3 className="text-2xl font-bold text-[#3E2723] mb-4">Our Mission</h3>
              <p className="text-[#6D4C41] leading-relaxed">
                To enable businesses and financial institutions to recover outstanding dues efficiently and ethically, allowing them to focus on growth while we manage the complexities of debt resolution.
              </p>
            </AnimatedCard>
            
            <AnimatedCard delay={200} direction="up" className="bg-[#E3D1B3] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#A16207]/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-[#A16207]" />
              </div>
              <h3 className="text-2xl font-bold text-[#3E2723] mb-4">Our Objectives</h3>
              <ul className="space-y-3 text-[#6D4C41]">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[#A16207] mt-1 flex-shrink-0" size={18} />
                  <span>To maximize recovery within the shortest possible timeframe</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[#A16207] mt-1 flex-shrink-0" size={18} />
                  <span>To become the preferred recovery and resolution partner through performance, reliability, and trust</span>
                </li>
              </ul>
            </AnimatedCard>

            <AnimatedCard delay={100} direction="up" className="bg-[#E3D1B3] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#A16207]/20 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-[#A16207]" />
              </div>
              <h3 className="text-2xl font-bold text-[#3E2723] mb-4">Ethics & Confidentiality</h3>
              <p className="text-[#6D4C41] mb-4">We adhere to the highest standards of:</p>
              <ul className="space-y-2 text-[#6D4C41] mb-4">
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-[#A16207]" size={16} />
                  <span>Integrity and transparency</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-[#A16207]" size={16} />
                  <span>Strict client confidentiality</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-[#A16207]" size={16} />
                  <span>Responsible and compliant recovery practices</span>
                </li>
              </ul>
              <p className="text-[#6D4C41] text-sm bg-[#E3D1B3] p-3 rounded-lg">
                We also execute Non-Disclosure Agreements (NDAs) to ensure complete protection of client data and sensitive information.
              </p>
            </AnimatedCard>
            
            <AnimatedCard delay={200} direction="up" className="bg-[#E3D1B3] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#A16207]/20 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-[#A16207]" />
              </div>
              <h3 className="text-2xl font-bold text-[#3E2723] mb-4">Our Commitment</h3>
              <p className="text-[#6D4C41] mb-4">Every assignment is handled with:</p>
              <ul className="space-y-2 text-[#6D4C41]">
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-[#A16207]" size={16} />
                  <span>Strategic planning and execution</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-[#A16207]" size={16} />
                  <span>Continuous communication and updates</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-[#A16207]" size={16} />
                  <span>Strict legal and regulatory compliance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-[#A16207]" size={16} />
                  <span>Tailored recovery strategies for each case</span>
                </li>
              </ul>
            </AnimatedCard>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#E3D1B3]">
        <div className="container-custom">
          <SectionTitle 
            title="Why Choose BFI-NPA?" 
            subtitle="We combine expertise, ethics, and execution to deliver exceptional results"
            titleColor="#3E2723"
            accentColor="#A16207"
            subtitleColor="#6D4C41"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {whyChooseItems.map((item, idx) => (
              <AnimatedCard key={idx} className="bg-[#F5E6D3] rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1" delay={idx * 100} direction="up">
                <div className="w-14 h-14 bg-[#A16207]/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-[#A16207]" />
                </div>
                <h3 className="text-xl font-bold text-[#3E2723] mb-2">{item.title}</h3>
                <p className="text-[#6D4C41] text-sm">{item.desc}</p>
              </AnimatedCard>
            ))}
          </div>

          <div className="mt-12 text-center bg-[#3E2723] text-[#F5E6D3] rounded-2xl p-10 shadow-2xl">
            <svg className="w-12 h-12 text-[#A16207] mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <p className="text-3xl md:text-4xl font-bold italic mb-3">"If we don't perform, we don't get paid."</p>
            <p className="text-[#A16207] text-lg">Our Philosophy - Results-Driven Excellence</p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-[#F5E6D3]">
        <div className="container-custom text-center">
          <AnimatedSection direction="up" threshold={0.3}>
            <Handshake className="w-16 h-16 text-[#A16207] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-6">Partner With Us</h2>
            <p className="text-xl mb-6 max-w-3xl mx-auto text-[#6D4C41] leading-relaxed">
              At BFI-NPA Resolution Services Private Limited, we believe in building long-term partnerships that deliver measurable results.
            </p>
            <p className="text-lg mb-8 text-[#6D4C41]">
              We invite you to entrust us with your recovery assignments across Tamil Nadu and experience our expertise, efficiency, and commitment firsthand.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button onClick={handleNavigateToContact} className="bg-[#A16207] text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:bg-[#854D0E] transition-all duration-300 hover:scale-105">
                Get Free Consultation
              </button>
              <button onClick={handleNavigateToContact} className="border-2 border-[#A16207] text-[#A16207] font-semibold py-3 px-8 rounded-xl hover:bg-[#A16207] hover:text-white transition-all duration-300">
                Contact Us
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;