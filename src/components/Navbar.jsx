import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Sparkles, Compass, Dices, Heart, Volume2, ArrowUpRight, Flame, Headphones, Coffee, Brain, Shield } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Navbar({ onOpenQuiz, onOpenJoin }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [wingsDropdownOpen, setWingsDropdownOpen] = useState(false);
  const [surpriseDropdownOpen, setSurpriseDropdownOpen] = useState(false);
  const [isPlayingSound, setIsPlayingSound] = useState(false);
  
  const wingsRef = useRef(null);
  const surpriseRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wingsRef.current && !wingsRef.current.contains(e.target)) {
        setWingsDropdownOpen(false);
      }
      if (surpriseRef.current && !surpriseRef.current.contains(e.target)) {
        setSurpriseDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Ambient sound synthesizer
  const playCozyChords = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const freqs = [261.63, 329.63, 392.00, 523.25]; // C major 7th relaxing warm chord
      
      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        
        gain.gain.setValueAtTime(0.01, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.3);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 2.5 + idx * 0.2);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.start(ctx.currentTime + idx * 0.1);
        osc.stop(ctx.currentTime + 3.0);
      });

      setIsPlayingSound(true);
      setTimeout(() => setIsPlayingSound(false), 2500);
      
      confetti({
        particleCount: 30,
        spread: 45,
        origin: { y: 0.2 }
      });
    } catch (e) {
      console.log('Audio not allowed yet', e);
    }
  };

  // Random surprise navigation
  const triggerRandomSurprise = () => {
    setSurpriseDropdownOpen(false);
    const routes = ['/sleep-over', '/image-pr', '/media', '/#specials', '/#become-a-napper'];
    const randomRoute = routes[Math.floor(Math.random() * routes.length)];
    
    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.4 }
    });

    if (randomRoute.startsWith('/#')) {
      navigate('/');
      setTimeout(() => {
        const id = randomRoute.replace('/#', '');
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      navigate(randomRoute);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/', activeBg: 'bg-[#3E2723]', activeText: 'text-[#F7F2E7]' },
    { name: 'Sleep Over', path: '/sleep-over', activeBg: 'bg-[#FFEDA8]', activeText: 'text-[#3E2723]' },
    { name: 'Image PR', path: '/image-pr', activeBg: 'bg-[#7E3940]', activeText: 'text-white' },
    { name: 'Media', path: '/media', activeBg: 'bg-[#004958]', activeText: 'text-white' }
  ];

  const wingsList = [
    {
      title: 'Sleep Over',
      path: '/sleep-over',
      icon: '🥞',
      tag: 'COMMUNITY & EXPERIENCES',
      desc: 'Nap-O-Casting, Breakfast Castle & Pillow Fight',
      bg: 'hover:bg-[#FFEDA8]/60',
      badgeBg: 'bg-[#FFEDA8] text-[#3E2723]'
    },
    {
      title: 'Image PR',
      path: '/image-pr',
      icon: '⚡',
      tag: 'BRAND CONSULTING',
      desc: 'Counsellor, Guerrilla Viral Stunts & Identity PR',
      bg: 'hover:bg-[#7E3940]/15',
      badgeBg: 'bg-[#7E3940] text-white'
    },
    {
      title: 'Nap Media',
      path: '/media',
      icon: '🎧',
      tag: 'A ALAP CONVERSATIONS',
      desc: 'Intimate acoustic sessions & unplugged stories',
      bg: 'hover:bg-[#004958]/15',
      badgeBg: 'bg-[#004958] text-white'
    },
    {
      title: 'Upcoming Specials',
      path: '/#specials',
      icon: '🎭',
      tag: 'LIVE TOUR SPOTLIGHT',
      desc: 'Amol Parashar Live in Besharam Aadmi',
      bg: 'hover:bg-[#CDD6B7]/50',
      badgeBg: 'bg-[#CDD6B7] text-[#3E2723]'
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#F7F2E7]/95 backdrop-blur-md border-b-2 border-[#3E2723] ${
      scrolled ? 'py-2.5 shadow-md' : 'py-3.5 shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full bg-[#FFEDA8] border-2 border-[#3E2723] shadow-[3px_3px_0px_#3E2723] overflow-hidden flex items-center justify-center transform group-hover:rotate-6 group-hover:scale-105 transition-all">
              <img src="/NAP.png" alt="NAP Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex items-center">
                <span className="text-2xl sm:text-3xl font-black tracking-tight text-[#3E2723] font-display">
                  NAP
                </span>
              </div>
              <p className="text-xs font-bold text-[#7E3940] tracking-wide -mt-1 font-handwriting text-base">
                its time to take one :)
              </p>
            </div>
          </Link>

          {/* Desktop Nav Items + Redesigned Dropdowns */}
          <div className="hidden lg:flex items-center gap-2 p-1.5 rounded-2xl bg-white border-2 border-[#3E2723] shadow-[3px_3px_0px_#3E2723]">
            
            {/* Standard Nav Links */}
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-xl text-xs font-extrabold transition-all border-2 ${
                    isActive
                      ? `${link.activeBg} ${link.activeText} border-[#3E2723] shadow-[2px_2px_0px_#3E2723]`
                      : 'border-transparent text-[#3E2723] hover:bg-[#F7F2E7]'
                  }`
                }
              >
                <span>{link.name}</span>
              </NavLink>
            ))}

            <div className="h-5 w-[2px] bg-[#3E2723]/20 mx-1"></div>

            {/* 1. Explore Wings Rich Dropdown Menu */}
            <div ref={wingsRef} className="relative">
              <button
                type="button"
                onClick={() => {
                  setWingsDropdownOpen(!wingsDropdownOpen);
                  setSurpriseDropdownOpen(false);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-black border-2 transition-all flex items-center gap-1.5 ${
                  wingsDropdownOpen
                    ? 'bg-[#FFEDA8] text-[#3E2723] border-[#3E2723] shadow-[2px_2px_0px_#3E2723]'
                    : 'bg-[#F7F2E7] text-[#3E2723] border-[#3E2723]/40 hover:border-[#3E2723] hover:bg-[#FFEDA8]/50'
                }`}
              >
                <Compass className="w-3.5 h-3.5 text-[#7E3940]" />
                <span>Explore Wings</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${wingsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Rich Dropdown Panel */}
              {wingsDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-[#FFFDF9] rounded-2xl border-3 border-[#3E2723] shadow-[7px_7px_0px_#3E2723] p-2.5 animate-in fade-in zoom-in-95 duration-150 z-50">
                  <div className="px-2.5 py-1.5 mb-1.5 border-b border-[#3E2723]/10 flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#7E3940]">
                      The NAP Ecosystem
                    </span>
                    <span className="text-[10px] font-bold text-gray-500">4 Wings</span>
                  </div>

                  <div className="space-y-1.5">
                    {wingsList.map((w) => (
                      <Link
                        key={w.title}
                        to={w.path}
                        onClick={() => setWingsDropdownOpen(false)}
                        className={`block p-2.5 rounded-xl border border-transparent hover:border-[#3E2723] ${w.bg} transition-all group`}
                      >
                        <div className="flex items-start gap-2.5">
                          <span className="text-xl flex-shrink-0 mt-0.5">{w.icon}</span>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="font-black text-xs text-[#3E2723] group-hover:text-[#7E3940]">
                                {w.title}
                              </span>
                              <span className={`text-[9px] font-black px-1.5 py-0.5 rounded ${w.badgeBg} border border-[#3E2723]/20`}>
                                {w.tag.split(' ')[0]}
                              </span>
                            </div>
                            <p className="text-[11px] font-medium text-gray-600 truncate mt-0.5">
                              {w.desc}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 2. Surprise & Playful Vibe Dropdown Menu */}
            <div ref={surpriseRef} className="relative">
              <button
                type="button"
                onClick={() => {
                  setSurpriseDropdownOpen(!surpriseDropdownOpen);
                  setWingsDropdownOpen(false);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-black border-2 transition-all flex items-center gap-1.5 ${
                  surpriseDropdownOpen
                    ? 'bg-[#CDD6B7] text-[#3E2723] border-[#3E2723] shadow-[2px_2px_0px_#3E2723]'
                    : 'bg-[#CDD6B7]/40 text-[#3E2723] border-[#3E2723]/40 hover:border-[#3E2723] hover:bg-[#CDD6B7]'
                }`}
              >
                <Dices className="w-3.5 h-3.5 text-[#004958] animate-spin-slow" />
                <span>Play & Vibe 🎲</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${surpriseDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Surprise Menu Panel */}
              {surpriseDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-72 bg-[#FFFDF9] rounded-2xl border-3 border-[#3E2723] shadow-[7px_7px_0px_#3E2723] p-2.5 animate-in fade-in zoom-in-95 duration-150 z-50">
                  <div className="px-2.5 py-1 mb-1.5 border-b border-[#3E2723]/10">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#004958]">
                      Interactive Delights
                    </span>
                  </div>

                  <div className="space-y-1">
                    {/* Persona Quiz */}
                    <button
                      type="button"
                      onClick={() => {
                        setSurpriseDropdownOpen(false);
                        if (onOpenQuiz) onOpenQuiz();
                      }}
                      className="w-full text-left p-2.5 rounded-xl border border-transparent hover:border-[#3E2723] hover:bg-[#FFEDA8]/60 transition-all flex items-center gap-2.5 text-xs font-black text-[#3E2723]"
                    >
                      <span className="text-lg">🎯</span>
                      <div className="flex-1">
                        <p>Nap Persona Quiz</p>
                        <p className="text-[10px] font-normal text-gray-500">Discover which wing fits you</p>
                      </div>
                    </button>

                    {/* Digital Pass */}
                    <button
                      type="button"
                      onClick={() => {
                        setSurpriseDropdownOpen(false);
                        if (onOpenJoin) onOpenJoin();
                      }}
                      className="w-full text-left p-2.5 rounded-xl border border-transparent hover:border-[#3E2723] hover:bg-[#CDD6B7]/50 transition-all flex items-center gap-2.5 text-xs font-black text-[#3E2723]"
                    >
                      <span className="text-lg">🪪</span>
                      <div className="flex-1">
                        <p>Generate Napper ID</p>
                        <p className="text-[10px] font-normal text-gray-500">Become a verified insider</p>
                      </div>
                    </button>

                    {/* Random Surprise Jumper */}
                    <button
                      type="button"
                      onClick={triggerRandomSurprise}
                      className="w-full text-left p-2.5 rounded-xl border border-[#3E2723] bg-[#FFD8C7]/50 hover:bg-[#FFD8C7] transition-all flex items-center gap-2.5 text-xs font-black text-[#3E2723] shadow-[2px_2px_0px_#3E2723]"
                    >
                      <span className="text-lg">🎲</span>
                      <div className="flex-1">
                        <p className="flex items-center gap-1">
                          <span>Surprise Wing Picker</span>
                          <Sparkles className="w-3 h-3 text-[#7E3940]" />
                        </p>
                        <p className="text-[10px] font-normal text-gray-600">Teleport with confetti!</p>
                      </div>
                    </button>

                    {/* Lo-Fi Chord Synth */}
                    <button
                      type="button"
                      onClick={playCozyChords}
                      className="w-full text-left p-2 rounded-xl border border-transparent hover:border-[#3E2723] hover:bg-[#E8DEFF]/60 transition-all flex items-center gap-2.5 text-xs font-black text-[#3E2723]"
                    >
                      <span className="text-lg">{isPlayingSound ? '🔊' : '🎵'}</span>
                      <div className="flex-1">
                        <p>Play Cozy Lo-Fi Chord</p>
                        <p className="text-[10px] font-normal text-gray-500">Synthesize ambient tone</p>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Quick Action Button (Desktop) */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={onOpenJoin}
              className="px-4 py-2 rounded-xl font-black text-xs bg-[#7E3940] hover:bg-[#6c3036] text-white border-2 border-[#3E2723] shadow-[3px_3px_0px_#3E2723] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_#3E2723] transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FFEDA8]" />
              <span>Become a napper</span>
            </button>
          </div>

          {/* Mobile hamburger menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={triggerRandomSurprise}
              className="p-2 rounded-xl bg-[#FFEDA8] border-2 border-[#3E2723] shadow-[2px_2px_0px_#3E2723] text-[#3E2723]"
              title="Surprise Wing"
            >
              <Dices className="w-4 h-4 text-[#7E3940]" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white border-2 border-[#3E2723] shadow-[2px_2px_0px_#3E2723] text-[#3E2723]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer with Dropdown Sections */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b-3 border-[#3E2723] bg-[#F7F2E7] px-5 py-4 mt-2 animate-in fade-in duration-200 shadow-xl max-h-[80vh] overflow-y-auto">
          
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between p-3 rounded-xl border-2 border-[#3E2723] font-extrabold text-xs transition-all ${
                    isActive
                      ? `${link.activeBg} ${link.activeText} shadow-[3px_3px_0px_#3E2723]`
                      : 'bg-white text-[#3E2723] shadow-[2px_2px_0px_#3E2723]'
                  }`
                }
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 opacity-60" />
              </NavLink>
            ))}

            {/* Mobile Wings Accordion Section */}
            <div className="mt-2 pt-2 border-t-2 border-[#3E2723]/20">
              <p className="text-[10px] font-black uppercase text-[#7E3940] px-1 mb-2">
                All Wings & Activations
              </p>
              <div className="grid grid-cols-2 gap-2">
                {wingsList.map((w) => (
                  <Link
                    key={w.title}
                    to={w.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 rounded-xl bg-white border-2 border-[#3E2723] shadow-[2px_2px_0px_#3E2723] flex flex-col justify-between"
                  >
                    <span className="text-2xl">{w.icon}</span>
                    <span className="font-black text-xs text-[#3E2723] mt-1">{w.title}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Action Buttons */}
            <div className="mt-3 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenQuiz) onOpenQuiz();
                }}
                className="w-full py-2.5 px-4 rounded-xl font-black text-xs bg-[#FFEDA8] text-[#3E2723] border-2 border-[#3E2723] shadow-[2px_2px_0px_#3E2723] flex items-center justify-center gap-2"
              >
                <span>🎯 Take Persona Quiz</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenJoin) onOpenJoin();
                }}
                className="w-full py-2.5 px-4 rounded-xl font-black text-xs bg-[#7E3940] text-white border-2 border-[#3E2723] shadow-[2px_2px_0px_#3E2723] flex items-center justify-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#FFEDA8]" />
                <span>Become a napper ID</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
}
