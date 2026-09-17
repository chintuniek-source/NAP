import React, { useState } from 'react';
import { Play, Pause, Radio, Headphones, Sparkles, Send, Share2, Disc, Heart, BookOpen, Film, ExternalLink, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';
import { episodes } from '../data/episodes';

export default function MediaWingPage({ onOpenJoin }) {
  const [activeEp, setActiveEp] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [pitchSent, setPitchSent] = useState(false);
  const [pitchData, setPitchData] = useState({ name: '', link: '', genre: 'Indie Folk & Acoustic', notes: '' });

  const current = episodes[activeEp];

  const handlePitch = (e) => {
    e.preventDefault();
    setPitchSent(true);
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="pt-24 pb-20 bg-[#FAF5FF]">
      
      {/* Banner */}
      <section className="bg-gradient-to-b from-[#EFE5FD] to-[#FAF5FF] py-16 px-4 sm:px-6 lg:px-8 border-b-3 border-[#1E1E24]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-[#1E1E24] font-display tracking-tight">
            Media Wing
          </h1>
          
          <p className="mt-4 text-2xl sm:text-3xl font-extrabold text-[#845EC2] font-handwriting">
            Nap Media • Home to A Alap
          </p>
          
          <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-2xl mx-auto font-medium leading-relaxed">
            The counter-weight to hyper-speed short-form noise. We produce intimate acoustic concerts, thoughtful conversations, and tactile storytelling created for unhurried ears.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20">
        
        {/* A ALAP FLAGSHIP PLAYER MODULE */}
        <section className="bg-white rounded-3xl border-3 border-[#1E1E24] shadow-[10px_10px_0px_#1E1E24] overflow-hidden">
          <div className="bg-[#845EC2] text-white p-6 sm:p-8 border-b-3 border-[#1E1E24] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
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
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between border-b-3 lg:border-b-0 lg:border-r-3 border-[#1E1E24] bg-[#FFFDF9]">
              <div>
                {/* Embedded Responsive YouTube Player */}
                <div className="relative aspect-video rounded-2xl overflow-hidden border-3 border-[#1E1E24] shadow-[5px_5px_0px_#1E1E24] bg-black mb-6">
                  <iframe
                    key={current.youtubeId}
                    src={`https://www.youtube.com/embed/${current.youtubeId}?rel=0`}
                    title={current.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full border-0"
                  ></iframe>
                </div>

                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-black uppercase text-purple-700 tracking-wider">
                    CURRENT EPISODE
                  </span>
                  <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-[#845EC2] text-white border border-black shadow-[2px_2px_0px_#1E1E24]">
                    {current.badge}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#1E1E24] font-display leading-tight">
                  {current.title}
                </h3>
                
                <p className="text-sm font-extrabold text-[#845EC2] mt-2 flex items-center gap-2 flex-wrap">
                  <span>Featuring {current.guest}</span>
                  <span>•</span>
                  <span className="bg-purple-100 text-[#845EC2] px-2 py-0.5 rounded-md text-xs border border-purple-300 font-black">{current.role}</span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1 bg-yellow-100 text-[#1E1E24] px-2 py-0.5 rounded-md text-xs border border-yellow-300 font-black font-mono">
                    <Clock className="w-3.5 h-3.5 text-amber-700" />
                    {current.duration}
                  </span>
                </p>

                <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
                  {current.description}
                </p>
              </div>
            </div>

            {/* Archive List */}
            <div className="lg:col-span-5 p-6 sm:p-8 bg-[#F5EFFB] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-black text-xl text-[#1E1E24] font-display flex items-center gap-2">
                    <Headphones className="w-5 h-5 text-[#845EC2]" />
                    <span>A Alap Episodes Archive</span>
                  </h4>
                  <span className="text-xs font-black bg-[#FFD166] text-[#1E1E24] px-2.5 py-0.5 rounded-full border border-black shadow-[2px_2px_0px_#1E1E24]">
                    {episodes.length} Episodes
                  </span>
                </div>

                <div className="max-h-[580px] overflow-y-auto pr-1.5 space-y-3">
                  {episodes.map((ep, i) => {
                    const isSelected = activeEp === i;
                    return (
                      <div
                        key={ep.id}
                        onClick={() => setActiveEp(i)}
                        className={`p-3 rounded-2xl border-2 border-[#1E1E24] cursor-pointer transition-all ${
                          isSelected 
                            ? 'bg-white shadow-[4px_4px_0px_#1E1E24] translate-x-1 border-[#845EC2]' 
                            : 'bg-white/75 hover:bg-white shadow-[2px_2px_0px_#1E1E24]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="relative w-18 h-12 rounded-xl overflow-hidden border border-black flex-shrink-0 bg-black">
                            <img
                              src={ep.thumbnail}
                              alt={ep.title}
                              className="w-full h-full object-cover"
                            />
                            {/* Duration overlay badge on thumbnail */}
                            <span className="absolute bottom-0.5 right-0.5 bg-black/85 text-white text-[9px] font-mono font-bold px-1 py-0.2 rounded">
                              {ep.duration}
                            </span>
                            {isSelected && (
                              <div className="absolute inset-0 bg-[#845EC2]/40 flex items-center justify-center">
                                <Play className="w-4 h-4 fill-white text-white" />
                              </div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className={`text-xs font-black truncate ${isSelected ? 'text-[#845EC2]' : 'text-[#1E1E24]'}`}>
                              {ep.title}
                            </p>
                            <p className="text-[11px] font-bold text-gray-600 mt-0.5 truncate flex items-center gap-1.5">
                              <span>{ep.guest}</span>
                              <span>•</span>
                              <span className="text-gray-500">{ep.role}</span>
                              <span>•</span>
                              <span className="inline-flex items-center gap-0.5 font-mono text-purple-800 font-extrabold text-[10px]">
                                <Clock className="w-2.5 h-2.5" />
                                {ep.duration}
                              </span>
                            </p>
                          </div>
                          {isSelected && (
                            <span className="w-2.5 h-2.5 rounded-full bg-[#FF6584] animate-pulse flex-shrink-0"></span>
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

        {/* Creator Pitch Box */}
        <section className="bg-gradient-to-r from-[#845EC2] to-[#B39CD0] p-8 sm:p-12 rounded-3xl border-3 border-[#1E1E24] shadow-[8px_8px_0px_#1E1E24] text-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-6">
              <span className="bg-white text-black font-black text-xs px-3 py-1 rounded-full uppercase border border-black shadow-[2px_2px_0px_black]">
                Creator Open Call
              </span>
              <h3 className="text-3xl sm:text-4xl font-black font-display mt-3 text-white">
                Pitch Yourself for A Alap
              </h3>
              <p className="text-xs sm:text-sm text-white/90 font-semibold mt-1">
                Are you an indie musician, storyteller, poet, or cultural explorer? We want to record your story.
              </p>
            </div>

            {!pitchSent ? (
              <form onSubmit={handlePitch} className="space-y-3 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/30 text-black">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Your Name / Band Name"
                    required
                    value={pitchData.name}
                    onChange={(e) => setPitchData({ ...pitchData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border-2 border-black bg-white text-xs font-bold"
                  />
                  <input
                    type="url"
                    placeholder="Spotify, Soundcloud or YouTube Link"
                    required
                    value={pitchData.link}
                    onChange={(e) => setPitchData({ ...pitchData, link: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border-2 border-black bg-white text-xs font-bold"
                  />
                </div>

                <textarea
                  rows="2"
                  placeholder="What would your A Alap session be about?"
                  value={pitchData.notes}
                  onChange={(e) => setPitchData({ ...pitchData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border-2 border-black bg-white text-xs font-bold"
                ></textarea>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-black text-xs bg-[#FFD166] text-[#1E1E24] border-2 border-black shadow-[3px_3px_0px_black] hover:bg-[#ffe082]"
                >
                  Send Pitch to Nap Media Curators
                </button>
              </form>
            ) : (
              <div className="p-6 bg-white rounded-2xl border-2 border-black text-center text-black">
                <p className="font-black text-base text-[#845EC2]">✓ Pitch Submitted to A Alap!</p>
                <p className="text-xs text-gray-700 font-semibold mt-1">
                  Our audio curators listen to every demo. We will be in touch with <strong>{pitchData.name}</strong> if there's a session fit!
                </p>
              </div>
            )}
          </div>
        </section>

      </div>
    </div>
  );
}
