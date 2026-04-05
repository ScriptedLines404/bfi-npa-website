/* src/pages/Contact.jsx - Sandal + Brown */
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Phone, Mail, MapPin, Send, Clock, Building, Users, Award, CheckCircle, Shield, Crown, Handshake, Zap, Heart, Target, Sparkles } from "lucide-react";
import AnimatedCard from "../components/AnimatedCard";
import AnimatedSection from "../components/AnimatedSection";

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    caseDetails: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('http://localhost:5000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Case submitted successfully! Our team will contact you within 24 hours.' });
        setFormData({ name: "", company: "", phone: "", email: "", caseDetails: "" });
      } else {
        setSubmitStatus({ type: 'error', message: data.message || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleServicesNavigation = () => {
    navigate("/services");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const contactInfo = [
    { icon: Phone, title: "Phone", details: "+91-9444035070" },
    { icon: Mail, title: "Email", details: "bfirspl@gmail.com" },
    { icon: MapPin, title: "Address", details: "51, Ramakrishna Mutt Road, 1st Floor, Mylapore, Chennai - 600004 (Opposite to P.S. Matriculation Higher Secondary School)" }
  ];

  const whyChooseItems = [
    { icon: Shield, title: "No-Risk Engagement Model", desc: "100% success-based fee structure - you pay only when we deliver results" },
    { icon: Crown, title: "Experienced Leadership", desc: "28+ years of combined industry expertise with proven track record" },
    { icon: Zap, title: "Fast & Legally Compliant", desc: "Time-bound recovery through SARFAESI, DRT & NCLT. Get results in months, not years." }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
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
                <span className="text-sm font-semibold text-[#A16207]">Get in Touch</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#3E2723]">
                Contact Us
              </h1>
              <p className="text-xl max-w-3xl mx-auto text-[#6D4C41] leading-relaxed">
                Get a Free Consultation Today. Our team of experts is ready to assist you with your NPA recovery needs.
              </p>
              <div className="w-24 h-1 bg-[#A16207] rounded-full mx-auto mt-6"></div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Main Contact Section */}
      <section className="py-16 bg-[#F5E6D3]" id="contact-form">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection direction="left" threshold={0.1}>
              <div className="bg-[#E3D1B3] rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-[#3E2723] mb-6">Submit Your Case</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[#6D4C41] font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      required
                      className="w-full px-4 py-3 bg-[#F5E6D3] border border-[#BFA084] rounded-lg focus:outline-none focus:border-[#A16207] transition-colors text-[#3E2723] placeholder:text-[#6D4C41]/50"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-[#6D4C41] font-semibold mb-2">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Enter your company name"
                      className="w-full px-4 py-3 bg-[#F5E6D3] border border-[#BFA084] rounded-lg focus:outline-none focus:border-[#A16207] transition-colors text-[#3E2723] placeholder:text-[#6D4C41]/50"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-[#6D4C41] font-semibold mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      required
                      className="w-full px-4 py-3 bg-[#F5E6D3] border border-[#BFA084] rounded-lg focus:outline-none focus:border-[#A16207] transition-colors text-[#3E2723] placeholder:text-[#6D4C41]/50"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-[#6D4C41] font-semibold mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      required
                      className="w-full px-4 py-3 bg-[#F5E6D3] border border-[#BFA084] rounded-lg focus:outline-none focus:border-[#A16207] transition-colors text-[#3E2723] placeholder:text-[#6D4C41]/50"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-[#6D4C41] font-semibold mb-2">Case Details / NPA Amount *</label>
                    <textarea
                      name="caseDetails"
                      placeholder="Please provide details about your case, including NPA amount, type of asset, etc."
                      rows="4"
                      required
                      className="w-full px-4 py-3 bg-[#F5E6D3] border border-[#BFA084] rounded-lg focus:outline-none focus:border-[#A16207] transition-colors text-[#3E2723] placeholder:text-[#6D4C41]/50 resize-none"
                      value={formData.caseDetails}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  
                  {submitStatus && (
                    <div className={`p-3 rounded-lg ${submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {submitStatus.message}
                    </div>
                  )}
                  
                  <button 
                    type="submit" 
                    className="w-full flex items-center justify-center gap-2 bg-[#A16207] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-[#854D0E] transition-all duration-300 transform hover:scale-105"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Case'} 
                    {!isSubmitting && <Send size={18} />}
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <div className="space-y-6">
              <AnimatedSection direction="right" threshold={0.1}>
                <div className="bg-[#E3D1B3] rounded-2xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-[#3E2723] mb-6">Get In Touch</h2>
                  <div className="space-y-6">
                    {contactInfo.map((info, idx) => (
                      <div key={idx} className="flex items-start gap-4 group">
                        <div className="w-12 h-12 bg-[#A16207]/10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:bg-[#A16207] transition-colors">
                          <info.icon className="w-5 h-5 text-[#A16207] group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <p className="font-semibold text-[#3E2723]">{info.title}</p>
                          <p className="text-[#6D4C41]">{info.details}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedCard delay={200} direction="up">
                <div className="bg-[#E3D1B3] rounded-2xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-[#3E2723] mb-4">Office Hours</h2>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-2 border-b border-[#BFA084]">
                      <span className="text-[#6D4C41]">Monday - Friday</span>
                      <span className="font-semibold text-[#3E2723]">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-[#6D4C41]">Saturday</span>
                      <span className="font-semibold text-[#3E2723]">10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-t border-[#BFA084] mt-2 pt-2">
                      <span className="text-[#6D4C41]">Sunday</span>
                      <span className="font-semibold text-[#3E2723]">Closed</span>
                    </div>
                  </div>
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
              src="https://www.google.com/maps?q=13.0306396,80.2670198&z=20&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="BFI-NPA Location - Ramakrishna Mutt Road, Mylapore, Chennai"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
        </AnimatedSection>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#E3D1B3]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#A16207]/10 px-4 py-2 rounded-full mb-4">
              <Award className="w-4 h-4 text-[#A16207]" />
              <span className="text-sm font-semibold text-[#A16207]">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E2723] mb-4">Why Choose BFI-NPA?</h2>
            <p className="text-xl text-[#6D4C41] max-w-3xl mx-auto">
              Three compelling reasons to partner with India's trusted NPA recovery experts
            </p>
            <div className="w-24 h-1 bg-[#A16207] rounded-full mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {whyChooseItems.map((item, idx) => (
              <AnimatedCard key={idx} delay={idx * 100} direction="up" className="group bg-[#F5E6D3] rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-[#BFA084] hover:border-[#A16207]">
                <div className="w-14 h-14 bg-[#A16207]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#A16207] transition-colors">
                  <item.icon className="w-7 h-7 text-[#A16207] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-[#3E2723] mb-2">{item.title}</h3>
                <p className="text-[#6D4C41] text-sm">{item.desc}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-[#F5E6D3]">
        <div className="container-custom text-center">
          <AnimatedSection direction="up" threshold={0.3}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E2723] mb-6">Ready to Resolve Your NPAs?</h2>
            <p className="text-xl mb-8 text-[#6D4C41] max-w-2xl mx-auto">
              Get in touch with our experts today for a free consultation
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="bg-[#A16207] text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-[#854D0E] transition-all duration-300 transform hover:scale-105"
              >
                Back to Top
              </button>
              <button 
                onClick={handleServicesNavigation}
                className="border-2 border-[#A16207] text-[#A16207] font-semibold py-3 px-8 rounded-lg hover:bg-[#A16207] hover:text-white transition-all duration-300"
              >
                Explore Our Services
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;