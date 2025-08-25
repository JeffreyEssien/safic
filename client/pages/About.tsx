import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfdf5] py-20 max-sm:py-12">
        <div className="max-w-[1200px] mx-auto px-4 max-sm:px-3">
          <div className="text-center">
            <h1 className="text-4xl max-sm:text-3xl font-bold text-[#1f2937] mb-6">
              About SAFIC Technologies
            </h1>
            <p className="text-xl max-sm:text-lg text-[#6b7280] max-w-3xl mx-auto leading-relaxed">
              Leading the way in environmental engineering excellence across Nigeria and beyond
              with innovative solutions and unwavering commitment to sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 max-sm:py-12 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 max-sm:px-3">
          <div className="grid grid-cols-2 gap-12 max-lg:grid-cols-1 items-center">
            <div>
              <h2 className="text-3xl max-sm:text-2xl font-bold text-[#1f2937] mb-6">
                Our Story
              </h2>
              <p className="text-lg text-[#6b7280] mb-6 leading-relaxed">
                Founded in 2007, SAFIC Technologies emerged from a vision to provide world-class 
                environmental engineering solutions tailored to Nigeria's unique challenges. 
                Over the past 17+ years, we have grown from a small consultancy to become 
                Nigeria's most trusted partner in environmental engineering.
              </p>
              <p className="text-lg text-[#6b7280] mb-6 leading-relaxed">
                Our journey has been marked by continuous innovation, strategic partnerships, 
                and an unwavering commitment to zero-incident operations. We've successfully 
                completed hundreds of projects across oil & gas, industrial, and maritime sectors.
              </p>
              <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
                <div className="text-center p-4 bg-[#f0fdf4] rounded-xl">
                  <div className="text-3xl font-bold text-[#059669] mb-2">17+</div>
                  <div className="text-sm text-[#6b7280]">Years of Excellence</div>
                </div>
                <div className="text-center p-4 bg-[#f0fdf4] rounded-xl">
                  <div className="text-3xl font-bold text-[#059669] mb-2">500+</div>
                  <div className="text-sm text-[#6b7280]">Projects Completed</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="SAFIC Technologies Team" 
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 max-sm:py-12 bg-[#f8fafb]">
        <div className="max-w-[1200px] mx-auto px-4 max-sm:px-3">
          <div className="grid grid-cols-2 gap-8 max-lg:grid-cols-1">
            <div className="bg-white p-8 max-sm:p-6 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-[#059669] to-[#047857] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1f2937] mb-4">Our Vision</h3>
              <p className="text-[#6b7280] leading-relaxed">
                To be West Africa's leading environmental engineering firm, 
                recognized globally for innovative solutions, zero-incident excellence, 
                and commitment to sustainable development practices that protect 
                our environment for future generations.
              </p>
            </div>
            <div className="bg-white p-8 max-sm:p-6 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-[#059669] to-[#047857] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1f2937] mb-4">Our Mission</h3>
              <p className="text-[#6b7280] leading-relaxed">
                To deliver comprehensive, cost-effective environmental engineering 
                solutions through innovative technologies, strategic partnerships, 
                and local expertise while maintaining the highest standards of 
                safety, quality, and environmental stewardship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 max-sm:py-12 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 max-sm:px-3">
          <div className="text-center mb-12">
            <h2 className="text-3xl max-sm:text-2xl font-bold text-[#1f2937] mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
              The principles that guide everything we do and define who we are as an organization
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#059669] to-[#047857] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1f2937] mb-3">Excellence</h3>
              <p className="text-[#6b7280]">
                We strive for excellence in every project, maintaining the highest 
                standards of quality and professionalism in all our deliverables.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1f2937] mb-3">Safety</h3>
              <p className="text-[#6b7280]">
                Safety is our top priority. Our zero-incident record reflects our 
                unwavering commitment to protecting our people and the environment.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#dc2626] to-[#b91c1c] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1f2937] mb-3">Innovation</h3>
              <p className="text-[#6b7280]">
                We embrace cutting-edge technologies and innovative approaches 
                to solve complex environmental challenges effectively.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#7c3aed] to-[#6d28d9] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1f2937] mb-3">Teamwork</h3>
              <p className="text-[#6b7280]">
                Collaboration and partnership are at the heart of our success, 
                both internally and with our clients and stakeholders.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#ea580c] to-[#c2410c] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1f2937] mb-3">Integrity</h3>
              <p className="text-[#6b7280]">
                We conduct business with honesty, transparency, and ethical 
                practices, building trust with all our stakeholders.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0891b2] to-[#0e7490] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1f2937] mb-3">Sustainability</h3>
              <p className="text-[#6b7280]">
                Environmental stewardship guides our operations, ensuring 
                sustainable practices that protect our planet for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 max-sm:py-12 bg-[#f8fafb]">
        <div className="max-w-[1200px] mx-auto px-4 max-sm:px-3">
          <div className="text-center mb-12">
            <h2 className="text-3xl max-sm:text-2xl font-bold text-[#1f2937] mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
              Our experienced leadership team brings decades of combined expertise 
              in environmental engineering and business management
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
            <div className="bg-white p-8 max-sm:p-6 rounded-2xl shadow-lg text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-[#059669] to-[#047857] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl text-white font-bold">CEO</span>
              </div>
              <h3 className="text-xl font-bold text-[#1f2937] mb-2">Chief Executive Officer</h3>
              <p className="text-[#059669] font-semibold mb-3">Environmental Engineering</p>
              <p className="text-[#6b7280] text-sm">
                Over 20 years of experience in environmental consulting and project management 
                across oil & gas and industrial sectors.
              </p>
            </div>
            <div className="bg-white p-8 max-sm:p-6 rounded-2xl shadow-lg text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl text-white font-bold">CTO</span>
              </div>
              <h3 className="text-xl font-bold text-[#1f2937] mb-2">Chief Technology Officer</h3>
              <p className="text-[#059669] font-semibold mb-3">Technology & Innovation</p>
              <p className="text-[#6b7280] text-sm">
                Leading our technological advancement initiatives and ensuring we stay 
                at the forefront of environmental engineering innovation.
              </p>
            </div>
            <div className="bg-white p-8 max-sm:p-6 rounded-2xl shadow-lg text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-[#dc2626] to-[#b91c1c] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl text-white font-bold">COO</span>
              </div>
              <h3 className="text-xl font-bold text-[#1f2937] mb-2">Chief Operations Officer</h3>
              <p className="text-[#059669] font-semibold mb-3">Operations & Quality</p>
              <p className="text-[#6b7280] text-sm">
                Ensures operational excellence and quality management across all 
                projects and service deliveries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 max-sm:py-12 bg-gradient-to-br from-[#059669] to-[#047857]">
        <div className="max-w-[1200px] mx-auto px-4 max-sm:px-3 text-center">
          <h2 className="text-3xl max-sm:text-2xl font-bold text-white mb-6">
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Partner with Nigeria's leading environmental engineering firm for your next project
          </p>
          <div className="flex gap-4 justify-center max-sm:flex-col max-sm:items-center">
            <Link 
              to="/contact" 
              className="bg-white text-[#059669] px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-colors inline-block"
            >
              Get In Touch
            </Link>
            <Link 
              to="/services" 
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#059669] transition-colors inline-block"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
