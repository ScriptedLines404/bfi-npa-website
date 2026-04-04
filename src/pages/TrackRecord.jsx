/* src/pages/TrackRecord.jsx */
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

  const transactions = [
    {
      amount: "₹107 Crore",
      title: "Land Parcel",
      location: "Near Chennai",
      description: "Facilitated a high-value SARFAESI sale by identifying a buyer for 254 acres of land near Chennai, successfully concluding the transaction",
      image: "src/images/Barrenland.jpeg",
      imageAlt: "Land Parcel Near Chennai",
      fallbackImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      amount: "₹165 Crore",
      title: "Sugar Mill Property",
      location: "Chengalpattu District",
      description: "Successfully identified a buyer for a 90+ acre sugar mill property in Chengalpattu District under an NCLT process",
      image: "src/images/Sugarmill.jpeg",
      imageAlt: "Sugar Mill Property",
      fallbackImage: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      amount: "₹17 Crore",
      title: "Industrial Land",
      location: "Near Oragadam, Chennai",
      description: "Enabled the sale of 27 acres of industrial land near Oragadam, Chennai to a logistics company",
      image: "src/images/Orangadam.jpeg",
      imageAlt: "Industrial Land",
      fallbackImage: "https://images.unsplash.com/photo-1566917506920-5c6a15c50ed1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      amount: "₹16 Crore",
      title: "Agricultural Land",
      location: "Near Puducherry",
      description: "Identified an investor for 75 acres of land near Puducherry",
      image: "src/images/Agriland.jpeg",
      imageAlt: "Agricultural Land",
      fallbackImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      amount: "₹66 Crore",
      title: "Battery Manufacturing Facility",
      location: "Near Hosur",
      description: "Successfully identified a buyer for a battery manufacturing facility near Hosur",
      image: "src/images/Battery.jpeg",
      imageAlt: "Battery Manufacturing Facility",
      fallbackImage: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      amount: "₹66 Crore",
      title: "Wind Turbine Manufacturing Plant",
      location: "Near Thiruvallur",
      description: "Facilitated buyer identification for a wind turbine manufacturing plant near Thiruvallur",
      image: "src/images/Windturbine.jpeg",
      imageAlt: "Wind Turbine Manufacturing Plant",
      fallbackImage: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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

  return (
    <div className="animate-fade-in">
      {/* Hero Section - Light Background like About page */}
      <div className="relative bg-gradient-to-r from-primary-grey to-white text-primary-dark py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary-orange rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-orange rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection direction="up" threshold={0.3}>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary-orange/10 px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-primary-orange" />
                <span className="text-sm font-semibold text-primary-orange">Proven Excellence</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary-dark">
                Track Record
              </h1>
              <p className="text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed">
                Our proven track record in facilitating the resolution and monetisation of high-value stressed assets across multiple sectors
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Select Transaction Highlights */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Transaction Highlights" 
            subtitle="Showcasing our expertise in handling high-value stressed asset resolutions"
          />

          <div className="space-y-6 mt-8">
            {transactions.map((transaction, idx) => (
              <AnimatedCard 
                key={idx} 
                delay={idx * 100} 
                direction="up"
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image Section */}
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
                    <div className="absolute top-4 left-4 bg-primary-orange text-white px-3 py-1 rounded-full text-sm font-bold">
                      {transaction.amount}
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="flex-1 p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-primary-dark">{transaction.title}</h3>
                    </div>
                    <p className="text-gray-500 text-sm mb-3 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {transaction.location}
                    </p>
                    <p className="text-gray-700 leading-relaxed">{transaction.description}</p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Execution Strength Section */}
      <section className="py-16 bg-primary-grey">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <AnimatedSection direction="left" threshold={0.3}>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">Execution Strength</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                In addition to the above, we have coordinated and supported several other high-value transactions through:
              </p>
              <div className="space-y-4">
                {executionStrengths.map((strength, idx) => (
                  <AnimatedCard key={idx} delay={idx * 100} direction="left" className="flex items-start gap-3 group">
                    <div className="w-10 h-10 bg-primary-orange/10 rounded-lg flex items-center justify-center group-hover:bg-primary-orange transition-colors flex-shrink-0">
                      <strength.icon className="w-5 h-5 text-primary-orange group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-dark">{strength.title}</h3>
                      <p className="text-gray-600 text-sm">{strength.description}</p>
                    </div>
                  </AnimatedCard>
                ))}
              </div>
              <AnimatedCard delay={500} direction="up" className="mt-8 bg-primary-grey rounded-xl p-6 border-l-4 border-primary-orange">
                <p className="text-gray-700 font-semibold">
                  ensuring effective resolution and maximised recovery for our clients.
                </p>
              </AnimatedCard>
            </AnimatedSection>
            
            <AnimatedSection direction="right" threshold={0.3}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-orange/20 to-primary-orange/10 rounded-2xl blur-xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Success Story" 
                  className="rounded-2xl shadow-2xl relative z-10 w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary-orange rounded-xl p-4 shadow-lg z-20">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      
      {/* CTA Section - White Background */}
      <section className="py-20 bg-white">
        <div className="container-custom text-center">
          <AnimatedSection direction="up" threshold={0.3}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">Ready to Achieve Similar Results?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
              Partner with us to unlock the full potential of your stressed assets
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button onClick={handleNavigateToContact} className="btn-primary">
                Get Free Consultation
              </button>
              <Link to="/services" className="btn-outline">
                Explore Our Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default TrackRecord;