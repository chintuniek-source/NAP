import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

export default function Footer({ onOpenJoin }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#3E2723] text-[#F7F2E7] border-t-3 border-[#3E2723] pt-16 pb-14 relative">
      
      {/* Skeleton Monkey sitting on top of the footer border */}
      <div className="absolute bottom-full mb-[-4px] right-8 sm:right-24 z-30 group cursor-pointer select-none">
        {/* Tooltip bubble on hover */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap bg-[#FFEDA8] text-[#3E2723] text-xs font-black px-3 py-1.5 rounded-xl border-2 border-[#3E2723] shadow-[3px_3px_0px_#3E2723]">
          Dead tired... taking a nap 💀💤
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#FFEDA8] border-r-2 border-b-2 border-[#3E2723] rotate-45"></div>
        </div>

        <svg
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 transform transition-transform duration-200 group-hover:scale-105 group-hover:-translate-y-2 drop-shadow-md"
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Vertebral Bone Tail */}
          <path
            d="M 22 56 C 14 56 6 48 8 38 C 10 28 20 30 18 38 C 16 44 20 48 24 50"
            stroke="#3E2723"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 22 56 C 14 56 6 48 8 38 C 10 28 20 30 18 38 C 16 44 20 48 24 50"
            stroke="#F7F2E7"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          {/* Tail Vertebrae joints */}
          <circle cx="10" cy="45" r="1.5" fill="#3E2723" />
          <circle cx="8" cy="38" r="1.5" fill="#3E2723" />
          <circle cx="12" cy="33" r="1.5" fill="#3E2723" />
          <circle cx="17" cy="36" r="1.5" fill="#3E2723" />

          {/* Left Bone Ear */}
          <circle cx="18" cy="26" r="7.5" fill="#F7F2E7" stroke="#3E2723" strokeWidth="2" />
          <circle cx="18" cy="26" r="4" fill="#3E2723" />

          {/* Right Bone Ear */}
          <circle cx="54" cy="26" r="7.5" fill="#F7F2E7" stroke="#3E2723" strokeWidth="2" />
          <circle cx="54" cy="26" r="4" fill="#3E2723" />

          {/* Pelvis Bone */}
          <path
            d="M 26 62 Q 36 65 46 62 Q 44 68 36 67 Q 28 68 26 62 Z"
            fill="#F7F2E7"
            stroke="#3E2723"
            strokeWidth="2"
          />
          <circle cx="31" cy="64" r="1.5" fill="#3E2723" />
          <circle cx="41" cy="64" r="1.5" fill="#3E2723" />

          {/* Spine Column */}
          <rect x="34.5" y="44" width="3" height="18" rx="1.5" fill="#3E2723" />
          <circle cx="36" cy="46" r="2" fill="#F7F2E7" stroke="#3E2723" strokeWidth="1" />
          <circle cx="36" cy="50" r="2" fill="#F7F2E7" stroke="#3E2723" strokeWidth="1" />
          <circle cx="36" cy="54" r="2" fill="#F7F2E7" stroke="#3E2723" strokeWidth="1" />
          <circle cx="36" cy="58" r="2" fill="#F7F2E7" stroke="#3E2723" strokeWidth="1" />

          {/* Rib Cage (3 Pairs of Skeleton Ribs) */}
          {/* Top Ribs */}
          <path
            d="M 36 46 Q 26 44 24 47 Q 26 49 36 48"
            fill="#F7F2E7"
            stroke="#3E2723"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M 36 46 Q 46 44 48 47 Q 46 49 36 48"
            fill="#F7F2E7"
            stroke="#3E2723"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          {/* Middle Ribs */}
          <path
            d="M 36 50 Q 24 48 22 52 Q 24 54 36 53"
            fill="#F7F2E7"
            stroke="#3E2723"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M 36 50 Q 48 48 50 52 Q 48 54 36 53"
            fill="#F7F2E7"
            stroke="#3E2723"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          {/* Bottom Ribs */}
          <path
            d="M 36 54 Q 26 53 25 57 Q 27 59 36 57"
            fill="#F7F2E7"
            stroke="#3E2723"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M 36 54 Q 46 53 47 57 Q 45 59 36 57"
            fill="#F7F2E7"
            stroke="#3E2723"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />

          {/* Left Arm Bone */}
          <path
            d="M 24 46 Q 16 54 21 68"
            stroke="#3E2723"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 24 46 Q 16 54 21 68"
            stroke="#F7F2E7"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          {/* Left Hand Bony Phalanges resting on border */}
          <ellipse cx="21" cy="69" rx="3.5" ry="2" fill="#F7F2E7" stroke="#3E2723" strokeWidth="1.5" />
          <line x1="19" y1="68" x2="19" y2="70.5" stroke="#3E2723" strokeWidth="1" />
          <line x1="21" y1="68" x2="21" y2="71" stroke="#3E2723" strokeWidth="1" />
          <line x1="23" y1="68" x2="23" y2="70.5" stroke="#3E2723" strokeWidth="1" />

          {/* Right Arm Bone */}
          <path
            d="M 48 46 Q 56 54 51 68"
            stroke="#3E2723"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 48 46 Q 56 54 51 68"
            stroke="#F7F2E7"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          {/* Right Hand Bony Phalanges resting on border */}
          <ellipse cx="51" cy="69" rx="3.5" ry="2" fill="#F7F2E7" stroke="#3E2723" strokeWidth="1.5" />
          <line x1="49" y1="68" x2="49" y2="70.5" stroke="#3E2723" strokeWidth="1" />
          <line x1="51" y1="68" x2="51" y2="71" stroke="#3E2723" strokeWidth="1" />
          <line x1="53" y1="68" x2="53" y2="70.5" stroke="#3E2723" strokeWidth="1" />

          {/* Left Foot Bones on border */}
          <ellipse cx="29" cy="69.5" rx="4" ry="2" fill="#F7F2E7" stroke="#3E2723" strokeWidth="1.5" />
          <line x1="27" y1="69" x2="27" y2="71" stroke="#3E2723" strokeWidth="1" />
          <line x1="29" y1="69" x2="29" y2="71.5" stroke="#3E2723" strokeWidth="1" />
          <line x1="31" y1="69" x2="31" y2="71" stroke="#3E2723" strokeWidth="1" />

          {/* Right Foot Bones on border */}
          <ellipse cx="43" cy="69.5" rx="4" ry="2" fill="#F7F2E7" stroke="#3E2723" strokeWidth="1.5" />
          <line x1="41" y1="69" x2="41" y2="71" stroke="#3E2723" strokeWidth="1" />
          <line x1="43" y1="69" x2="43" y2="71.5" stroke="#3E2723" strokeWidth="1" />
          <line x1="45" y1="69" x2="45" y2="71" stroke="#3E2723" strokeWidth="1" />

          {/* Skull Base & Muzzle */}
          <path
            d="M 23 26 C 21 14 31 10 36 10 C 41 10 51 14 49 26 C 49 32 47 37 44 38 L 44 44 C 44 46 41 47 36 47 C 31 47 28 46 28 44 L 28 38 C 25 37 23 32 23 26 Z"
            fill="#F7F2E7"
            stroke="#3E2723"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />

          {/* Skull Cranium Suture Line */}
          <path
            d="M 36 10 L 35 15 L 37 18 L 36 21"
            stroke="#3E2723"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
          />

          {/* Skeleton Eye Sockets */}
          <ellipse cx="29.5" cy="27" rx="5.5" ry="6.5" fill="#3E2723" />
          <ellipse cx="42.5" cy="27" rx="5.5" ry="6.5" fill="#3E2723" />

          {/* Lazy / Sleeping Eye Slits / Glints */}
          <path
            d="M 27 27 Q 29.5 29.5 32 27"
            stroke="#FFEDA8"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 40 27 Q 42.5 29.5 45 27"
            stroke="#FFEDA8"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
          />

          {/* Nasal Cavity (Inverted Heart Cavity) */}
          <path
            d="M 36 34.5 L 34 38 L 38 38 Z"
            fill="#3E2723"
          />

          {/* Teeth & Jaw Line */}
          <path
            d="M 28 41.5 L 44 41.5"
            stroke="#3E2723"
            strokeWidth="1.5"
          />
          {/* Vertical Teeth Separators */}
          <line x1="31" y1="39" x2="31" y2="44" stroke="#3E2723" strokeWidth="1.5" />
          <line x1="34" y1="39" x2="34" y2="44" stroke="#3E2723" strokeWidth="1.5" />
          <line x1="36" y1="38.5" x2="36" y2="44.5" stroke="#3E2723" strokeWidth="1.5" />
          <line x1="38" y1="39" x2="38" y2="44" stroke="#3E2723" strokeWidth="1.5" />
          <line x1="41" y1="39" x2="41" y2="44" stroke="#3E2723" strokeWidth="1.5" />

          {/* Sleepy Nightcap on Skull */}
          <path
            d="M 25 14 Q 36 6 47 14 Q 55 9 60 18 Q 50 14 41 11 Z"
            fill="#7E3940"
            stroke="#3E2723"
            strokeWidth="1.8"
          />
          <circle cx="60" cy="18" r="3.5" fill="#FFEDA8" stroke="#3E2723" strokeWidth="1.5" />
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
