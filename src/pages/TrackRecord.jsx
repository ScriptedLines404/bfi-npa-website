/* src/pages/TrackRecord.jsx - Navy + Amber Color Scheme (Matching About Page) */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Award, TrendingUp, Building, CheckCircle, 
  ArrowRight, Target, Shield, Users, Calendar, Star, Zap, Scale, Gavel,
  Sparkles, Briefcase, Landmark, Factory, Warehouse, Battery, Wind, Handshake
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import AnimatedCard from "../components/AnimatedCard";
import AnimatedSection from "../components/AnimatedSection";

const TrackRecord = () => {
  const navigate = useNavigate();

  const handleNavigateToContact = () => {
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigateToServices = () => {
    navigate("/services");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const transactions = [
    {
      amount: "₹107 Crore",
      title: "Land Parcel",
      location: "Near Chennai",
      description: "Facilitated a high-value SARFAESI sale by identifying a buyer for 254 acres of land near Chennai, successfully concluding the transaction",
      image: "src/images/Barrenland.jpeg",
      imageAlt: "Land Parcel Near Chennai",
      fallbackImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Landmark,
      color: "from-amber-500 to-yellow-500"
    },
    {
      amount: "₹165 Crore",
      title: "Sugar Mill Property",
      location: "Chengalpattu District",
      description: "Successfully identified a buyer for a 90+ acre sugar mill property in Chengalpattu District under an NCLT process",
      image: "src/images/Sugarmill.jpeg",
      imageAlt: "Sugar Mill Property",
      fallbackImage: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Factory,
      color: "from-amber-600 to-amber-700"
    },
    {
      amount: "₹17 Crore",
      title: "Industrial Land",
      location: "Near Oragadam, Chennai",
      description: "Enabled the sale of 27 acres of industrial land near Oragadam, Chennai to a logistics company",
      image: "src/images/Orangadam.jpeg",
      imageAlt: "Industrial Land",
      fallbackImage: "https://images.unsplash.com/photo-1566917506920-5c6a15c50ed1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Warehouse,
      color: "from-amber-500 to-yellow-500"
    },
    {
      amount: "₹16 Crore",
      title: "Agricultural Land",
      location: "Near Puducherry",
      description: "Identified an investor for 75 acres of land near Puducherry",
      image: "src/images/Agriland.jpeg",
      imageAlt: "Agricultural Land",
      fallbackImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Building,
      color: "from-amber-600 to-amber-700"
    },
    {
      amount: "₹66 Crore",
      title: "Battery Manufacturing Facility",
      location: "Near Hosur",
      description: "Successfully identified a buyer for a battery manufacturing facility near Hosur",
      image: "src/images/Battery.jpeg",
      imageAlt: "Battery Manufacturing Facility",
      fallbackImage: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Battery,
      color: "from-amber-500 to-yellow-500"
    },
    {
      amount: "₹66 Crore",
      title: "Wind Turbine Manufacturing Plant",
      location: "Near Thiruvallur",
      description: "Facilitated buyer identification for a wind turbine manufacturing plant near Thiruvallur",
      image: "src/images/Windturbine.jpeg",
      imageAlt: "Wind Turbine Manufacturing Plant",
      fallbackImage: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Wind,
      color: "from-amber-600 to-amber-700"
    }
  ];

  const executionStrengths = [
    {
      icon: Handshake,
      title: "Compromise settlements",
      description: "Negotiated settlements achieving optimal recovery"
    },
    {
      icon: Target,
      title: "Strategic buyer identification",
      description: "Targeted approach to find the right buyers"
    },
    {
      icon: Scale,
      title: "Recovery proceedings under DRT",
      description: "Expert handling of Debt Recovery Tribunal cases"
    },
    {
      icon: Gavel,
      title: "Recovery proceedings under SARFAESI",
      description: "Efficient enforcement of security interests"
    },
    {
      icon: Building,
      title: "Recovery proceedings under NCLT frameworks",
      description: "Insolvency resolution under IBC framework"
    }
  ];

  const stats = [
    { icon: TrendingUp, value: "₹500+ Cr", label: "Total Transaction Value" },
    { icon: Users, value: "50+", label: "Institutional Clients" },
    { icon: Award, value: "100%", label: "Success-Based Fee Structure" }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section - Navy Blue Full Screen */}
      <div className="relative bg-[#0A2540] text-white min-h-screen flex items-center py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#F59E0B] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F59E0B] rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection direction="up" threshold={0.3}>
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-[#F59E0B]/10 px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-[#F59E0B]" />
                <span className="text-sm font-semibold text-[#F59E0B]">Proven Excellence</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Track Record
              </h1>
              <p className="text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed mb-8">
                Our proven track record in facilitating the resolution and monetisation of high-value stressed assets across multiple sectors
              </p>
              
              {/* Hero Stats */}
              <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                    <stat.icon className="w-8 h-8 text-[#F59E0B] mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <p className="text-sm text-gray-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Key Achievements Introduction */}
      <section className="py-16 bg-[#F3F4F6]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection direction="up" threshold={0.3}>
              <div className="inline-flex items-center gap-2 bg-[#F59E0B]/10 px-4 py-2 rounded-full mb-4">
                <Star className="w-4 h-4 text-[#F59E0B]" />
                <span className="text-sm font-semibold text-[#F59E0B]">Key Achievements</span>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our company has a proven track record in facilitating the resolution and monetisation of high-value stressed assets across multiple sectors. 
                We consistently deliver strong outcomes for banks, financial institutions, and stakeholders through strategic buyer identification and efficient execution.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Select Transaction Highlights */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Transaction Highlights" 
            subtitle="Showcasing our expertise in handling high-value stressed asset resolutions"
            titleColor="#0A2540"
            accentColor="#F59E0B"
            subtitleColor="#4B5563"
          />

          <div className="space-y-6 mt-8">
            {transactions.map((transaction, idx) => (
              <AnimatedCard 
                key={idx} 
                delay={idx * 100} 
                direction="up"
                className="bg-[#F3F4F6] rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#F59E0B]"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-72 h-48 md:h-auto relative overflow-hidden bg-gray-200">
                    <img 
                      src={transaction.image}
                      alt={transaction.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = transaction.fallbackImage;
                      }}
                    />
                    <div className="absolute top-4 left-4 bg-[#F59E0B] text-white px-3 py-1 rounded-full text-sm font-bold">
                      {transaction.amount}
                    </div>
                  </div>
                  
                  <div className="flex-1 p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-8 h-8 bg-gradient-to-br ${transaction.color} rounded-lg flex items-center justify-center`}>
                        <transaction.icon className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[#0A2540]">{transaction.title}</h3>
                    </div>
                    <p className="text-gray-500 text-sm mb-3 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {transaction.location}
                    </p>
                    <p className="text-gray-600 leading-relaxed">{transaction.description}</p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Execution Strength Section */}
      <section className="py-16 bg-[#F3F4F6]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <AnimatedSection direction="left" threshold={0.3}>
              <div className="inline-flex items-center gap-2 bg-[#F59E0B]/10 px-4 py-2 rounded-full mb-4">
                <Zap className="w-4 h-4 text-[#F59E0B]" />
                <span className="text-sm font-semibold text-[#F59E0B]">Our Expertise</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-6">Execution Strength</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                In addition to the above, we have coordinated and supported several other high-value transactions through:
              </p>
              <div className="space-y-4">
                {executionStrengths.map((strength, idx) => (
                  <AnimatedCard key={idx} delay={idx * 100} direction="left" className="flex items-start gap-3 group">
                    <div className="w-10 h-10 bg-[#F59E0B]/10 rounded-lg flex items-center justify-center group-hover:bg-[#F59E0B] transition-colors flex-shrink-0">
                      <strength.icon className="w-5 h-5 text-[#F59E0B] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0A2540]">{strength.title}</h3>
                      <p className="text-gray-600 text-sm">{strength.description}</p>
                    </div>
                  </AnimatedCard>
                ))}
              </div>
              <AnimatedCard delay={500} direction="up" className="mt-8 bg-white rounded-xl p-6 border-l-4 border-[#F59E0B] shadow-md">
                <p className="text-gray-700 font-semibold">
                  ensuring effective resolution and maximised recovery for our clients.
                </p>
              </AnimatedCard>
            </AnimatedSection>
            
            <AnimatedSection direction="right" threshold={0.3}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#F59E0B]/20 to-[#F59E0B]/10 rounded-2xl blur-xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Success Story" 
                  className="rounded-2xl shadow-2xl relative z-10 w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#F59E0B] rounded-xl p-4 shadow-lg z-20">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat, idx) => (
              <AnimatedCard key={idx} delay={idx * 100} direction="up" className="text-center p-6 bg-[#F3F4F6] rounded-xl shadow-md hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-[#F59E0B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-[#F59E0B]" />
                </div>
                <div className="text-2xl font-bold text-[#0A2540]">{stat.value}</div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F3F4F6]">
        <div className="container-custom text-center">
          <AnimatedSection direction="up" threshold={0.3}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-6">Ready to Achieve Similar Results?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
              Partner with us to unlock the full potential of your stressed assets
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button onClick={handleNavigateToContact} className="bg-[#F59E0B] text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-[#D97706] transition-all duration-300">
                Get Consultation
              </button>
              <button onClick={handleNavigateToServices} className="border-2 border-[#F59E0B] text-[#F59E0B] font-semibold py-3 px-8 rounded-lg hover:bg-[#F59E0B] hover:text-white transition-all duration-300">
                Explore Our Services
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default TrackRecord;