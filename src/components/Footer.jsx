import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

export default function Footer({ onOpenJoin }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#3E2723] text-[#F7F2E7] border-t-3 border-[#3E2723] pt-16 pb-14 relative">
      
      {/* Monkey sitting on top of the footer border */}
      <div className="absolute -top-12 sm:-top-14 right-8 sm:right-24 z-30 group cursor-pointer select-none">
        {/* Tooltip bubble on hover */}
        <div className="absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap bg-[#FFEDA8] text-[#3E2723] text-[11px] font-black px-2.5 py-1 rounded-lg border-2 border-[#3E2723] shadow-[2px_2px_0px_#3E2723]">
          Taking a nap... 💤
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#FFEDA8] border-r-2 border-b-2 border-[#3E2723] rotate-45"></div>
        </div>

        <svg
          className="w-13 h-13 sm:w-16 sm:h-16 transform transition-transform duration-200 group-hover:scale-110 group-hover:-translate-y-1 drop-shadow-sm"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Tail curling to the left */}
          <path
            d="M 18 52 C 10 52 4 44 6 36 C 8 28 16 32 14 38 C 12 42 16 46 20 48"
            stroke="#3E2723"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 18 52 C 10 52 4 44 6 36 C 8 28 16 32 14 38 C 12 42 16 46 20 48"
            stroke="#8D5B4C"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />

          {/* Left Ear */}
          <circle cx="16" cy="26" r="7" fill="#8D5B4C" stroke="#3E2723" strokeWidth="2" />
          <circle cx="16" cy="26" r="4" fill="#FFD1B3" />

          {/* Right Ear */}
          <circle cx="48" cy="26" r="7" fill="#8D5B4C" stroke="#3E2723" strokeWidth="2" />
          <circle cx="48" cy="26" r="4" fill="#FFD1B3" />

          {/* Body */}
          <path
            d="M 20 38 Q 16 58 20 62 L 44 62 Q 48 58 44 38 Z"
            fill="#8D5B4C"
            stroke="#3E2723"
            strokeWidth="2"
          />
          {/* Belly */}
          <ellipse cx="32" cy="50" rx="8" ry="9" fill="#FFD1B3" />

          {/* Head */}
          <circle cx="32" cy="26" r="15" fill="#8D5B4C" stroke="#3E2723" strokeWidth="2" />

          {/* Face Area */}
          <path
            d="M 24 23 C 24 18 31 18 32 23 C 33 18 40 18 40 23 C 40 28 42 34 32 35 C 22 34 24 28 24 23 Z"
            fill="#FFD1B3"
            stroke="#3E2723"
            strokeWidth="1.5"
          />

          {/* Eyes (Cute sleepy curved eyes) */}
          <path
            d="M 26 24 Q 28 27 30 24"
            stroke="#3E2723"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 34 24 Q 36 27 38 24"
            stroke="#3E2723"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />

          {/* Cute Rosy Cheeks */}
          <circle cx="25" cy="28" r="2" fill="#7E3940" opacity="0.4" />
          <circle cx="39" cy="28" r="2" fill="#7E3940" opacity="0.4" />

          {/* Snout & Smile */}
          <ellipse cx="32" cy="29" rx="2" ry="1.2" fill="#3E2723" />
          <path
            d="M 29 31 Q 32 34 35 31"
            stroke="#3E2723"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Sleepy Nightcap */}
          <path
            d="M 23 15 Q 32 8 41 15 Q 48 10 52 18 Q 44 14 36 12 Z"
            fill="#7E3940"
            stroke="#3E2723"
            strokeWidth="1.5"
          />
          <circle cx="52" cy="18" r="3" fill="#FFEDA8" stroke="#3E2723" strokeWidth="1.5" />

          {/* Left Paw resting on border */}
          <ellipse cx="23" cy="62" rx="4.5" ry="2.5" fill="#FFD1B3" stroke="#3E2723" strokeWidth="1.8" />

          {/* Right Paw resting on border */}
          <ellipse cx="41" cy="62" rx="4.5" ry="2.5" fill="#FFD1B3" stroke="#3E2723" strokeWidth="1.8" />

          {/* Little Pillow in hands */}
          <rect
            x="27"
            y="42"
            width="10"
            height="7"
            rx="2.5"
            fill="#FFEDA8"
            stroke="#3E2723"
            strokeWidth="1.5"
          />
          {/* Hands holding pillow */}
          <circle cx="26" cy="45" r="2.5" fill="#FFD1B3" stroke="#3E2723" strokeWidth="1.5" />
          <circle cx="38" cy="45" r="2.5" fill="#FFD1B3" stroke="#3E2723" strokeWidth="1.5" />
        </svg>
      </div>
      
      {/* Ticker strip */}
      <div className="bg-[#FFEDA8] text-[#3E2723] font-black text-xs sm:text-sm py-2 px-4 border-b-2 border-[#3E2723] overflow-hidden flex items-center justify-around whitespace-nowrap uppercase tracking-wider">
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
              <div className="w-12 h-12 rounded-2xl bg-[#7E3940] border-2 border-white shadow-[3px_3px_0px_white] flex items-center justify-center text-2xl">
                🛋️
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

            <div className="mt-6 flex items-center gap-3">
              <Link
                to="/sleep-over"
                className="px-4 py-2 rounded-xl text-xs font-black bg-[#FFEDA8] text-[#3E2723] border-2 border-white shadow-[3px_3px_0px_white] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
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
              <li>
                <Link to="/sleep-over" className="hover:text-[#FFEDA8] transition-colors">
                  Experience Passes
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
                <Link to="/image-pr" className="hover:text-[#CDD6B7] transition-colors">
                  Counsellor Advisory
                </Link>
              </li>
              <li>
                <Link to="/image-pr" className="hover:text-[#CDD6B7] transition-colors">
                  Event Curation
                </Link>
              </li>
              <li>
                <Link to="/image-pr" className="hover:text-[#CDD6B7] transition-colors">
                  What-an-idea Promotion
                </Link>
              </li>
              <li>
                <Link to="/image-pr" className="hover:text-[#CDD6B7] transition-colors">
                  Brand Image Building
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
                  A Alap Series
                </Link>
              </li>
              <li>
                <Link to="/#specials" className="hover:text-[#FFEDA8] transition-colors">
                  Amol Parashar Special
                </Link>
              </li>
              <li>
                <Link to="/media" className="hover:text-[#FFEDA8] transition-colors">
                  Audio Documentaries
                </Link>
              </li>
              <li>
                <Link to="/media" className="hover:text-[#CDD6B7] transition-colors">
                  Pitch Music & Talks
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
