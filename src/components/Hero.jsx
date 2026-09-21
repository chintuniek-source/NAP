import React, { useState, useEffect } from 'react';
import { ArrowDownRight, Sparkles, Moon, Coffee, Volume2, Star, Zap, Users, PlayCircle, Flame } from 'lucide-react';

export default function Hero({ onOpenJoin, onOpenQuiz }) {
  const words = [
    "from toxic hustle culture",
    "from mundane boring PR",
    "with community & pillow fights",
    "into soulful stories on An Alap",
    "from corporate noise"
  ];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-doodle-pattern">
      {/* Decorative Floating Colorful Blobs / Shapes */}
      <div className="absolute top-16 left-10 w-32 h-32 bg-[#FFEDA8]/50 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse"></div>
      <div className="absolute top-40 right-10 w-48 h-48 bg-[#320b35]/20 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse delay-700"></div>
      <div className="absolute bottom-10 left-1/3 w-64 h-64 bg-[#004958]/15 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Floating fun pill notices */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <div className="badge-sticker bg-[#FFEDA8] text-[#320b35] rotate-[-2deg]">
            <Sparkles className="w-4 h-4 text-[#320b35]" />
            <span>Official Community Wing</span>
          </div>
          <div className="badge-sticker bg-[#CDD6B7] text-[#320b35] rotate-[1.5deg]">
            <Flame className="w-4 h-4 text-[#320b35]" />
            <span>Special: Amol Parashar In The House</span>
          </div>
          <div className="badge-sticker bg-[#F7F2E7] text-[#320b35] rotate-[-1deg]">
            <Coffee className="w-4 h-4 text-[#004958]" />
            <span>Breakfast Castle & Pillow Fights</span>
          </div>
        </div>

        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex flex-col items-center justify-center">
            <img 
              src="/NAP-hero.png" 
              alt="NAP" 
              className="h-24 sm:h-36 md:h-48 lg:h-56 w-auto object-contain select-none mx-auto transform hover:scale-105 transition-transform duration-300" 
            />
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#320b35] font-handwriting -mt-2 sm:-mt-4">
              — its time to take one :)
            </h1>
          </div>

          {/* Dynamic rotating subtext */}
          <div className="mt-8 text-xl sm:text-2xl md:text-3xl font-bold text-[#320b35] flex flex-wrap items-center justify-center gap-2">
            <span>Ready to take a nap</span>
            <span className="inline-block px-4 py-1.5 rounded-2xl bg-[#320b35] text-white border-2 border-[#320b35] shadow-[3px_3px_0px_#320b35] transform rotate-[-1deg] transition-all duration-300">
              {words[wordIndex]}
            </span>
            <span>?</span>
          </div>

          <p className="mt-6 text-base sm:text-lg text-[#320b35]/80 max-w-2xl mx-auto leading-relaxed font-medium">
            We are <strong className="font-extrabold text-[#320b35]">NAP</strong>: the creative nexus where high-energy community experiences meet sharp narrative PR and intimate, soulful media. Recharging culture, one conversation and pillow fight at a time.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenJoin}
              className="px-8 py-4 rounded-2xl font-black text-lg bg-[#FFEDA8] hover:bg-[#ffe380] text-[#320b35] border-3 border-[#320b35] shadow-[6px_6px_0px_#320b35] hover:shadow-[3px_3px_0px_#320b35] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-3 group"
            >
              <span>Become a napper</span>
              <span className="text-2xl group-hover:rotate-12 transition-transform">🛋️</span>
            </button>

            <a
              href="#specials"
              className="px-8 py-4 rounded-2xl font-black text-lg bg-[#CDD6B7] hover:bg-[#bcc7a1] text-[#320b35] border-3 border-[#320b35] shadow-[6px_6px_0px_#320b35] hover:shadow-[3px_3px_0px_#320b35] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-3"
            >
              <Star className="w-5 h-5 fill-[#320b35]" />
              <span>Amol Parashar Special</span>
            </a>

            <button
              onClick={onOpenQuiz}
              className="px-6 py-4 rounded-2xl font-extrabold text-base bg-white hover:bg-[#F7F2E7] text-[#320b35] border-3 border-[#320b35] shadow-[5px_5px_0px_#320b35] hover:shadow-[2px_2px_0px_#320b35] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#004958]" />
              <span>Take the Nap Quiz</span>
            </button>
          </div>

          {/* Quick Stats / Quirky Social Proof Ticker */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-4 bg-white rounded-2xl border-2 border-[#320b35] shadow-[4px_4px_0px_#320b35] text-center">
              <span className="text-3xl font-black text-[#320b35]">3 Wings</span>
              <p className="text-xs font-bold text-gray-600 mt-1 uppercase">Community, PR & Media</p>
            </div>
            <div className="p-4 bg-white rounded-2xl border-2 border-[#320b35] shadow-[4px_4px_0px_#320b35] text-center">
              <span className="text-3xl font-black text-[#004958]">1,450+</span>
              <p className="text-xs font-bold text-gray-600 mt-1 uppercase">Pillows Fluffed</p>
            </div>
            <div className="p-4 bg-white rounded-2xl border-2 border-[#320b35] shadow-[4px_4px_0px_#320b35] text-center">
              <span className="text-3xl font-black text-[#320b35]">100%</span>
              <p className="text-xs font-bold text-gray-600 mt-1 uppercase">Good Vibes Only</p>
            </div>
            <div className="p-4 bg-white rounded-2xl border-2 border-[#320b35] shadow-[4px_4px_0px_#320b35] text-center">
              <span className="text-3xl font-black text-[#320b35]">An Alap</span>
              <p className="text-xs font-bold text-gray-600 mt-1 uppercase">Original Episodes</p>
            </div>
          </div>
        </div>

        {/* The 3 Core Wings Quick Teaser Deck */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Sleep Over */}
          <a 
            href="#sleep-over"
            className="group relative bg-[#FFEDA8]/30 hover:bg-[#FFEDA8]/60 p-6 rounded-3xl border-3 border-[#320b35] shadow-[6px_6px_0px_#320b35] hover:shadow-[9px_9px_0px_#320b35] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-black bg-[#FFEDA8] text-[#320b35] border border-[#320b35] shadow-[2px_2px_0px_#320b35]">
                  WING 1
                </span>
                <span className="text-3xl">🛏️</span>
              </div>
              <h3 className="mt-4 text-2xl font-black text-[#320b35] font-display group-hover:text-[#320b35] transition-colors">
                Sleep Over
              </h3>
              <p className="mt-2 text-sm text-[#320b35]/80 font-medium leading-relaxed">
                Experience-driven community sanctuaries: <strong>Nap-O-Casting</strong>, <strong>Breakfast Castle</strong>, and cathartic <strong>Pillow Fights</strong>.
              </p>
            </div>
            <div className="mt-6 flex items-center justify-between text-xs font-black text-[#320b35] pt-4 border-t-2 border-[#320b35]/20">
              <span>EXPLORE EXPERIENCES</span>
              <ArrowDownRight className="w-4 h-4 transform group-hover:rotate-[-45deg] transition-transform" />
            </div>
          </a>

          {/* Card 2: Image PR */}
          <a 
            href="#image-management"
            className="group relative bg-[#320b35]/10 hover:bg-[#320b35]/20 p-6 rounded-3xl border-3 border-[#320b35] shadow-[6px_6px_0px_#320b35] hover:shadow-[9px_9px_0px_#320b35] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-black bg-[#320b35] text-white border border-[#320b35] shadow-[2px_2px_0px_#320b35]">
                  WING 2
                </span>
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="mt-4 text-2xl font-black text-[#320b35] font-display group-hover:text-[#320b35] transition-colors">
                Image PR
              </h3>
              <p className="mt-2 text-sm text-[#320b35]/80 font-medium leading-relaxed">
                Modern brand consulting & PR: <strong>Counsellor</strong> advisory, <strong>Event Curation</strong>, <strong>What-an-idea Promotion</strong> & cultural image building.
              </p>
            </div>
            <div className="mt-6 flex items-center justify-between text-xs font-black text-[#320b35] pt-4 border-t-2 border-[#320b35]/20">
              <span>EXPLORE PR & CONSULTING</span>
              <ArrowDownRight className="w-4 h-4 transform group-hover:rotate-[-45deg] transition-transform" />
            </div>
          </a>

          {/* Card 3: Nap Media */}
          <a 
            href="#nap-media"
            className="group relative bg-[#004958]/10 hover:bg-[#004958]/20 p-6 rounded-3xl border-3 border-[#320b35] shadow-[6px_6px_0px_#320b35] hover:shadow-[9px_9px_0px_#320b35] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-black bg-[#004958] text-white border border-[#320b35] shadow-[2px_2px_0px_#320b35]">
                  WING 3
                </span>
                <span className="text-3xl">🎙️</span>
              </div>
              <h3 className="mt-4 text-2xl font-black text-[#320b35] font-display group-hover:text-[#004958] transition-colors">
                Nap Media
              </h3>
              <p className="mt-2 text-sm text-[#320b35]/80 font-medium leading-relaxed">
                The content & media wing: Home to <strong>An Alap</strong> — intimate, acoustic conversations and unfiltered storytelling with icons.
              </p>
            </div>
            <div className="mt-6 flex items-center justify-between text-xs font-black text-[#320b35] pt-4 border-t-2 border-[#320b35]/20">
              <span>STREAM AN ALAP</span>
              <ArrowDownRight className="w-4 h-4 transform group-hover:rotate-[-45deg] transition-transform" />
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}
