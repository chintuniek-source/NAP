import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check, Sparkles } from 'lucide-react';

const PALETTES = [
  {
    name: 'yellow',
    btnBg: 'bg-[#FFEDA8]',
    btnText: 'text-[#3E2723]',
    border: 'border-[#3E2723]',
    shadow: 'shadow-[3px_3px_0px_#3E2723]',
    activeBg: 'bg-[#FFEDA8]',
    hoverBg: 'hover:bg-[#FFEDA8]/60',
    badgeBg: 'bg-[#7E3940] text-white',
    ring: 'focus:ring-[#7E3940]'
  },
  {
    name: 'mint',
    btnBg: 'bg-[#CDD6B7]',
    btnText: 'text-[#3E2723]',
    border: 'border-[#3E2723]',
    shadow: 'shadow-[3px_3px_0px_#3E2723]',
    activeBg: 'bg-[#CDD6B7]',
    hoverBg: 'hover:bg-[#CDD6B7]/50',
    badgeBg: 'bg-[#004958] text-white',
    ring: 'focus:ring-[#004958]'
  },
  {
    name: 'berry',
    btnBg: 'bg-[#7E3940]',
    btnText: 'text-white',
    border: 'border-[#3E2723]',
    shadow: 'shadow-[3px_3px_0px_#3E2723]',
    activeBg: 'bg-[#7E3940] text-white',
    hoverBg: 'hover:bg-[#7E3940]/20',
    badgeBg: 'bg-[#FFEDA8] text-[#3E2723]',
    ring: 'focus:ring-[#7E3940]'
  },
  {
    name: 'teal',
    btnBg: 'bg-[#004958]',
    btnText: 'text-white',
    border: 'border-[#3E2723]',
    shadow: 'shadow-[3px_3px_0px_#3E2723]',
    activeBg: 'bg-[#004958] text-white',
    hoverBg: 'hover:bg-[#004958]/20',
    badgeBg: 'bg-[#CDD6B7] text-[#3E2723]',
    ring: 'focus:ring-[#004958]'
  },
  {
    name: 'peach',
    btnBg: 'bg-[#FFD8C7]',
    btnText: 'text-[#3E2723]',
    border: 'border-[#3E2723]',
    shadow: 'shadow-[3px_3px_0px_#3E2723]',
    activeBg: 'bg-[#FFD8C7]',
    hoverBg: 'hover:bg-[#FFD8C7]/50',
    badgeBg: 'bg-[#7E3940] text-white',
    ring: 'focus:ring-[#7E3940]'
  },
  {
    name: 'lavender',
    btnBg: 'bg-[#E8DEFF]',
    btnText: 'text-[#3E2723]',
    border: 'border-[#3E2723]',
    shadow: 'shadow-[3px_3px_0px_#3E2723]',
    activeBg: 'bg-[#E8DEFF]',
    hoverBg: 'hover:bg-[#E8DEFF]/50',
    badgeBg: 'bg-[#3E2723] text-white',
    ring: 'focus:ring-[#3E2723]'
  },
  {
    name: 'white',
    btnBg: 'bg-white',
    btnText: 'text-[#3E2723]',
    border: 'border-[#3E2723]',
    shadow: 'shadow-[3px_3px_0px_#3E2723]',
    activeBg: 'bg-[#F7F2E7]',
    hoverBg: 'hover:bg-[#F7F2E7]',
    badgeBg: 'bg-[#FFEDA8] text-[#3E2723]',
    ring: 'focus:ring-[#7E3940]'
  }
];

