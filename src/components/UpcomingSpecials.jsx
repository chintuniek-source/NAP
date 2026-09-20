import React, { useState } from 'react';
import { Calendar, MapPin, Ticket, Sparkles, ExternalLink, Flame, Maximize2 } from 'lucide-react';

export default function UpcomingSpecials() {
  const [showPosterModal, setShowPosterModal] = useState(false);

  return (
    <section id="specials" className="py-20 bg-[#F7F2E7] border-y-3 border-[#3E2723] relative overflow-hidden">
      {/* Background graphic elements */}
      <div className="absolute -top-10 -right-10 w-52 h-52 bg-[#7E3940]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-10 -left-10 w-52 h-52 bg-[#FFEDA8]/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Module Header Badge */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7E3940] text-white border-2 border-[#3E2723] shadow-[3px_3px_0px_#3E2723] font-black text-xs uppercase tracking-wider mb-4 animate-bounce-gentle">
            <Flame className="w-4 h-4 fill-[#FFEDA8] text-[#FFEDA8]" />
            <span>Featured Tour Spotlight</span>
            <Flame className="w-4 h-4 fill-[#FFEDA8] text-[#FFEDA8]" />
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-[#3E2723] font-display">
            Upcoming Specials
          </h2>
          <p className="mt-3 text-lg font-bold text-[#3E2723]/80 max-w-xl">
            Live theatre, unscripted storytelling & cultural headline entries.
          </p>
        </div>

        {/* Featured Amol Parashar Entry Card */}
        <div className="bg-white rounded-3xl border-3 border-[#3E2723] shadow-[10px_10px_0px_#3E2723] overflow-hidden max-w-5xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Official Poster Showcase */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#7E3940] to-[#552328] p-6 sm:p-8 flex flex-col justify-between relative border-b-3 lg:border-b-0 lg:border-r-3 border-[#3E2723] text-white">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-black bg-[#FFEDA8] text-[#3E2723] border-2 border-[#3E2723] shadow-[2px_2px_0px_#3E2723] flex items-center gap-1 uppercase tracking-wider">
                  ⭐ LIVE THEATRE
                </span>
                <span className="text-xs font-black bg-[#3E2723] text-white px-3 py-1 rounded-lg border border-white/40">
                  GUWAHATI • 26th SEPT
                </span>
              </div>

              {/* Official Poster Container */}
              <div className="relative my-2 group">
                <div 
                  onClick={() => setShowPosterModal(true)}
                  className="rounded-2xl overflow-hidden border-3 border-[#3E2723] shadow-[6px_6px_0px_#3E2723] cursor-pointer relative bg-black transition-transform duration-200 group-hover:scale-[1.02]"
                >
                  <img 
                    src="/besharam-aadmi.jpg" 
                    alt="Amol Parashar Live in Besharam Aadmi" 
                    className="w-full h-auto object-cover max-h-[440px] mx-auto"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-xs">
                    <div className="bg-white text-black px-4 py-2 rounded-xl border-2 border-black shadow-[2px_2px_0px_black] flex items-center gap-1.5 font-black">
                      <Maximize2 className="w-4 h-4" />
                      <span>Click to Enlarge Poster</span>
                    </div>
                  </div>
                </div>

                {/* Floating playful badge */}
                <div className="absolute -bottom-3 -right-2 bg-[#FFEDA8] text-[#3E2723] text-xs font-black px-3 py-1 rounded-full border-2 border-[#3E2723] shadow-[2px_2px_0px_#3E2723] rotate-2">
                  Amol Parashar Live 🎭
                </div>
              </div>

              {/* Poster Zoom / Preview Button */}
              <button
                onClick={() => setShowPosterModal(true)}
                className="mt-6 w-full py-3 px-4 rounded-xl bg-white hover:bg-[#FFEDA8] text-[#3E2723] font-black text-xs border-2 border-[#3E2723] shadow-[3px_3px_0px_#3E2723] flex items-center justify-center gap-2 transition-all uppercase tracking-wider"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#7E3940]" />
                <span>View Full Show Poster</span>
              </button>
            </div>

            {/* Right Column: Show Details & Ticketing */}
            <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between bg-white">
              <div>
                
                {/* Meta Location & Date Banner */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-extrabold text-gray-700 mb-4">
                  <span className="flex items-center gap-1.5 bg-[#F7F2E7] text-[#7E3940] px-3.5 py-1.5 rounded-xl border border-[#7E3940]/30">
                    <Calendar className="w-4 h-4 text-[#7E3940]" />
                    <span>26th September • Evening Show</span>
                  </span>
                  <span className="flex items-center gap-1.5 bg-[#F7F2E7] text-[#3E2723] px-3.5 py-1.5 rounded-xl border border-[#3E2723]/30">
                    <MapPin className="w-4 h-4 text-[#7E3940]" />
                    <span>ITA Machkhowa, Guwahati</span>
                  </span>
                </div>

                {/* Title and Subtitle */}
                <div className="mb-4">
                  <p className="text-xs font-black uppercase tracking-widest text-[#7E3940]">
                    AMOL PARASHAR LIVE
                  </p>
                  <h3 className="text-3xl sm:text-5xl font-black text-[#3E2723] font-display uppercase tracking-tight mt-1 leading-none">
                    Besharam Aadmi
                  </h3>
                  <p className="text-base font-extrabold text-[#7E3940] mt-1.5">
                    A Comedy Theatre Show
                  </p>
                </div>

                <p className="text-[#3E2723]/80 text-sm sm:text-base leading-relaxed font-medium">
                  Acclaimed actor and creator <strong className="font-extrabold text-[#3E2723]">Amol Parashar</strong> takes the stage in Guwahati for <strong className="font-extrabold text-[#7E3940]">"Besharam Aadmi"</strong> — a hilarious, unfiltered comedy theatre spectacle exploring modern shamelessness, awkward truths, and chaotic life dilemmas.
                </p>

                {/* Show Production Credits Box */}
                <div className="mt-5 p-4 rounded-2xl bg-[#F7F2E7] border-2 border-[#3E2723] shadow-[3px_3px_0px_#3E2723]">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-wider text-gray-500">Written & Directed By</p>
                      <p className="font-black text-[#3E2723] text-sm mt-0.5">Vijay Ashok Sharma</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-wider text-gray-500">Produced By</p>
                      <p className="font-black text-[#7E3940] text-sm mt-0.5">Amol Parashar & Vyom Charaya</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-wider text-gray-500">Managed By</p>
                      <p className="font-black text-[#3E2723] text-sm mt-0.5">Rooh Storyhouse</p>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mt-5 text-xs font-bold text-gray-800">
                  <div className="flex items-center gap-2 bg-[#FFEDA8]/40 p-2.5 rounded-xl border border-[#3E2723]">
                    <Sparkles className="w-4 h-4 text-[#7E3940] flex-shrink-0" />
                    <span className="text-[#3E2723]">Live Stand-Up & Theatrical Blend</span>
                  </div>
                </div>

                {/* Fast Filling Notice */}
                <div className="mt-5 flex items-center justify-between text-xs font-extrabold">
                  <span className="text-gray-500">Venue: ITA Machkhowa Auditorium</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#7E3940]/10 text-[#7E3940] border border-[#7E3940]/30 animate-pulse">
                    ⚡ Fast Filling • Limited Seats
                  </span>
                </div>
              </div>

              {/* Direct Booking on Zaatio */}
              <div className="mt-6 pt-6 border-t-2 border-gray-100">
                <a
                  href="https://bookonzaatio.in/events/besharam-aadmi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl font-black text-base bg-[#7E3940] hover:bg-[#6a2f35] text-white border-2 border-[#3E2723] shadow-[4px_4px_0px_#3E2723] hover:shadow-[2px_2px_0px_#3E2723] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center gap-2"
                >
                  <Ticket className="w-5 h-5" />
                  <span>Get Tickets on BOOKONZAATIO.IN</span>
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Poster Lightbox Modal */}
      {showPosterModal && (
        <div 
          onClick={() => setShowPosterModal(false)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl border-3 border-[#3E2723] shadow-[8px_8px_0px_#3E2723] max-w-lg w-full p-4 relative overflow-hidden"
          >
            <div className="flex items-center justify-between pb-3 border-b-2 border-gray-200">
              <div>
                <p className="text-[10px] font-black uppercase text-[#7E3940]">Official Show Poster</p>
                <h4 className="font-black text-base text-[#3E2723]">Besharam Aadmi • Amol Parashar Live</h4>
              </div>
              <button 
                onClick={() => setShowPosterModal(false)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-black border border-black text-sm"
              >
                ✕
              </button>
            </div>

            <div className="mt-3 rounded-xl overflow-hidden border-2 border-[#3E2723] max-h-[75vh] overflow-y-auto">
              <img 
                src="/besharam-aadmi.jpg" 
                alt="Besharam Aadmi Poster Full View" 
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="mt-3 flex items-center justify-between gap-3">
              <span className="text-xs font-bold text-gray-600">ITA Machkhowa, Guwahati • 26th Sept</span>
              <a
                href="https://bookonzaatio.in/events/besharam-aadmi"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#7E3940] text-white font-black text-xs border-2 border-[#3E2723] shadow-[2px_2px_0px_#3E2723] flex items-center gap-1"
              >
                <span>Book on Zaatio</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
