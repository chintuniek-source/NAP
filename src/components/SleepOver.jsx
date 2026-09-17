import React, { useState } from 'react';
import { Mic, Coffee, Sparkles, Trophy, Users, Heart, ArrowRight, ShieldCheck, Smile, Check, Calendar } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SleepOver({ onOpenJoin }) {
  const [selectedActivity, setSelectedActivity] = useState('nap-o-casting');
  const [bookedActivities, setBookedActivities] = useState({});

  const handleBook = (activityKey) => {
    setBookedActivities(prev => ({ ...prev, [activityKey]: true }));
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.8 }
    });
  };

  const activities = [
    {
      id: 'nap-o-casting',
      title: 'Nap-O-Casting',
      subtitle: 'The Chill Couch Audition & Open-Mic',
      tag: 'EXPERIENCE 01',
      color: '#FFD166',
      accentBg: 'bg-[#FFD166]',
      borderHover: 'hover:border-[#FFD166]',
      icon: '🎙️',
      summary: 'Ditch the anxious auditions. Nap-O-Casting is our ultra-relaxed open-mic & storytelling couch session where creators, poets, comedians, and vocalists share ideas in cozy comfort.',
      details: [
        'Zero spotlight anxiety: perform from a recliner or bean bag',
        'Live recording for NAP Media’s digital radio & podcast stream',
        'Direct feedback from top creative directors & PR consultants',
        'Complimentary herbal teas and warm slippers upon entry'
      ],
      upcomingSlot: 'Every Thursday Evening • 7:00 PM',
      capacity: '35 cozy listeners',
      actionLabel: 'Reserve Couch Spot'
    },
    {
      id: 'breakfast-castle',
      title: 'Breakfast Castle',
      subtitle: 'Sunrise Feasts & Morning Social Club',
      tag: 'EXPERIENCE 02',
      color: '#FF8A5B',
      accentBg: 'bg-[#FF8A5B]',
      borderHover: 'hover:border-[#FF8A5B]',
      icon: '🥞',
      summary: 'Morning rituals reimagined into a gastronomic sanctuary. Fluffy buttermilk pancake towers, artisanal drip coffee, sunrise acoustic sets, and unhurried conversation.',
      details: [
        'Infinite waffle & pancake bar with artisanal fruit preserves',
        'Quiet reading corners with zines and curated indie poetry',
        'Sunrise mindfulness & low-tempo acoustic jam sessions',
        'The anti-rushed breakfast: stay as long as your soul needs'
      ],
      upcomingSlot: 'Every Sunday Morning • 8:30 AM - 1:00 PM',
      capacity: '60 brunch lovers',
      actionLabel: 'Claim Breakfast Seat'
    },
    {
      id: 'pillow-fight',
      title: 'Pillow Fight',
      subtitle: 'Cathartic Joy & Stress-Buster Arena',
      tag: 'EXPERIENCE 03',
      color: '#06D6A0',
      accentBg: 'bg-[#06D6A0]',
      borderHover: 'hover:border-[#06D6A0]',
      icon: '🪶',
      summary: 'The ultimate corporate & urban stress-buster. Certified soft-feather tournaments, inflatable ring arenas, disco lights, and pure unadulterated innocent laughter.',
      details: [
        'Feather-safe, memory foam, and cloud-soft official pillows provided',
        'Hilarious refereed categories (Slow-Mo Round, Team Pyjama Battle)',
        'Post-match restorative lounge with smoothies and neck massages',
        '100% judgment-free, safe, and wildly therapeutic for all ages'
      ],
      upcomingSlot: 'Bi-Weekly Saturday Night • 8:00 PM',
      capacity: '100 pillow warriors',
      actionLabel: 'Join Pillow Arena'
    }
  ];

  return (
    <section id="sleep-over" className="py-24 bg-[#FFFDF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl sm:text-6xl font-black text-[#1E1E24] tracking-tight font-display">
              Sleep Over
            </h2>
            <p className="mt-3 text-lg font-bold text-[#FF8A5B] font-handwriting text-2xl">
              Community & Experience-Driven Activities
            </p>
          </div>
          <p className="text-sm sm:text-base text-gray-700 max-w-md font-medium">
            Where urban burnout takes a backseat. We craft tactile, joyful spaces designed to bring people together without pretension or social fatigue.
          </p>
        </div>

        {/* Activity Tab Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {activities.map((act) => {
            const isSelected = selectedActivity === act.id;
            return (
              <button
                key={act.id}
                onClick={() => setSelectedActivity(act.id)}
                className={`p-6 rounded-3xl border-3 border-[#1E1E24] text-left transition-all duration-200 relative overflow-hidden ${
                  isSelected 
                    ? `${act.accentBg} shadow-[6px_6px_0px_#1E1E24] translate-x-[-2px] translate-y-[-2px]` 
                    : 'bg-white hover:bg-gray-50 shadow-[3px_3px_0px_#1E1E24]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-4xl">{act.icon}</span>
                </div>
                <h3 className="text-2xl font-black text-[#1E1E24] font-display">
                  {act.title}
                </h3>
                <p className="text-xs font-bold text-[#1E1E24]/80 mt-1">
                  {act.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Detailed Selected Activity Spotlight Box */}
        {activities.map((act) => {
          if (act.id !== selectedActivity) return null;
          const isBooked = bookedActivities[act.id];

          return (
            <div 
              key={act.id}
              className="bg-white rounded-3xl border-3 border-[#1E1E24] shadow-[8px_8px_0px_#1E1E24] p-8 sm:p-12 animate-in fade-in zoom-in-95 duration-200"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                {/* Left info column */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{act.icon}</span>
                    <div>
                      <h3 className="text-3xl sm:text-4xl font-black text-[#1E1E24] font-display">
                        {act.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-base sm:text-lg text-gray-800 font-medium leading-relaxed mt-4">
                    {act.summary}
                  </p>

                  {/* Highlights list */}
                  <div className="mt-6 space-y-3">
                    {act.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#06D6A0] text-black flex items-center justify-center flex-shrink-0 mt-0.5 border border-black">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="text-sm font-bold text-gray-800">{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* Slot & Capacity info */}
                  <div className="mt-8 flex flex-wrap gap-4 items-center text-xs font-extrabold text-gray-700">
                    <div className="flex items-center gap-1.5 bg-[#F4F4F8] px-3 py-2 rounded-xl border border-black">
                      <Calendar className="w-4 h-4 text-[#FF8A5B]" />
                      <span>{act.upcomingSlot}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-[#F4F4F8] px-3 py-2 rounded-xl border border-black">
                      <Users className="w-4 h-4 text-[#845EC2]" />
                      <span>Capacity: {act.capacity}</span>
                    </div>
                  </div>
                </div>

                {/* Right interactive ticket card */}
                <div className="lg:col-span-5 bg-gradient-to-br from-[#FFF9EB] to-[#FFF0E6] p-8 rounded-3xl border-3 border-[#1E1E24] shadow-[5px_5px_0px_#1E1E24] text-center flex flex-col justify-between">
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-white border-2 border-black shadow-[3px_3px_0px_#1E1E24] flex items-center justify-center text-3xl mx-auto mb-4">
                      {act.icon}
                    </div>
                    <h4 className="text-xl font-black text-[#1E1E24] font-display">
                      Experience Pass
                    </h4>
                    <p className="text-xs font-bold text-gray-600 mt-1">
                      Free for verified Nappers • Walk-ins welcome
                    </p>

                    <div className="my-6 p-4 rounded-2xl bg-white border-2 border-dashed border-gray-400">
                      <p className="text-xs uppercase font-extrabold tracking-wider text-gray-500">Community Access Pass</p>
                      <p className="text-2xl font-black text-[#FF6584] mt-1 font-display">NAP-COMMUNITY</p>
                      <p className="text-[11px] text-gray-600 font-semibold mt-1">Valid across Delhi NCR, Mumbai & Bengaluru lounges</p>
                    </div>
                  </div>

                  {!isBooked ? (
                    <button
                      onClick={() => handleBook(act.id)}
                      className="w-full py-4 rounded-xl font-black text-base bg-[#FFD166] hover:bg-[#ffe082] text-[#1E1E24] border-2 border-[#1E1E24] shadow-[4px_4px_0px_#1E1E24] hover:shadow-[2px_2px_0px_#1E1E24] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>{act.actionLabel}</span>
                    </button>
                  ) : (
                    <div className="py-4 px-3 rounded-xl bg-[#E8FBF6] border-2 border-[#06D6A0] text-[#06D6A0] font-black text-sm flex items-center justify-center gap-2">
                      <ShieldCheck className="w-5 h-5" />
                      <span>Spot Confirmed! See you there</span>
                    </div>
                  )}

                  <p className="text-[11px] font-bold text-gray-500 mt-3">
                    Looking for custom private community booking? <button onClick={onOpenJoin} className="underline text-black font-extrabold">Ask our team</button>
                  </p>
                </div>

              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}
