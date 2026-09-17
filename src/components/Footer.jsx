import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

export default function Footer({ onOpenJoin }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#161925] text-white border-t-3 border-[#1E1E24] pt-16 pb-14 relative overflow-hidden">
      
      {/* Ticker strip */}
      <div className="bg-[#FF6584] text-[#1E1E24] font-black text-xs sm:text-sm py-2 px-4 border-b-2 border-black overflow-hidden flex items-center justify-around whitespace-nowrap uppercase tracking-wider">
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
        <span>🎙️ A ALAP</span>
        <span>•</span>
        <span>🛋️ ITS TIME TO TAKE ONE :)</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FF6584] border-2 border-white shadow-[3px_3px_0px_white] flex items-center justify-center text-2xl">
                🛋️
              </div>
              <div>
                <span className="text-3xl font-black tracking-tight font-display text-white">NAP</span>
                <p className="text-xs font-bold text-[#FF8A5B] font-handwriting text-lg -mt-1">
                  its time to take one :)
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-300 font-medium leading-relaxed max-w-sm">
              We are a multi-disciplinary creative universe blending community experiences, high-velocity PR narrative craft, and soulful audiovisual media. Taking a nap is an act of creative rebellion.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <Link
                to="/sleep-over"
                className="px-4 py-2 rounded-xl text-xs font-black bg-[#FFD166] text-[#1E1E24] border-2 border-white shadow-[3px_3px_0px_white] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                Join Sleep Over ✨
              </Link>
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
            <span className="text-xs font-black uppercase tracking-wider text-[#FFD166] flex items-center gap-1.5">
              <span>Sleep Over</span>
            </span>
            <ul className="mt-4 space-y-2.5 text-xs font-bold text-gray-300">
              <li>
                <Link to="/sleep-over" className="hover:text-[#FFD166] transition-colors flex items-center gap-1.5">
                  <span>🎙️</span> Nap-O-Casting
                </Link>
              </li>
              <li>
                <Link to="/sleep-over" className="hover:text-[#FFD166] transition-colors flex items-center gap-1.5">
                  <span>🥞</span> Breakfast Castle
                </Link>
              </li>
              <li>
                <Link to="/sleep-over" className="hover:text-[#FFD166] transition-colors flex items-center gap-1.5">
                  <span>🪶</span> Pillow Fight Arena
                </Link>
              </li>
              <li>
                <Link to="/sleep-over" className="hover:text-[#FFD166] transition-colors flex items-center gap-1.5">
                  <span>🎫</span> Experience Passes
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Image PR */}
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-[#FF8A5B] flex items-center gap-1.5">
              <span>Image PR</span>
            </span>
            <ul className="mt-4 space-y-2.5 text-xs font-bold text-gray-300">
              <li>
                <Link to="/image-pr" className="hover:text-[#FF8A5B] transition-colors flex items-center gap-1.5">
                  <span>🧠</span> Counsellor Advisory
                </Link>
              </li>
              <li>
                <Link to="/image-pr" className="hover:text-[#FF8A5B] transition-colors flex items-center gap-1.5">
                  <span>🎪</span> Event Curation
                </Link>
              </li>
              <li>
                <Link to="/image-pr" className="hover:text-[#FF8A5B] transition-colors flex items-center gap-1.5">
                  <span>💡</span> What-an-idea Promotion
                </Link>
              </li>
              <li>
                <Link to="/image-pr" className="hover:text-[#FF8A5B] transition-colors flex items-center gap-1.5">
                  <span>🏛️</span> Brand Image Building
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Media Wing */}
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-[#B39CD0] flex items-center gap-1.5">
              <span>Media Wing</span>
            </span>
            <ul className="mt-4 space-y-2.5 text-xs font-bold text-gray-300">
              <li>
                <Link to="/media" className="hover:text-[#B39CD0] transition-colors flex items-center gap-1.5">
                  <span>🎙️</span> A Alap Series
                </Link>
              </li>
              <li>
                <Link to="/#specials" className="hover:text-[#FF6584] transition-colors flex items-center gap-1.5">
                  <span>⭐</span> Amol Parashar Special
                </Link>
              </li>
              <li>
                <Link to="/media" className="hover:text-[#B39CD0] transition-colors flex items-center gap-1.5">
                  <span>📻</span> Audio Documentaries
                </Link>
              </li>
              <li>
                <Link to="/media" className="hover:text-[#06D6A0] transition-colors flex items-center gap-1.5">
                  <span>💌</span> Pitch Music & Talks
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
