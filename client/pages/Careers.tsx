import { useState } from 'react';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';

interface Position {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
}

export default function Careers() {
  const [selectedPosition, setSelectedPosition] = useState<Position | null>(null);
  const [careerForm, setCareerForm] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: null as File | null
  });
  const [showCareerSuccess, setShowCareerSuccess] = useState(false);

  const openPositions: Position[] = [
    {
      id: 1,
      title: 'Senior Environmental Engineer',
      department: 'Engineering',
      location: 'Lagos, Nigeria',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead environmental impact assessments and remediation projects for oil & gas clients.'
    },
    {
      id: 2,
      title: 'Laboratory Analyst',
      department: 'Laboratory Services',
      location: 'Port Harcourt, Nigeria',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Conduct chemical analysis of environmental samples including water, soil, and sediment testing.'
    },
    {
      id: 3,
      title: 'Project Manager',
      department: 'Operations',
      location: 'Abuja, Nigeria',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Manage turnkey environmental engineering projects from inception to completion.'
    },
    {
      id: 4,
      title: 'HSE Officer',
      department: 'Health & Safety',
      location: 'Lagos, Nigeria',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Ensure compliance with health, safety, and environmental protocols across all projects.'
    },
    {
      id: 5,
      title: 'Marine Operations Specialist',
      department: 'Maritime Services',
      location: 'Lagos, Nigeria',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Support international shipping operations and maritime logistics management.'
    },
    {
      id: 6,
      title: 'Environmental Consultant (Graduate)',
      department: 'Consulting',
      location: 'Multiple Locations',
      type: 'Full-time',
      experience: 'Entry Level',
      description: 'Join our graduate program and develop expertise in environmental baseline studies and assessments.'
    }
  ];

  const selectPosition = (position: Position) => {
    setSelectedPosition(position);
    setCareerForm({ ...careerForm, position: position.title });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCareerForm({ ...careerForm, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCareerForm({ ...careerForm, resume: e.target.files[0] });
    }
  };

  const submitCareerForm = (e: React.FormEvent) => {
    e.preventDefault();
    setShowCareerSuccess(true);
    setCareerForm({
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      resume: null
    });
    setSelectedPosition(null);
    setTimeout(() => {
      setShowCareerSuccess(false);
    }, 3000);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 max-sm:py-12 bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfdf5]">
        <div className="max-w-[1200px] mx-auto px-4 max-sm:px-3">
          <div className="text-center mb-16">
            <h1 className="text-4xl max-sm:text-3xl font-bold text-[#1f2937] mb-6">
              Join Our Team
            </h1>
            <p className="text-xl max-sm:text-lg text-[#6b7280] max-w-3xl mx-auto leading-relaxed">
              Build your career with Nigeria's leading environmental
              engineering firm. We're looking for passionate professionals
              who share our commitment to sustainable environmentalism and
              zero-incident excellence.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1 mb-16">
            <div className="bg-white p-8 max-sm:p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#059669] to-[#047857] rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1f2937] mb-3">
                Collaborative Culture
              </h3>
              <p className="text-[#6b7280]">
                Work with a diverse team of experts in a supportive
                environment that values innovation and teamwork.
              </p>
            </div>
            <div className="bg-white p-8 max-sm:p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#059669] to-[#047857] rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1f2937] mb-3">
                Career Growth
              </h3>
              <p className="text-[#6b7280]">
                Accelerate your professional development with mentorship
                programs, training opportunities, and clear advancement
                paths.
              </p>
            </div>
            <div className="bg-white p-8 max-sm:p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#059669] to-[#047857] rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1f2937] mb-3">
                Meaningful Impact
              </h3>
              <p className="text-[#6b7280]">
                Contribute to environmental protection and sustainable
                development across Nigeria and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 max-sm:py-12 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 max-sm:px-3">
          <div className="text-center mb-12">
            <h2 className="text-3xl max-sm:text-2xl font-bold text-[#1f2937] mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
              Explore exciting career opportunities and join our team of environmental engineering experts
            </p>
          </div>
          
          <div className="grid gap-6">
            {openPositions.map((position) => (
              <div key={position.id} className="bg-white border border-[#e5e7eb] rounded-2xl p-8 max-sm:p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start max-lg:flex-col max-lg:gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-xl font-bold text-[#1f2937]">{position.title}</h3>
                      <span className="bg-[#f0fdf4] text-[#059669] px-3 py-1 rounded-full text-sm font-medium">
                        {position.type}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1 mb-4">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-[#6b7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                        </svg>
                        <span className="text-[#6b7280] text-sm">{position.department}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-[#6b7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                        <span className="text-[#6b7280] text-sm">{position.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-[#6b7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <span className="text-[#6b7280] text-sm">{position.experience}</span>
                      </div>
                    </div>
                    <p className="text-[#6b7280] mb-4">{position.description}</p>
                  </div>
                  <button
                    onClick={() => selectPosition(position)}
                    className="bg-[#059669] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#047857] transition-colors whitespace-nowrap"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {selectedPosition && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8 max-sm:p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-[#1f2937]">
                  Apply for {selectedPosition.title}
                </h3>
                <button
                  onClick={() => setSelectedPosition(null)}
                  className="text-[#6b7280] hover:text-[#374151] transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>
              
              <form onSubmit={submitCareerForm} className="space-y-6">
                <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={careerForm.name}
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
                      value={careerForm.email}
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
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={careerForm.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-[#e5e7eb] rounded-xl focus:ring-2 focus:ring-[#059669] focus:border-transparent outline-none transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-2">
                      Years of Experience *
                    </label>
                    <input
                      type="text"
                      name="experience"
                      value={careerForm.experience}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-[#e5e7eb] rounded-xl focus:ring-2 focus:ring-[#059669] focus:border-transparent outline-none transition-colors"
                      placeholder="e.g., 5 years"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#374151] mb-2">
                    Position
                  </label>
                  <input
                    type="text"
                    name="position"
                    value={careerForm.position}
                    onChange={handleInputChange}
                    readOnly
                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-xl bg-[#f9fafb] text-[#6b7280]"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#374151] mb-2">
                    Resume/CV *
                  </label>
                  <input
                    type="file"
                    name="resume"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    required
                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-xl focus:ring-2 focus:ring-[#059669] focus:border-transparent outline-none transition-colors"
                  />
                  <p className="text-sm text-[#6b7280] mt-1">
                    Accepted formats: PDF, DOC, DOCX (Max 5MB)
                  </p>
                </div>
                
                <div className="flex gap-4 pt-6">
                  <button
                    type="button"
                    onClick={() => setSelectedPosition(null)}
                    className="flex-1 px-6 py-3 border-2 border-[#e5e7eb] text-[#6b7280] rounded-xl font-semibold hover:bg-[#f9fafb] transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-[#059669] text-white rounded-xl font-semibold hover:bg-[#047857] transition-colors"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Success Message */}
      {showCareerSuccess && (
        <div className="fixed top-4 right-4 bg-[#059669] text-white px-6 py-4 rounded-xl shadow-lg z-50">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span>Application submitted successfully!</span>
          </div>
        </div>
      )}

      {/* Benefits Section */}
      <section className="py-16 max-sm:py-12 bg-[#f8fafb]">
        <div className="max-w-[1200px] mx-auto px-4 max-sm:px-3">
          <div className="text-center mb-12">
            <h2 className="text-3xl max-sm:text-2xl font-bold text-[#1f2937] mb-4">
              Why Work With Us?
            </h2>
            <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
              Competitive benefits and a supportive work environment that helps you thrive
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 max-lg:grid-cols-1">
            <div className="bg-white p-8 max-sm:p-6 rounded-2xl shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#059669] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1f2937] mb-2">
                    Competitive Compensation
                  </h3>
                  <p className="text-[#6b7280]">
                    Industry-leading salaries, performance bonuses, and comprehensive 
                    benefits package including health insurance and retirement plans.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 max-sm:p-6 rounded-2xl shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#059669] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1f2937] mb-2">
                    Professional Development
                  </h3>
                  <p className="text-[#6b7280]">
                    Continuous learning opportunities, training programs, 
                    professional certifications, and career advancement support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 max-sm:py-12 bg-gradient-to-br from-[#059669] to-[#047857]">
        <div className="max-w-[1200px] mx-auto px-4 max-sm:px-3 text-center">
          <h2 className="text-3xl max-sm:text-2xl font-bold text-white mb-6">
            Don't See the Right Position?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume 
            and we'll keep you in mind for future opportunities.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-[#059669] px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-colors inline-block"
          >
            Send Your Resume
          </Link>
        </div>
      </section>
    </Layout>
  );
}
