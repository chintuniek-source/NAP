import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Instagram, Mail, Phone } from 'lucide-react';

export default function Footer({ onOpenJoin }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#320b35] text-[#F7F2E7] border-t-3 border-[#320b35] pt-16 pb-14 relative overflow-hidden">
      
      {/* Ticker strip */}
      <div className="bg-[#FFEDA8] text-[#320b35] font-black text-xs sm:text-sm py-2 px-4 border-b-2 border-[#320b35] overflow-hidden flex items-center justify-around whitespace-nowrap uppercase tracking-wider">
        <span>✨ NAP-O-CASTING</span>
        <span>•</span>
        <span>🥞 BREAKFAST CASTLE</span>
        <span>•</span>
        <span>🪶 PILLOW FIGHT</span>
        <span>•</span>
        <span>⚡ BRAND COUNSELLOR</span>
        <span>•</span>
        <span>💡 WHAT-AN-IDEA</span>
        <span>•</span>
        <span>🎙️ AN AALAP</span>
        <span>•</span>
        <span>🛋️ ITS TIME TO TAKE ONE :)</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border-2 border-white shadow-[3px_3px_0px_white] overflow-hidden bg-[#FFEDA8] flex items-center justify-center">
                <img src="/NAP.png" alt="NAP Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-3xl font-black tracking-tight font-display text-white">NAP</span>
                <p className="text-xs font-bold text-[#FFEDA8] font-handwriting text-lg -mt-1">
                  its time to take one :)
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm text-[#F7F2E7]/80 font-medium leading-relaxed max-w-sm">
              We are a multi-disciplinary creative universe blending community experiences, high-velocity PR narrative craft, and soulful audiovisual media. Taking a nap is an act of creative rebellion.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                to="/sleep-over"
                className="px-4 py-2 rounded-xl text-xs font-black bg-[#FFEDA8] text-[#320b35] border-2 border-white shadow-[3px_3px_0px_white] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                Join Sleep Over ✨
              </Link>
              <a
                href="https://www.instagram.com/nappers.in"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors"
                title="Follow us on Instagram @nappers.in"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="tel:+918721892914"
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors"
                title="Call +91 87218 92914"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="mailto:nap@nappers.in"
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors"
                title="Email nap@nappers.in"
              >
                <Mail className="w-4 h-4" />
              </a>
              <button
                onClick={scrollToTop}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white"
                title="Back to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Col 3: Sleep Over */}
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-[#FFEDA8]">
              Sleep Over
            </span>
            <ul className="mt-4 space-y-2.5 text-xs font-bold text-[#F7F2E7]/80">
              <li>
                <Link to="/sleep-over" className="hover:text-[#FFEDA8] transition-colors">
                  Nap-O-Casting
                </Link>
              </li>
              <li>
                <Link to="/sleep-over" className="hover:text-[#FFEDA8] transition-colors">
                  Breakfast Castle
                </Link>
              </li>
              <li>
                <Link to="/sleep-over" className="hover:text-[#FFEDA8] transition-colors">
                  Pillow Fight Arena
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Image PR */}
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-[#CDD6B7]">
              Image PR
            </span>
            <ul className="mt-4 space-y-2.5 text-xs font-bold text-[#F7F2E7]/80">
              <li>
                <Link to="/image-pr#inquiry" className="hover:text-[#CDD6B7] transition-colors">
                  Brand Consultation Form
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Media Wing */}
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-[#CDD6B7]">
              Media Wing
            </span>
            <ul className="mt-4 space-y-2.5 text-xs font-bold text-[#F7F2E7]/80">
              <li>
                <Link to="/media" className="hover:text-[#FFEDA8] transition-colors">
                  An Aalap Series
                </Link>
              </li>
              <li>
                <Link to="/#specials" className="hover:text-[#FFEDA8] transition-colors">
                  Amol Parashar Special
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
