import { useState } from 'react';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  client: string;
  duration: string;
  status: string;
  image: string;
  description: string;
  services: string[];
  results: string[];
  challenges: string;
  solution: string;
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Oil & Gas', 'Industrial', 'Maritime', 'Environmental Remediation', 'Consulting'];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Offshore Platform Environmental Baseline Study',
      category: 'Oil & Gas',
      location: 'Niger Delta, Nigeria',
      client: 'Major Oil & Gas Company',
      duration: '8 months',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Comprehensive environmental baseline study for new offshore drilling platform development.',
      services: ['Environmental Baseline Studies', 'Marine Surveys', 'Water Quality Analysis', 'Sediment Testing'],
      results: ['Environmental compliance achieved', 'Zero incidents during project', 'Regulatory approval obtained', '15% cost savings through optimized approach'],
      challenges: 'Conducting surveys in challenging offshore conditions while maintaining safety standards.',
      solution: 'Deployed specialized marine equipment and established 24/7 weather monitoring protocols.'
    },
    {
      id: 2,
      title: 'Industrial Waste Treatment Facility',
      category: 'Industrial',
      location: 'Lagos, Nigeria',
      client: 'Manufacturing Consortium',
      duration: '12 months',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1581093458791-9f3c3250e5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Design and implementation of advanced waste treatment facility for multiple industrial clients.',
      services: ['Waste Management', 'Treatment System Design', 'Environmental Monitoring', 'Compliance Management'],
      results: ['90% waste reduction achieved', 'Full regulatory compliance', 'Annual cost savings of $2M', 'Zero environmental violations'],
      challenges: 'Treating diverse waste streams from multiple industries with varying contamination levels.',
      solution: 'Implemented modular treatment system with advanced filtration and chemical neutralization.'
    },
    {
      id: 3,
      title: 'Oil Spill Response and Cleanup Operation',
      category: 'Environmental Remediation',
      location: 'Bayelsa State, Nigeria',
      client: 'Government Environmental Agency',
      duration: '6 months',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Emergency response and comprehensive cleanup of major oil spill affecting coastal ecosystem.',
      services: ['Emergency Response', 'Oil Spill Cleanup', 'Soil Remediation', 'Ecosystem Restoration'],
      results: ['98% oil recovery achieved', 'Ecosystem fully restored', 'Local communities compensated', 'Prevention protocols established'],
      challenges: 'Rapid response required to minimize environmental impact in sensitive coastal ecosystem.',
      solution: 'Deployed specialized cleanup equipment within 24 hours and implemented bioremediation techniques.'
    },
    {
      id: 4,
      title: 'Port Terminal Environmental Impact Assessment',
      category: 'Maritime',
      location: 'Port Harcourt, Nigeria',
      client: 'Port Development Authority',
      duration: '10 months',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Comprehensive EIA for major port expansion project including marine and terrestrial assessments.',
      services: ['Environmental Impact Assessment', 'Marine Surveys', 'Stakeholder Consultation', 'Mitigation Planning'],
      results: ['EIA approved by regulators', 'Stakeholder consensus achieved', 'Mitigation costs reduced by 20%', 'Project timeline maintained'],
      challenges: 'Balancing development needs with environmental protection in sensitive marine environment.',
      solution: 'Developed innovative mitigation strategies and conducted extensive stakeholder engagement.'
    },
    {
      id: 5,
      title: 'Refinery Asset Integrity Management',
      category: 'Oil & Gas',
      location: 'Warri, Nigeria',
      client: 'National Oil Refinery',
      duration: '18 months',
      status: 'Ongoing',
      image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Comprehensive asset integrity management program for aging refinery infrastructure.',
      services: ['Asset Integrity', 'Corrosion Management', 'Risk Assessment', 'Maintenance Planning'],
      results: ['35% reduction in unplanned shutdowns', '50% increase in asset lifespan', 'Safety incidents reduced to zero', 'Maintenance costs optimized'],
      challenges: 'Managing integrity of aging infrastructure while maintaining continuous operations.',
      solution: 'Implemented predictive maintenance protocols and advanced inspection technologies.'
    },
    {
      id: 6,
      title: 'Chemical Plant Environmental Compliance Audit',
      category: 'Industrial',
      location: 'Kano, Nigeria',
      client: 'Chemical Manufacturing Company',
      duration: '4 months',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1581093458791-9f3c3250e5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Comprehensive environmental compliance audit and remediation recommendations.',
      services: ['Environmental Auditing', 'Compliance Assessment', 'Laboratory Analysis', 'Remediation Planning'],
      results: ['100% compliance achieved', 'Regulatory penalties avoided', 'Environmental management system certified', 'Annual savings of $500K'],
      challenges: 'Addressing multiple compliance gaps while maintaining production schedules.',
      solution: 'Phased remediation approach with minimal production disruption and staff training programs.'
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfdf5] py-20 max-sm:py-12">
        <div className="max-w-[1200px] mx-auto px-4 max-sm:px-3">
          <div className="text-center">
            <h1 className="text-4xl max-sm:text-3xl font-bold text-[#1f2937] mb-6">
              Our Projects
            </h1>
            <p className="text-xl max-sm:text-lg text-[#6b7280] max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of successful environmental engineering projects across Nigeria and beyond. 
              17+ years of zero-incident excellence in delivering complex solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 max-sm:py-12 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 max-sm:px-3">
          <div className="grid grid-cols-4 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#059669] to-[#047857] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <div className="text-3xl font-bold text-[#1f2937] mb-2">500+</div>
              <div className="text-[#6b7280]">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div className="text-3xl font-bold text-[#1f2937] mb-2">0</div>
              <div className="text-[#6b7280]">Safety Incidents</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#dc2626] to-[#b91c1c] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <div className="text-3xl font-bold text-[#1f2937] mb-2">17+</div>
              <div className="text-[#6b7280]">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#7c3aed] to-[#6d28d9] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"/>
                </svg>
              </div>
              <div className="text-3xl font-bold text-[#1f2937] mb-2">50+</div>
              <div className="text-[#6b7280]">Industry Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-16 max-sm:py-12 bg-[#f8fafb]">
        <div className="max-w-[1200px] mx-auto px-4 max-sm:px-3">
          <div className="text-center mb-12">
            <h2 className="text-3xl max-sm:text-2xl font-bold text-[#1f2937] mb-4">
              Project Portfolio
            </h2>
            <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
              Browse our projects by category to see our expertise across different sectors
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-xl font-semibold transition-colors ${
                  activeCategory === category
                    ? 'bg-[#059669] text-white'
                    : 'bg-white text-[#6b7280] hover:bg-[#f0fdf4] hover:text-[#059669]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-[#10b981] text-white' 
                        : 'bg-[#f59e0b] text-white'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-[#059669] font-semibold mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold text-[#1f2937] mb-3">{project.title}</h3>
                  <p className="text-[#6b7280] mb-4">{project.description}</p>
                  <div className="flex items-center justify-between text-sm text-[#6b7280]">
                    <span>{project.location}</span>
                    <span>{project.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white bg-opacity-90 text-[#6b7280] hover:text-[#374151] transition-colors p-2 rounded-full"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            
            <div className="p-8 max-sm:p-6">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-[#f0fdf4] text-[#059669] px-3 py-1 rounded-full text-sm font-medium">
                  {selectedProject.category}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  selectedProject.status === 'Completed' 
                    ? 'bg-[#10b981] text-white' 
                    : 'bg-[#f59e0b] text-white'
                }`}>
                  {selectedProject.status}
                </span>
              </div>
              
              <h2 className="text-3xl font-bold text-[#1f2937] mb-4">{selectedProject.title}</h2>
              <p className="text-lg text-[#6b7280] mb-6">{selectedProject.description}</p>
              
              <div className="grid grid-cols-2 gap-8 max-sm:grid-cols-1 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-[#1f2937] mb-3">Project Details</h3>
                  <div className="space-y-2 text-sm">
                    <div><strong>Client:</strong> {selectedProject.client}</div>
                    <div><strong>Location:</strong> {selectedProject.location}</div>
                    <div><strong>Duration:</strong> {selectedProject.duration}</div>
                    <div><strong>Status:</strong> {selectedProject.status}</div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-[#1f2937] mb-3">Services Provided</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.services.map((service, index) => (
                      <span 
                        key={index}
                        className="bg-[#f0fdf4] text-[#059669] px-3 py-1 rounded-full text-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-[#1f2937] mb-3">Challenge</h3>
                <p className="text-[#6b7280]">{selectedProject.challenges}</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-[#1f2937] mb-3">Solution</h3>
                <p className="text-[#6b7280]">{selectedProject.solution}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-[#1f2937] mb-3">Results Achieved</h3>
                <ul className="space-y-2">
                  {selectedProject.results.map((result, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#059669] rounded-full flex-shrink-0"></div>
                      <span className="text-[#6b7280]">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 max-sm:py-12 bg-gradient-to-br from-[#059669] to-[#047857]">
        <div className="max-w-[1200px] mx-auto px-4 max-sm:px-3 text-center">
          <h2 className="text-3xl max-sm:text-2xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can deliver environmental engineering excellence for your next project. 
            Our team is ready to provide customized solutions that meet your specific needs.
          </p>
          <div className="flex gap-4 justify-center max-sm:flex-col max-sm:items-center">
            <Link 
              to="/contact" 
              className="bg-white text-[#059669] px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-colors inline-block"
            >
              Start Your Project
            </Link>
            <Link 
              to="/services" 
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#059669] transition-colors inline-block"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
