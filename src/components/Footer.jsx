import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

export default function Footer({ onOpenJoin }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#3E2723] text-[#F7F2E7] border-t-3 border-[#3E2723] pt-16 pb-14 relative">
      
      {/* Completely Redesigned Skeleton Monkey Mascot sitting on top of the footer border */}
      <div className="absolute bottom-full mb-[-4px] right-6 sm:right-20 z-30 group cursor-pointer select-none">
        {/* Tooltip bubble on hover */}
        <div className="absolute -top-11 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap bg-[#FFEDA8] text-[#3E2723] text-xs font-black px-3.5 py-1.5 rounded-xl border-2 border-[#3E2723] shadow-[3px_3px_0px_#3E2723] flex items-center gap-1.5">
          <span>🎧 Chill to the bone... 💀☕</span>
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#FFEDA8] border-r-2 border-b-2 border-[#3E2723] rotate-45"></div>
        </div>

        <svg
          className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 transform transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-2 drop-shadow-lg"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Steam puffs from mug */}
          <path
            d="M 72 44 Q 70 38 74 34 Q 78 30 74 26"
            stroke="#7E3940"
            strokeWidth="2"
            strokeLinecap="round"
            className="opacity-60 group-hover:opacity-100 transition-opacity"
            fill="none"
          />
          <path
            d="M 77 46 Q 81 40 78 35 Q 75 30 79 25"
            stroke="#FFEDA8"
            strokeWidth="1.8"
            strokeLinecap="round"
            className="opacity-70 group-hover:opacity-100 transition-opacity"
            fill="none"
          />

          {/* S-Curved Skeleton Vertebrae Tail */}
          <path
            d="M 32 78 C 16 78 6 66 10 50 C 14 36 28 40 24 50 C 20 58 26 64 34 68"
            stroke="#3E2723"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 32 78 C 16 78 6 66 10 50 C 14 36 28 40 24 50 C 20 58 26 64 34 68"
            stroke="#F7F2E7"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          {/* Tail bone nodules */}
          <circle cx="10" cy="50" r="2.5" fill="#3E2723" />
          <circle cx="14" cy="40" r="2.5" fill="#3E2723" />
          <circle cx="23" cy="44" r="2.5" fill="#3E2723" />
          <circle cx="24" cy="55" r="2.5" fill="#3E2723" />

          {/* Left Leg (Crossed on border) */}
          <path
            d="M 36 78 Q 24 78 22 88 Q 28 92 38 90"
            fill="#F7F2E7"
            stroke="#3E2723"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Left Bony Foot Phalanges */}
          <ellipse cx="23" cy="94" rx="5" ry="2.8" fill="#F7F2E7" stroke="#3E2723" strokeWidth="2" />
          <line x1="20" y1="93" x2="20" y2="96" stroke="#3E2723" strokeWidth="1.5" />
          <line x1="23" y1="93" x2="23" y2="96.5" stroke="#3E2723" strokeWidth="1.5" />
          <line x1="26" y1="93" x2="26" y2="96" stroke="#3E2723" strokeWidth="1.5" />

          {/* Right Leg (Resting on border) */}
          <path
            d="M 64 78 Q 76 78 78 88 Q 72 92 62 90"
            fill="#F7F2E7"
            stroke="#3E2723"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Right Bony Foot Phalanges */}
          <ellipse cx="77" cy="94" rx="5" ry="2.8" fill="#F7F2E7" stroke="#3E2723" strokeWidth="2" />
          <line x1="74" y1="93" x2="74" y2="96" stroke="#3E2723" strokeWidth="1.5" />
          <line x1="77" y1="93" x2="77" y2="96.5" stroke="#3E2723" strokeWidth="1.5" />
          <line x1="80" y1="93" x2="80" y2="96" stroke="#3E2723" strokeWidth="1.5" />

          {/* Pelvis & Sacrum Bone */}
          <path
            d="M 36 76 C 36 84 64 84 64 76 C 60 72 40 72 36 76 Z"
            fill="#F7F2E7"
            stroke="#3E2723"
            strokeWidth="2.5"
          />
          <circle cx="43" cy="78" r="2" fill="#3E2723" />
          <circle cx="57" cy="78" r="2" fill="#3E2723" />

          {/* Spine Vertebrae Column */}
          <rect x="47.5" y="52" width="5" height="26" rx="2.5" fill="#3E2723" />
          <circle cx="50" cy="55" r="2.5" fill="#F7F2E7" stroke="#3E2723" strokeWidth="1.5" />
          <circle cx="50" cy="61" r="2.5" fill="#F7F2E7" stroke="#3E2723" strokeWidth="1.5" />
          <circle cx="50" cy="67" r="2.5" fill="#F7F2E7" stroke="#3E2723" strokeWidth="1.5" />
          <circle cx="50" cy="73" r="2.5" fill="#F7F2E7" stroke="#3E2723" strokeWidth="1.5" />

          {/* Rib Cage (Bold Chunky Cartoon Ribs) */}
          {/* Top Ribs */}
          <path
            d="M 50 55 Q 36 51 34 56 Q 38 59 50 58"
            fill="#F7F2E7"
            stroke="#3E2723"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path
            d="M 50 55 Q 64 51 66 56 Q 62 59 50 58"
            fill="#F7F2E7"
            stroke="#3E2723"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          {/* Mid Ribs */}
          <path
            d="M 50 61 Q 32 57 30 63 Q 36 67 50 64"
            fill="#F7F2E7"
            stroke="#3E2723"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path
            d="M 50 61 Q 68 57 70 63 Q 64 67 50 64"
            fill="#F7F2E7"
            stroke="#3E2723"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          {/* Bottom Ribs */}
          <path
            d="M 50 67 Q 36 65 35 70 Q 40 73 50 70"
            fill="#F7F2E7"
            stroke="#3E2723"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path
            d="M 50 67 Q 64 65 65 70 Q 60 73 50 70"
            fill="#F7F2E7"
            stroke="#3E2723"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />

          {/* Left Arm (Relaxed, hand resting on ledge) */}
          <path
            d="M 34 56 Q 20 66 28 92"
            stroke="#3E2723"
            strokeWidth="4.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 34 56 Q 20 66 28 92"
            stroke="#F7F2E7"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Left Hand Fingers gripping border line */}
          <ellipse cx="28" cy="94" rx="4.5" ry="2.5" fill="#F7F2E7" stroke="#3E2723" strokeWidth="2" />
          <line x1="25" y1="93" x2="25" y2="96" stroke="#3E2723" strokeWidth="1.5" />
          <line x1="28" y1="93" x2="28" y2="96.5" stroke="#3E2723" strokeWidth="1.5" />
          <line x1="31" y1="93" x2="31" y2="96" stroke="#3E2723" strokeWidth="1.5" />

          {/* Right Arm (Holding steaming mug) */}
          <path
            d="M 66 56 Q 78 62 74 72"
            stroke="#3E2723"
            strokeWidth="4.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 66 56 Q 78 62 74 72"
            stroke="#F7F2E7"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Steaming Coffee Mug in hand */}
          <rect
            x="70"
            y="54"
            width="12"
            height="14"
            rx="3"
            fill="#F7F2E7"
            stroke="#3E2723"
            strokeWidth="2"
          />
          {/* Mug handle */}
          <path
            d="M 82 57 C 86 57 86 65 82 65"
            stroke="#3E2723"
            strokeWidth="2"
            fill="none"
          />
          {/* Little smiley face on mug */}
          <circle cx="74" cy="60" r="0.8" fill="#7E3940" />
          <circle cx="78" cy="60" r="0.8" fill="#7E3940" />
          <path d="M 74.5 63 Q 76 65 77.5 63" stroke="#7E3940" strokeWidth="1" strokeLinecap="round" fill="none" />

          {/* Right Hand gripping mug */}
          <ellipse cx="73" cy="68" rx="4" ry="2.5" fill="#F7F2E7" stroke="#3E2723" strokeWidth="2" />

          {/* Headphone Arch (Behind skull) */}
          <path
            d="M 24 32 C 24 10 76 10 76 32"
            stroke="#3E2723"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 24 32 C 24 10 76 10 76 32"
            stroke="#004958"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Monkey Bone Ears */}
          <circle cx="24" cy="34" r="10" fill="#F7F2E7" stroke="#3E2723" strokeWidth="2.5" />
          <circle cx="24" cy="34" r="5" fill="#3E2723" />
          
          <circle cx="76" cy="34" r="10" fill="#F7F2E7" stroke="#3E2723" strokeWidth="2.5" />
          <circle cx="76" cy="34" r="5" fill="#3E2723" />

          {/* Skull Cranium Dome */}
          <path
            d="M 30 34 C 28 14 42 12 50 12 C 58 12 72 14 70 34 C 70 42 66 47 62 49 L 62 55 C 62 58 57 59 50 59 C 43 59 38 58 38 55 L 38 49 C 34 47 30 42 30 34 Z"
            fill="#F7F2E7"
            stroke="#3E2723"
            strokeWidth="3"
            strokeLinejoin="round"
          />

          {/* Skull Suture / Crack Line */}
          <path
            d="M 50 12 L 48 18 L 52 22 L 50 26"
            stroke="#3E2723"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Brow Ridge */}
          <path
            d="M 33 28 Q 50 24 67 28"
            stroke="#3E2723"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Eye Sockets (Deep & Expressive) */}
          <ellipse cx="41" cy="34" rx="7" ry="8" fill="#3E2723" />
          <ellipse cx="59" cy="34" rx="7" ry="8" fill="#3E2723" />

          {/* Lazy Glowing Crescent Eyes */}
          <path
            d="M 37 34 Q 41 38 45 34"
            stroke="#FFEDA8"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 55 34 Q 59 38 63 34"
            stroke="#FFEDA8"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Heart-Shaped Nasal Cavity */}
          <path
            d="M 50 43 C 48 40 45 42 47 45 L 50 49 L 53 45 C 55 42 52 40 50 43 Z"
            fill="#3E2723"
          />

          {/* Muzzle & Cheekbones */}
          <path
            d="M 38 48 Q 50 46 62 48"
            stroke="#3E2723"
            strokeWidth="1.8"
            fill="none"
          />

          {/* Wide Grinning Teeth Row */}
          <path
            d="M 38 53 L 62 53"
            stroke="#3E2723"
            strokeWidth="2"
          />
          <line x1="42" y1="49.5" x2="42" y2="56.5" stroke="#3E2723" strokeWidth="2" />
          <line x1="46" y1="49" x2="46" y2="57" stroke="#3E2723" strokeWidth="2" />
          <line x1="50" y1="49" x2="50" y2="57.5" stroke="#3E2723" strokeWidth="2" />
          <line x1="54" y1="49" x2="54" y2="57" stroke="#3E2723" strokeWidth="2" />
          <line x1="58" y1="49.5" x2="58" y2="56.5" stroke="#3E2723" strokeWidth="2" />

          {/* Retro Studio Headphones (Earcups over ears) */}
          {/* Left Earcup */}
          <rect
            x="17"
            y="24"
            width="7"
            height="20"
            rx="3.5"
            fill="#004958"
            stroke="#3E2723"
            strokeWidth="2.5"
          />
          <rect
            x="19"
            y="27"
            width="3"
            height="14"
            rx="1.5"
            fill="#FFEDA8"
          />
          {/* Right Earcup */}
          <rect
            x="76"
            y="24"
            width="7"
            height="20"
            rx="3.5"
            fill="#004958"
            stroke="#3E2723"
            strokeWidth="2.5"
          />
          <rect
            x="78"
            y="27"
            width="3"
            height="14"
            rx="1.5"
            fill="#FFEDA8"
          />

          {/* Headband Padding at Top */}
          <path
            d="M 36 12 C 42 10 58 10 64 12"
            stroke="#7E3940"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 36 12 C 42 10 58 10 64 12"
            stroke="#3E2723"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
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
