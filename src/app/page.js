"use client"
import { useState } from 'react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <header className="border-b border-gray-700 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-xl sm:text-2xl">🤖</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-white">SOJU AI</h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
            <a href="#feature" className="text-gray-300 hover:text-white transition">Feature</a>
            <a href="#download" className="text-gray-300 hover:text-white transition">Download</a>
          </nav>

          <button className="hidden md:flex items-center gap-2 px-4 sm:px-6 py-2 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition">
            <span className="text-sm sm:text-base">Sign In</span>
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>

          <button className="md:hidden p-2 text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-700 bg-gray-900/95 backdrop-blur-sm">
            <nav className="flex flex-col px-4 py-4 space-y-3">
              <a href="#about" className="text-gray-300 hover:text-white transition py-2">About</a>
              <a href="#feature" className="text-gray-300 hover:text-white transition py-2">Feature</a>
              <a href="#download" className="text-gray-300 hover:text-white transition py-2">Download</a>
              <button className="flex items-center justify-center gap-2 px-6 py-2 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition mt-2"><span>Sign In</span></button>
            </nav>
          </div>
        )}
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 md:mb-8 tracking-tight leading-tight">WELCOME TO SOJU AI</h2>
        <a href="#learn" className="inline-block text-sm sm:text-base text-gray-300 hover:text-white transition mb-8 sm:mb-10 md:mb-12">Learn more about SOJU AI &gt;</a>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 md:mb-16">
          <button className="px-4 sm:px-5 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition flex items-center gap-2 text-sm sm:text-base">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
            Write
          </button>
          <button className="px-4 sm:px-5 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition flex items-center gap-2 text-sm sm:text-base">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            Learn
          </button>
          <button className="px-4 sm:px-5 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition flex items-center gap-2 text-sm sm:text-base">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            Code
          </button>
        </div>

        <a href="/chat" className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-white text-gray-900 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-100 hover:shadow-2xl transition-all transform hover:scale-105">Try it now</a>

        <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all transform hover:-translate-y-2">
            <div className="text-4xl mb-3">✨</div>
            <h3 className="text-white font-semibold mb-2">Smart & Fast</h3>
            <p className="text-gray-400 text-sm">ประมวลผลรวดเร็ว ตอบคำถามได้ทันที</p>
          </div>
          <div className="bg-gradient-to-br from-green-500/10 to-teal-600/10 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-green-500/50 transition-all transform hover:-translate-y-2">
            <div className="text-4xl mb-3">💬</div>
            <h3 className="text-white font-semibold mb-2">Natural Chat</h3>
            <p className="text-gray-400 text-sm">สนทนาเป็นธรรมชาติ เข้าใจบริบท</p>
          </div>
          <div className="bg-gradient-to-br from-orange-500/10 to-pink-600/10 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-orange-500/50 transition-all transform hover:-translate-y-2">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="text-white font-semibold mb-2">Multi-Task</h3>
            <p className="text-gray-400 text-sm">ทำงานได้หลากหลาย ครบจบในที่เดียว</p>
          </div>
        </div>
      </main>

      <section id="feature" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <h3 className="text-3xl sm:text-4xl font-bold text-white text-center mb-10 sm:mb-12 md:mb-16">ความสามารถของ SOJU AI</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700 hover:border-gray-600 transition-all hover:shadow-xl hover:shadow-blue-500/10">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
              <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">ฉลาดและรวดเร็ว</h4>
            <p className="text-gray-400 text-sm sm:text-base">ตอบคำถามและประมวลผลข้อมูลได้อย่างรวดเร็วด้วย AI ที่ทันสมัยที่สุด</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700 hover:border-gray-600 transition-all hover:shadow-xl hover:shadow-green-500/10">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
              <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">สนทนาธรรมชาติ</h4>
            <p className="text-gray-400 text-sm sm:text-base">พูดคุยได้เหมือนคุยกับเพื่อน เข้าใจบริบทและตอบสนองอย่างเป็นธรรมชาติ</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700 hover:border-gray-600 transition-all hover:shadow-xl hover:shadow-orange-500/10 sm:col-span-2 md:col-span-1">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
              <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">หลากหลายงาน</h4>
            <p className="text-gray-400 text-sm sm:text-base">เขียน เรียนรู้ เขียนโค้ด แปลภาษา และอื่นๆ อีกมากมายในที่เดียว</p>
          </div>
        </div>
      </section>

      <section id="about" className="bg-gray-800/30 backdrop-blur-sm py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">เกี่ยวกับ SOJU AI</h3>
              <p className="text-gray-300 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">SOJU AI คือผู้ช่วย AI ที่พัฒนาขึ้นเพื่อช่วยให้คุณทำงานได้รวดเร็วและมีประสิทธิภาพมากขึ้น ไม่ว่าจะเป็นการเขียน การเรียนรู้ หรือการเขียนโค้ด</p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">เราใช้เทคโนโลยี AI ที่ทันสมัยที่สุดเพื่อให้คุณได้รับประสบการณ์ที่ดีที่สุด พร้อมรองรับภาษาไทยและภาษาอื่นๆ มากมาย</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl p-8 sm:p-10 md:p-12 border border-gray-700">
              <div className="space-y-5 sm:space-y-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0"><span className="text-xl sm:text-2xl">⚡</span></div>
                  <div>
                    <div className="text-white font-semibold text-sm sm:text-base">ประมวลผลเร็ว</div>
                    <div className="text-gray-400 text-xs sm:text-sm">ตอบคำถามภายในไม่กี่วินาที</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0"><span className="text-xl sm:text-2xl">🔒</span></div>
                  <div>
                    <div className="text-white font-semibold text-sm sm:text-base">ปลอดภัย</div>
                    <div className="text-gray-400 text-xs sm:text-sm">เข้ารหัสข้อมูลทุกการสื่อสาร</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0"><span className="text-xl sm:text-2xl">🌏</span></div>
                  <div>
                    <div className="text-white font-semibold text-sm sm:text-base">รองรับหลายภาษา</div>
                    <div className="text-gray-400 text-xs sm:text-sm">ไทย อังกฤษ และอีกมากมาย</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          <div className="text-center bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">1M+</div>
            <div className="text-gray-400 text-sm sm:text-base">ผู้ใช้งาน</div>
          </div>
          <div className="text-center bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">50M+</div>
            <div className="text-gray-400 text-sm sm:text-base">คำถาม</div>
          </div>
          <div className="text-center bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-400 text-sm sm:text-base">Uptime</div>
          </div>
          <div className="text-center bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-400 text-sm sm:text-base">Support</div>
          </div>
        </div>
      </section>

      <section id="download" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">ดาวน์โหลดตอนนี้</h3>
          <p className="text-gray-400 text-base sm:text-lg">ใช้งาน SOJU AI ได้ทุกที่ทุกเวลา</p>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6">
          <button className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4 px-6 sm:px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all hover:shadow-xl">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
            <div className="text-left">
              <div className="text-xs text-gray-400">ดาวน์โหลดบน</div>
              <div className="text-white font-semibold text-sm sm:text-base">App Store</div>
            </div>
          </button>
          <button className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4 px-6 sm:px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all hover:shadow-xl">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/></svg>
            <div className="text-left">
              <div className="text-xs text-gray-400">ดาวน์โหลดบน</div>
              <div className="text-white font-semibold text-sm sm:text-base">Google Play</div>
            </div>
          </button>
        </div>
      </section>

      <section className="bg-gray-800/30 backdrop-blur-sm py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h3 className="text-3xl sm:text-4xl font-bold text-white text-center mb-10 sm:mb-12 md:mb-16">ผู้ใช้งานพูดถึงเรา</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { name: 'สมชาย ใจดี', role: 'นักพัฒนาซอฟต์แวร์', text: 'SOJU AI ช่วยให้ผมทำงานเร็วขึ้นมาก ตอบคำถามได้แม่นยำและรวดเร็ว', color: 'from-blue-500 to-purple-600' },
              { name: 'มาลี สวยงาม', role: 'นักเขียนอิสระ', text: 'ใช้ช่วยเขียนบทความและเรียนรู้สิ่งใหม่ๆ ได้เยอะมาก ประทับใจมากครับ', color: 'from-green-500 to-teal-600' },
              { name: 'วิชัย มั่นคง', role: 'ผู้จัดการโครงการ', text: 'AI ที่ดีที่สุดที่เคยใช้ ตอบคำถามได้ครอบคลุมและเข้าใจง่าย', color: 'from-orange-500 to-pink-600' }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-gray-300 text-sm sm:text-base mb-4">"{item.text}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-full`}></div>
                  <div>
                    <div className="text-white font-semibold text-sm">{item.name}</div>
                    <div className="text-gray-400 text-xs">{item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">ผู้จัดทำ</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { name: "กุริญา ทาเทร์", role: "แอดมินกลุ่มนินทาอาจารย์สาขาวิทยาการคอมพิวเตอร์", Image: "/img/ying.png" },
            { name: "ณรงค์พล ชูหนู", role: "เชื่อมAPI กับเว็ป", Image: "/img/arm.png" },
            { name: "วรรณภา ฉัตรทอง", role: "นักตกแต่ง tailwindcss", Image: "/img/B.jpg" },
            { name: "ณัฐธภา ยงศิลป์วิริยะกุล", role: "นักออกแบบ Figma", Image: "/img/graz.jpg" },
            { name: "เพ็ญรัศมิ์ เฮงเริศรัตน", role: "ฝ่ายเนื้อหา", Image: "/img/yok.png" },
            { name: "หลวงปู่เอิร์ธ เชิญยิ้ม", role: "ผู้ให้พร", Image: "/img/earth.jpg" },
            { name: "อ.อรรถวิท ชังคมานน", role: "ศิลปินผู้ก่อตั้งวง sajaboys", Image: "/img/T.jo.png" }
          ].map((person, idx) => (
            <div key={idx} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 flex flex-col items-center">
              {person.Image ? (

                <img
                  src={person.Image}
                  alt={person.name}
                  className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-blue-500"
                />
              ) : (
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl text-white font-bold">{person.name.charAt(0)}</span>
                </div>
              )}
              <div className="text-white font-semibold text-lg mb-1">{person.name}</div>
              <div className="text-gray-400 text-sm">{person.role}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  


      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 sm:p-10 md:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight">พร้อมที่จะเริ่มต้นแล้วหรือยัง?</h3>
          <p className="text-blue-100 text-base sm:text-lg mb-6 sm:mb-8">ลองใช้ SOJU AI ฟรีวันนี้และสัมผัสประสบการณ์ AI ที่ไม่เหมือนใคร</p>
          <a href="/chat" className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-white text-gray-900 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-100 hover:shadow-2xl transition-all transform hover:scale-105">เริ่มใช้งานเลย</a>
        </div>
      </section>

      <footer className="border-t border-gray-700 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8">
            <div className="col-span-2 sm:col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-xl sm:text-2xl">🤖</span>
                </div>
                <h1 className="text-lg sm:text-xl font-bold text-white">SOJU AI</h1>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">ผู้ช่วย AI ที่ทรงพลังสำหรับทุกคน</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">ผลิตภัณฑ์</h4>
              <ul className="space-y-2 text-gray-400 text-xs sm:text-sm">
                <li><a href="#" className="hover:text-white transition">คุณสมบัติ</a></li>
                <li><a href="#" className="hover:text-white transition">ราคา</a></li>
                <li><a href="#" className="hover:text-white transition">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">บริษัท</h4>
              <ul className="space-y-2 text-gray-400 text-xs sm:text-sm">
                <li><a href="#" className="hover:text-white transition">เกี่ยวกับเรา</a></li>
                <li><a href="#" className="hover:text-white transition">บล็อก</a></li>
                <li><a href="#" className="hover:text-white transition">ติดต่อเรา</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">ช่วยเหลือ</h4>
              <ul className="space-y-2 text-gray-400 text-xs sm:text-sm">
                <li><a href="#" className="hover:text-white transition">ศูนย์ช่วยเหลือ</a></li>
                <li><a href="#" className="hover:text-white transition">นโยบายความเป็นส่วนตัว</a></li>
                <li><a href="#" className="hover:text-white transition">เงื่อนไขการใช้งาน</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center text-gray-400 text-xs sm:text-sm">&copy; 2024 SOJU AI. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}