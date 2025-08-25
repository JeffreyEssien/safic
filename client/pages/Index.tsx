import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfdf5] py-20 max-sm:py-12">
        <div className="max-w-[1200px] mx-auto px-4 max-sm:px-3">
          <div className="grid grid-cols-2 gap-12 max-lg:grid-cols-1 max-lg:gap-8 items-center">
            <div>
              <h1 className="text-5xl max-sm:text-3xl font-bold text-[#1f2937] leading-tight mb-6">
                Leading Environmental Engineering Solutions in Nigeria
              </h1>
              <p className="text-xl max-sm:text-lg text-[#6b7280] mb-8 leading-relaxed">
                Since 2007, SAFIC Technologies has been delivering
                comprehensive environmental engineering services with zero
                incidents while ensuring sustainable environmentalism across
                oil & gas, industrial, and maritime sectors.
              </p>
              <div className="flex gap-4 max-sm:flex-col">
                <Link 
                  to="/services" 
                  className="bg-[#059669] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#047857] transition-colors shadow-lg inline-block text-center"
                >
                  Explore Services
                </Link>
                <Link 
                  to="/contact" 
                  className="border-2 border-[#059669] text-[#059669] px-8 py-4 rounded-xl font-semibold hover:bg-[#f0fdf4] transition-colors inline-block text-center"
                >
                  Get Quote
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581093458791-9f3c3250e5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Environmental Engineering" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 max-sm:-bottom-3 max-sm:-left-3 bg-white p-6 max-sm:p-4 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#059669] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-[#1f2937]">17+ Years</p>
                    <p className="text-sm text-[#6b7280]">Zero Incidents</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-16 max-sm:py-12 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 max-sm:px-3">
          <div className="text-center mb-12">
            <h2 className="text-3xl max-sm:text-2xl font-bold text-[#1f2937] mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
              Comprehensive environmental engineering solutions tailored for
              oil & gas, industrial, and maritime sectors
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {/* Environmental Consultancy */}
            <div className="bg-[#f8fafb] p-8 max-sm:p-6 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#059669] to-[#047857] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1f2937] mb-3">
                Environmental Consultancy
              </h3>
              <p className="text-[#6b7280] mb-4">
                Environmental Baseline Studies (EBS) and Environmental
                Seabed Surveys (ESS) for comprehensive environmental
                assessment.
              </p>
              <Link to="/services" className="text-[#059669] font-semibold hover:text-[#047857] transition-colors">
                Learn More →
              </Link>
            </div>

            {/* Oil Spill Cleanup */}
            <div className="bg-[#f8fafb] p-8 max-sm:p-6 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#dc2626] to-[#b91c1c] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1f2937] mb-3">
                Oil Spill Cleanup
              </h3>
              <p className="text-[#6b7280] mb-4">
                Rapid response contamination cleanup and comprehensive site
                remediation services for environmental restoration.
              </p>
              <Link to="/services" className="text-[#059669] font-semibold hover:text-[#047857] transition-colors">
                Learn More →
              </Link>
            </div>

            {/* Laboratory Services */}
            <div className="bg-[#f8fafb] p-8 max-sm:p-6 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1f2937] mb-3">
                Laboratory Services
              </h3>
              <p className="text-[#6b7280] mb-4">
                Comprehensive analysis including metals, hydrocarbons, water
                quality, soil testing, and toxicity assessments.
              </p>
              <Link to="/services" className="text-[#059669] font-semibold hover:text-[#047857] transition-colors">
                Learn More →
              </Link>
            </div>

            {/* Asset Integrity */}
            <div className="bg-[#f8fafb] p-8 max-sm:p-6 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#7c3aed] to-[#6d28d9] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M9 1v6m6-6v6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1f2937] mb-3">
                Asset Integrity
              </h3>
              <p className="text-[#6b7280] mb-4">
                Ensuring structural and operational reliability of client
                assets through comprehensive integrity management programs.
              </p>
              <Link to="/services" className="text-[#059669] font-semibold hover:text-[#047857] transition-colors">
                Learn More →
              </Link>
            </div>

            {/* Maritime Services */}
            <div className="bg-[#f8fafb] p-8 max-sm:p-6 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0891b2] to-[#0e7490] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1f2937] mb-3">
                Maritime Services
              </h3>
              <p className="text-[#6b7280] mb-4">
                Supporting international shipping operations with
                comprehensive logistics and management solutions.
              </p>
              <Link to="/services" className="text-[#059669] font-semibold hover:text-[#047857] transition-colors">
                Learn More →
              </Link>
            </div>

            {/* Waste Management */}
            <div className="bg-[#f8fafb] p-8 max-sm:p-6 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#ea580c] to-[#c2410c] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1f2937] mb-3">
                Waste Management
              </h3>
              <p className="text-[#6b7280] mb-4">
                Comprehensive handling and management of industrial and
                environmental waste streams with sustainable practices.
              </p>
              <Link to="/services" className="text-[#059669] font-semibold hover:text-[#047857] transition-colors">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 max-sm:py-12 bg-[#f8fafb]">
        <div className="max-w-[1200px] mx-auto px-4 max-sm:px-3">
          <div className="text-center mb-12">
            <h2 className="text-3xl max-sm:text-2xl font-bold text-[#1f2937] mb-4">
              Why Choose SAFIC Technologies
            </h2>
            <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
              Our commitment to excellence and sustainable environmentalism
              sets us apart
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 max-sm:grid-cols-1">
            <div className="bg-white p-8 max-sm:p-6 rounded-2xl shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#059669] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1f2937] mb-2">
                    Zero Incident Record
                  </h3>
                  <p className="text-[#6b7280]">
                    17+ years of successful project execution with zero
                    incidents, demonstrating our commitment to safety and
                    excellence.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 max-sm:p-6 rounded-2xl shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#059669] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1f2937] mb-2">
                    Global Networks
                  </h3>
                  <p className="text-[#6b7280]">
                    Leveraging worldwide partnerships to deliver
                    cost-effective, technically sound solutions with
                    international expertise.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 max-sm:p-6 rounded-2xl shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#059669] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1f2937] mb-2">
                    Turnkey Solutions
                  </h3>
                  <p className="text-[#6b7280]">
                    Complete end-to-end project delivery from inception to
                    completion with single point accountability.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 max-sm:p-6 rounded-2xl shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#059669] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1f2937] mb-2">
                    Local Expertise
                  </h3>
                  <p className="text-[#6b7280]">
                    Indigenous Nigerian firm with deep understanding of
                    local regulations, environment, and business practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
