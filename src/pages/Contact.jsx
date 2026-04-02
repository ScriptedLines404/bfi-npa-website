/* src/pages/Contact.jsx */
import React, { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

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
  };

  return (
    <div className="animate-fade-in">
      <div className="bg-primary-dark text-white py-16 text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="text-xl mt-4">Get a Free Consultation Today</p>
        </div>
      </div>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-6">Submit Your Case</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-orange"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-orange"
                  value={formData.company}
                  onChange={handleChange}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-orange"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-orange"
                  value={formData.email}
                  onChange={handleChange}
                />
                <textarea
                  name="caseDetails"
                  placeholder="Case Details / NPA Amount *"
                  rows="4"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-orange"
                  value={formData.caseDetails}
                  onChange={handleChange}
                ></textarea>
                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                  Submit Case <Send size={18} />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="card">
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Phone className="text-primary-orange" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-gray-600">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="text-primary-orange" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-600">recovery@bfi-npa.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="text-primary-orange" />
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-gray-600">Chennai, Tamil Nadu, India</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <h2 className="text-2xl font-bold mb-4">Office Hours</h2>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Google Map Embed */}
          <div className="mt-12">
            <div className="rounded-xl overflow-hidden shadow-lg h-64 md:h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.56946395675!2d80.14489425!3d13.0817421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e4b3c2b8f9c6e4f!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="BFI-NPA Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;