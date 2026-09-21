import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links with page-specific active theme colors
  const navLinks = [
    { 
      name: 'Home', 
      path: '/', 
      activeBg: 'bg-[#320b35]', 
      activeText: 'text-[#F7F2E7]' 
    },
    { 
      name: 'Sleep Over', 
      path: '/sleep-over', 
      activeBg: 'bg-[#FFEDA8]', 
      activeText: 'text-[#320b35]' 
    },
    { 
      name: 'Image PR', 
      path: '/image-pr', 
      activeBg: 'bg-[#7E3940]', 
      activeText: 'text-white' 
    },
    { 
      name: 'Media', 
      path: '/media', 
      activeBg: 'bg-[#004958]', 
      activeText: 'text-white' 
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#F7F2E7]/95 backdrop-blur-md border-b-2 border-[#320b35] ${
      scrolled ? 'py-3 shadow-md' : 'py-4 shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full bg-[#320b35] border-2 border-[#320b35] shadow-[3px_3px_0px_#320b35] overflow-hidden flex items-center justify-center transform group-hover:rotate-6 group-hover:scale-105 transition-all">
              <img src="/NAP-dark.png" alt="NAP Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex items-center">
                <span className="text-2xl sm:text-3xl font-black tracking-tight text-[#320b35] font-display">
                  NAP
                </span>
              </div>
              <p className="text-xs font-bold text-[#7E3940] tracking-wide -mt-1 font-handwriting text-base">
                its time to take one :)
              </p>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1.5 p-1.5 rounded-2xl bg-white border-2 border-[#320b35] shadow-[3px_3px_0px_#320b35]">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `px-5 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all border-2 ${
                    isActive
                      ? `${link.activeBg} ${link.activeText} border-[#320b35] shadow-[2px_2px_0px_#320b35]`
                      : 'border-transparent text-[#320b35] hover:bg-[#F7F2E7]'
                  }`
                }
              >
                <span>{link.name}</span>
              </NavLink>
            ))}
          </div>

          {/* Mobile hamburger menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white border-2 border-[#320b35] shadow-[2px_2px_0px_#320b35] text-[#320b35]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b-2 border-[#320b35] bg-[#F7F2E7] px-6 py-5 mt-2 animate-in fade-in duration-200 shadow-xl">
          <div className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between p-3.5 rounded-xl border-2 border-[#320b35] font-extrabold text-sm transition-all ${
                    isActive
                      ? `${link.activeBg} ${link.activeText} shadow-[3px_3px_0px_#320b35]`
                      : 'bg-white text-[#320b35] shadow-[2px_2px_0px_#320b35]'
                  }`
                }
              >
                <span>{link.name}</span>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
