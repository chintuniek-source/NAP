import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Radio, Headphones, Sparkles, Send, Share2, Disc, Heart, BookOpen, Film, ExternalLink, Clock, Mail, Phone, Instagram, MessageCircle } from 'lucide-react';
import { episodes } from '../data/episodes';

export default function MediaWingPage({ onOpenJoin }) {
  const [activeEp, setActiveEp] = useState(episodes.length > 0 ? episodes.length - 1 : 0);
  const [isPlaying, setIsPlaying] = useState(false);
  const itemRefs = useRef([]);

  const current = episodes[activeEp] || episodes[0];

  useEffect(() => {
    if (itemRefs.current[activeEp]) {
      itemRefs.current[activeEp].scrollIntoView({ block: 'nearest' });
    }
  }, [activeEp]);

  return (
    <div className="pt-24 pb-20 bg-[#F7F2E7]">
      
      {/* Banner */}
      <section className="bg-gradient-to-b from-[#CDD6B7]/30 to-[#F7F2E7] py-16 px-4 sm:px-6 lg:px-8 border-b-3 border-[#3E2723]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-[#3E2723] font-display tracking-tight">
            Media Wing
          </h1>
          
          <p className="mt-4 text-2xl sm:text-3xl font-extrabold text-[#004958] font-handwriting">
            Nap Media • Home to A Alap
          </p>
          
          <p className="mt-4 text-base sm:text-lg text-[#3E2723]/80 max-w-2xl mx-auto font-medium leading-relaxed">
            We produce intimate acoustic concerts, thoughtful conversations, and tactile storytelling created for unhurried ears.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20">
        
        {/* A ALAP FLAGSHIP PLAYER MODULE */}
        <section className="bg-white rounded-3xl border-3 border-[#3E2723] shadow-[10px_10px_0px_#3E2723] overflow-hidden">
          <div className="bg-[#004958] text-white p-6 sm:p-8 border-b-3 border-[#3E2723] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-5xl font-black text-white font-display">
                A Alap (এ আলাপ)
              </h2>
              <p className="text-sm font-bold text-white/90 mt-1">Intimate Acoustic Explorations & Unfiltered Conversations</p>
            </div>
            <span className="text-5xl">🎙️</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Player Console */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between border-b-3 lg:border-b-0 lg:border-r-3 border-[#3E2723] bg-white">
              <div>
                {/* Embedded Responsive YouTube Player / Clean Thumbnail */}
                <div className="relative aspect-video rounded-2xl overflow-hidden border-3 border-[#3E2723] shadow-[5px_5px_0px_#3E2723] bg-black mb-6">
                  {isPlaying ? (
                    <iframe
                      key={current.youtubeId}
                      src={`https://www.youtube.com/embed/${current.youtubeId}?autoplay=1&rel=0`}
                      title={current.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full border-0"
                    ></iframe>
                  ) : (
                    <div
                      onClick={() => setIsPlaying(true)}
                      className="w-full h-full cursor-pointer relative group overflow-hidden"
                    >
                      <img
                        src={current.thumbnail}
                        alt={current.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-black uppercase text-[#004958] tracking-wider">
                    CURRENT EPISODE
                  </span>
                  <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-[#004958] text-white border border-[#3E2723] shadow-[2px_2px_0px_#3E2723]">
                    {current.badge}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#3E2723] font-display leading-tight">
                  {current.title}
                </h3>
                
                <p className="text-sm font-extrabold text-[#004958] mt-2 flex items-center gap-2 flex-wrap">
                  <span>Featuring {current.guest}</span>
                  <span>•</span>
                  <span className="bg-[#004958]/10 text-[#004958] px-2 py-0.5 rounded-md text-xs border border-[#004958]/30 font-black">{current.role}</span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1 bg-[#FFEDA8] text-[#3E2723] px-2 py-0.5 rounded-md text-xs border border-[#3E2723] font-black font-mono">
                    <Clock className="w-3.5 h-3.5 text-[#7E3940]" />
                    {current.duration}
                  </span>
                </p>

                <p className="mt-4 text-sm sm:text-base text-[#3E2723]/80 leading-relaxed font-medium">
                  {current.description}
                </p>
              </div>
            </div>

            {/* Archive List */}
            <div className="lg:col-span-5 p-6 sm:p-8 bg-[#F7F2E7] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-black text-xl text-[#3E2723] font-display flex items-center gap-2">
                    <Headphones className="w-5 h-5 text-[#004958]" />
                    <span>A Alap Episodes Archive</span>
                  </h4>
                  <span className="text-xs font-black bg-[#FFEDA8] text-[#3E2723] px-2.5 py-0.5 rounded-full border border-[#3E2723] shadow-[2px_2px_0px_#3E2723]">
                    {episodes.length} Episodes
                  </span>
                </div>

                <div className="max-h-[580px] overflow-y-auto pr-1.5 space-y-3">
                  {episodes.map((ep, i) => {
                    const isSelected = activeEp === i;
                    return (
                      <div
                        key={ep.id}
                        ref={(el) => (itemRefs.current[i] = el)}
                        onClick={() => {
                          setActiveEp(i);
                          setIsPlaying(false);
                        }}
                        className={`p-3 rounded-2xl border-2 border-[#3E2723] cursor-pointer transition-all ${
                          isSelected 
                            ? 'bg-white shadow-[4px_4px_0px_#3E2723] translate-x-1 border-[#004958]' 
                            : 'bg-white/80 hover:bg-white shadow-[2px_2px_0px_#3E2723]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="relative w-18 h-12 rounded-xl overflow-hidden border border-[#3E2723] flex-shrink-0 bg-black">
                            <img
                              src={ep.thumbnail}
                              alt={ep.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className={`text-xs font-black truncate ${isSelected ? 'text-[#004958]' : 'text-[#3E2723]'}`}>
                              {ep.title}
                            </p>
                            <p className="text-[11px] font-bold text-gray-600 mt-0.5 truncate flex items-center gap-1.5">
                              <span>{ep.guest}</span>
                              <span>•</span>
                              <span className="text-gray-500">{ep.role}</span>
                              <span>•</span>
                              <span className="inline-flex items-center gap-0.5 font-mono text-[#004958] font-extrabold text-[10px]">
                                <Clock className="w-2.5 h-2.5" />
                                {ep.duration}
                              </span>
                            </p>
                          </div>
                          {isSelected && (
                            <span className="w-2.5 h-2.5 rounded-full bg-[#7E3940] animate-pulse flex-shrink-0"></span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Creator Pitch Box / Contact Details */}
        <section className="bg-gradient-to-r from-[#004958] to-[#00343F] p-8 sm:p-12 rounded-3xl border-3 border-[#3E2723] shadow-[8px_8px_0px_#3E2723] text-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="bg-white text-[#3E2723] font-black text-xs px-3.5 py-1 rounded-full uppercase border border-[#3E2723] shadow-[2px_2px_0px_#3E2723]">
                Creator Open Call
              </span>
              <h3 className="text-3xl sm:text-4xl font-black font-display mt-3 text-white">
                Pitch Yourself for A Alap
              </h3>
              <p className="text-xs sm:text-sm text-white/90 font-semibold mt-1">
                Are you an indie musician, storyteller, poet, or cultural explorer? Reach out to our curation team directly.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/30">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* Email Card */}
                <div className="bg-[#F7F2E7] p-5 rounded-2xl border-2 border-[#3E2723] shadow-[4px_4px_0px_#3E2723] text-[#3E2723] flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#004958] text-white flex items-center justify-center mb-3">
                      <Mail className="w-5 h-5" />
                    </div>
                    <h4 className="font-black text-sm uppercase tracking-wide text-[#3E2723]">Email Pitch</h4>
                    <p className="text-xs font-semibold text-[#3E2723]/70 mt-1">
                      Send your audio/video demo links, story bio, and pitch notes.
                    </p>
                  </div>
                  <a
                    href="mailto:media@napcreative.in?subject=A%20Alap%20Creator%20Pitch"
                    className="mt-4 inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-3 rounded-xl bg-[#FFEDA8] hover:bg-[#ffe380] text-[#3E2723] border-2 border-[#3E2723] font-black text-xs shadow-[2px_2px_0px_#3E2723] transition-all hover:translate-x-0.5 hover:translate-y-0.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    media@napcreative.in
                  </a>
                </div>

                {/* Direct Line / WhatsApp */}
                <div className="bg-[#F7F2E7] p-5 rounded-2xl border-2 border-[#3E2723] shadow-[4px_4px_0px_#3E2723] text-[#3E2723] flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#7E3940] text-white flex items-center justify-center mb-3">
                      <Phone className="w-5 h-5" />
                    </div>
                    <h4 className="font-black text-sm uppercase tracking-wide text-[#3E2723]">Direct Desk</h4>
                    <p className="text-xs font-semibold text-[#3E2723]/70 mt-1">
                      Call or message our media curation and production desk.
                    </p>
                  </div>
                  <a
                    href="tel:+919876543210"
                    className="mt-4 inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-3 rounded-xl bg-[#CDD6B7] hover:bg-[#bcc6a3] text-[#3E2723] border-2 border-[#3E2723] font-black text-xs shadow-[2px_2px_0px_#3E2723] transition-all hover:translate-x-0.5 hover:translate-y-0.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    +91 98765 43210
                  </a>
                </div>

                {/* Socials & DMs */}
                <div className="bg-[#F7F2E7] p-5 rounded-2xl border-2 border-[#3E2723] shadow-[4px_4px_0px_#3E2723] text-[#3E2723] flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#FFEDA8] text-[#3E2723] border-2 border-[#3E2723] flex items-center justify-center mb-3">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <h4 className="font-black text-sm uppercase tracking-wide text-[#3E2723]">Instagram & DMs</h4>
                    <p className="text-xs font-semibold text-[#3E2723]/70 mt-1">
                      Drop us a DM or tag us in your clips, jams and acoustic reels.
                    </p>
                  </div>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-3 rounded-xl bg-[#004958] hover:bg-[#003742] text-white border-2 border-[#3E2723] font-black text-xs shadow-[2px_2px_0px_#3E2723] transition-all hover:translate-x-0.5 hover:translate-y-0.5"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    @nap.media
                  </a>
                </div>

              </div>

              {/* Extra note / Studio info */}
              <div className="mt-6 pt-4 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/90">
                <div className="flex items-center gap-2 font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#CDD6B7] animate-pulse"></span>
                  <span>NAP Media Wing</span>
                </div>
                <div className="text-white/80 font-semibold">
                  Open for artist collaborations, indie podcasts & acoustic specials
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
