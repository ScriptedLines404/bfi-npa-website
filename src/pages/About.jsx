/* src/pages/About.jsx */
import React from "react";
import { 
  Target, Eye, MapPin, Award, Briefcase, Scale, 
  Shield, Users, Building, TrendingUp, FileText, 
  CheckCircle, Mail, Phone, Calendar, Heart, 
  Star, ArrowRight, Sparkles, Zap, Globe, 
  Clock, BarChart, Handshake, Crown, Gavel, Quote
} from "lucide-react";

const About = () => {
  const leaders = [
    { 
      name: "Mr. A. Velmurugan", 
      title: "Director",
      experience: "28+ years", 
      expertise: "SARFAESI, DRT, NCLT specialist", 
      background: "Former Promoter-Director of BFI Factoring Services Pvt. Ltd. (2002-2021)",
      achievements: "Successfully led 16+ branches, managed large recovery portfolios",
      image: "media/image1.png"
    },
    { 
      name: "Mr. A. Velraja", 
      title: "Director",
      experience: "Extensive experience", 
      expertise: "Vehicle finance & repossession operations", 
      background: "Progressed from Executive to Branch Manager across NBFCs",
      achievements: "Expertise in business development and field operations",
      image: "media/image2.png"
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

  const whyChooseUs = [
    { icon: Shield, title: "No-Risk Engagement Model", desc: "100% success-based fee structure" },
    { icon: Crown, title: "Experienced Leadership", desc: "Decades of proven industry expertise" },
    { icon: Handshake, title: "Strong Institutional Relationships", desc: "Trusted by leading financial institutions" },
    { icon: Zap, title: "End-to-End Execution Capability", desc: "Complete recovery solutions" },
    { icon: Heart, title: "Ethical Approach", desc: "Transparent & professional practices" }
  ];

  const stats = [
    { icon: Building, value: "1000+", label: "Cr Transactions", color: "from-blue-500 to-blue-600" },
    { icon: Calendar, value: "25+", label: "Years Experience", color: "from-orange-500 to-orange-600" },
    { icon: Users, value: "16+", label: "Branches Managed", color: "from-green-500 to-green-600" },
    { icon: Award, value: "100%", label: "Success-Based Fees", color: "from-purple-500 to-purple-600" }
  ];

  return (
    <div className="animate-fade-in">
      {/* Top Banner with Parallax Effect */}
      <div className="relative bg-gradient-to-r from-primary-dark via-primary-dark to-primary-dark/95 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary-orange rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-orange rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary-orange" />
              <span className="text-sm font-semibold">Est. 2020</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              About BFI-NPA
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-200 leading-relaxed">
              Professionally managed company specializing in Stressed Asset Resolution encompassing debt collection, 
              enforcement, and property disposition
            </p>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 bg-primary-orange/10 px-4 py-2 rounded-full mb-4">
                <Building className="w-4 h-4 text-primary-orange" />
                <span className="text-sm font-semibold text-primary-orange">Company Overview</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
                Your Trusted Partner in<br />
                <span className="text-primary-orange">Stressed Asset Resolution</span>
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong className="text-primary-orange">BFI-NPA Resolution Services Private Limited</strong> is a professionally managed company incorporated under the Companies Act, 2013 on <strong>5th February 2020</strong>. We specialize in debt collection, debt recovery, property disposition, and allied financial services, working closely with Nationalised Banks, Asset Reconstruction Companies (ARCs), and Non-Banking Financial Companies (NBFCs).
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                With a strong presence across key districts of Tamil Nadu, we are well-positioned to deliver timely and effective solutions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our clientele includes Banks, NBFCs, ARCs, Corporates, and Financial Institutions. We are committed to providing services that are efficient, cost-effective, and driven by integrity, transparency, and professional excellence.
              </p>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {stats.map((stat, idx) => (
                  <div key={idx} className={`bg-gradient-to-br ${stat.color} rounded-xl p-4 text-white shadow-lg`}>
                    <stat.icon className="w-8 h-8 mb-2 opacity-80" />
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm opacity-90">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-orange/20 to-primary-orange/10 rounded-2xl blur-xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="BFI-NPA Office" 
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

      {/* Leadership */}
      <section className="py-20 bg-gradient-to-b from-primary-grey to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary-orange/10 px-4 py-2 rounded-full mb-4">
              <Users className="w-4 h-4 text-primary-orange" />
              <span className="text-sm font-semibold text-primary-orange">Leadership Team</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">Meet Our Leadership</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our leadership team combines decades of industry experience with strong execution capabilities
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {leaders.map((leader, idx) => (
              <div key={idx} className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className="relative h-32 bg-gradient-to-r from-primary-orange to-primary-orange/80">
                  <div className="absolute -bottom-12 left-6">
                    <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <span className="text-3xl font-bold text-primary-orange">
                        {leader.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-16">
                  <h3 className="text-2xl font-bold text-primary-dark">{leader.name}</h3>
                  <p className="text-primary-orange font-semibold mb-3">{leader.title}</p>
                  <div className="space-y-2 text-gray-600">
                    <p><strong className="text-primary-dark">Experience:</strong> {leader.experience}</p>
                    <p><strong className="text-primary-dark">Expertise:</strong> {leader.expertise}</p>
                    <p>{leader.background}</p>
                    <p className="text-sm text-gray-500">{leader.achievements}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Associations */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary-orange/10 px-4 py-2 rounded-full mb-4">
              <Globe className="w-4 h-4 text-primary-orange" />
              <span className="text-sm font-semibold text-primary-orange">Our Network</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">Institutional Associations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are empanelled with leading financial institutions across India
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Nationalised Banks", "Private Sector Banks", "Asset Reconstruction Companies", "Non-Banking Financial Companies"].map((type, idx) => (
              <div key={idx} className="group bg-gradient-to-br from-primary-grey to-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <Building className="w-12 h-12 text-primary-orange mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-primary-dark">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Execution Experience */}
      <section className="py-20 bg-primary-grey">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary-orange/10 px-4 py-2 rounded-full mb-4">
              <Zap className="w-4 h-4 text-primary-orange" />
              <span className="text-sm font-semibold text-primary-orange">On-Ground Excellence</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">Execution Experience</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end recovery and resolution solutions with extensive experience in taking physical possession of secured assets
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mt-8">
            <div>
              <h3 className="text-2xl font-bold text-primary-dark mb-6 flex items-center gap-2">
                <Briefcase className="text-primary-orange" /> Asset Classes Handled
              </h3>
              <ul className="space-y-3">
                {assetClasses.map((asset, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-all">
                    <CheckCircle className="text-primary-orange mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700 text-sm">{asset}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary-dark mb-6 flex items-center gap-2">
                <Scale className="text-primary-orange" /> Statutory Authority Experience
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Scale className="w-5 h-5 text-blue-600" />
                    </div>
                    <p className="font-semibold text-primary-dark">DRT, CMM & CJM Authorities</p>
                  </div>
                  <p className="text-gray-600">Orders obtained from specialized tribunals and courts</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Gavel className="w-5 h-5 text-green-600" />
                    </div>
                    <p className="font-semibold text-primary-dark">SARFAESI Act</p>
                  </div>
                  <p className="text-gray-600">Direct possession without court intervention</p>
                </div>
                <div className="bg-gradient-to-r from-primary-orange/10 to-primary-orange/5 rounded-xl p-5 border-l-4 border-primary-orange">
                  <p className="font-semibold text-primary-dark">Diverse on-ground experience handling complex, sensitive, and high-value possessions with efficiency, compliance, and professionalism</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Capabilities */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 bg-primary-orange/10 px-4 py-2 rounded-full mb-4">
                <TrendingUp className="w-4 h-4 text-primary-orange" />
                <span className="text-sm font-semibold text-primary-orange">Expertise</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">Specialized Capabilities</h2>
              <p className="text-gray-700 mb-8 text-lg">
                Deep expertise in preparing and positioning stressed assets for successful e-auction sales, maximizing value realisation.
              </p>
              <ul className="space-y-4">
                {specializedCapabilities.map((cap, idx) => (
                  <li key={idx} className="flex items-center gap-3 group">
                    <div className="w-8 h-8 bg-primary-orange/10 rounded-lg flex items-center justify-center group-hover:bg-primary-orange transition-colors">
                      <CheckCircle className="text-primary-orange group-hover:text-white" size={16} />
                    </div>
                    <span className="text-gray-700 group-hover:text-primary-dark transition-colors">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-orange/20 to-primary-orange/10 rounded-2xl blur-xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Asset Auction" 
                  className="rounded-2xl shadow-2xl relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary-grey">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary-orange/10 px-4 py-2 rounded-full mb-4">
              <Star className="w-4 h-4 text-primary-orange" />
              <span className="text-sm font-semibold text-primary-orange">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">Why Choose BFI-NPA?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine expertise, ethics, and execution to deliver exceptional results
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {whyChooseUs.map((reason, idx) => (
              <div key={idx} className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-primary-orange/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-orange transition-colors">
                  <reason.icon className="w-7 h-7 text-primary-orange group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-2">{reason.title}</h3>
                <p className="text-gray-600 text-sm">{reason.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center bg-gradient-to-r from-primary-dark to-primary-dark/95 text-white rounded-2xl p-10 shadow-2xl">
            <Quote className="w-12 h-12 text-primary-orange mx-auto mb-4 opacity-50" />
            <p className="text-3xl md:text-4xl font-bold italic mb-3">"If we don't perform, we don't get paid."</p>
            <p className="text-gray-300 text-lg">Our Philosophy - Results-Driven Excellence</p>
          </div>
        </div>
      </section>

      {/* Mission & Objectives */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-gradient-to-br from-primary-grey to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-primary-orange/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-orange transition-colors">
                <Target className="w-8 h-8 text-primary-orange group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-primary-dark mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To enable businesses and financial institutions to recover outstanding dues efficiently and ethically, allowing them to focus on growth while we manage the complexities of debt resolution.
              </p>
            </div>
            <div className="group bg-gradient-to-br from-primary-grey to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-primary-orange/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-orange transition-colors">
                <Eye className="w-8 h-8 text-primary-orange group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-primary-dark mb-4">Our Objectives</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <ArrowRight className="text-primary-orange mt-1 flex-shrink-0" size={18} />
                  <span>To maximize recovery within the shortest possible timeframe</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="text-primary-orange mt-1 flex-shrink-0" size={18} />
                  <span>To become the preferred recovery and resolution partner through performance, reliability, and trust</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ethics & Commitment */}
      <section className="py-20 bg-primary-grey">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-primary-dark mb-4">Ethics & Confidentiality</h3>
              <p className="text-gray-600 mb-4">We adhere to the highest standards of:</p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-primary-orange" size={16} />
                  <span>Integrity and transparency</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-primary-orange" size={16} />
                  <span>Strict client confidentiality</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-primary-orange" size={16} />
                  <span>Responsible and compliant recovery practices</span>
                </li>
              </ul>
              <p className="text-gray-600 text-sm bg-primary-grey p-3 rounded-lg">
                We also execute Non-Disclosure Agreements (NDAs) to ensure complete protection of client data and sensitive information.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-primary-dark mb-4">Our Commitment</h3>
              <p className="text-gray-600 mb-4">Every assignment is handled with:</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-primary-orange" size={16} />
                  <span>Strategic planning and execution</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-primary-orange" size={16} />
                  <span>Continuous communication and updates</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-primary-orange" size={16} />
                  <span>Strict legal and regulatory compliance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-primary-orange" size={16} />
                  <span>Tailored recovery strategies for each case</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partner With Us */}
      <section className="py-20 bg-gradient-to-r from-primary-dark to-primary-dark/95 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-orange rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-orange rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom text-center relative z-10">
          <Handshake className="w-16 h-16 text-primary-orange mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Partner With Us</h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto leading-relaxed">
            At BFI-NPA Resolution Services Private Limited, we believe in building long-term partnerships that deliver measurable results.
          </p>
          <p className="text-lg mb-8 text-gray-300">
            We invite you to entrust us with your recovery assignments across Tamil Nadu and experience our expertise, efficiency, and commitment firsthand.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-primary-orange text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:bg-primary-orange/90 transition-all duration-300 hover:scale-105">
              Get Free Consultation
            </button>
            <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-xl hover:bg-white hover:text-primary-dark transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary-orange/10 px-4 py-2 rounded-full mb-4">
              <MapPin className="w-4 h-4 text-primary-orange" />
              <span className="text-sm font-semibold text-primary-orange">Get in Touch</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">Contact Us</h2>
            <div className="bg-gradient-to-br from-primary-grey to-white rounded-2xl p-8 shadow-xl mt-6">
              <Building className="w-12 h-12 text-primary-orange mx-auto mb-4" />
              <p className="font-bold text-primary-dark text-xl mb-2">BFI-NPA Resolution Services Pvt. Ltd</p>
              <p className="text-gray-600">51, Ramakrishna Mutt Road, 1st Floor, Mylapore</p>
              <p className="text-gray-600 mb-6">Chennai - 600004</p>
              <div className="flex flex-col md:flex-row justify-center gap-6 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-center gap-3 group">
                  <div className="w-10 h-10 bg-primary-orange/10 rounded-full flex items-center justify-center group-hover:bg-primary-orange transition-colors">
                    <Mail className="text-primary-orange group-hover:text-white" size={18} />
                  </div>
                  <span className="text-gray-700 group-hover:text-primary-orange transition-colors">bfirspl@gmail.com</span>
                </div>
                <div className="flex items-center justify-center gap-3 group">
                  <div className="w-10 h-10 bg-primary-orange/10 rounded-full flex items-center justify-center group-hover:bg-primary-orange transition-colors">
                    <Phone className="text-primary-orange group-hover:text-white" size={18} />
                  </div>
                  <span className="text-gray-700 group-hover:text-primary-orange transition-colors">+91-9444035070</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;