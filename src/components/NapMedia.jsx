import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Play, Headphones, Sparkles, ExternalLink, Clock, ArrowRight } from 'lucide-react';
import { episodes } from '../data/episodes';
import NeoDropdown from './NeoDropdown';

export default function NapMedia() {
  const [activeEpisode, setActiveEpisode] = useState(episodes.length > 0 ? episodes.length - 1 : 0);
  const [isPlaying, setIsPlaying] = useState(false);
  const itemRefs = useRef([]);
  const currentEp = episodes[activeEpisode] || episodes[0];

  useEffect(() => {
    if (itemRefs.current[activeEpisode]) {
      itemRefs.current[activeEpisode].scrollIntoView({ block: 'nearest' });
    }
  }, [activeEpisode]);

  return (
    <section id="a-alap" className="py-12 sm:py-16 bg-[#F7F2E7] border-t-3 border-[#3E2723] relative overflow-hidden">
      {/* Soft background ambient blur */}
      <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[#004958]/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brief Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#004958] text-white border-2 border-[#3E2723] shadow-[2px_2px_0px_#3E2723] font-black text-[11px] uppercase tracking-wider mb-2">
              <Sparkles className="w-3 h-3 fill-white" />
              <span>Series Spotlight</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#3E2723] font-display tracking-tight">
              A Alap <span className="font-handwriting text-2xl sm:text-3xl text-[#004958] font-normal">(এ আলাপ)</span>
            </h2>
            <p className="text-xs sm:text-sm font-bold text-[#3E2723]/70 mt-0.5">
              Intimate acoustic conversations & unfiltered stories with creators and icons.
            </p>
          </div>

          <Link
            to="/media"
            className="px-4 py-2 rounded-xl text-xs font-black bg-white hover:bg-[#FFEDA8] text-[#3E2723] border-2 border-[#3E2723] shadow-[3px_3px_0px_#3E2723] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-1.5"
          >
            <span>All {episodes.length} Episodes</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Compact Showcase Card */}
        <div className="bg-white rounded-2xl border-3 border-[#3E2723] shadow-[6px_6px_0px_#3E2723] overflow-hidden p-4 sm:p-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
            
            {/* Left: Compact Video Embed */}
            <div className="lg:col-span-7">
              <div className="relative aspect-video rounded-xl overflow-hidden border-2 border-[#3E2723] shadow-[3px_3px_0px_#3E2723] bg-black">
                {isPlaying ? (
                  <iframe
                    key={currentEp.youtubeId}
                    src={`https://www.youtube.com/embed/${currentEp.youtubeId}?autoplay=1&rel=0`}
                    title={currentEp.title}
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
                      src={currentEp.thumbnail}
                      alt={currentEp.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
              </div>
              <div className="mt-3 flex items-center justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm sm:text-base font-black text-[#3E2723] truncate">
                    {currentEp.title}
                  </h3>
                  <p className="text-xs font-bold text-[#3E2723]/70 truncate mt-0.5 flex items-center gap-1.5">
                    <span>{currentEp.guest}</span>
                    <span>•</span>
                    <span className="text-gray-500">{currentEp.role}</span>
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 bg-[#004958]/10 text-[#004958] px-2.5 py-1 rounded-lg text-xs font-mono font-black flex-shrink-0 border border-[#004958]/30">
                  <Clock className="w-3 h-3" />
                  {currentEp.duration}
                </span>
              </div>
            </div>

            {/* Right: Brief Episode Selector */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div className="mb-2">
                <NeoDropdown
                  options={episodes.map((ep, idx) => ({
                    value: idx,
                    label: `${ep.guest}`,
                    icon: '🎙️',
                    badge: ep.duration,
                    description: ep.title
                  }))}
                  value={activeEpisode}
                  onChange={(idx) => {
                    setActiveEpisode(idx);
                    setIsPlaying(false);
                  }}
                  theme="teal"
                  size="sm"
                  placeholder="Jump to episode..."
                />
              </div>

              <div className="max-h-[220px] overflow-y-auto pr-1 space-y-1.5">
                {episodes.map((ep, index) => {
                  const isSelected = activeEpisode === index;
                  return (
                    <button
                      key={ep.id}
                      ref={(el) => (itemRefs.current[index] = el)}
                      onClick={() => {
                        setActiveEpisode(index);
                        setIsPlaying(false);
                      }}
                      className={`w-full text-left p-2 rounded-xl border transition-all flex items-center gap-2.5 ${
                        isSelected
                          ? 'bg-[#004958]/10 border-[#004958] shadow-[2px_2px_0px_#004958]'
                          : 'bg-[#F7F2E7]/60 hover:bg-[#F7F2E7] border-gray-200'
                      }`}
                    >
                      <div className="relative w-12 h-9 rounded-lg overflow-hidden border border-[#3E2723] flex-shrink-0 bg-black">
                        <img
                          src={ep.thumbnail}
                          alt={ep.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-xs font-black truncate ${isSelected ? 'text-[#004958]' : 'text-[#3E2723]'}`}>
                          {ep.guest}
                        </p>
                        <p className="text-[10px] text-gray-500 truncate">
                          {ep.role} • {ep.duration}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-3 pt-2 border-t border-gray-200 text-center">
                <Link
                  to="/media"
                  className="text-xs font-black text-[#004958] hover:text-[#00343F] inline-flex items-center gap-1 hover:underline"
                >
                  <span>See complete catalogue on /media</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

