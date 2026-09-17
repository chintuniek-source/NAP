import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Headphones, Sparkles, ExternalLink, Clock, ArrowRight } from 'lucide-react';
import { episodes } from '../data/episodes';

export default function NapMedia() {
  const [activeEpisode, setActiveEpisode] = useState(0);
  const currentEp = episodes[activeEpisode];

  return (
    <section id="a-alap" className="py-12 sm:py-16 bg-[#FAF5FF] border-t-3 border-[#1E1E24] relative overflow-hidden">
      {/* Soft background ambient blur */}
      <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[#845EC2]/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brief Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#845EC2] text-white border-2 border-[#1E1E24] shadow-[2px_2px_0px_#1E1E24] font-black text-[11px] uppercase tracking-wider mb-2">
              <Sparkles className="w-3 h-3 fill-white" />
              <span>Series Spotlight</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1E1E24] font-display tracking-tight">
              A Alap <span className="font-handwriting text-2xl sm:text-3xl text-[#845EC2] font-normal">(এ আলাপ)</span>
            </h2>
            <p className="text-xs sm:text-sm font-bold text-gray-600 mt-0.5">
              Intimate acoustic conversations & unfiltered stories with creators and icons.
            </p>
          </div>

          <Link
            to="/media"
            className="px-4 py-2 rounded-xl text-xs font-black bg-white hover:bg-gray-50 text-[#1E1E24] border-2 border-[#1E1E24] shadow-[3px_3px_0px_#1E1E24] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-1.5"
          >
            <span>All 14 Episodes</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Compact Showcase Card */}
        <div className="bg-white rounded-2xl border-3 border-[#1E1E24] shadow-[6px_6px_0px_#1E1E24] overflow-hidden p-4 sm:p-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
            
            {/* Left: Compact Video Embed */}
            <div className="lg:col-span-7">
              <div className="relative aspect-video rounded-xl overflow-hidden border-2 border-[#1E1E24] shadow-[3px_3px_0px_#1E1E24] bg-black">
                <iframe
                  key={currentEp.youtubeId}
                  src={`https://www.youtube.com/embed/${currentEp.youtubeId}?rel=0`}
                  title={currentEp.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                ></iframe>
              </div>
              <div className="mt-3 flex items-center justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm sm:text-base font-black text-[#1E1E24] truncate">
                    {currentEp.title}
                  </h3>
                  <p className="text-xs font-bold text-gray-600 truncate mt-0.5 flex items-center gap-1.5">
                    <span>{currentEp.guest}</span>
                    <span>•</span>
                    <span className="text-gray-500">{currentEp.role}</span>
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 bg-[#845EC2]/10 text-[#845EC2] px-2.5 py-1 rounded-lg text-xs font-mono font-black flex-shrink-0 border border-[#845EC2]/30">
                  <Clock className="w-3 h-3" />
                  {currentEp.duration}
                </span>
              </div>
            </div>

            {/* Right: Brief Episode Selector */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-200">
                <span className="text-xs font-black uppercase text-gray-500 tracking-wider flex items-center gap-1.5">
                  <Headphones className="w-3.5 h-3.5 text-[#845EC2]" />
                  <span>Quick Selector</span>
                </span>
                <span className="text-[11px] font-bold text-[#845EC2]">
                  {activeEpisode + 1} of {episodes.length}
                </span>
              </div>

              <div className="max-h-[250px] overflow-y-auto pr-1 space-y-1.5">
                {episodes.map((ep, index) => {
                  const isSelected = activeEpisode === index;
                  return (
                    <button
                      key={ep.id}
                      onClick={() => setActiveEpisode(index)}
                      className={`w-full text-left p-2 rounded-xl border transition-all flex items-center gap-2.5 ${
                        isSelected
                          ? 'bg-[#845EC2]/10 border-[#845EC2] shadow-[2px_2px_0px_#845EC2]'
                          : 'bg-gray-50 hover:bg-gray-100 border-gray-200'
                      }`}
                    >
                      <div className="relative w-12 h-9 rounded-lg overflow-hidden border border-black flex-shrink-0 bg-black">
                        <img
                          src={ep.thumbnail}
                          alt={ep.title}
                          className="w-full h-full object-cover"
                        />
                        {isSelected && (
                          <div className="absolute inset-0 bg-[#845EC2]/50 flex items-center justify-center">
                            <Play className="w-3 h-3 fill-white text-white" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-xs font-black truncate ${isSelected ? 'text-[#845EC2]' : 'text-[#1E1E24]'}`}>
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
                  className="text-xs font-black text-[#845EC2] hover:text-[#6a43a8] inline-flex items-center gap-1 hover:underline"
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

