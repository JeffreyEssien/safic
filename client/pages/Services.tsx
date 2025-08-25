import { useState } from 'react';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';

export default function Services() {
  const [activeService, setActiveService] = useState<string | null>(null);

  const toggleService = (service: string) => {
    setActiveService(activeService === service ? null : service);
  };

  const services = [
    {
      id: 'environmental-consultancy',
      title: 'Environmental Consultancy',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
        </svg>
      ),
      color: 'from-[#059669] to-[#047857]',
      description: 'Comprehensive environmental assessment and consulting services',
      details: [
        'Environmental Baseline Studies (EBS)',
        'Environmental Seabed Surveys (ESS)',
        'Environmental Impact Assessments (EIA)',
        'Environmental Management Plans',
        'Compliance Monitoring and Reporting',
        'Environmental Due Diligence'
      ]
    },
    {
      id: 'oil-spill-cleanup',
      title: 'Oil Spill Cleanup',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
        </svg>
      ),
      color: 'from-[#dc2626] to-[#b91c1c]',
      description: 'Rapid response contamination cleanup and site remediation',
      details: [
        'Emergency Spill Response',
        'Contaminated Site Assessment',
        'Soil and Groundwater Remediation',
        'Bioremediation Services',
        'Waste Recovery and Disposal',
        'Post-Cleanup Monitoring'
      ]
    },
    {
      id: 'laboratory-services',
      title: 'Laboratory Services',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
        </svg>
      ),
      color: 'from-[#2563eb] to-[#1d4ed8]',
      description: 'Comprehensive environmental and chemical analysis',
      details: [
        'Water Quality Analysis',
        'Soil and Sediment Testing',
        'Hydrocarbon Analysis',
        'Heavy Metals Testing',
        'Toxicity Assessments',
        'Microbiological Analysis'
      ]
    },
    {
      id: 'asset-integrity',
      title: 'Asset Integrity',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M9 1v6m6-6v6"/>
        </svg>
      ),
      color: 'from-[#7c3aed] to-[#6d28d9]',
      description: 'Ensuring structural and operational reliability of assets',
      details: [
        'Pipeline Integrity Assessment',
        'Storage Tank Inspection',
        'Corrosion Management',
        'Risk-Based Inspection',
        'Fitness for Service Evaluation',
        'Integrity Management Systems'
      ]
    },
    {
      id: 'maritime-services',
      title: 'Maritime Services',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      ),
      color: 'from-[#0891b2] to-[#0e7490]',
      description: 'International shipping operations and logistics support',
      details: [
        'Marine Environmental Surveys',
        'Port and Terminal Services',
        'Ship-to-Ship Transfer Operations',
        'Maritime Logistics Management',
        'Offshore Support Services',
        'Marine Pollution Response'
      ]
    },
    {
      id: 'waste-management',
      title: 'Waste Management',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
        </svg>
      ),
      color: 'from-[#ea580c] to-[#c2410c]',
      description: 'Comprehensive industrial and environmental waste handling',
      details: [
        'Hazardous Waste Management',
        'Industrial Waste Treatment',
        'Waste Characterization',
        'Disposal Site Management',
        'Recycling and Recovery',
        'Waste Minimization Programs'
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfdf5] py-20 max-sm:py-12">
        <div className="max-w-[1200px] mx-auto px-4 max-sm:px-3">
          <div className="text-center">
            <h1 className="text-4xl max-sm:text-3xl font-bold text-[#1f2937] mb-6">
              Our Services
            </h1>
            <p className="text-xl max-sm:text-lg text-[#6b7280] max-w-3xl mx-auto leading-relaxed">
              Comprehensive environmental engineering solutions tailored for oil & gas, 
              industrial, and maritime sectors with zero-incident excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 max-sm:py-12 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 max-sm:px-3">
          <div className="grid gap-8">
            {services.map((service, index) => (
              <div key={service.id} className="bg-white border border-[#e5e7eb] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <div 
                  className="p-8 max-sm:p-6 cursor-pointer"
                  onClick={() => toggleService(service.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white`}>
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#1f2937] mb-2">
                          {service.title}
                        </h3>
                        <p className="text-[#6b7280]">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <div className="text-[#6b7280]">
                      <svg 
                        className={`w-6 h-6 transition-transform ${activeService === service.id ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </div>
                  </div>
                </div>
                
                {activeService === service.id && (
                  <div className="px-8 pb-8 max-sm:px-6 max-sm:pb-6">
                    <div className="border-t border-[#e5e7eb] pt-6">
                      <h4 className="text-lg font-semibold text-[#1f2937] mb-4">Service Offerings:</h4>
                      <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                        {service.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-[#059669] rounded-full flex-shrink-0"></div>
                            <span className="text-[#6b7280]">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 max-sm:py-12 bg-[#f8fafb]">
        <div className="max-w-[1200px] mx-auto px-4 max-sm:px-3">
          <div className="text-center mb-12">
            <h2 className="text-3xl max-sm:text-2xl font-bold text-[#1f2937] mb-4">
              Our Process
            </h2>
            <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
              A systematic approach to delivering exceptional environmental engineering solutions
            </p>
          </div>
          <div className="grid grid-cols-4 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#059669] to-[#047857] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-[#1f2937] mb-3">Assessment</h3>
              <p className="text-[#6b7280]">
                Comprehensive evaluation of environmental conditions and project requirements
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-[#1f2937] mb-3">Planning</h3>
              <p className="text-[#6b7280]">
                Development of detailed project plans and strategic implementation approaches
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#dc2626] to-[#b91c1c] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-[#1f2937] mb-3">Execution</h3>
              <p className="text-[#6b7280]">
                Implementation of solutions with rigorous quality control and safety measures
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#7c3aed] to-[#6d28d9] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-[#1f2937] mb-3">Monitoring</h3>
              <p className="text-[#6b7280]">
                Continuous monitoring and reporting to ensure long-term effectiveness
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 max-sm:py-12 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 max-sm:px-3">
          <div className="text-center mb-12">
            <h2 className="text-3xl max-sm:text-2xl font-bold text-[#1f2937] mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
              Delivering specialized environmental solutions across key sectors
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
            <div className="bg-[#f8fafb] p-8 max-sm:p-6 rounded-2xl text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#059669] to-[#047857] rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1f2937] mb-3">Oil & Gas</h3>
              <p className="text-[#6b7280]">
                Upstream, midstream, and downstream operations including exploration, 
                production, and refining facilities.
              </p>
            </div>
            <div className="bg-[#f8fafb] p-8 max-sm:p-6 rounded-2xl text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1f2937] mb-3">Industrial</h3>
              <p className="text-[#6b7280]">
                Manufacturing facilities, chemical plants, power generation, 
                and heavy industrial operations.
              </p>
            </div>
            <div className="bg-[#f8fafb] p-8 max-sm:p-6 rounded-2xl text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0891b2] to-[#0e7490] rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1f2937] mb-3">Maritime</h3>
              <p className="text-[#6b7280]">
                Ports, terminals, shipping operations, offshore platforms, 
                and marine transportation services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 max-sm:py-12 bg-gradient-to-br from-[#059669] to-[#047857]">
        <div className="max-w-[1200px] mx-auto px-4 max-sm:px-3 text-center">
          <h2 className="text-3xl max-sm:text-2xl font-bold text-white mb-6">
            Need Environmental Engineering Solutions?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let our experts help you with your environmental challenges. 
            Contact us today for a consultation.
          </p>
          <div className="flex gap-4 justify-center max-sm:flex-col max-sm:items-center">
            <Link 
              to="/contact" 
              className="bg-white text-[#059669] px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-colors inline-block"
            >
              Get Quote
            </Link>
            <Link 
              to="/about" 
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#059669] transition-colors inline-block"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