export default function NeoDropdown({
  options = [],
  value,
  onChange,
  placeholder = 'Select an option...',
  label,
  icon: HeaderIcon,
  theme = 'white',
  size = 'md',
  align = 'left',
  fullWidth = true,
  className = '',
  menuClassName = '',
  required = false
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [randomTilt, setRandomTilt] = useState(0);
  const containerRef = useRef(null);

  // Pick or randomize palette
  const selectedTheme = theme === 'random'
    ? PALETTES[Math.floor(Math.random() * PALETTES.length)]
    : (PALETTES.find(p => p.name === theme) || PALETTES[0]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Set slight random tilt on open for playful aesthetic
  const handleToggle = () => {
    if (!isOpen) {
      const tilts = [-0.75, -0.5, 0.5, 0.75];
      setRandomTilt(tilts[Math.floor(Math.random() * tilts.length)]);
    }
    setIsOpen(!isOpen);
  };

  // Normalize option structure
  const formattedOptions = options.map((opt) => {
    if (typeof opt === 'string') {
      return { value: opt, label: opt };
    }
    return opt;
  });

  const selectedOption = formattedOptions.find(o => o.value === value) || null;

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-5 py-3.5 text-base'
  };

  return (
    <div 
      ref={containerRef} 
      className={`relative inline-block ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {label && (
        <label className="block text-xs font-black uppercase tracking-wider text-[#3E2723]/80 mb-1.5 flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            {HeaderIcon && <HeaderIcon className="w-3.5 h-3.5 text-[#7E3940]" />}
            <span>{label}</span>
          </span>
          {required && <span className="text-[#7E3940] text-xs font-black">*</span>}
        </label>
      )}

      {/* Trigger Button */}
      <button
        type="button"
        onClick={handleToggle}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`w-full flex items-center justify-between gap-2.5 rounded-xl border-2 ${selectedTheme.border} ${selectedTheme.btnBg} ${selectedTheme.btnText} ${selectedTheme.shadow} ${sizeClasses[size]} font-extrabold transition-all duration-150 select-none hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#3E2723] focus:outline-none`}
      >
        <div className="flex items-center gap-2 truncate min-w-0">
          {selectedOption?.icon && (
            <span className="text-base flex-shrink-0">{selectedOption.icon}</span>
          )}
          <span className="truncate">
            {selectedOption ? selectedOption.label : (
              <span className="text-gray-400 font-semibold">{placeholder}</span>
            )}
          </span>
          {selectedOption?.badge && (
            <span className={`text-[10px] font-black px-1.5 py-0.5 rounded-md ${selectedTheme.badgeBg} border border-[#3E2723]/20`}>
              {selectedOption.badge}
            </span>
          )}
        </div>

        <ChevronDown 
          className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#7E3940]' : 'text-[#3E2723]/70'}`} 
        />
      </button>

      {/* Dropdown Floating Menu */}
      {isOpen && (
        <div
          style={{ transform: `rotate(${randomTilt}deg)` }}
          className={`absolute z-50 mt-2 ${align === 'right' ? 'right-0' : 'left-0'} min-w-[220px] ${fullWidth ? 'w-full' : ''} bg-[#FFFDF9] rounded-2xl border-3 border-[#3E2723] shadow-[7px_7px_0px_#3E2723] p-2 animate-in fade-in zoom-in-95 duration-150 max-h-72 overflow-y-auto ${menuClassName}`}
          role="listbox"
        >
          <div className="space-y-1">
            {formattedOptions.map((opt, idx) => {
              const isSelected = opt.value === value;
              return (
                <button
                  key={opt.value || idx}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    onChange(opt.value);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left p-2.5 rounded-xl text-xs font-black transition-all flex items-center justify-between gap-2.5 border ${
                    isSelected
                      ? `${selectedTheme.activeBg} ${selectedTheme.btnText} border-[#3E2723] shadow-[2px_2px_0px_#3E2723]`
                      : `border-transparent text-[#3E2723] ${selectedTheme.hoverBg} hover:border-[#3E2723]/30 hover:translate-x-0.5`
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0 flex-1">
                    {opt.icon && (
                      <span className="text-base flex-shrink-0 w-5 text-center">{opt.icon}</span>
                    )}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="truncate">{opt.label}</span>
                        {opt.badge && (
                          <span className="text-[9px] font-black px-1.5 py-0.2 rounded bg-white text-[#3E2723] border border-[#3E2723]/30">
                            {opt.badge}
                          </span>
                        )}
                      </div>
                      {opt.description && (
                        <p className="text-[10px] font-semibold text-gray-500 truncate mt-0.5">
                          {opt.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {isSelected && (
                    <div className="w-4 h-4 rounded-full bg-[#3E2723] text-white flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
