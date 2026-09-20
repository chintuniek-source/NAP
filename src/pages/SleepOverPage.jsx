import React, { useState } from 'react';
import { Sparkles, Coffee, Mic, Trophy, Heart, Check, Calendar, Users, ShieldCheck, Flame, Plus, RotateCcw, Ticket, Star } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SleepOverPage({ onOpenJoin }) {
  // State for interactive pancake stacker
  const [pancakeStack, setPancakeStack] = useState(['Buttermilk Base', 'Wild Blueberry Puree', 'Whipped Cloud Butter']);
  const [bookedArena, setBookedArena] = useState(false);
  const [pitchSubmitted, setPitchSubmitted] = useState(false);
  const [couchForm, setCouchForm] = useState({ name: '', talent: 'Spoken Word & Poetry', notes: '' });

  const toppings = [
    'Maple Syrup Drizzle 🍁',
    'Golden Honeycomb 🍯',
    'Dark Choco Chips 🍫',
    'Fresh Strawberries 🍓',
    'Fluffy Marshmallows ☁️',
    'Caramelized Banana 🍌'
  ];

  const addTopping = (top) => {
    if (pancakeStack.length >= 7) return;
    setPancakeStack([...pancakeStack, top]);
    confetti({
      particleCount: 25,
      spread: 40,
      origin: { y: 0.7 }
    });
  };

  const resetStack = () => {
    setPancakeStack(['Buttermilk Base']);
  };

  const handleBookArena = (e) => {
    e.preventDefault();
    setBookedArena(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  const handleCouchPitch = (e) => {
    e.preventDefault();
    setPitchSubmitted(true);
    confetti({
      particleCount: 50,
      spread: 50,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="pt-24 pb-20 bg-[#F7F2E7]">
      
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#FFEDA8]/50 to-[#F7F2E7] py-16 px-4 sm:px-6 lg:px-8 border-b-3 border-[#3E2723]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-[#3E2723] font-display tracking-tight">
            Sleep Over
          </h1>
          
          <p className="mt-4 text-2xl sm:text-3xl font-extrabold text-[#7E3940] font-handwriting">
            Community & Experience-Driven Activities
          </p>
          
          <p className="mt-4 text-base sm:text-lg text-[#3E2723]/80 max-w-2xl mx-auto font-medium leading-relaxed">
            A radical antidote to urban loneliness and work fatigue. Welcome to cozy lounges where pajamas are acceptable, laughter is mandatory, and strangers leave as lifelong friends.
          </p>

          {/* Quick jump pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#nap-o-casting" className="badge-sticker bg-white hover:bg-[#FFEDA8]">
              <span>🎙️ Nap-O-Casting</span>
            </a>
            <a href="#breakfast-castle" className="badge-sticker bg-white hover:bg-[#FFEDA8]">
              <span>🥞 Breakfast Castle</span>
            </a>
            <a href="#pillow-fight" className="badge-sticker bg-white hover:bg-[#CDD6B7]">
              <span>🪶 Pillow Fight Arena</span>
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-24">

        {/* 1. NAP-O-CASTING DEEP DIVE */}
        <section id="nap-o-casting" className="scroll-mt-28">
          <div className="bg-white rounded-3xl border-3 border-[#3E2723] shadow-[10px_10px_0px_#3E2723] overflow-hidden">
            <div className="bg-[#FFEDA8] p-8 border-b-3 border-[#3E2723] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl sm:text-5xl font-black text-[#3E2723] font-display">
                  Nap-O-Casting
                </h2>
                <p className="text-sm font-bold text-[#3E2723]/80 mt-1">The Chill Couch Audition & Open-Mic</p>
              </div>
              <span className="text-5xl">🎙️</span>
            </div>

            <div className="p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-7">
                <h3 className="text-2xl font-black text-[#3E2723] font-display">
                  No Spotlights. No Stage Fright. Just a Couch & a Mic.
                </h3>
                <p className="mt-3 text-base text-[#3E2723]/80 leading-relaxed font-medium">
                  Traditional open mics and audition rooms are designed to induce maximum anxiety. <strong>Nap-O-Casting</strong> flips the script: perform reclining on a velvet beanbag, tea in hand, among compassionate listeners who cheer for every syllable.
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-[#F7F2E7] border-2 border-[#3E2723]">
                    <p className="font-black text-sm text-[#3E2723]">🛋️ Cozy Lounge Formats</p>
                    <p className="text-xs text-gray-600 mt-1">Poetry, indie acoustic chords, comedic riffs, or sharing an unsolved existential thought.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#F7F2E7] border-2 border-[#3E2723]">
                    <p className="font-black text-sm text-[#3E2723]">📻 Broadcast on Nap Media</p>
                    <p className="text-xs text-gray-600 mt-1">Selected recordings are mastered and featured on our digital radio streams.</p>
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-4 text-xs font-bold text-gray-600">
                  <div className="flex items-center gap-1 bg-[#F7F2E7] px-3 py-2 rounded-xl border border-[#3E2723]">
                    <Calendar className="w-4 h-4 text-[#7E3940]" />
                    <span>Every Thursday • 7:00 PM</span>
                  </div>
                  <div className="flex items-center gap-1 bg-[#F7F2E7] px-3 py-2 rounded-xl border border-[#3E2723]">
                    <Users className="w-4 h-4 text-[#004958]" />
                    <span>Couch Capacity: 35</span>
                  </div>
                </div>
              </div>

              {/* Performer Couch Signup */}
              <div className="lg:col-span-5 bg-[#FFEDA8]/20 p-6 sm:p-8 rounded-2xl border-2 border-[#3E2723] shadow-[4px_4px_0px_#3E2723]">
                <h4 className="font-black text-lg text-[#3E2723] font-display">Grab the Mic Couch</h4>
                <p className="text-xs text-gray-600 mt-1">Pitch your 3-minute performance or story:</p>

                {!pitchSubmitted ? (
                  <form onSubmit={handleCouchPitch} className="mt-4 space-y-3">
                    <input
                      type="text"
                      placeholder="Your Name / Artist Handle"
                      required
                      value={couchForm.name}
                      onChange={(e) => setCouchForm({ ...couchForm, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border-2 border-[#3E2723] text-xs font-bold bg-white"
                    />
                    <select
                      value={couchForm.talent}
                      onChange={(e) => setCouchForm({ ...couchForm, talent: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border-2 border-[#3E2723] text-xs font-bold bg-white"
                    >
                      <option>Spoken Word & Poetry</option>
                      <option>Acoustic Guitar / Vocal</option>
                      <option>Unfinished Comedy Thoughts</option>
                      <option>Personal Storytelling</option>
                    </select>
                    <textarea
                      rows="2"
                      placeholder="What vibe are you bringing to the lounge?"
                      value={couchForm.notes}
                      onChange={(e) => setCouchForm({ ...couchForm, notes: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border-2 border-[#3E2723] text-xs font-bold bg-white"
                    ></textarea>
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl font-black text-xs bg-[#FFEDA8] text-[#3E2723] border-2 border-[#3E2723] shadow-[2px_2px_0px_#3E2723] hover:bg-[#ffe380]"
                    >
                      Submit Couch Reservation
                    </button>
                  </form>
                ) : (
                  <div className="py-6 text-center text-xs font-bold text-[#3E2723] space-y-2">
                    <div className="w-10 h-10 rounded-full bg-[#CDD6B7] border border-[#3E2723] mx-auto flex items-center justify-center font-black">
                      ✓
                    </div>
                    <p className="font-black text-sm">You are on the Couch List!</p>
                    <p>We saved a cushion for <strong>{couchForm.name}</strong>. Check your inbox for session timings.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 2. BREAKFAST CASTLE DEEP DIVE */}
        <section id="breakfast-castle" className="scroll-mt-28">
          <div className="bg-white rounded-3xl border-3 border-[#3E2723] shadow-[10px_10px_0px_#3E2723] overflow-hidden">
            <div className="bg-[#7E3940] text-white p-8 border-b-3 border-[#3E2723] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl sm:text-5xl font-black text-white font-display">
                  Breakfast Castle
                </h2>
                <p className="text-sm font-bold text-white/90 mt-1">Pancake Towers & The Unhurried Morning Club</p>
              </div>
              <span className="text-5xl">🥞</span>
            </div>

            <div className="p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6">
                <h3 className="text-2xl font-black text-[#3E2723] font-display">
                  Build Your Dream Tower, Sip Artisanal Coffee, Stay Till Noon.
                </h3>
                <p className="mt-3 text-base text-[#3E2723]/80 leading-relaxed font-medium">
                  We turned breakfast into a ceremonial playground. No clocks, no rush. Fluffy sourdough buttermilk pancakes, warm honeycombs, rooftop breeze, and gentle morning vinyl tunes.
                </p>

                <div className="mt-6 space-y-2.5 text-xs font-bold text-[#3E2723]">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#7E3940] text-white flex items-center justify-center text-[10px]">🥞</span>
                    <span>All-you-can-stack pancake & Belgian waffle station</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#7E3940] text-white flex items-center justify-center text-[10px]">☕</span>
                    <span>Single-origin cold brews and spiced cinnamon chai</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#7E3940] text-white flex items-center justify-center text-[10px]">📖</span>
                    <span>Reading nook with zines, comics, and art journals</span>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-[#FFEDA8]/40 rounded-2xl border-2 border-[#3E2723] flex items-center justify-between">
                  <div>
                    <p className="text-xs font-black text-[#3E2723]">Weekend Brunch Pass: Free for Nappers</p>
                    <p className="text-[11px] text-gray-600">Every Sunday • 8:30 AM to 1:00 PM</p>
                  </div>
                  <button
                    onClick={onOpenJoin}
                    className="px-4 py-2 rounded-xl bg-[#7E3940] text-white font-black text-xs border border-[#3E2723] shadow-[2px_2px_0px_#3E2723]"
                  >
                    Claim Seat
                  </button>
                </div>
              </div>

              {/* Interactive Pancake Tower Toy */}
              <div className="lg:col-span-6 bg-[#F7F2E7] p-6 sm:p-8 rounded-3xl border-3 border-[#3E2723] shadow-[4px_4px_0px_#3E2723] text-center">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black uppercase text-[#7E3940]">Interactive Pancake Lab</span>
                  <span className="text-xs font-mono font-bold bg-white px-2 py-0.5 rounded border border-[#3E2723]">
                    Stack: {pancakeStack.length} Layers
                  </span>
                </div>

                {/* Pancake Visualizer */}
                <div className="h-44 flex flex-col-reverse items-center justify-start gap-1 p-2 bg-white rounded-2xl border-2 border-[#3E2723] overflow-y-auto mb-4">
                  {pancakeStack.map((layer, index) => (
                    <div
                      key={index}
                      className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FFEDA8] to-[#f4dc79] border border-[#3E2723] text-[11px] font-black text-[#3E2723] shadow-sm animate-in zoom-in-95 duration-150"
                      style={{ width: `${Math.max(40, 100 - index * 6)}%` }}
                    >
                      {layer}
                    </div>
                  ))}
                </div>

                <p className="text-xs font-bold text-[#3E2723]/80 mb-2">Tap to add delicious toppings to your stack:</p>
                
                <div className="flex flex-wrap justify-center gap-1.5 mb-4">
                  {toppings.map((top) => (
                    <button
                      key={top}
                      onClick={() => addTopping(top)}
                      className="px-2.5 py-1 rounded-lg text-[10px] font-black bg-white hover:bg-[#FFEDA8] border border-[#3E2723] shadow-[1px_1px_0px_#3E2723] active:translate-y-0.5"
                    >
                      + {top}
                    </button>
                  ))}
                </div>

                <button
                  onClick={resetStack}
                  className="text-xs font-bold text-gray-500 hover:text-[#3E2723] flex items-center justify-center gap-1 mx-auto"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset Tower</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 3. PILLOW FIGHT DEEP DIVE */}
        <section id="pillow-fight" className="scroll-mt-28">
          <div className="bg-white rounded-3xl border-3 border-[#3E2723] shadow-[10px_10px_0px_#3E2723] overflow-hidden">
            <div className="bg-[#CDD6B7] p-8 border-b-3 border-[#3E2723] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl sm:text-5xl font-black text-[#3E2723] font-display">
                  Pillow Fight
                </h2>
                <p className="text-sm font-bold text-[#3E2723]/80 mt-1">Cathartic Joy & The Anti-Stress Championship</p>
              </div>
              <span className="text-5xl">🪶</span>
            </div>

            <div className="p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-7">
                <h3 className="text-2xl font-black text-[#3E2723] font-display">
                  Certified Cloud-Soft Battlegrounds for Tired Urbanites.
                </h3>
                <p className="mt-3 text-base text-[#3E2723]/80 leading-relaxed font-medium">
                  Ever wanted to smash through Monday stress with a giant fluffy pillow? Our refereed tournaments offer pure unadulterated innocent ecstasy. Zero pain, zero hostility — just laughter, retro synthwave soundtracks, and airborne fluff.
                </p>

                {/* The 4 Rules */}
                <div className="mt-6 space-y-3">
                  <h4 className="text-xs font-black uppercase tracking-wider text-gray-500">Official Arena Code</h4>
                  <div className="p-3 rounded-xl bg-[#F7F2E7] border-2 border-[#3E2723] text-xs font-bold text-[#3E2723] space-y-2">
                    <p>1. 🪶 <strong>Only Official Pillows Allowed</strong> — Sanitized cloud-microfiber supplied at check-in.</p>
                    <p>2. 🛡️ <strong>No Blindside Hits</strong> — Eye contact and consent before every friendly swing.</p>
                    <p>3. 🛑 <strong>The "Drop Pillows" Whistle</strong> — When whistle blows, both fighters hug or high-five.</p>
                    <p>4. 🥋 <strong>Pajama Bonus</strong> — Outrageous silk or cartoon pajamas get +10 style points.</p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-4 text-xs font-bold text-gray-600">
                  <span className="bg-[#F7F2E7] px-3 py-1.5 rounded-xl border border-[#3E2723]">
                    ⏱️ Bi-Weekly Saturday Nights • 8:00 PM
                  </span>
                  <span className="bg-[#F7F2E7] px-3 py-1.5 rounded-xl border border-[#3E2723]">
                    🏟️ Neon Ring Arena • 100 Capacity
                  </span>
                </div>
              </div>

              {/* Arena RSVP Pass Box */}
              <div className="lg:col-span-5 bg-gradient-to-br from-[#CDD6B7]/30 to-white p-6 sm:p-8 rounded-3xl border-2 border-[#3E2723] shadow-[4px_4px_0px_#3E2723] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black bg-[#CDD6B7] px-2.5 py-0.5 rounded border border-[#3E2723] uppercase text-[#3E2723]">
                      Pass Reservation
                    </span>
                    <span className="text-xs font-bold text-[#7E3940] bg-[#7E3940]/10 px-2 py-0.5 rounded border border-[#7E3940]/30">
                      ⚡ Filling Fast
                    </span>
                  </div>

                  <h4 className="text-xl font-black text-[#3E2723] font-display">
                    Pillow Gladiator Pass
                  </h4>
                  <p className="text-xs text-gray-600 mt-1">Includes pillow loan, safety goggles, and post-match smoothie.</p>

                  <div className="my-6 p-4 rounded-2xl bg-white border-2 border-dashed border-gray-400 text-center">
                    <p className="text-[10px] uppercase font-black text-gray-400">Entry Ticket ID</p>
                    <p className="text-2xl font-black text-[#004958] font-mono">PILLOW-ARENA-99</p>
                  </div>
                </div>

                {!bookedArena ? (
                  <button
                    onClick={handleBookArena}
                    className="w-full py-3.5 rounded-xl font-black text-sm bg-[#CDD6B7] hover:bg-[#bcc7a1] text-[#3E2723] border-2 border-[#3E2723] shadow-[3px_3px_0px_#3E2723] flex items-center justify-center gap-2"
                  >
                    <Ticket className="w-4 h-4" />
                    <span>Confirm Arena Entry (Free)</span>
                  </button>
                ) : (
                  <div className="p-3 bg-[#CDD6B7] text-[#3E2723] rounded-xl font-black text-xs text-center border-2 border-[#3E2723]">
                    🎉 Pass Confirmed! We have a pillow reserved for you.
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

