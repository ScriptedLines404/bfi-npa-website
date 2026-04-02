/* src/pages/TrackRecord.jsx */
import React from "react";
import { Link } from "react-router-dom";
import { 
  Award, TrendingUp, Building, CheckCircle, 
  ArrowRight, Landmark, Factory, Warehouse, 
  Target, Shield, Users, Calendar, Star, Zap, Scale, Gavel, Handshake
} from "lucide-react";

const TrackRecord = () => {
  const transactions = [
    {
      amount: "₹165 Crore",
      title: "Sugar Mill Property",
      location: "Chengalpattu District",
      description: "Successfully identified a buyer for a 90+ acre sugar mill property in Chengalpattu District under an NCLT process",
      icon: Factory,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50"
    },
    {
      amount: "₹107 Crore",
      title: "Land Parcel",
      location: "Near Chennai",
      description: "Facilitated a high-value SARFAESI sale by identifying a buyer for 254 acres of land near Chennai, successfully concluding the transaction",
      icon: Landmark,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50"
    },
    {
      amount: "₹17 Crore",
      title: "Industrial Land",
      location: "Near Oragadam, Chennai",
      description: "Enabled the sale of 27 acres of industrial land near Oragadam, Chennai to a logistics company",
      icon: Warehouse,
      color: "from-amber-500 to-yellow-500",
      bgColor: "bg-amber-50"
    },
    {
      amount: "₹16 Crore",
      title: "Agricultural Land",
      location: "Near Puducherry",
      description: "Identified an investor for 75 acres of land near Puducherry",
      icon: Building,
      color: "from-teal-500 to-green-500",
      bgColor: "bg-teal-50"
    },
    {
      amount: "₹66 Crore",
      title: "Battery Manufacturing Facility",
      location: "Near Hosur",
      description: "Successfully identified a buyer for a battery manufacturing facility near Hosur",
      icon: Factory,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50"
    },
    {
      amount: "₹66 Crore",
      title: "Wind Turbine Manufacturing Plant",
      location: "Near Thiruvallur",
      description: "Facilitated buyer identification for a wind turbine manufacturing plant near Thiruvallur",
      icon: Factory,
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50"
    }
  ];

  const executionStrengths = [
    {
      icon: Handshake,
      title: "Compromise settlements",
      description: ""
    },
    {
      icon: Target,
      title: "Strategic buyer identification",
      description: ""
    },
    {
      icon: Scale,
      title: "Recovery proceedings under DRT",
      description: ""
    },
    {
      icon: Gavel,
      title: "Recovery proceedings under SARFAESI",
      description: ""
    },
    {
      icon: Building,
      title: "Recovery proceedings under NCLT frameworks",
      description: ""
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-dark via-primary-dark to-primary-dark/95 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary-orange rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-orange rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Award className="w-4 h-4 text-primary-orange" />
              <span className="text-sm font-semibold">Key Achievements</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Track Record
            </h1>
          </div>
        </div>
      </div>

      {/* Key Achievements Introduction */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary-orange/10 px-4 py-2 rounded-full mb-4">
              <Star className="w-4 h-4 text-primary-orange" />
              <span className="text-sm font-semibold text-primary-orange">Key Achievements</span>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Our company has a proven track record in facilitating the resolution and monetisation of high-value stressed assets across multiple sectors. 
              We consistently deliver strong outcomes for banks, financial institutions, and stakeholders through strategic buyer identification and efficient execution.
            </p>
          </div>
        </div>
      </section>

      {/* Select Transaction Highlights */}
      <section className="py-16 bg-primary-grey">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary-orange/10 px-4 py-2 rounded-full mb-4">
              <TrendingUp className="w-4 h-4 text-primary-orange" />
              <span className="text-sm font-semibold text-primary-orange">Success Stories</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">Select Transaction Highlights</h2>
          </div>

          <div className="space-y-4">
            {transactions.map((transaction, idx) => (
              <div 
                key={idx} 
                className={`${transaction.bgColor} rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-primary-orange`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="text-2xl font-bold text-primary-orange mb-2">{transaction.amount}</div>
                    <h3 className="text-xl font-bold text-primary-dark mb-1">{transaction.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{transaction.location}</p>
                    <p className="text-gray-700">{transaction.description}</p>
                  </div>
                  <div className={`bg-gradient-to-br ${transaction.color} p-3 rounded-lg flex-shrink-0 self-start`}>
                    <transaction.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Execution Strength Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-orange/10 px-4 py-2 rounded-full mb-4">
                <Zap className="w-4 h-4 text-primary-orange" />
                <span className="text-sm font-semibold text-primary-orange">Our Expertise</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">Execution Strength</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                In addition to the above, we have coordinated and supported several other high-value transactions through:
              </p>
              <ul className="space-y-3">
                {executionStrengths.map((strength, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="text-primary-orange flex-shrink-0" size={18} />
                    <span className="text-gray-700">{strength.title}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 bg-primary-grey rounded-xl p-6 border-l-4 border-primary-orange">
                <p className="text-gray-700">
                  ensuring effective resolution and maximised recovery for our clients.
                </p>
              </div>
            </div>
            <div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-orange/20 to-primary-orange/10 rounded-2xl blur-xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Success Story" 
                  className="rounded-2xl shadow-2xl relative z-10"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary-orange rounded-xl p-4 shadow-lg z-20">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

export default TrackRecord;