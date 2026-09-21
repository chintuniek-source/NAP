import React, { useState } from 'react';
import { Sparkles, Heart, Check, QrCode, Shield, Zap, Smile, Coffee, Feather, Star, Download, PartyPopper } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BecomeANapperCTA() {
  const [napperName, setNapperName] = useState('Alex River');
  const [napperRole, setNapperRole] = useState('Breakfast Sommelier');
  const [napperEmoji, setNapperEmoji] = useState('🥞');
  const [membershipId, setMembershipId] = useState('NAP-7829-VIP');
  const [joined, setJoined] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const roles = [
    { title: 'Breakfast Sommelier', emoji: '🥞', wing: 'Sleep Over' },
    { title: 'Pillow Strategist', emoji: '🪶', wing: 'Sleep Over' },
    { title: 'An Alap Listener', emoji: '🎧', wing: 'Nap Media' },
    { title: 'PR Guerrilla Maverick', emoji: '⚡', wing: 'Image Management' },
    { title: 'Chief Sloth Officer', emoji: '🛋️', wing: 'Culture' }
  ];

  const emojis = ['😴', '🛋️', '🥞', '🪶', '🎧', '⚡', '☕', '✨', '🪐'];

  const handleJoin = (e) => {
    e.preventDefault();
    if (!userEmail) return;
    
    // Generate unique random membership number
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setMembershipId(`NAP-${randomNum}-VIP`);
    setJoined(true);

    // Multi-stage confetti celebration
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    setTimeout(() => {
      confetti({
        particleCount: 60,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
      confetti({
        particleCount: 60,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });
    }, 250);
  };

  return (
    <section id="become-a-napper" className="py-24 bg-[#FFEDA8]/40 border-t-3 border-[#320b35] relative overflow-hidden">
      
      {/* Playful background doodles */}
      <div className="absolute top-10 left-10 text-6xl opacity-20 pointer-events-none select-none">🛋️</div>
      <div className="absolute bottom-10 right-10 text-6xl opacity-20 pointer-events-none select-none">🥞</div>
      <div className="absolute top-1/2 right-20 text-6xl opacity-15 pointer-events-none select-none">✨</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Revision callout badge from the PDF requirement */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#320b35] border-2 border-[#320b35] shadow-[3px_3px_0px_#320b35] font-black text-xs uppercase tracking-wider mb-4">
            <span className="text-[#320b35]/50 line-through">Be a Volunteer</span>
            <span className="text-[#7E3940] font-black">➔</span>
            <span className="text-[#320b35] bg-[#CDD6B7] px-2 py-0.5 rounded-md">Become a napper</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-[#320b35] font-display tracking-tight">
            Stop volunteering. <br />
            <span className="text-[#7E3940] underline decoration-[#CDD6B7]">Become a napper.</span>
          </h2>
          
          <p className="mt-4 text-lg sm:text-xl font-bold text-[#320b35]/80 max-w-2xl mx-auto">
            We don’t do unpaid corporate chores. At NAP, you’re an insider, a taste-maker, a pillow warrior, and an essential spark of our culture.
          </p>
        </div>

        {/* Interactive Pass Generator & Perks Deck */}
        <div className="bg-white rounded-3xl border-3 border-[#320b35] shadow-[10px_10px_0px_#320b35] p-8 sm:p-12 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Form & Persona Picker */}
            <div className="lg:col-span-6">
              <h3 className="text-2xl font-black text-[#320b35] font-display">
                Create Your Digital Napper ID
              </h3>
              <p className="text-xs font-bold text-[#320b35]/70 mt-1">
                Customize your identity card in real-time below:
              </p>

              <form onSubmit={handleJoin} className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-black uppercase text-[#320b35]/70 mb-1">
                    Your Name / Alias
                  </label>
                  <input
                    type="text"
                    value={napperName}
                    onChange={(e) => setNapperName(e.target.value)}
                    placeholder="Enter your name"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-[#320b35] font-bold text-sm bg-[#F7F2E7] text-[#320b35] focus:ring-2 focus:ring-[#7E3940] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-[#320b35]/70 mb-1">
                    Choose Your Special Napper Role
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {roles.map((r) => (
                      <button
                        key={r.title}
                        type="button"
                        onClick={() => { setNapperRole(r.title); setNapperEmoji(r.emoji); }}
                        className={`px-3 py-2 rounded-xl text-xs font-black border-2 border-[#320b35] text-left transition-all flex items-center gap-1.5 ${
                          napperRole === r.title 
                            ? 'bg-[#FFEDA8] shadow-[2px_2px_0px_#320b35] text-[#320b35]' 
                            : 'bg-white hover:bg-[#FFEDA8]/30 text-[#320b35]'
                        }`}
                      >
                        <span>{r.emoji}</span>
                        <span className="truncate">{r.title}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-[#320b35]/70 mb-1">
                    Pick Your Spirit Icon
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {emojis.map((emoji) => (
                      <button
                        key={emoji}
                        type="button"
                        onClick={() => setNapperEmoji(emoji)}
                        className={`w-10 h-10 rounded-xl border-2 border-[#320b35] flex items-center justify-center text-lg transition-all ${
                          napperEmoji === emoji ? 'bg-[#7E3940] text-white scale-110 shadow-[2px_2px_0px_#320b35]' : 'bg-white hover:bg-[#FFEDA8]/30'
                        }`}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-[#320b35]/70 mb-1">
                    Your Best Email (For Passes & Invites)
                  </label>
                  <input
                    type="email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    placeholder="alex@napper.community"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-[#320b35] font-bold text-sm bg-[#F7F2E7] text-[#320b35] focus:ring-2 focus:ring-[#7E3940] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-black text-base bg-[#7E3940] hover:bg-[#6c3036] text-white border-2 border-[#320b35] shadow-[5px_5px_0px_#320b35] hover:shadow-[2px_2px_0px_#320b35] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center gap-2"
                >
                  <PartyPopper className="w-5 h-5 text-[#FFEDA8]" />
                  <span>{joined ? 'Regenerate Napper Pass' : 'Claim My Official Napper Pass'}</span>
                </button>
              </form>

              {/* Perks bullet list */}
              <div className="mt-6 pt-5 border-t-2 border-[#320b35]/20 grid grid-cols-2 gap-2 text-[11px] font-extrabold text-[#320b35]">
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#7E3940]" />
                  <span>VIP Pillow Fight Tournaments</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#7E3940]" />
                  <span>Breakfast Castle Food Tastings</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#7E3940]" />
                  <span>Live An Alap Couch Passes</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#7E3940]" />
                  <span>Exclusive NAP Merch & Stickers</span>
                </div>
              </div>
            </div>

            {/* Right Column: Live Rendered Membership Pass */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <div className="w-full max-w-sm rounded-3xl bg-gradient-to-br from-[#7E3940] via-[#004958] to-[#FFEDA8] p-1 border-3 border-[#320b35] shadow-[8px_8px_0px_#320b35] transform rotate-1 hover:rotate-0 transition-transform">
                <div className="bg-[#F7F2E7] rounded-[22px] p-6 text-[#320b35] relative overflow-hidden border-2 border-[#320b35]">
                  
                  {/* Card Header */}
                  <div className="flex items-center justify-between border-b-2 border-[#320b35] pb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#FFEDA8] border border-[#320b35] overflow-hidden flex items-center justify-center">
                        <img src="/NAP.png" alt="NAP Logo" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <span className="font-black text-lg tracking-tight font-display text-[#320b35]">NAP</span>
                        <p className="text-[9px] font-bold text-[#7E3940] -mt-1 font-handwriting">its time to take one :)</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-[#CDD6B7] text-[#320b35] border border-[#320b35] uppercase tracking-wider">
                      MEMBER ID
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="my-6 text-center">
                    <div className="w-24 h-24 rounded-2xl bg-white border-3 border-[#320b35] shadow-[4px_4px_0px_#320b35] mx-auto flex items-center justify-center text-5xl mb-3">
                      {napperEmoji}
                    </div>
                    <h4 className="text-2xl font-black font-display text-[#320b35]">
                      {napperName || 'Your Name'}
                    </h4>
                    <p className="text-xs font-black text-[#7E3940] bg-[#FFEDA8] inline-block px-3 py-0.5 rounded-full border border-[#320b35]/30 mt-1">
                      {napperRole}
                    </p>
                  </div>

                  {/* Pass Meta */}
                  <div className="bg-white p-3 rounded-xl border border-[#320b35] flex items-center justify-between text-xs font-mono font-bold mb-4">
                    <div>
                      <p className="text-[9px] text-[#320b35]/60 uppercase">PASS IDENTIFIER</p>
                      <p className="font-black text-[#320b35]">{membershipId}</p>
                    </div>
                    <div>
                      <p className="text-[9px] text-[#320b35]/60 uppercase">STATUS</p>
                      <p className="font-black text-[#004958]">LIFETIME ACTIVE</p>
                    </div>
                  </div>

                  {/* Simulated barcode / decorative stamp */}
                  <div className="flex items-center justify-between pt-2 border-t-2 border-dashed border-[#320b35]/40">
                    <div className="flex items-center gap-1 text-[10px] font-bold text-[#320b35]/70">
                      <QrCode className="w-4 h-4 text-[#320b35]" />
                      <span>OFFICIAL CITIZEN OF NAP</span>
                    </div>
                    <span className="text-xs font-black text-[#320b35]">2026 EDITION</span>
                  </div>

                </div>
              </div>

              {joined && (
                <div className="mt-4 p-3 bg-[#CDD6B7]/40 border-2 border-[#320b35] rounded-xl text-center text-xs font-bold text-[#320b35] animate-in fade-in">
                  🎉 Welcome to the community, <strong>{napperName}</strong>! Check your inbox for your digital wallet pass.
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
