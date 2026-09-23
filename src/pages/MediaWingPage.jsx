import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Play, 
  Pause, 
  Headphones, 
  Sparkles, 
  Share2, 
  Clock, 
  Mail, 
  Phone, 
  Instagram, 
  ExternalLink, 
  Search, 
  X, 
  List, 
  Grid, 
  Check, 
  ChevronUp, 
  Film, 
  Mic, 
  Music,
  Radio, 
  Tv,
  ArrowUpRight
} from 'lucide-react';
import { episodes } from '../data/episodes';

export default function MediaWingPage({ onOpenJoin }) {
  const [activeEp, setActiveEp] = useState(episodes.length > 0 ? episodes.length - 1 : 0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('list'); // 'list' | 'grid'
  const [copiedId, setCopiedId] = useState(null);
  const [showStickyPlayer, setShowStickyPlayer] = useState(false);
  const [isStickyDismissed, setIsStickyDismissed] = useState(false);

  const playerRef = useRef(null);
  const itemRefs = useRef([]);

  const current = episodes[activeEp] || episodes[0];

  // Auto-scroll the archive list to the selected episode on desktop if within scroll area
  useEffect(() => {
    if (itemRefs.current[activeEp]) {
      itemRefs.current[activeEp].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }, [activeEp]);

  // Observer to show mobile sticky bottom mini-player when user scrolls past the main player
  useEffect(() => {
    const handleScroll = () => {
      if (!playerRef.current) return;
      const rect = playerRef.current.getBoundingClientRect();
      // Show sticky bar when the bottom of the main player has scrolled above 100px from top
      if (rect.bottom < 100) {
        setShowStickyPlayer(true);
      } else {
        setShowStickyPlayer(false);
        setIsStickyDismissed(false); // Reset dismissal once scrolled back up
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Category definitions & helper
  const categories = [
    { id: 'all', label: 'All', fullLabel: 'All Episodes', icon: Headphones },
    { id: 'actors', label: 'Actors', fullLabel: 'Actors', icon: Mic },
    { id: 'filmmakers', label: 'Film', fullLabel: 'Filmmakers', icon: Film },
    { id: 'musicians', label: 'Music', fullLabel: 'Musicians', icon: Music },
    { id: 'creators', label: 'Creators', fullLabel: 'Creators', icon: Radio },
  ];

  const matchesCategory = (ep, category) => {
    if (category === 'all') return true;
    const roleText = `${ep.role} ${ep.title}`.toLowerCase();
    if (category === 'filmmakers') {
      return roleText.includes('film') || roleText.includes('director') || roleText.includes('playwright');
    }
    if (category === 'actors') {
      return roleText.includes('actor') || roleText.includes('actress');
    }
    if (category === 'musicians') {
      return roleText.includes('music') || roleText.includes('composer') || roleText.includes('song');
    }
    if (category === 'creators') {
      return roleText.includes('creator') || roleText.includes('digital') || roleText.includes('youtube') || roleText.includes('cartel') || roleText.includes('special') || roleText.includes('activist');
    }
    return true;
  };

  // Filter episodes based on search query and category
  const filteredEpisodes = useMemo(() => {
    return episodes.filter((ep) => {
      const matchCat = matchesCategory(ep, selectedCategory);
      if (!matchCat) return false;

      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase();
      const searchable = `${ep.title} ${ep.guest} ${ep.role} ${ep.badge} ${ep.description}`.toLowerCase();
      return searchable.includes(query);
    });
  }, [searchQuery, selectedCategory]);

  const scrollToPlayer = () => {
    if (playerRef.current) {
      const yOffset = -90; // Navbar height offset
      const y = playerRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleSelectEpisode = (index, shouldPlay = true) => {
    setActiveEp(index);
    if (shouldPlay) {
      setIsPlaying(true);
    }
    // On mobile / tablet, scroll smoothly to the player
    if (window.innerWidth < 1024) {
      scrollToPlayer();
    }
  };

  const handleCopyLink = (e, ep) => {
    e.stopPropagation();
    const url = ep.url || `https://youtu.be/${ep.youtubeId}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopiedId(ep.id);
      setTimeout(() => setCopiedId(null), 2200);
    }
  };

  return (
    <div className="pt-24 pb-20 bg-[#F7F2E7] min-h-screen">
      
      {/* Banner */}
      <section className="bg-gradient-to-b from-[#CDD6B7]/30 to-[#F7F2E7] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b-3 border-[#320b35]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#004958] text-white border-2 border-[#320b35] shadow-[2px_2px_0px_#320b35] text-xs font-black uppercase tracking-wider mb-4">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>Nap Media Presents</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-[#320b35] font-display tracking-tight">
            Media Wing
          </h1>
          
          <p className="mt-3 sm:mt-4 text-xl sm:text-3xl font-extrabold text-[#004958] font-handwriting">
            Nap Media • Home to An Aalap
          </p>
          
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-[#320b35]/80 max-w-2xl mx-auto font-medium leading-relaxed">
            We produce intimate acoustic concerts, thoughtful conversations, and tactile storytelling created for unhurried ears.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mt-8 sm:mt-16 space-y-12 sm:space-y-20">
        
        {/* AN AALAP FLAGSHIP PLAYER & ARCHIVE MODULE */}
        <section 
          ref={playerRef} 
          className="bg-white rounded-3xl border-3 border-[#320b35] shadow-[8px_8px_0px_#320b35] sm:shadow-[10px_10px_0px_#320b35] overflow-hidden"
        >
          {/* Header Bar */}
          <div className="bg-[#004958] text-white p-5 sm:p-8 border-b-3 border-[#320b35] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-md bg-[#FFEDA8] text-[#320b35] font-mono text-[11px] font-black uppercase border border-[#320b35]">
                  Flagship Talk Show
                </span>
                <span className="text-xs text-[#CDD6B7] font-bold">
                  • Season 01
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
                An Aalap
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-white/90 mt-0.5">
                Intimate Acoustic Explorations & Unfiltered Conversations
              </p>
            </div>
            
            <div className="flex items-center gap-3 self-end sm:self-center">
              <div className="hidden sm:flex flex-col items-end text-right">
                <span className="text-[11px] font-mono font-bold text-white/80">TOTAL CATALOGUE</span>
                <span className="text-sm font-black text-[#FFEDA8]">{episodes.length} EPISODES</span>
              </div>
              <span className="text-4xl sm:text-5xl select-none">🎙️</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* 1. Main Player Console (Desktop Left / Mobile Top) */}
            <div className="lg:col-span-7 p-4 sm:p-7 md:p-8 flex flex-col justify-between border-b-3 lg:border-b-0 lg:border-r-3 border-[#320b35] bg-white">
              <div>
                {/* Responsive 16:9 Video Frame */}
                <div className="relative aspect-video rounded-2xl overflow-hidden border-3 border-[#320b35] shadow-[4px_4px_0px_#320b35] sm:shadow-[6px_6px_0px_#320b35] bg-black mb-5 sm:mb-6 group">
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
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Big Tactile Play Button Overlay */}
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all flex items-center justify-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#FFEDA8] group-hover:bg-white text-[#320b35] border-3 border-[#320b35] shadow-[4px_4px_0px_#320b35] flex items-center justify-center transition-all group-hover:scale-110 group-active:scale-95">
                          <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-[#320b35] ml-1" />
                        </div>
                      </div>

                      <div className="absolute top-3 left-3 bg-[#320b35] text-white text-[11px] font-black px-2.5 py-1 rounded-lg border border-[#FFEDA8] shadow-[2px_2px_0px_#000]">
                        TAP TO PLAY VIDEO
                      </div>
                      
                      <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm text-white text-xs font-mono font-black px-2.5 py-1 rounded-lg flex items-center gap-1 border border-white/20">
                        <Clock className="w-3.5 h-3.5 text-[#FFEDA8]" />
                        <span>{current.duration}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Status and Badge Row */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase text-[#004958] tracking-wider bg-[#004958]/10 px-2.5 py-0.5 rounded-full border border-[#004958]/30">
                      {isPlaying ? (
                        <>
                          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                          <span>NOW PLAYING</span>
                        </>
                      ) : (
                        <>
                          <Headphones className="w-3 h-3 text-[#004958]" />
                          <span>CURRENT EPISODE</span>
                        </>
                      )}
                    </span>
                    <span className="text-[11px] font-black px-2.5 py-0.5 rounded-full bg-[#004958] text-white border border-[#320b35] shadow-[2px_2px_0px_#320b35]">
                      {current.badge}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1 bg-[#FFEDA8] text-[#320b35] px-2.5 py-0.5 rounded-md text-xs border border-[#320b35] font-black font-mono shadow-[2px_2px_0px_#320b35]">
                    <Clock className="w-3.5 h-3.5 text-[#320b35]" />
                    {current.duration}
                  </span>
                </div>

                {/* Episode Title */}
                <h3 className="text-xl sm:text-3xl font-black text-[#320b35] font-display leading-snug">
                  {current.title}
                </h3>
                
                {/* Guest & Role meta */}
                <div className="text-xs sm:text-sm font-extrabold text-[#004958] mt-2.5 flex items-center gap-2 flex-wrap">
                  <span className="bg-[#FFEDA8]/60 text-[#320b35] px-2 py-0.5 rounded-md border border-[#320b35]/20 font-black">
                    Guest: {current.guest}
                  </span>
                  <span>•</span>
                  <span className="bg-[#004958]/10 text-[#004958] px-2 py-0.5 rounded-md text-xs border border-[#004958]/30 font-black">
                    {current.role}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-3.5 text-xs sm:text-base text-[#320b35]/85 leading-relaxed font-medium bg-[#F7F2E7]/70 p-3 sm:p-4 rounded-xl border border-[#320b35]/15">
                  {current.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 pt-4 border-t-2 border-dashed border-[#320b35]/20 flex flex-wrap items-center justify-between gap-2.5">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#320b35] hover:bg-[#48114d] text-white border-2 border-[#320b35] font-black text-xs shadow-[3px_3px_0px_#004958] active:translate-x-0.5 active:translate-y-0.5 transition-all"
                  >
                    {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white" />}
                    <span>{isPlaying ? 'Pause' : 'Play Video'}</span>
                  </button>

                  <a
                    href={current.url || `https://youtu.be/${current.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-[#FFEDA8] text-[#320b35] border-2 border-[#320b35] font-black text-xs shadow-[2px_2px_0px_#320b35] active:translate-x-0.5 active:translate-y-0.5 transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-[#004958]" />
                    <span>Watch on YouTube</span>
                  </a>
                </div>

                <button
                  onClick={(e) => handleCopyLink(e, current)}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#CDD6B7] hover:bg-[#bcc6a3] text-[#320b35] border-2 border-[#320b35] font-black text-xs shadow-[2px_2px_0px_#320b35] active:translate-x-0.5 active:translate-y-0.5 transition-all"
                >
                  {copiedId === current.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-800 stroke-[3]" />
                      <span className="text-emerald-900">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5 text-[#320b35]" />
                      <span>Share Episode</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* 2. Redesigned Archive Section (Mobile-First & Desktop Companion) */}
            <div className="lg:col-span-5 p-4 sm:p-6 lg:p-7 bg-[#F7F2E7] flex flex-col justify-between">
              <div>
                
                {/* Archive Section Header */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b-2 border-[#320b35]/20">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-[#004958] text-white flex items-center justify-center border-2 border-[#320b35] shadow-[2px_2px_0px_#320b35] flex-shrink-0">
                      <Headphones className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-black text-lg sm:text-xl text-[#320b35] font-display leading-tight">
                        An Aalap Episodes Archive
                      </h4>
                      <p className="text-[11px] font-bold text-[#004958] hidden sm:block">
                        Browse all recorded sessions & specials
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-black bg-[#FFEDA8] text-[#320b35] px-2.5 py-1 rounded-full border-2 border-[#320b35] shadow-[2px_2px_0px_#320b35] flex-shrink-0 font-mono">
                    {filteredEpisodes.length} / {episodes.length}
                  </span>
                </div>

                {/* Search Bar */}
                <div className="relative mb-3">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-[#320b35]/60" />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by guest, title, role..."
                    className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm font-bold bg-white text-[#320b35] placeholder-[#320b35]/40 rounded-xl border-2 border-[#320b35] shadow-[2px_2px_0px_#320b35] focus:outline-none focus:ring-2 focus:ring-[#004958]"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-[#320b35]/60 hover:text-[#320b35]"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>

                {/* Category Filter Chips (5 in a Single Row, Fits cleanly with no scrollbar) */}
                <div className="grid grid-cols-5 gap-1 sm:gap-1.5 mb-3">
                  {categories.map((cat) => {
                    const isSelected = selectedCategory === cat.id;
                    const Icon = cat.icon;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`flex items-center justify-center gap-0.5 sm:gap-1 px-1 sm:px-2 py-2 rounded-xl text-[10px] sm:text-xs font-black transition-all border-2 border-[#320b35] ${
                          isSelected
                            ? 'bg-[#004958] text-white shadow-[2px_2px_0px_#320b35] -translate-y-0.5'
                            : 'bg-white text-[#320b35] hover:bg-[#FFEDA8] shadow-[1px_1px_0px_#320b35]'
                        }`}
                      >
                        <Icon className={`w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0 ${isSelected ? 'text-[#FFEDA8]' : 'text-[#004958]'}`} />
                        <span className="truncate">
                          <span className="inline md:hidden lg:inline xl:hidden">{cat.label}</span>
                          <span className="hidden md:inline lg:hidden xl:inline">{cat.fullLabel || cat.label}</span>
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* View Mode Switcher & Filter Info */}
                <div className="flex items-center justify-between gap-2 mb-3 px-1 text-[11px] font-bold text-[#320b35]/70">
                  <span>
                    {searchQuery ? `Results for "${searchQuery}"` : `Showing ${selectedCategory === 'all' ? 'all' : selectedCategory} episodes`}
                  </span>

                  {/* View Switcher: List vs Cards */}
                  <div className="flex items-center gap-1 bg-white/80 p-0.5 rounded-lg border border-[#320b35]/30">
                    <button
                      onClick={() => setViewMode('list')}
                      title="Compact List View"
                      className={`p-1 rounded-md transition-all ${
                        viewMode === 'list'
                          ? 'bg-[#004958] text-white'
                          : 'text-[#320b35]/70 hover:text-[#320b35]'
                      }`}
                    >
                      <List className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setViewMode('grid')}
                      title="Cards View"
                      className={`p-1 rounded-md transition-all ${
                        viewMode === 'grid'
                          ? 'bg-[#004958] text-white'
                          : 'text-[#320b35]/70 hover:text-[#320b35]'
                      }`}
                    >
                      <Grid className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Episodes List / Feed Container */}
                <div className="max-h-[500px] lg:max-h-[560px] overflow-y-auto pr-1 space-y-2.5 focus:outline-none">
                  {filteredEpisodes.length === 0 ? (
                    <div className="text-center py-10 px-4 bg-white/60 rounded-2xl border-2 border-dashed border-[#320b35]/30">
                      <p className="text-3xl mb-2">🔍</p>
                      <p className="text-sm font-black text-[#320b35]">No episodes found</p>
                      <p className="text-xs text-gray-500 mt-1">Try searching for another artist or clearing the filter.</p>
                      <button
                        onClick={() => {
                          setSearchQuery('');
                          setSelectedCategory('all');
                        }}
                        className="mt-3 px-3 py-1.5 rounded-xl bg-[#FFEDA8] text-[#320b35] border-2 border-[#320b35] text-xs font-black shadow-[2px_2px_0px_#320b35]"
                      >
                        Reset Filters
                      </button>
                    </div>
                  ) : (
                    filteredEpisodes.map((ep) => {
                      const realIndex = episodes.findIndex((e) => e.id === ep.id);
                      const isSelected = activeEp === realIndex;

                      // VIEW MODE: COMPACT LIST
                      if (viewMode === 'list') {
                        return (
                          <div
                            key={ep.id}
                            ref={(el) => (itemRefs.current[realIndex] = el)}
                            onClick={() => handleSelectEpisode(realIndex, true)}
                            className={`group relative p-3 rounded-2xl border-2 border-[#320b35] cursor-pointer transition-all duration-200 ${
                              isSelected
                                ? 'bg-white shadow-[4px_4px_0px_#320b35] translate-x-1 border-[#004958] ring-2 ring-[#004958]/20'
                                : 'bg-white/90 hover:bg-white shadow-[2px_2px_0px_#320b35] hover:translate-x-0.5'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              {/* Thumbnail with overlay duration */}
                              <div className="relative w-20 sm:w-24 h-14 sm:h-16 rounded-xl overflow-hidden border-2 border-[#320b35] flex-shrink-0 bg-black group-hover:scale-[1.02] transition-transform">
                                <img
                                  src={ep.thumbnail}
                                  alt={ep.title}
                                  className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors flex items-center justify-center">
                                  <div className={`w-6 h-6 rounded-full flex items-center justify-center border border-[#320b35] ${
                                    isSelected ? 'bg-[#FFEDA8] text-[#320b35]' : 'bg-white/90 text-[#320b35] opacity-0 group-hover:opacity-100'
                                  } transition-all`}>
                                    <Play className="w-3 h-3 fill-current ml-0.5" />
                                  </div>
                                </div>
                                <span className="absolute bottom-1 right-1 bg-black/80 text-white font-mono text-[9px] font-black px-1 py-0.2 rounded">
                                  {ep.duration}
                                </span>
                              </div>

                              {/* Details */}
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-1.5 flex-wrap">
                                  <span className="text-[10px] font-black px-1.5 py-0.2 bg-[#004958]/10 text-[#004958] rounded border border-[#004958]/30">
                                    {ep.badge}
                                  </span>
                                  <span className="text-[11px] font-black text-gray-500">
                                    {ep.role}
                                  </span>
                                </div>

                                <p className={`text-xs sm:text-sm font-black truncate mt-1 ${isSelected ? 'text-[#004958]' : 'text-[#320b35]'}`}>
                                  {ep.guest}
                                </p>
                                
                                <p className="text-[11px] font-semibold text-[#320b35]/70 truncate">
                                  {ep.title}
                                </p>
                              </div>

                              {/* Right Action / Active Equalizer */}
                              <div className="flex flex-col items-end justify-between flex-shrink-0 pl-1">
                                {isSelected ? (
                                  <div className="flex items-end gap-0.5 h-4 px-1.5 py-1 bg-[#004958] rounded-md border border-[#320b35] shadow-[1px_1px_0px_#320b35]">
                                    <span className="w-1 bg-[#FFEDA8] rounded-full animate-pulse h-2"></span>
                                    <span className="w-1 bg-[#FFEDA8] rounded-full animate-pulse delay-75 h-3.5"></span>
                                    <span className="w-1 bg-[#FFEDA8] rounded-full animate-pulse delay-150 h-2.5"></span>
                                  </div>
                                ) : (
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleSelectEpisode(realIndex, true);
                                    }}
                                    className="w-7 h-7 rounded-lg bg-[#F7F2E7] hover:bg-[#FFEDA8] text-[#320b35] border border-[#320b35] flex items-center justify-center shadow-[1px_1px_0px_#320b35] transition-all"
                                    title="Play Now"
                                  >
                                    <Play className="w-3.5 h-3.5 fill-[#320b35] ml-0.5" />
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      }

                      // VIEW MODE: RICH CARDS (MOBILE-FIRST CARDS)
                      return (
                        <div
                          key={ep.id}
                          ref={(el) => (itemRefs.current[realIndex] = el)}
                          onClick={() => handleSelectEpisode(realIndex, true)}
                          className={`group rounded-2xl border-2 border-[#320b35] overflow-hidden cursor-pointer transition-all duration-200 ${
                            isSelected
                              ? 'bg-white shadow-[5px_5px_0px_#320b35] border-[#004958] ring-2 ring-[#004958]/20'
                              : 'bg-white/95 hover:bg-white shadow-[3px_3px_0px_#320b35] hover:translate-y-[-2px]'
                          }`}
                        >
                          {/* Card Thumbnail Top */}
                          <div className="relative aspect-video w-full overflow-hidden bg-black border-b-2 border-[#320b35]">
                            <img
                              src={ep.thumbnail}
                              alt={ep.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/25 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                              <div className="w-11 h-11 rounded-xl bg-[#FFEDA8] text-[#320b35] border-2 border-[#320b35] shadow-[2px_2px_0px_#320b35] flex items-center justify-center transform group-hover:scale-110 transition-transform">
                                <Play className="w-5 h-5 fill-[#320b35] ml-0.5" />
                              </div>
                            </div>

                            <div className="absolute top-2 left-2 flex items-center gap-1.5">
                              <span className="bg-[#320b35] text-white text-[10px] font-black px-2 py-0.5 rounded-md border border-white/30 shadow-[1px_1px_0px_#000]">
                                {ep.badge}
                              </span>
                            </div>

                            <span className="absolute bottom-2 right-2 bg-black/80 text-white font-mono text-[10px] font-black px-2 py-0.5 rounded-md flex items-center gap-1">
                              <Clock className="w-3 h-3 text-[#FFEDA8]" />
                              {ep.duration}
                            </span>
                          </div>

                          {/* Card Body */}
                          <div className="p-3.5">
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-xs font-black text-[#004958]">
                                {ep.guest}
                              </span>
                              <span className="text-[10px] font-bold text-[#320b35]/70 bg-[#F7F2E7] px-2 py-0.5 rounded-full border border-[#320b35]/20">
                                {ep.role}
                              </span>
                            </div>

                            <h5 className="font-black text-xs sm:text-sm text-[#320b35] mt-1 leading-snug line-clamp-2">
                              {ep.title}
                            </h5>

                            <p className="text-[11px] text-[#320b35]/70 line-clamp-2 mt-1.5 font-medium">
                              {ep.description}
                            </p>

                            {/* Card Footer Actions */}
                            <div className="mt-3 pt-2.5 border-t border-gray-200 flex items-center justify-between gap-2">
                              <span className="inline-flex items-center gap-1 text-[11px] font-black text-[#004958] group-hover:underline">
                                <Play className="w-3 h-3 fill-[#004958]" />
                                <span>{isSelected ? 'Now Selected' : 'Tap to Play'}</span>
                              </span>

                              <div className="flex items-center gap-1.5">
                                <button
                                  onClick={(e) => handleCopyLink(e, ep)}
                                  className="p-1.5 rounded-lg bg-[#F7F2E7] hover:bg-[#FFEDA8] text-[#320b35] border border-[#320b35] text-xs transition-all"
                                  title="Copy Link"
                                >
                                  {copiedId === ep.id ? (
                                    <Check className="w-3 h-3 text-emerald-800" />
                                  ) : (
                                    <Share2 className="w-3 h-3" />
                                  )}
                                </button>
                                <a
                                  href={ep.url || `https://youtu.be/${ep.youtubeId}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                  className="p-1.5 rounded-lg bg-[#F7F2E7] hover:bg-[#FFEDA8] text-[#320b35] border border-[#320b35] text-xs transition-all"
                                  title="Watch on YouTube"
                                >
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>

              </div>

              {/* Bottom Quick Help Note on Mobile/Desktop */}
              <div className="mt-4 pt-3 border-t-2 border-dashed border-[#320b35]/20 flex items-center justify-between text-[11px] font-bold text-[#320b35]/70">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#004958]" />
                  <span>Tap any card to watch</span>
                </span>
                <span className="font-mono text-[10px] text-[#004958] bg-white px-2 py-0.5 rounded border border-[#320b35]/20">
                  Total: {episodes.length} Episodes
                </span>
              </div>

            </div>

          </div>
        </section>

        {/* STICKY MOBILE MINI-PLAYER (Floating Bottom Bar for Mobile Ergonomics) */}
        {showStickyPlayer && !isStickyDismissed && (
          <div className="fixed bottom-4 left-3 right-3 z-40 lg:hidden transition-all duration-300 transform translate-y-0">
            <div className="bg-[#320b35] text-white p-3 rounded-2xl border-3 border-[#320b35] shadow-[5px_5px_0px_#004958] flex items-center justify-between gap-3">
              
              {/* Left: Thumbnail & Info */}
              <div 
                onClick={scrollToPlayer}
                className="flex items-center gap-2.5 min-w-0 flex-1 cursor-pointer"
              >
                <div className="relative w-12 h-10 rounded-lg overflow-hidden border border-[#FFEDA8] flex-shrink-0 bg-black">
                  <img
                    src={current.thumbnail}
                    alt={current.title}
                    className="w-full h-full object-cover"
                  />
                  {isPlaying && (
                    <span className="absolute bottom-0.5 right-0.5 w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-mono text-[#FFEDA8] font-bold uppercase tracking-wider truncate">
                    {isPlaying ? '▶ NOW PLAYING' : 'READY • TAP TO WATCH'}
                  </p>
                  <p className="text-xs font-black text-white truncate">
                    {current.guest}
                  </p>
                  <p className="text-[10px] text-white/70 truncate">
                    {current.role} • {current.duration}
                  </p>
                </div>
              </div>

              {/* Right: Actions */}
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-8 h-8 rounded-xl bg-[#FFEDA8] text-[#320b35] border border-[#320b35] flex items-center justify-center shadow-[1px_1px_0px_#000] active:scale-95 transition-transform"
                  title={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause className="w-4 h-4 fill-[#320b35]" /> : <Play className="w-4 h-4 fill-[#320b35] ml-0.5" />}
                </button>

                <button
                  onClick={scrollToPlayer}
                  className="px-2.5 py-1.5 rounded-xl bg-[#004958] hover:bg-[#003d4a] text-white text-xs font-black border border-[#FFEDA8]/40 shadow-[1px_1px_0px_#000] flex items-center gap-1"
                >
                  <ChevronUp className="w-3.5 h-3.5" />
                  <span className="hidden xs:inline">Top</span>
                </button>

                <button
                  onClick={() => setIsStickyDismissed(true)}
                  className="p-1 rounded-lg text-white/60 hover:text-white"
                  title="Dismiss mini bar"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        )}

        {/* Creator Pitch Box / Contact Details */}
        <section className="bg-gradient-to-r from-[#004958] to-[#00343F] p-6 sm:p-10 md:p-12 rounded-3xl border-3 border-[#320b35] shadow-[8px_8px_0px_#320b35] text-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="bg-white text-[#320b35] font-black text-xs px-3.5 py-1 rounded-full uppercase border-2 border-[#320b35] shadow-[2px_2px_0px_#320b35]">
                Creator Open Call
              </span>
              <h3 className="text-2xl sm:text-4xl font-black font-display mt-3 text-white">
                Pitch Yourself for An Aalap
              </h3>
              <p className="text-xs sm:text-sm text-white/90 font-semibold mt-1 max-w-xl mx-auto">
                Are you an indie musician, storyteller, poet, or cultural explorer? Reach out to our curation team directly.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-5 sm:p-8 rounded-2xl border border-white/30">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* Email Card */}
                <div className="bg-[#F7F2E7] p-5 rounded-2xl border-2 border-[#320b35] shadow-[4px_4px_0px_#320b35] text-[#320b35] flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#004958] text-white flex items-center justify-center mb-3 border-2 border-[#320b35] shadow-[2px_2px_0px_#320b35]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <h4 className="font-black text-sm uppercase tracking-wide text-[#320b35]">Email Pitch</h4>
                    <p className="text-xs font-semibold text-[#320b35]/70 mt-1">
                      Send your audio/video demo links, story bio, and pitch notes.
                    </p>
                  </div>
                  <a
                    href="mailto:nap@nappers.in?subject=An%20Aalap%20Creator%20Pitch"
                    className="mt-4 inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-3 rounded-xl bg-[#FFEDA8] hover:bg-[#ffe380] text-[#320b35] border-2 border-[#320b35] font-black text-xs shadow-[2px_2px_0px_#320b35] transition-all hover:translate-x-0.5 hover:translate-y-0.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    nap@nappers.in
                  </a>
                </div>

                {/* Direct Line / WhatsApp */}
                <div className="bg-[#F7F2E7] p-5 rounded-2xl border-2 border-[#320b35] shadow-[4px_4px_0px_#320b35] text-[#320b35] flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#320b35] text-white flex items-center justify-center mb-3 border-2 border-[#320b35] shadow-[2px_2px_0px_#320b35]">
                      <Phone className="w-5 h-5" />
                    </div>
                    <h4 className="font-black text-sm uppercase tracking-wide text-[#320b35]">Direct Desk</h4>
                    <p className="text-xs font-semibold text-[#320b35]/70 mt-1">
                      Call or message our media curation and production desk.
                    </p>
                  </div>
                  <a
                    href="tel:+918721892914"
                    className="mt-4 inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-3 rounded-xl bg-[#CDD6B7] hover:bg-[#bcc6a3] text-[#320b35] border-2 border-[#320b35] font-black text-xs shadow-[2px_2px_0px_#320b35] transition-all hover:translate-x-0.5 hover:translate-y-0.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    +91 87218 92914
                  </a>
                </div>

                {/* Socials & DMs */}
                <div className="bg-[#F7F2E7] p-5 rounded-2xl border-2 border-[#320b35] shadow-[4px_4px_0px_#320b35] text-[#320b35] flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#FFEDA8] text-[#320b35] border-2 border-[#320b35] flex items-center justify-center mb-3 shadow-[2px_2px_0px_#320b35]">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <h4 className="font-black text-sm uppercase tracking-wide text-[#320b35]">Instagram & DMs</h4>
                    <p className="text-xs font-semibold text-[#320b35]/70 mt-1">
                      Drop us a DM or tag us in your clips, jams and acoustic reels.
                    </p>
                  </div>
                  <a
                    href="https://www.instagram.com/nappers.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-3 rounded-xl bg-[#004958] hover:bg-[#003742] text-white border-2 border-[#320b35] font-black text-xs shadow-[2px_2px_0px_#320b35] transition-all hover:translate-x-0.5 hover:translate-y-0.5"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    @nappers.in
                  </a>
                </div>

              </div>

              {/* Extra note / Studio info */}
              <div className="mt-6 pt-4 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/90">
                <div className="flex items-center gap-2 font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#CDD6B7] animate-pulse"></span>
                  <span>NAP Media Wing</span>
                </div>
                <div className="text-white/80 font-semibold text-center sm:text-right">
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
