import React, { useState } from 'react';
import { Target, Zap, Lightbulb, Compass, Award, ArrowUpRight, CheckCircle2, MessageSquare, Send, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ImageManagement({ onOpenJoin }) {
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [selectedService, setSelectedService] = useState('Brand Image Building');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [formData, setFormData] = useState({
    brandName: '',
    contactEmail: '',
    budget: '$5k - $15k',
    challenge: ''
  });

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setInquirySubmitted(true);
    confetti({
      particleCount: 75,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  const services = [
    {
      id: 'counsellor',
      name: 'Counsellor',
      tag: 'PR ADVISORY & THERAPY',
      icon: '🧠',
      accentColor: '#320b35',
      bgCard: 'bg-white',
      summary: 'Brand reputation therapy and 1-on-1 strategic narrative advisory for founders, creators, and public figures.',
      deliverables: [
        'Crisis de-escalation & sensitive media mitigation',
        'Executive & founder thought leadership positioning',
        'Unfiltered brand narrative diagnosis and voice clarity',
        'Media interview prep & unscripted authenticity training'
      ],
      quote: '“We fix the messaging before the headlines break.”'
    },
    {
      id: 'event-curation',
      name: 'Event Curation',
      tag: 'EXPERIENTIAL ACTIVATIONS',
      icon: '🎪',
      accentColor: '#320b35',
      bgCard: 'bg-[#FFEDA8]/40',
      summary: 'Immersive, high-retention brand activations, intimate media pop-ups, and experiential launches that people remember forever.',
      deliverables: [
        'Turnkey experiential pop-up lounges & sleep-ins',
        'Curated guest lists with creators, media, & cultural tastemakers',
        'Sensory-driven environmental storytelling & scenography',
        'Zero-cringe corporate gathering design'
      ],
      quote: '“Events so cozy and vibrant, guests never want to leave.”'
    },
    {
      id: 'what-an-idea',
      name: 'What-an-idea Promotion',
      tag: 'VIRAL GUERRILLA STUNTS',
      icon: '💡',
      accentColor: '#004958',
      bgCard: 'bg-[#CDD6B7]/30',
      summary: 'Out-of-the-box creative interventions, viral guerrilla stunts, and cultural conversation sparkers that command organic attention.',
      deliverables: [
        'Guerrilla street interventions & bold ambient marketing',
        'Meme engineering & high-velocity internet culture stunts',
        'Earned media PR hooks that national outlets cover organically',
        'Unconventional brand-to-community viral moments'
      ],
      quote: '“If it doesn’t make people stop and say ‘What an idea!’, we don’t do it.”'
    },
    {
      id: 'brand-image-building',
      name: 'Brand Image Building',
      tag: 'HOLISTIC IDENTITY & PR',
      icon: '🏛️',
      accentColor: '#320b35',
      bgCard: 'bg-white',
      summary: 'End-to-end visual identity, tone of voice, narrative playbooks, and lasting cultural relevance for ambitious companies.',
      deliverables: [
        'Full brand identity design, typography & vibrant palette systems',
        'Tone-of-voice playbooks with unmistakable personality',
        'Cultural positioning & multi-channel PR launch roadmaps',
        'Ongoing public sentiment stewardship and brand hygiene'
      ],
      quote: '“Building brands that live rent-free in the cultural zeitgeist.”'
    }
  ];

  return (
    <section id="image-management" className="py-24 bg-[#F7F2E7] border-t-3 border-[#320b35] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl sm:text-6xl font-black text-[#320b35] tracking-tight font-display">
              Image Management
            </h2>
            <p className="mt-3 text-lg font-bold text-[#320b35] font-handwriting text-2xl">
              Brand Consulting & Modern PR Services
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <button
              onClick={() => { setSelectedService('Full Suite Consulting'); setShowInquiryModal(true); }}
              className="px-6 py-3 rounded-2xl font-black text-sm bg-[#320b35] hover:bg-[#240726] text-white border-2 border-[#320b35] shadow-[4px_4px_0px_#320b35] hover:shadow-[2px_2px_0px_#320b35] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#FFEDA8]" />
              <span>Book a Brand Consultation</span>
            </button>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((srv) => (
            <div
              key={srv.id}
              className={`${srv.bgCard} p-8 sm:p-10 rounded-3xl border-3 border-[#320b35] shadow-[7px_7px_0px_#320b35] flex flex-col justify-between hover:shadow-[10px_10px_0px_#320b35] hover:-translate-y-1 transition-all`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-white border-2 border-[#320b35] shadow-[2px_2px_0px_#320b35] flex items-center justify-center text-3xl">
                    {srv.icon}
                  </div>
                  <span className="text-[11px] font-black px-3 py-1 rounded-full bg-white text-[#320b35] border border-[#320b35] shadow-[1px_1px_0px_#320b35] uppercase tracking-wider">
                    {srv.tag}
                  </span>
                </div>

                <h3 className="text-3xl font-black text-[#320b35] font-display">
                  {srv.name}
                </h3>
                
                <p className="mt-3 text-base text-[#320b35]/80 font-medium leading-relaxed">
                  {srv.summary}
                </p>

                {/* Deliverables */}
                <div className="mt-6 pt-5 border-t-2 border-[#320b35]/15 space-y-2.5">
                  <p className="text-xs font-black uppercase tracking-wider text-[#320b35]/60">Core Deliverables</p>
                  {srv.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#320b35] stroke-[3] mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-bold text-[#320b35]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-5 border-t-2 border-[#320b35]/15 flex items-center justify-between">
                <p className="text-xs italic font-semibold text-[#320b35]/70">
                  {srv.quote}
                </p>
                <button
                  onClick={() => { setSelectedService(srv.name); setShowInquiryModal(true); }}
                  className="px-4 py-2 rounded-xl text-xs font-black bg-white hover:bg-[#FFEDA8]/30 text-[#320b35] border-2 border-[#320b35] shadow-[2px_2px_0px_#320b35] flex items-center gap-1 flex-shrink-0"
                >
                  <span>Inquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Consulting Banner */}
        <div className="mt-14 bg-gradient-to-r from-[#320b35] to-[#240726] p-8 sm:p-10 rounded-3xl border-3 border-[#320b35] shadow-[8px_8px_0px_#320b35] text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="bg-[#FFEDA8] text-[#320b35] font-black text-xs px-3 py-1 rounded-full border border-[#320b35] shadow-[2px_2px_0px_#320b35] uppercase">
              Brand Diagnostic Clinic
            </span>
            <h3 className="text-2xl sm:text-4xl font-black mt-3 font-display">
              Tired of cliché press releases and stale marketing?
            </h3>
            <p className="text-sm sm:text-base font-semibold mt-1 text-white/90 max-w-xl">
              Let's craft an authentic cultural narrative that earns respect, media coverage, and loyal community love.
            </p>
          </div>
          <button
            onClick={() => { setSelectedService('Brand Diagnostic Clinic'); setShowInquiryModal(true); }}
            className="px-7 py-4 rounded-2xl font-black text-base bg-[#FFEDA8] text-[#320b35] border-2 border-[#320b35] shadow-[4px_4px_0px_#320b35] hover:shadow-[2px_2px_0px_#320b35] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex-shrink-0"
          >
            Start Free Diagnostic
          </button>
        </div>

      </div>

      {/* Brand Inquiry Modal */}
      {showInquiryModal && (
        <div className="fixed inset-0 z-50 bg-[#320b35]/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border-3 border-[#320b35] shadow-[8px_8px_0px_#320b35] max-w-lg w-full p-6 sm:p-8 relative">
            <div className="flex items-center justify-between pb-4 border-b-2 border-[#320b35]/20">
              <div>
                <span className="text-xs font-black uppercase text-[#320b35]">Image Management PR Wing</span>
                <h4 className="font-black text-2xl text-[#320b35] font-display">Project Brief Inquiry</h4>
              </div>
              <button 
                onClick={() => { setShowInquiryModal(false); setInquirySubmitted(false); }}
                className="w-8 h-8 rounded-full bg-[#F7F2E7] hover:bg-[#FFEDA8] flex items-center justify-center font-black border border-[#320b35] text-[#320b35]"
              >
                ✕
              </button>
            </div>

            {!inquirySubmitted ? (
              <form onSubmit={handleInquirySubmit} className="mt-5 space-y-4">
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[#320b35]/70 mb-1">
                    Selected Focus Area
                  </label>
                  <input
                    type="text"
                    value={selectedService}
                    readOnly
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-[#320b35] bg-[#F7F2E7] text-sm font-bold text-[#320b35]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-[#320b35]/70 mb-1">
                      Brand / Founder Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Studios"
                      required
                      value={formData.brandName}
                      onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border-2 border-[#320b35] text-sm font-bold bg-[#F7F2E7] text-[#320b35] focus:outline-none focus:ring-2 focus:ring-[#320b35]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-[#320b35]/70 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="hello@brand.com"
                      required
                      value={formData.contactEmail}
                      onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border-2 border-[#320b35] text-sm font-bold bg-[#F7F2E7] text-[#320b35] focus:outline-none focus:ring-2 focus:ring-[#320b35]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[#320b35]/70 mb-1">
                    What narrative or PR hurdle can we solve?
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Tell us about your brand goals, launch, or identity makeover..."
                    value={formData.challenge}
                    onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-[#320b35] text-sm font-bold bg-[#F7F2E7] text-[#320b35] focus:outline-none focus:ring-2 focus:ring-[#320b35]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-black text-base bg-[#320b35] hover:bg-[#240726] text-white border-2 border-[#320b35] shadow-[4px_4px_0px_#320b35] flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Consultation Brief</span>
                </button>
              </form>
            ) : (
              <div className="py-8 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#CDD6B7] text-[#320b35] flex items-center justify-center mx-auto border-2 border-[#320b35] shadow-[3px_3px_0px_#320b35]">
                  <CheckCircle2 className="w-8 h-8 text-[#320b35]" />
                </div>
                <h5 className="text-2xl font-black font-display text-[#320b35]">Brief Received!</h5>
                <p className="text-sm font-semibold text-[#320b35]/80 max-w-sm mx-auto">
                  Our PR & Brand Counsellor team will review <strong>{formData.brandName || 'your brand'}</strong> and reply within 24 hours.
                </p>
                <button
                  onClick={() => setShowInquiryModal(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-[#FFEDA8] text-[#320b35] font-black text-xs border-2 border-[#320b35] shadow-[2px_2px_0px_#320b35]"
                >
                  Done
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
}
