"use client";

import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('black'); // Default theme changed to black

  // Load theme from localStorage on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem('soju-theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Apply theme to document root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    
    // Also apply Tailwind classes for utility-based styling
    const root = document.documentElement;
    root.classList.remove('theme-black', 'theme-white', 'theme-orange', 'theme-gray');
    root.classList.add(`theme-${theme}`);
  }, [theme]);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('soju-theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}