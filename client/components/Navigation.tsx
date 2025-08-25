import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/careers', label: 'Careers' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)] sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-4 max-sm:px-3">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#059669] to-[#047857] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#1f2937]">
                SAFIC Technologies
              </h1>
              <p className="text-xs text-[#6b7280] leading-none">
                Environmental Engineering
              </p>
            </div>
          </Link>
          
          <div className="hidden max-lg:flex">
            <button 
              onClick={toggleMobileMenu} 
              className="p-2 rounded-lg hover:bg-[#f3f4f6] transition-colors"
            >
              <svg className="w-6 h-6 text-[#374151]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          
          <div className="flex gap-8 max-lg:hidden">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "py-2 px-1 text-sm font-medium transition-colors",
                  isActive(item.path)
                    ? "text-[#059669] border-b-2 border-[#059669]"
                    : "text-[#6b7280] hover:text-[#374151]"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div className="max-lg:block hidden border-t border-[#e5e7eb] py-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-left py-2 px-3 rounded-lg text-sm font-medium transition-colors",
                    isActive(item.path)
                      ? "text-[#059669] bg-[#f0fdf4]"
                      : "text-[#6b7280]"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
