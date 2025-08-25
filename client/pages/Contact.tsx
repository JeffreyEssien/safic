import { useState } from 'react';
import Layout from '@/components/Layout';

export default function Contact() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [showContactSuccess, setShowContactSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setContactForm({ ...contactForm, [name]: value });
  };

  const submitContact = (e: React.FormEvent) => {
    e.preventDefault();
    setShowContactSuccess(true);
    setContactForm({
      name: '',
      email: '',
      company: '',
      service: '',
      message: ''
    });
    setTimeout(() => {
      setShowContactSuccess(false);
    }, 3000);
  };

  const services = [
    'Environmental Consultancy',
    'Oil Spill Cleanup',
    'Laboratory Services',
    'Asset Integrity',
    'Maritime Services',
    'Waste Management',
    'Other'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfdf5] py-20 max-sm:py-12">
        <div className="max-w-[1200px] mx-auto px-4 max-sm:px-3">
          <div className="text-center">
            <h1 className="text-4xl max-sm:text-3xl font-bold text-[#1f2937] mb-6">
              Contact Us
            </h1>
            <p className="text-xl max-sm:text-lg text-[#6b7280] max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your environmental engineering needs? Get in touch with our expert team 
              for a consultation and discover how we can help your project succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 max-sm:py-12 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 max-sm:px-3">
          <div className="grid grid-cols-2 gap-12 max-lg:grid-cols-1">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl max-sm:text-2xl font-bold text-[#1f2937] mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={submitContact} className="space-y-6">
                <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={contactForm.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-[#e5e7eb] rounded-xl focus:ring-2 focus:ring-[#059669] focus:border-transparent outline-none transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-[#e5e7eb] rounded-xl focus:ring-2 focus:ring-[#059669] focus:border-transparent outline-none transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={contactForm.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[#e5e7eb] rounded-xl focus:ring-2 focus:ring-[#059669] focus:border-transparent outline-none transition-colors"
                      placeholder="Enter your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-2">
                      Service of Interest
                    </label>
                    <select
                      name="service"
                      value={contactForm.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[#e5e7eb] rounded-xl focus:ring-2 focus:ring-[#059669] focus:border-transparent outline-none transition-colors"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#374151] mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={contactForm.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-xl focus:ring-2 focus:ring-[#059669] focus:border-transparent outline-none transition-colors resize-vertical"
                    placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#059669] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#047857] transition-colors shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl max-sm:text-2xl font-bold text-[#1f2937] mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-[#6b7280] mb-8">
                Our team is ready to assist you with your environmental engineering needs. 
                Reach out through any of the channels below.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#059669] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1f2937] mb-1">Head Office</h3>
                    <p className="text-[#6b7280]">
                      Victoria Island, Lagos<br />
                      Lagos State, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#059669] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1f2937] mb-1">Phone</h3>
                    <p className="text-[#6b7280]">
                      +234 (0) 123 456 7890<br />
                      +234 (0) 123 456 7891
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#059669] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1f2937] mb-1">Email</h3>
                    <p className="text-[#6b7280]">
                      info@safictech.com<br />
                      business@safictech.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#059669] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1f2937] mb-1">Business Hours</h3>
                    <p className="text-[#6b7280]">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      24/7 Emergency Response Available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 max-sm:py-12 bg-[#f8fafb]">
        <div className="max-w-[1200px] mx-auto px-4 max-sm:px-3">
          <div className="text-center mb-12">
            <h2 className="text-3xl max-sm:text-2xl font-bold text-[#1f2937] mb-4">
              Our Offices
            </h2>
            <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
              Strategic locations across Nigeria to serve you better
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
            <div className="bg-white p-8 max-sm:p-6 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-[#059669] to-[#047857] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1f2937] mb-3">Lagos Office</h3>
              <p className="text-[#6b7280] mb-4">
                Victoria Island, Lagos<br />
                Lagos State, Nigeria
              </p>
              <p className="text-sm text-[#6b7280]">
                <strong>Services:</strong> Full-service operations, Head Office
              </p>
            </div>

            <div className="bg-white p-8 max-sm:p-6 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1f2937] mb-3">Port Harcourt Office</h3>
              <p className="text-[#6b7280] mb-4">
                GRA Phase 2, Port Harcourt<br />
                Rivers State, Nigeria
              </p>
              <p className="text-sm text-[#6b7280]">
                <strong>Services:</strong> Laboratory Services, Oil & Gas Operations
              </p>
            </div>

            <div className="bg-white p-8 max-sm:p-6 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-[#dc2626] to-[#b91c1c] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1f2937] mb-3">Abuja Office</h3>
              <p className="text-[#6b7280] mb-4">
                Central Business District<br />
                Federal Capital Territory, Nigeria
              </p>
              <p className="text-sm text-[#6b7280]">
                <strong>Services:</strong> Government Relations, Policy Consulting
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 max-sm:py-12 bg-gradient-to-br from-[#dc2626] to-[#b91c1c]">
        <div className="max-w-[1200px] mx-auto px-4 max-sm:px-3 text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 max-sm:p-6">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-[#dc2626]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"/>
              </svg>
            </div>
            <h2 className="text-3xl max-sm:text-2xl font-bold text-white mb-4">
              24/7 Emergency Response
            </h2>
            <p className="text-xl text-red-100 mb-6">
              Environmental emergencies require immediate action. Our emergency response team 
              is available around the clock for urgent situations.
            </p>
            <div className="flex gap-4 justify-center max-sm:flex-col max-sm:items-center">
              <a 
                href="tel:+2341234567890" 
                className="bg-white text-[#dc2626] px-8 py-4 rounded-xl font-semibold hover:bg-red-50 transition-colors inline-block"
              >
                Call Emergency Line
              </a>
              <a 
                href="mailto:emergency@safictech.com" 
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#dc2626] transition-colors inline-block"
              >
                Email Emergency Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Success Message */}
      {showContactSuccess && (
        <div className="fixed top-4 right-4 bg-[#059669] text-white px-6 py-4 rounded-xl shadow-lg z-50">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span>Message sent successfully! We'll get back to you soon.</span>
          </div>
        </div>
      )}
    </Layout>
  );
}
