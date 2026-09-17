import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function NapQuizModal({ isOpen, onClose, onSelectResult }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState({ sleep: 0, pr: 0, media: 0 });
  const [result, setResult] = useState(null);

  if (!isOpen) return null;

  const questions = [
    {
      question: "It's 3:00 PM on a Saturday. Where will we most likely find you?",
      options: [
        { label: "Building a stack of pancakes and chatting with strangers", category: 'sleep' },
        { label: "Brainstorming a wild viral stunt that disrupts Twitter/X", category: 'pr' },
        { label: "Wearing headphones listening to acoustic folk or a deep podcast", category: 'media' },
        { label: "Arming yourself with a fluffy memory foam pillow for battle", category: 'sleep' }
      ]
    },
    {
      question: "What's your biggest pet peeve with the current world?",
      options: [
        { label: "Toxic hustle culture where resting is treated like a crime", category: 'sleep' },
        { label: "Boring corporate press releases that nobody reads", category: 'pr' },
        { label: "Superficial 15-second soundbites instead of real conversations", category: 'media' },
        { label: "Lack of playful, judgment-free stress busters", category: 'sleep' }
      ]
    },
    {
      question: "Pick your ideal weekend aesthetic:",
      options: [
        { label: "Warm sunrise, fresh coffee aromas, and waffle towers (Breakfast Castle)", category: 'sleep' },
        { label: "A sharp guerilla street campaign with bold neon typography", category: 'pr' },
        { label: "Intimate candlelit sofa session with guitars and unfiltered stories (A Alap)", category: 'media' },
        { label: "Feathers flying in slow motion with joyful disco music (Pillow Fight)", category: 'sleep' }
      ]
    }
  ];

  const handleSelectOption = (category) => {
    const nextScore = { ...score, [category]: score[category] + 1 };
    setScore(nextScore);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate winner
      let highestCategory = 'sleep';
      let maxScore = nextScore.sleep;
      if (nextScore.pr > maxScore) {
        highestCategory = 'pr';
        maxScore = nextScore.pr;
      }
      if (nextScore.media > maxScore) {
        highestCategory = 'media';
      }

      let outcome = {};
      if (highestCategory === 'sleep') {
        outcome = {
          title: "The Ultimate Community Dreamer",
          wing: "Sleep Over Wing",
          recommendation: "You belong at Breakfast Castle and the Pillow Fight Arena!",
          emoji: "🥞",
          bg: "bg-[#FFD166]",
          cta: "#sleep-over"
        };
      } else if (highestCategory === 'pr') {
        outcome = {
          title: "The Narrative Disruptor",
          wing: "Image Management Wing",
          recommendation: "You belong with our What-an-idea Promotion & Brand Counsellors!",
          emoji: "⚡",
          bg: "bg-[#FF8A5B]",
          cta: "#image-management"
        };
      } else {
        outcome = {
          title: "The Soulful Story Seeker",
          wing: "Nap Media Wing",
          recommendation: "You belong on the couch of A Alap listening to unplugged magic!",
          emoji: "🎧",
          bg: "bg-[#845EC2] text-white",
          cta: "#nap-media"
        };
      }

      setResult(outcome);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setScore({ sleep: 0, pr: 0, media: 0 });
    setResult(null);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl border-3 border-[#1E1E24] shadow-[10px_10px_0px_#1E1E24] max-w-lg w-full p-6 sm:p-8 relative">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b-2 border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-2xl">✨</span>
            <div>
              <h4 className="font-black text-xl text-[#1E1E24] font-display">Find Your Nap Persona</h4>
              <p className="text-[11px] font-bold text-gray-500">Quick 30-second personality alignment</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-black border border-black"
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        {!result ? (
          <div className="mt-6">
            <div className="flex items-center justify-between text-xs font-black text-gray-400 mb-2 uppercase">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <div className="flex gap-1">
                {questions.map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-5 h-2 rounded-full border border-black ${i <= currentQuestion ? 'bg-[#FF6584]' : 'bg-gray-200'}`}
                  ></div>
                ))}
              </div>
            </div>

            <h5 className="text-lg sm:text-xl font-black text-[#1E1E24] mt-2 mb-6 font-display">
              {questions[currentQuestion].question}
            </h5>

            <div className="space-y-3">
              {questions[currentQuestion].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleSelectOption(opt.category)}
                  className="w-full text-left p-4 rounded-2xl border-2 border-[#1E1E24] bg-[#FFFDF9] hover:bg-yellow-50 hover:border-[#FF8A5B] font-bold text-sm text-[#1E1E24] shadow-[3px_3px_0px_#1E1E24] hover:shadow-[1px_1px_0px_#1E1E24] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-between group"
                >
                  <span>{opt.label}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-6 text-center animate-in zoom-in-95 duration-200">
            <div className="w-20 h-20 rounded-3xl bg-white border-3 border-[#1E1E24] shadow-[5px_5px_0px_#1E1E24] mx-auto flex items-center justify-center text-5xl mb-4">
              {result.emoji}
            </div>
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-black border border-black uppercase tracking-wider mb-2 ${result.bg}`}>
              {result.wing}
            </span>
            <h5 className="text-3xl font-black text-[#1E1E24] font-display">
              {result.title}
            </h5>
            <p className="mt-3 text-sm font-bold text-gray-700 max-w-xs mx-auto">
              {result.recommendation}
            </p>

            <div className="mt-8 flex gap-3">
              <button
                onClick={handleReset}
                className="flex-1 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-[#1E1E24] font-black text-xs border-2 border-black flex items-center justify-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake</span>
              </button>
              <a
                href={result.cta}
                onClick={onClose}
                className="flex-2 py-3 px-6 rounded-xl bg-[#06D6A0] hover:bg-[#00c28e] text-[#1E1E24] font-black text-xs border-2 border-black shadow-[3px_3px_0px_#1E1E24] flex items-center justify-center gap-1.5"
              >
                <span>Jump To Your Wing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
