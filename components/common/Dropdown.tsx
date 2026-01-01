'use client';

import { useState, useRef, useEffect } from 'react';

interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  label: string;
  options: DropdownOption[];
  value?: string;
  onChange?: (value: string) => void;
  icon?: string;
  className?: string;
}

export default function Dropdown({
  label,
  options,
  value,
  onChange,
  icon = 'expand_more',
  className = '',
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(value || options[0]?.value);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === selected);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (optionValue: string) => {
    setSelected(optionValue);
    onChange?.(optionValue);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-[#1e232e] hover:bg-[#282e39] text-white rounded-lg text-sm font-medium transition-colors border border-[#282e39]"
      >
        <span>{selectedOption?.label || label}</span>
        <span className={`material-symbols-outlined text-[18px] transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          {icon}
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-[#1e232e] border border-[#282e39] rounded-lg shadow-lg overflow-hidden z-50 min-w-[200px]">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                option.value === selected
                  ? 'bg-[#135bec] text-white'
                  : 'text-[#9da6b9] hover:bg-[#282e39] hover:text-white'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
