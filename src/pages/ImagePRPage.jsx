import React, { useState } from 'react';
import { Sparkles, Brain, Compass, Lightbulb, Building, Send, CheckCircle2, ArrowRight, ShieldCheck, Flame, Star } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ImagePRPage({ onOpenJoin }) {
  const [selectedPillar, setSelectedPillar] = useState('counsellor');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [formData, setFormData] = useState({
    brandName: '',
    contactEmail: '',
    serviceInterest: 'Full PR & Image Suite',
    timeline: 'Within 30 Days',
    brief: ''
  });

  const handleInquiry = (e) => {
    e.preventDefault();
    setInquirySubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const pillars = [
    {
      id: 'counsellor',
      name: 'Counsellor',
      tag: 'PILLAR 01',
      icon: '🧠',
      title: 'Reputation Advisory & Strategic Narrative Therapy',
      color: 'bg-white',
      badgeColor: 'bg-[#7E3940] text-white',
      tagline: 'Fixing the story before the headlines break.',
      overview: 'Modern founders, creators, and public leaders are exposed to constant public scrutiny. Our Counsellor practice provides confidential, psychological, and strategic narrative guidance.',
      deliverables: [
        'Crisis simulation and sensitive issue de-escalation protocols',
        'Founder voice unscripting (breaking free from corporate speak)',
        'Strategic media interview coaching and live rehearsal',
        'Long-term legacy and personal positioning roadmaps'
      ],
      caseExample: 'Helped a prominent consumer tech CEO pivot from a PR firestorm to leading a celebrated national conversation on workplace wellness.'
    },
    {
      id: 'event-curation',
      name: 'Event Curation',
      tag: 'PILLAR 02',
      icon: '🎪',
      title: 'Experiential Brand Lounges & Cultural Activations',
      color: 'bg-[#FFEDA8]/40',
      badgeColor: 'bg-[#7E3940] text-white',
      tagline: 'Events so cozy and impactful, guests refuse to leave.',
      overview: 'We banish cold corporate conference rooms and awkward networking happy hours. We build sensory-rich spaces, ambient sleep-ins, and living-room style press gatherings.',
      deliverables: [
        'Custom experiential pop-up lounges (turnkey design & build)',
        'VIP creator, journalist, and cultural curator guest curation',
        'Sensory scenography: signature scents, vinyl stations, gourmet bites',
        'Organic photo & video moments built naturally into the space'
      ],
      caseExample: 'Transformed an empty industrial warehouse into an acoustic midnight garden for a luxury apparel launch with 98% creator retention rate.'
    },
    {
      id: 'what-an-idea',
      name: 'What-an-idea Promotion',
      tag: 'PILLAR 03',
      icon: '💡',
      title: 'Viral Guerrilla Stunts & Cultural Conversation Hooks',
      color: 'bg-[#CDD6B7]/30',
      badgeColor: 'bg-[#004958] text-white',
      tagline: 'If it doesn’t make people stop in their tracks, we don’t pitch it.',
      overview: 'Organic media attention is never bought with standard press releases; it is earned through audacious originality. We conceptualize and execute viral guerrilla concepts.',
      deliverables: [
        'High-concept ambient street interventions and interactive installations',
        'Meme engineering that rides existing cultural waves organically',
        'National broadcast hooks that top journalists love covering',
        'Cross-medium surprise collaborations and unexpected alliances'
      ],
      caseExample: 'Staged a nationwide "Nap Strike" outside bustling financial tech towers, generating 14M organic views and coverage across major outlets.'
    },
    {
      id: 'brand-image-building',
      name: 'Brand Image Building',
      tag: 'PILLAR 04',
      icon: '🏛️',
      title: 'Holistic Visual Identity & Cultural Worldbuilding',
      color: 'bg-white',
      badgeColor: 'bg-[#7E3940] text-white',
      tagline: 'Crafting brands that live rent-free in culture.',
      overview: 'A brand is not just a logo; it is an atmosphere, a vocabulary, and an attitude. We build iconic visual identities and tone-of-voice playbooks designed to endure.',
      deliverables: [
        'Comprehensive visual identity systems (typography, palettes, motifs)',
        'Personality-rich copy playbooks and community dialogue rules',
        'Packaging, merchandise, and digital environmental styling',
        'Quarterly cultural sentiment audit and narrative maintenance'
      ],
      caseExample: 'Re-imagined a traditional direct-to-consumer brand into a vibrant youth-culture darling with a 3.4x increase in direct organic mentions.'
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-[#F7F2E7]">
      
      {/* Banner */}
      <section className="bg-gradient-to-b from-[#7E3940]/15 to-[#F7F2E7] py-16 px-4 sm:px-6 lg:px-8 border-b-3 border-[#3E2723]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-[#3E2723] font-display tracking-tight">
            Image PR
          </h1>
          
          <p className="mt-4 text-2xl sm:text-3xl font-extrabold text-[#7E3940] font-handwriting">
            Brand Consulting & Modern PR Services
          </p>
          
          <p className="mt-4 text-base sm:text-lg text-[#3E2723]/80 max-w-2xl mx-auto font-medium leading-relaxed">
            Ditch the dry boilerplate PR. We combine strategic executive counseling, experiential activations, viral guerrilla ideas, and world-class brand building to make brands unforgettable.
          </p>

          {/* Quick jump pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {pillars.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedPillar(p.id)}
                className={`badge-sticker transition-all ${
                  selectedPillar === p.id 
                    ? 'bg-[#7E3940] text-white shadow-[3px_3px_0px_#3E2723]' 
                    : 'bg-white text-[#3E2723] hover:bg-[#FFEDA8]/40 border border-[#3E2723]'
                }`}
              >
                <span>{p.icon} {p.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
        
        {/* Selected Pillar Detailed Spotlight */}
        {pillars.map((p) => {
          if (p.id !== selectedPillar) return null;
          return (
            <div
              key={p.id}
              className={`${p.color} rounded-3xl border-3 border-[#3E2723] shadow-[10px_10px_0px_#3E2723] p-8 sm:p-12 animate-in fade-in zoom-in-95 duration-200`}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b-2 border-[#3E2723]/20">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-2xl bg-white border-2 border-[#3E2723] shadow-[3px_3px_0px_#3E2723] flex items-center justify-center text-4xl">
                    {p.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-black text-[#3E2723] font-display">
                      {p.name}
                    </h2>
                  </div>
                </div>
                <p className="text-sm font-bold text-[#3E2723]/70 italic">
                  "{p.tagline}"
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-8">
                <div className="lg:col-span-7">
                  <h3 className="text-2xl font-black text-[#3E2723] font-display">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-base text-[#3E2723]/80 leading-relaxed font-medium">
                    {p.overview}
                  </p>

                  <div className="mt-6 space-y-3">
                    <p className="text-xs font-black uppercase tracking-wider text-[#3E2723]/60">Key Deliverables</p>
                    {p.deliverables.map((d, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#7E3940] text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5 font-bold">
                          ✓
                        </div>
                        <span className="text-sm font-bold text-[#3E2723]">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-between bg-white p-6 sm:p-8 rounded-2xl border-2 border-[#3E2723] shadow-[4px_4px_0px_#3E2723]">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-black uppercase text-[#7E3940]">
                      <Star className="w-4 h-4 fill-current text-[#7E3940]" />
                      <span>Representative Case Study</span>
                    </div>
                    <p className="mt-3 text-sm font-bold text-[#3E2723]/80 leading-relaxed">
                      {p.caseExample}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#3E2723]/20">
                    <a
                      href="#inquiry"
                      className="w-full py-3 rounded-xl font-black text-xs bg-[#7E3940] text-white border-2 border-[#3E2723] shadow-[2px_2px_0px_#3E2723] flex items-center justify-center gap-2 hover:bg-[#6c3036]"
                    >
                      <span>Inquire About {p.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* 4 Pillars Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => (
            <div
              key={p.id}
              onClick={() => setSelectedPillar(p.id)}
              className={`p-6 rounded-2xl border-2 border-[#3E2723] cursor-pointer transition-all ${
                selectedPillar === p.id 
                  ? `${p.color} shadow-[5px_5px_0px_#3E2723] -translate-y-1` 
                  : 'bg-white hover:bg-[#FFEDA8]/30 shadow-[2px_2px_0px_#3E2723]'
              }`}
            >
              <span className="text-3xl">{p.icon}</span>
              <h4 className="font-black text-lg text-[#3E2723] font-display mt-2">{p.name}</h4>
              <p className="text-xs text-[#3E2723]/70 font-semibold mt-1 line-clamp-2">{p.tagline}</p>
            </div>
          ))}
        </div>

        {/* Interactive Consultation / RFP Builder Form */}
        <section id="inquiry" className="bg-white rounded-3xl border-3 border-[#3E2723] shadow-[8px_8px_0px_#3E2723] p-8 sm:p-12 scroll-mt-28">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="px-3 py-1 rounded-full text-xs font-black bg-[#7E3940] text-white border border-[#3E2723] uppercase">
                Brand Consultation Form
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-[#3E2723] font-display mt-3">
                Let's Craft Your Cultural Narrative
              </h3>
              <p className="text-sm font-bold text-[#3E2723]/70 mt-1">
                Tell us about your brand challenge, launch, or reputation goals.
              </p>
            </div>

            {!inquirySubmitted ? (
              <form onSubmit={handleInquiry} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black uppercase text-[#3E2723]/80 mb-1">
                      Brand / Founder Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Studio Aurora"
                      required
                      value={formData.brandName}
                      onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border-2 border-[#3E2723] text-sm font-bold bg-[#F7F2E7] text-[#3E2723]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase text-[#3E2723]/80 mb-1">
                      Work Email
                    </label>
                    <input
                      type="email"
                      placeholder="founder@studio.com"
                      required
                      value={formData.contactEmail}
                      onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border-2 border-[#3E2723] text-sm font-bold bg-[#F7F2E7] text-[#3E2723]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black uppercase text-[#3E2723]/80 mb-1">
                      Primary Practice Area
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border-2 border-[#3E2723] text-sm font-bold bg-[#F7F2E7] text-[#3E2723]"
                    >
                      <option>Counsellor (Advisory & Therapy)</option>
                      <option>Event Curation (Pop-Up & Activation)</option>
                      <option>What-an-idea Promotion (Guerrilla Stunt)</option>
                      <option>Brand Image Building (Full Identity)</option>
                      <option>Full PR & Image Suite</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase text-[#3E2723]/80 mb-1">
                      Project Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border-2 border-[#3E2723] text-sm font-bold bg-[#F7F2E7] text-[#3E2723]"
                    >
                      <option>Immediate / Urgent (Next 2 Weeks)</option>
                      <option>Within 30 Days</option>
                      <option>Next Quarter</option>
                      <option>Exploring Options</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-[#3E2723]/80 mb-1">
                    Describe your narrative ambition or PR challenge
                  </label>
                  <textarea
                    rows="3"
                    placeholder="We are launching a new product and need earned media / We need a complete voice makeover..."
                    value={formData.brief}
                    onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-[#3E2723] text-sm font-bold bg-[#F7F2E7] text-[#3E2723]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-black text-base bg-[#7E3940] hover:bg-[#6c3036] text-white border-2 border-[#3E2723] shadow-[4px_4px_0px_#3E2723] flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Strategic Consultation</span>
                </button>
              </form>
            ) : (
              <div className="py-10 text-center space-y-3 bg-[#CDD6B7]/40 rounded-2xl border-2 border-[#3E2723]">
                <div className="w-14 h-14 rounded-full bg-[#7E3940] text-white flex items-center justify-center mx-auto text-2xl border-2 border-[#3E2723]">
                  ✓
                </div>
                <h4 className="text-2xl font-black text-[#3E2723] font-display">
                  Consultation Request Dispatched!
                </h4>
                <p className="text-xs sm:text-sm font-bold text-[#3E2723]/80 max-w-md mx-auto">
                  Our PR directors are reviewing <strong>{formData.brandName}</strong>. We will reach out to <strong>{formData.contactEmail}</strong> with an initial diagnostic within 24 hours.
                </p>
              </div>
            )}
          </div>
        </section>

      </div>
    </div>
  );
}
