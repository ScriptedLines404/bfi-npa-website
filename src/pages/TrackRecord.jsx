/* src/pages/TrackRecord.jsx */
import React from "react";
import { Link } from "react-router-dom";
import { 
  Award, TrendingUp, Building, CheckCircle, 
  ArrowRight, Target, Shield, Users, Calendar, Star, Zap, Scale, Gavel
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import AnimatedCard from "../components/AnimatedCard";
import AnimatedSection from "../components/AnimatedSection";

const TrackRecord = () => {
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
      {/* Hero Section - No Animation */}
      <div className="relative bg-gradient-to-r from-primary-dark via-primary-dark to-primary-dark/95 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary-orange rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-orange rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Award className="w-4 h-4 text-primary-orange" />
              <span className="text-sm font-semibold">Proven Excellence</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Track Record
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-200 leading-relaxed">
              Our proven track record in facilitating the resolution and monetisation of high-value stressed assets across multiple sectors
            </p>
          </div>
        </div>
      </div>

      {/* Key Achievements Introduction */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection direction="up" threshold={0.3}>
              <div className="inline-flex items-center gap-2 bg-primary-orange/10 px-4 py-2 rounded-full mb-4">
                <Star className="w-4 h-4 text-primary-orange" />
                <span className="text-sm font-semibold text-primary-orange">Key Achievements</span>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Our company has a proven track record in facilitating the resolution and monetisation of high-value stressed assets across multiple sectors. 
                We consistently deliver strong outcomes for banks, financial institutions, and stakeholders through strategic buyer identification and efficient execution.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Select Transaction Highlights */}
      <section className="py-16 bg-primary-grey">
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
                    <h3 className="text-xl font-bold text-primary-dark mb-1">{transaction.title}</h3>
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
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <AnimatedSection direction="left" threshold={0.3}>
                <div className="inline-flex items-center gap-2 bg-primary-orange/10 px-4 py-2 rounded-full mb-4">
                  <Zap className="w-4 h-4 text-primary-orange" />
                  <span className="text-sm font-semibold text-primary-orange">Our Expertise</span>
                </div>
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
            </div>
            
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

      {/* Stats Section */}
      <section className="py-16 bg-primary-grey">
        <div className="container-custom">
          <SectionTitle 
            title="Impact at a Glance" 
            subtitle="Numbers that demonstrate our commitment to excellence"
          />
          
          <div className="grid md:grid-cols-4 gap-6 mt-8">
            <AnimatedCard delay={100} direction="up" className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-primary-orange/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-primary-orange" />
              </div>
              <div className="text-2xl font-bold text-primary-dark">₹500+ Cr</div>
              <p className="text-gray-600 text-sm">Total Transaction Value</p>
            </AnimatedCard>
            
            <AnimatedCard delay={200} direction="up" className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-primary-orange/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-primary-orange" />
              </div>
              <div className="text-2xl font-bold text-primary-dark">15+</div>
              <p className="text-gray-600 text-sm">Institutional Clients</p>
            </AnimatedCard>
            
            <AnimatedCard delay={300} direction="up" className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-primary-orange/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-primary-orange" />
              </div>
              <div className="text-2xl font-bold text-primary-dark">100%</div>
              <p className="text-gray-600 text-sm">Success Rate</p>
            </AnimatedCard>
            
            <AnimatedCard delay={400} direction="up" className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-primary-orange/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-6 h-6 text-primary-orange" />
              </div>
              <div className="text-2xl font-bold text-primary-dark">5+</div>
              <p className="text-gray-600 text-sm">Years of Excellence</p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Testimonial/Quote Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedCard delay={200} direction="up" className="bg-gradient-to-r from-primary-grey to-white rounded-2xl p-10 shadow-lg">
              <svg className="w-12 h-12 text-primary-orange mx-auto mb-6 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <p className="text-2xl md:text-3xl font-semibold text-primary-dark mb-4 leading-relaxed">
                "Delivering consistent results through strategic execution and deep market expertise"
              </p>
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <Award className="w-5 h-5 text-primary-orange" />
                <span>Trusted by leading financial institutions across India</span>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* CTA Section - No Animation */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Achieve Similar Results?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with us to unlock the full potential of your stressed assets
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

// Additional icon components
const Handshake = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default TrackRecord;