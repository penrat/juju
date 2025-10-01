"use client";

import { useState, useRef, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Palette } from 'lucide-react';

export default function ThemeSelector({ compact = false }) {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const themes = [
    { id: 'black', name: 'Black', color: 'bg-black border-gray-800', emoji: '🐈‍⬛' },
    { id: 'white', name: 'White', color: 'bg-white border-gray-300', emoji: '🐱' },
    { id: 'gray', name: 'Gray', color: 'bg-gray-300 border-gray-400', emoji: '🐈' },
    { id: 'orange', name: 'Orange', color: 'bg-orange-200 border-orange-300', emoji: '🦊' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleThemeSelect = (themeId) => {
    toggleTheme(themeId);
    setIsOpen(false);
  };

  if (compact) {
    return (
      <div className="relative" ref={dropdownRef}>
        <button 
          className="flex items-center gap-2 w-full p-1 rounded hover:bg-opacity-20 transition-all duration-200 ease-in-out"
          onClick={handleToggle}
          aria-haspopup="true"
          aria-expanded={isOpen}
          aria-label="Select theme"
        >
          <Palette size={16} />
          <span className="text-sm">Theme</span>
        </button>
        
        {isOpen && (
          <div className="absolute bottom-full left-0 mb-2 w-36 bg-background border border-border rounded-xl shadow-lg z-50 py-2">
            <div className="grid grid-cols-2 gap-1.5 px-2">
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => handleThemeSelect(t.id)}
                  className={`flex flex-col items-center p-1.5 rounded-lg text-lg transition-all duration-150 ease-in-out ${
                    theme === t.id 
                      ? 'ring-2 ring-accent scale-105' 
                      : 'hover:scale-102'
                  } ${t.color}`}
                  aria-label={`Select ${t.name} theme`}
                >
                  {t.emoji}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        className="flex items-center gap-3 w-full p-2 hover:bg-opacity-20 rounded text-sm transition-all duration-200 ease-in-out"
        onClick={handleToggle}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label="Select theme"
      >
        <Palette size={16} />
        <span className="text-sm">Theme</span>
      </button>
      
      {isOpen && (
        <div className="absolute bottom-full left-0 mb-2 w-36 bg-background border border-border rounded-xl shadow-lg z-50 py-2">
          <div className="grid grid-cols-2 gap-1.5 px-2">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => handleThemeSelect(t.id)}
                className={`flex flex-col items-center p-1.5 rounded-lg text-lg transition-all duration-150 ease-in-out ${
                  theme === t.id 
                    ? 'ring-2 ring-accent scale-105' 
                    : 'hover:scale-102'
                } ${t.color}`}
                aria-label={`Select ${t.name} theme`}
              >
                {t.emoji}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}