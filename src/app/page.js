"use client"
import { useState } from 'react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="border-b border-gray-700 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-2xl">🤖</span>
            </div>
            <h1 className="text-2xl font-bold text-white">SOJU AI</h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
            <a href="#feature" className="text-gray-300 hover:text-white transition">Feature</a>
            <a href="#download" className="text-gray-300 hover:text-white transition">Download</a>
          </nav>

          <button className="flex items-center gap-2 px-6 py-2 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition">
            <span>Sign In</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
        </div>
      </header>

      {/* Explore Here Dropdown */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <button className="text-gray-300 hover:text-white transition flex items-center gap-2">
          <span>Explor here</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
          WELCOME TO SOJU AI
        </h2>
        
        <a href="#learn" className="inline-block text-gray-300 hover:text-white transition mb-12">
          Learn more about SOJU AI &gt;
        </a>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-3 mb-16">
          <button className="px-5 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            Write
          </button>
          <button className="px-5 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Learn
          </button>
          <button className="px-5 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            Code
          </button>
        </div>

        {/* CTA Button */}
        <a 
          href="@/chat"
          className="inline-block px-10 py-4 bg-white text-gray-900 rounded-full text-lg font-semibold hover:bg-gray-100 hover:shadow-2xl transition-all transform hover:scale-105"
        >
          Try it now
        </a>
      </main>
    </div>
  );
}