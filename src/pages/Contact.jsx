/* src/pages/Contact.jsx */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Send, Clock, Building, Users, Award } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import AnimatedCard from "../components/AnimatedCard";
import AnimatedSection from "../components/AnimatedSection";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    caseDetails: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Case submitted successfully! Our team will contact you within 24 hours.");
    setFormData({ name: "", company: "", phone: "", email: "", caseDetails: "" });
  };

  const contactInfo = [
    { icon: Phone, title: "Phone", details: "+91 94440 35070", color: "from-blue-500 to-blue-600" },
    { icon: Mail, title: "Email", details: "bfirspl@gmail.com", color: "from-orange-500 to-orange-600" },
    { icon: MapPin, title: "Location", details: "Chennai, Tamil Nadu, India", color: "from-green-500 to-green-600" },
    { icon: Clock, title: "Office Hours", details: "Mon-Fri: 9AM-6PM", color: "from-purple-500 to-purple-600" }
  ];

  const stats = [
    { icon: Building, value: "1000+", label: "Cr Transactions", color: "from-blue-500 to-blue-600" },
    { icon: Users, value: "50+", label: "Happy Clients", color: "from-orange-500 to-orange-600" },
    { icon: Award, value: "100%", label: "Success Rate", color: "from-green-500 to-green-600" },
    { icon: Clock, value: "25+", label: "Years Experience", color: "from-purple-500 to-purple-600" }
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
              <Phone className="w-4 h-4 text-primary-orange" />
              <span className="text-sm font-semibold">Get in Touch</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-200 leading-relaxed">
              Get a Free Consultation Today. Our team of experts is ready to assist you with your NPA recovery needs.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-12 bg-primary-grey">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <AnimatedCard key={idx} delay={idx * 100} direction="up" className={`bg-gradient-to-br ${stat.color} rounded-xl p-6 text-white shadow-lg transform hover:scale-105 transition-all duration-300`}>
                <stat.icon className="w-10 h-10 mb-3 opacity-80" />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm opacity-90 mt-1">{stat.label}</div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection direction="left" threshold={0.3}>
              <div className="bg-primary-grey rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-primary-dark mb-6">Submit Your Case</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-primary-orange transition-colors"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Enter your company name"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-primary-orange transition-colors"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-primary-orange transition-colors"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-primary-orange transition-colors"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Case Details / NPA Amount *</label>
                    <textarea
                      name="caseDetails"
                      placeholder="Please provide details about your case, including NPA amount, type of asset, etc."
                      rows="4"
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-primary-orange transition-colors resize-none"
                      value={formData.caseDetails}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                    Submit Case <Send size={18} />
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <div className="space-y-6">
              <AnimatedSection direction="right" threshold={0.3}>
                <div className="bg-primary-grey rounded-2xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-primary-dark mb-6">Get In Touch</h2>
                  <div className="space-y-6">
                    {contactInfo.map((info, idx) => (
                      <div key={idx} className="flex items-start gap-4 group">
                        <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-primary-dark">{info.title}</p>
                          <p className="text-gray-600">{info.details}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedCard delay={200} direction="up">
                <div className="bg-primary-grey rounded-2xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-primary-dark mb-4">Office Hours</h2>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-semibold text-primary-dark">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-semibold text-primary-dark">10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-semibold text-primary-dark">Closed</span>
                    </div>
                  </div>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={300} direction="up">
                <div className="bg-gradient-to-r from-primary-orange/10 to-primary-orange/5 rounded-2xl p-6 border-l-4 border-primary-orange">
                  <p className="text-gray-700 font-semibold text-center">
                    📞 Emergency Assistance Available 24/7 for Urgent Cases
                  </p>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Embed */}
      <section className="py-0">
        <AnimatedSection direction="up" threshold={0.3}>
          <div className="w-full h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.56946395675!2d80.14489425!3d13.0817421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e4b3c2b8f9c6e4f!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="BFI-NPA Location"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
        </AnimatedSection>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-primary-grey">
        <div className="container-custom">
          <SectionTitle 
            title="Why Choose BFI-NPA?" 
            subtitle="We combine expertise, ethics, and execution to deliver exceptional results"
          />
          
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <AnimatedCard delay={100} direction="up" className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-orange transition-colors">
                <Award className="w-8 h-8 text-primary-orange group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-primary-dark mb-2">25+ Years</h3>
              <p className="text-gray-600 text-sm">Of Excellence in Recovery</p>
            </AnimatedCard>
            
            <AnimatedCard delay={200} direction="up" className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-orange transition-colors">
                <Users className="w-8 h-8 text-primary-orange group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-primary-dark mb-2">50+ Institutions</h3>
              <p className="text-gray-600 text-sm">Trusted by Leading Banks & NBFCs</p>
            </AnimatedCard>
            
            <AnimatedCard delay={300} direction="up" className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-orange transition-colors">
                <CheckCircle className="w-8 h-8 text-primary-orange group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-primary-dark mb-2">100% Success</h3>
              <p className="text-gray-600 text-sm">Success-Based Fee Structure</p>
            </AnimatedCard>
            
            <AnimatedCard delay={400} direction="up" className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-orange transition-colors">
                <Building className="w-8 h-8 text-primary-orange group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-primary-dark mb-2">Pan-India Presence</h3>
              <p className="text-gray-600 text-sm">Covering Major Financial Hubs</p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* CTA Banner - No Animation */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Resolve Your NPAs?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get in touch with our experts today for a free consultation
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="btn-primary"
            >
              Back to Top
            </button>
            <Link to="/services" className="btn-outline border-white text-white hover:bg-white hover:text-primary-dark">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// CheckCircle icon component
const CheckCircle = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default Contact;