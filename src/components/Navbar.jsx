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
      activeBg: 'bg-[#1E1E24]', 
      activeText: 'text-white' 
    },
    { 
      name: 'Sleep Over', 
      path: '/sleep-over', 
      activeBg: 'bg-[#FFD166]', 
      activeText: 'text-[#1E1E24]' 
    },
    { 
      name: 'Image PR', 
      path: '/image-pr', 
      activeBg: 'bg-[#FF8A5B]', 
      activeText: 'text-white' 
    },
    { 
      name: 'Media', 
      path: '/media', 
      activeBg: 'bg-[#845EC2]', 
      activeText: 'text-white' 
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#FFFDF9]/95 backdrop-blur-md border-b-2 border-[#1E1E24] ${
      scrolled ? 'py-3 shadow-md' : 'py-4 shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-[#FF6584] border-2 border-[#1E1E24] shadow-[3px_3px_0px_#1E1E24] flex items-center justify-center text-2xl transform group-hover:rotate-6 group-hover:scale-105 transition-all">
              🛋️
            </div>
            <div>
              <div className="flex items-center">
                <span className="text-2xl sm:text-3xl font-black tracking-tight text-[#1E1E24] font-display">
                  NAP
                </span>
              </div>
              <p className="text-xs font-bold text-[#FF8A5B] tracking-wide -mt-1 font-handwriting text-base">
                its time to take one :)
              </p>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1.5 p-1.5 rounded-2xl bg-white border-2 border-[#1E1E24] shadow-[3px_3px_0px_#1E1E24]">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `px-5 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all border-2 ${
                    isActive
                      ? `${link.activeBg} ${link.activeText} border-[#1E1E24] shadow-[2px_2px_0px_#1E1E24]`
                      : 'border-transparent text-[#1E1E24] hover:bg-gray-100'
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
              className="p-2 rounded-xl bg-white border-2 border-[#1E1E24] shadow-[2px_2px_0px_#1E1E24] text-[#1E1E24]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b-2 border-[#1E1E24] bg-[#FFFDF9] px-6 py-5 mt-2 animate-in fade-in duration-200 shadow-xl">
          <div className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between p-3.5 rounded-xl border-2 border-[#1E1E24] font-extrabold text-sm transition-all ${
                    isActive
                      ? `${link.activeBg} ${link.activeText} shadow-[3px_3px_0px_#1E1E24]`
                      : 'bg-white text-[#1E1E24] shadow-[2px_2px_0px_#1E1E24]'
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
