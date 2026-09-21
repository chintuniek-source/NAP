import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Coffee, Users, Flame, Zap, Headphones, Heart, ArrowUpRight, Play, CheckCircle2 } from 'lucide-react';
import UpcomingSpecials from '../components/UpcomingSpecials';
import NapMedia from '../components/NapMedia';

export default function HomePage({ onOpenQuiz, onOpenJoin }) {
  const words = [
    "from toxic hustle pressure",
    "from boring corporate PR",
    "with community & pillow fights",
    "into soulful stories on An Alap",
    "from endless screen fatigue"
  ];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-24 pb-16 bg-[#F7F2E7]">
      
      {/* 1. Re-imagined Hero Section */}
      <section className="relative pt-12 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        {/* Soft background ambient glows */}
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#FFEDA8]/40 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse"></div>
        <div className="absolute top-36 right-10 w-80 h-80 bg-[#320b35]/20 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse delay-500"></div>

        {/* Big Bold Hero Headline */}
        <div className="text-center max-w-5xl mx-auto">
          <div className="flex flex-col items-center justify-center">
            <img 
              src="/NAP-hero.png" 
              alt="NAP" 
              className="h-28 sm:h-40 md:h-52 lg:h-60 w-auto object-contain select-none mx-auto transform hover:scale-105 transition-transform duration-300" 
            />
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#320b35] font-handwriting -mt-2 sm:-mt-4">
              — its time to take one :)
            </h1>
          </div>

          {/* Dynamic rotating sentence */}
          <div className="mt-8 text-xl sm:text-3xl font-bold text-[#320b35] flex flex-wrap items-center justify-center gap-2">
            <span>Ready to take a nap</span>
            <span className="inline-block px-4 py-1.5 rounded-2xl bg-[#320b35] text-white border-2 border-[#320b35] shadow-[4px_4px_0px_#320b35] transform rotate-[-1deg] transition-all duration-300">
              {words[wordIndex]}
            </span>
            <span>?</span>
          </div>

          <p className="mt-6 text-base sm:text-xl text-[#320b35]/80 max-w-3xl mx-auto leading-relaxed font-medium">
            Welcome to <strong className="font-extrabold text-[#320b35]">NAP</strong>. We run 3 interconnected creative universes: joyful community gatherings at <Link to="/sleep-over" className="text-[#320b35] underline font-extrabold">Sleep Over</Link>, culture-shaping PR advisory at <Link to="/image-pr" className="text-[#320b35] underline font-extrabold">Image PR</Link>, and intimate acoustic storytelling on <Link to="/media" className="text-[#004958] underline font-extrabold">Nap Media</Link>.
          </p>
        </div>
      </section>

      {/* 2. THE 3 WINGS GRAND PORTALS (Deep Page Gateways) */}
      <section className="py-20 bg-white border-y-3 border-[#320b35]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-6xl font-black text-[#320b35] font-display">
              Step Into Our Wings
            </h2>
            <p className="mt-3 text-lg font-bold text-[#320b35]/80">
              Each wing has its own dedicated universe, experiences, and tools. Choose your destination:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Wing 1: Sleep Over Portal */}
            <div className="bg-[#F7F2E7] rounded-3xl border-3 border-[#320b35] shadow-[8px_8px_0px_#320b35] hover:shadow-[12px_12px_0px_#320b35] hover:-translate-y-1.5 transition-all flex flex-col justify-between overflow-hidden group">
              <div className="bg-[#FFEDA8] p-6 border-b-3 border-[#320b35] flex items-center justify-between">
                <div>
                  <h3 className="text-3xl font-black text-[#320b35] font-display">
                    Sleep Over
                  </h3>
                </div>
                <span className="text-5xl transform group-hover:scale-110 transition-transform">🥞</span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm font-bold text-[#320b35] font-handwriting text-xl">
                    Community & Experience-Driven Activities
                  </p>
                  <p className="mt-3 text-sm text-[#320b35]/80 font-medium leading-relaxed">
                    Tactile joy and anti-burnout sanctuaries in the heart of the city:
                  </p>

                  <div className="mt-4 space-y-2">
                    <div className="p-2.5 rounded-xl bg-white border border-[#320b35] flex items-center justify-between text-xs font-bold text-[#320b35]">
                      <span>🎙️ Nap-O-Casting</span>
                      <span className="text-[10px] bg-[#FFEDA8] px-2 py-0.5 rounded border border-[#320b35] font-extrabold text-[#320b35]">Couch Mic</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-[#320b35] flex items-center justify-between text-xs font-bold text-[#320b35]">
                      <span>🥞 Breakfast Castle</span>
                      <span className="text-[10px] bg-[#FFEDA8] px-2 py-0.5 rounded border border-[#320b35] font-extrabold text-[#320b35]">Waffle Sanctuary</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-[#320b35] flex items-center justify-between text-xs font-bold text-[#320b35]">
                      <span>🪶 Pillow Fight</span>
                      <span className="text-[10px] bg-[#CDD6B7] px-2 py-0.5 rounded border border-[#320b35] font-extrabold text-[#320b35]">Stress Buster</span>
                    </div>
                  </div>
                </div>

                <Link
                  to="/sleep-over"
                  className="mt-8 w-full py-4 rounded-xl font-black text-sm bg-[#FFEDA8] hover:bg-[#ffe380] text-[#320b35] border-2 border-[#320b35] shadow-[4px_4px_0px_#320b35] flex items-center justify-center gap-2 group-hover:translate-x-0.5 transition-all"
                >
                  <span>Open Sleep Over Page</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Wing 2: Image PR Portal */}
            <div className="bg-[#F7F2E7] rounded-3xl border-3 border-[#320b35] shadow-[8px_8px_0px_#320b35] hover:shadow-[12px_12px_0px_#320b35] hover:-translate-y-1.5 transition-all flex flex-col justify-between overflow-hidden group">
              <div className="bg-[#320b35] p-6 border-b-3 border-[#320b35] flex items-center justify-between text-white">
                <div>
                  <h3 className="text-3xl font-black text-white font-display">
                    Image PR
                  </h3>
                </div>
                <span className="text-5xl transform group-hover:scale-110 transition-transform">⚡</span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm font-bold text-[#320b35] font-handwriting text-xl">
                    Brand Consulting & Narrative Craft
                  </p>
                  <p className="mt-3 text-sm text-[#320b35]/80 font-medium leading-relaxed">
                    Sharpening public perception with authentic, outside-the-box PR:
                  </p>

                  <div className="mt-4 space-y-2">
                    <div className="p-2.5 rounded-xl bg-white border border-[#320b35] flex items-center justify-between text-xs font-bold text-[#320b35]">
                      <span>🧠 Counsellor</span>
                      <span className="text-[10px] bg-[#F7F2E7] px-2 py-0.5 rounded border border-[#320b35] font-extrabold text-[#320b35]">Brand Therapy</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-[#320b35] flex items-center justify-between text-xs font-bold text-[#320b35]">
                      <span>🎪 Event Curation</span>
                      <span className="text-[10px] bg-[#F7F2E7] px-2 py-0.5 rounded border border-[#320b35] font-extrabold text-[#320b35]">Pop-Up Magic</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-[#320b35] flex items-center justify-between text-xs font-bold text-[#320b35]">
                      <span>💡 What-an-idea Promotion</span>
                      <span className="text-[10px] bg-[#FFEDA8] px-2 py-0.5 rounded border border-[#320b35] font-extrabold text-[#320b35]">Guerrilla Stunts</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-[#320b35] flex items-center justify-between text-xs font-bold text-[#320b35]">
                      <span>🏛️ Brand Image Building</span>
                      <span className="text-[10px] bg-[#CDD6B7] px-2 py-0.5 rounded border border-[#320b35] font-extrabold text-[#320b35]">Identity Craft</span>
                    </div>
                  </div>
                </div>

                <Link
                  to="/image-pr"
                  className="mt-8 w-full py-4 rounded-xl font-black text-sm bg-[#320b35] hover:bg-[#240726] text-white border-2 border-[#320b35] shadow-[4px_4px_0px_#320b35] flex items-center justify-center gap-2 group-hover:translate-x-0.5 transition-all"
                >
                  <span>Open Image PR Page</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Wing 3: Media Wing Portal */}
            <div className="bg-[#F7F2E7] rounded-3xl border-3 border-[#320b35] shadow-[8px_8px_0px_#320b35] hover:shadow-[12px_12px_0px_#320b35] hover:-translate-y-1.5 transition-all flex flex-col justify-between overflow-hidden group">
              <div className="bg-[#004958] p-6 border-b-3 border-[#320b35] flex items-center justify-between text-white">
                <div>
                  <h3 className="text-3xl font-black text-white font-display">
                    Media Wing
                  </h3>
                </div>
                <span className="text-5xl transform group-hover:scale-110 transition-transform">🎙️</span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm font-bold text-[#004958] font-handwriting text-xl">
                    The Media & Content Wing • An Alap
                  </p>
                  <p className="mt-3 text-sm text-[#320b35]/80 font-medium leading-relaxed">
                    Long-form soul, unscripted podcasts, and acoustic discovery:
                  </p>

                  <div className="mt-4 space-y-2">
                    <div className="p-2.5 rounded-xl bg-white border border-[#320b35] flex items-center justify-between text-xs font-bold text-[#320b35]">
                      <span>🎙️ An Alap Flagship Show</span>
                      <span className="text-[10px] bg-[#CDD6B7] px-2 py-0.5 rounded border border-[#320b35] font-extrabold text-[#320b35]">Acoustic Talks</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-[#320b35] flex items-center justify-between text-xs font-bold text-[#320b35]">
                      <span>📻 Audio Docuseries</span>
                      <span className="text-[10px] bg-[#FFEDA8] px-2 py-0.5 rounded border border-[#320b35] font-extrabold text-[#320b35]">Midnight Audio</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-[#320b35] flex items-center justify-between text-xs font-bold text-[#320b35]">
                      <span>📖 The Napper Zine</span>
                      <span className="text-[10px] bg-[#F7F2E7] px-2 py-0.5 rounded border border-[#320b35] font-extrabold text-[#320b35]">Indie Essays</span>
                    </div>
                  </div>
                </div>

                <Link
                  to="/media"
                  className="mt-8 w-full py-4 rounded-xl font-black text-sm bg-[#004958] hover:bg-[#003844] text-white border-2 border-[#320b35] shadow-[4px_4px_0px_#320b35] flex items-center justify-center gap-2 group-hover:translate-x-0.5 transition-all"
                >
                  <span>Open Media Wing Page</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. An Alap Flagship Show Section */}
      <NapMedia onOpenJoin={onOpenJoin} />

      {/* 4. Upcoming Specials (Amol Parashar Featured Entry) */}
      <UpcomingSpecials onOpenJoin={onOpenJoin} />

    </div>
  );
}
