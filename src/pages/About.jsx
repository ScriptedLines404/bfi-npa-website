/* src/pages/About.jsx - Deep Navy + Amber Color Scheme */
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
    { icon: Heart, title: "Ethical & Transparent Approach", desc: "Professional practices with strict confidentiality and compliance" }
  ];

  const handleNavigateToContact = () => {
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section - Deep Navy Background */}
      <div className="relative bg-[#0A2540] text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#F59E0B] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F59E0B] rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection direction="up" threshold={0.3}>
            <div className="max-w-5xl mx-auto">
              {/* Est. 2020 Badge */}
              <div className="inline-flex items-center gap-2 bg-[#F59E0B]/10 px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-[#F59E0B]" />
                <span className="text-sm font-semibold text-[#F59E0B]">Est. 2020</span>
              </div>
              
              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                About BFI-NPA
              </h1>
              
              {/* Integrated Company Overview Content */}
              <div className="space-y-4 mb-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  <strong className="text-[#F59E0B]">BFI-NPA Resolution Services Private Limited</strong> is a professionally managed company incorporated under the Companies Act, 2013 on <strong>5th February 2020</strong>. 
                  We specialize in debt collection, debt recovery, property disposition, and allied financial services, working closely with Nationalised Banks, Asset Reconstruction Companies (ARCs), and Non-Banking Financial Companies (NBFCs).
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  With a strong presence across key districts of Tamil Nadu, we are well-positioned to deliver timely and effective solutions.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Our clientele includes Banks, NBFCs, ARCs, Corporates, and Financial Institutions. We are committed to providing services that are efficient, cost-effective, and driven by integrity, transparency, and professional excellence.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Leadership */}
      <section className="py-20 bg-[#FFF3E4]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our leadership team combines decades of industry experience with strong execution capabilities
            </p>
            <div className="w-24 h-1 bg-[#F59E0B] rounded-full mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {leaders.map((leader, idx) => (
              <AnimatedCard key={idx} delay={idx * 150} direction="up" className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className="relative h-32 bg-gradient-to-r from-[#F59E0B] to-[#F59E0B]/80">
                  <div className="absolute -bottom-12 left-6">
                    <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <span className="text-3xl font-bold text-[#F59E0B]">
                        {leader.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-16">
                  <h3 className="text-2xl font-bold text-[#0A2540]">{leader.name}</h3>
                  <p className="text-[#F59E0B] font-semibold mb-3">{leader.title}</p>
                  <div className="space-y-2 text-gray-600">
                    <p><strong className="text-[#0A2540]">Experience:</strong> {leader.experience}</p>
                    <p><strong className="text-[#0A2540]">Expertise:</strong> {leader.expertise}</p>
                    <p>{leader.background}</p>
                    <p className="text-sm text-gray-500">{leader.achievements}</p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Associations */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
              Institutional Associations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are empanelled with leading financial institutions across India
            </p>
            <div className="w-24 h-1 bg-[#F59E0B] rounded-full mx-auto mt-4"></div>
          </div>
          
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
            {["Nationalised Banks", "Private Sector Banks", "Asset Reconstruction Companies", "Non-Banking Financial Companies"].map((type, idx) => (
              <AnimatedCard key={idx} delay={idx * 100} direction="up" className="group bg-[#FFF3E4] rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <Building className="w-12 h-12 text-[#F59E0B] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-[#0A2540]">{type}</span>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Execution Experience */}
      <section className="py-20 bg-[#FFF3E4]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
              Execution Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end recovery and resolution solutions with extensive experience in taking physical possession of secured assets
            </p>
            <div className="w-24 h-1 bg-[#F59E0B] rounded-full mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mt-8">
            <AnimatedSection direction="left" threshold={0.3}>
              <h3 className="text-2xl font-bold text-[#0A2540] mb-6 flex items-center gap-2">
                <Briefcase className="text-[#F59E0B]" /> Asset Classes Handled
              </h3>
              <div className="space-y-3">
                {assetClasses.map((asset, idx) => (
                  <AnimatedCard key={idx} delay={idx * 50} direction="up" className="flex items-start gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-all">
                    <CheckCircle className="text-[#F59E0B] mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700 text-sm">{asset}</span>
                  </AnimatedCard>
                ))}
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right" threshold={0.3}>
              <h3 className="text-2xl font-bold text-[#0A2540] mb-6 flex items-center gap-2">
                <Scale className="text-[#F59E0B]" /> Statutory Authority Experience
              </h3>
              <div className="space-y-4">
                <AnimatedCard delay={100} direction="up" className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-[#F59E0B]/10 rounded-lg flex items-center justify-center">
                      <Scale className="w-5 h-5 text-[#F59E0B]" />
                    </div>
                    <p className="font-semibold text-[#0A2540]">DRT, CMM & CJM Authorities</p>
                  </div>
                  <p className="text-gray-600">Orders obtained from specialized tribunals and courts</p>
                </AnimatedCard>
                
                <AnimatedCard delay={200} direction="up" className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-[#F59E0B]/10 rounded-lg flex items-center justify-center">
                      <Gavel className="w-5 h-5 text-[#F59E0B]" />
                    </div>
                    <p className="font-semibold text-[#0A2540]">SARFAESI Act</p>
                  </div>
                  <p className="text-gray-600">Direct possession without court intervention</p>
                </AnimatedCard>
                
                <AnimatedCard delay={300} direction="up" className="bg-gradient-to-r from-[#F59E0B]/10 to-[#F59E0B]/5 rounded-xl p-5 border-l-4 border-[#F59E0B]">
                  <p className="font-semibold text-[#0A2540]">Diverse on-ground experience handling complex, sensitive, and high-value possessions with efficiency, compliance, and professionalism</p>
                </AnimatedCard>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Specialized Capabilities */}
      <section className="py-20 bg-white">
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
      <section className="py-20 bg-[#FFF3E4]">
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
              <div className="w-16 h-16 bg-[#F59E0B]/20 rounded-xl flex items-center justify-center mb-6">
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
              <p className="text-gray-600 text-sm bg-[#FFF3E4] p-3 rounded-lg">
                We also execute Non-Disclosure Agreements (NDAs) to ensure complete protection of client data and sensitive information.
              </p>
            </AnimatedCard>
            
            <AnimatedCard delay={200} direction="up" className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#F59E0B]/20 rounded-xl flex items-center justify-center mb-6">
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
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
              Why Choose BFI-NPA?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine expertise, ethics, and execution to deliver exceptional results
            </p>
            <div className="w-24 h-1 bg-[#F59E0B] rounded-full mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {whyChooseItems.map((item, idx) => (
              <AnimatedCard key={idx} className="bg-[#FFF3E4] rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1" delay={idx * 100} direction="up">
                <div className="w-14 h-14 bg-[#F59E0B]/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-[#F59E0B]" />
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </AnimatedCard>
            ))}
          </div>

          <div className="mt-12 text-center bg-[#0A2540] text-white rounded-2xl p-10 shadow-2xl">
            <svg className="w-12 h-12 text-[#F59E0B] mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <p className="text-3xl md:text-4xl font-bold italic mb-3">"If we don't perform, we don't get paid."</p>
            <p className="text-[#F59E0B] text-lg">Our Philosophy - Results-Driven Excellence</p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-[#FFF3E4]">
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
                Get Free Consultation
              </button>
              <button onClick={handleNavigateToContact} className="border-2 border-[#F59E0B] text-[#F59E0B] font-semibold py-3 px-8 rounded-xl hover:bg-[#F59E0B] hover:text-white transition-all duration-300">
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