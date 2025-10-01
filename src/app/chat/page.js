"use client";

import { useState, useRef, useEffect } from 'react';
import { Menu, Search, SquarePen, Image, Mail, User, Settings, Plus, Send, Mic, Paperclip } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import ThemeSelector from '../components/ThemeSelector';

export default function SojuAIChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const { theme } = useTheme();
  const fileInputRef = useRef(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);

      // Create preview for images
      if (file.type.startsWith('image/')) {
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
      } else {
        setPreviewUrl(null);
      }
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async () => {
    if ((!input.trim() && !selectedFile) || loading) return;

    const userMessage = input.trim();
    const userFile = selectedFile;

    setInput('');
    setSelectedFile(null);
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    setLoading(true);

    // เพิ่มข้อความผู้ใช้
    let messageContent = userMessage;
    if (userFile) {
      messageContent += userFile.name ? ` [ไฟล์: ${userFile.name}]` : ' [ไฟล์]';
    }

    setMessages(prev => [...prev, { role: 'user', content: messageContent, file: userFile }]);

    try {
      let response;

      if (userFile) {
        // Handle file upload
        const formData = new FormData();
        formData.append('file', userFile);
        if (userMessage) {
          formData.append('message', userMessage);
        }

        response = await fetch('/api/chat', {
          method: 'POST',
          body: formData,
        });
      } else {
        // Handle regular text message
        response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: userMessage }),
        });
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'เกิดข้อผิดพลาด');
      }

      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: data.reply || data.message,
          imageUrl: data.imageUrl || null
        }
      ]);


    } catch (error) {
      setMessages(prev => [...prev, {
        role: 'error',
        content: '❌ ' + error.message
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleNewChat = () => {
    setMessages([]);
    setInput('');
    setSelectedFile(null);
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Theme-based styling
  const getThemeClasses = () => {
    switch (theme) {
      case 'white':
        return {
          bg: 'bg-white',
          text: 'text-gray-900',
          sidebarBg: 'bg-gray-100',
          border: 'border-gray-300',
          inputBg: 'bg-gray-50',
          buttonHover: 'hover:bg-gray-200',
          messageUserBg: 'bg-blue-500',
          messageAssistantBg: 'bg-gray-200',
          messageErrorBg: 'bg-red-200',
        };
      case 'black':
        return {
          bg: 'bg-black',
          text: 'text-white',
          sidebarBg: 'bg-gray-900',
          border: 'border-gray-700',
          inputBg: 'bg-gray-800',
          buttonHover: 'hover:bg-gray-800',
          messageUserBg: 'bg-blue-600',
          messageAssistantBg: 'bg-gray-800',
          messageErrorBg: 'bg-red-900',
        };
      case 'gray':
        return {
          bg: 'bg-gray-400',
          text: 'text-gray-900',
          sidebarBg: 'bg-gray-500',
          border: 'border-gray-600',
          inputBg: 'bg-gray-300',
          buttonHover: 'hover:bg-gray-500',
          messageUserBg: 'bg-gray-700',
          messageAssistantBg: 'bg-gray-500',
          messageErrorBg: 'bg-red-500',
        };
      case 'orange':
        return {
          bg: 'bg-orange-100',
          text: 'text-orange-900',
          sidebarBg: 'bg-orange-200',
          border: 'border-orange-300',
          inputBg: 'bg-orange-50',
          buttonHover: 'hover:bg-orange-300',
          messageUserBg: 'bg-orange-500',
          messageAssistantBg: 'bg-orange-200',
          messageErrorBg: 'bg-red-300',
        };
      default: // dark theme (black)
        return {
          bg: 'bg-black',
          text: 'text-white',
          sidebarBg: 'bg-gray-900',
          border: 'border-gray-700',
          inputBg: 'bg-gray-800',
          buttonHover: 'hover:bg-gray-800',
          messageUserBg: 'bg-blue-600',
          messageAssistantBg: 'bg-gray-800',
          messageErrorBg: 'bg-red-900',
        };
    }
  };

  const themeClasses = getThemeClasses();

  return (
    <div className={`flex h-screen ${themeClasses.bg} ${themeClasses.text}`}>
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-52' : 'w-0'} transition-all duration-300 overflow-hidden ${themeClasses.sidebarBg} ${themeClasses.border}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className={`flex items-center gap-3 p-4 ${themeClasses.border}`}>
            <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-xl">🐱</span>
            </div>
            <h1 className="text-lg font-semibold">SOJU AI</h1>
          </div>

          {/* Menu Icons */}
          <div className={`p-3 ${themeClasses.border}`}>
            <div className="flex items-center justify-between mb-3">
              <button className={`p-2 rounded ${themeClasses.buttonHover}`}>
                <Menu size={20} />
              </button>
              <div className="flex gap-1">
                <button className={`p-2 rounded ${themeClasses.buttonHover}`}>
                  <Search size={18} />
                </button>
                <button className={`p-2 rounded ${themeClasses.buttonHover}`}>
                  <SquarePen size={18} />
                </button>
              </div>
            </div>

            {/* Menu Items */}
            <div className="space-y-1">
              <button
                onClick={handleNewChat}
                className={`flex items-center gap-3 w-full p-2 rounded text-sm ${themeClasses.buttonHover}`}
              >
                <Mail size={18} />
                <span>New Chat</span>
              </button>
              <button className={`flex items-center gap-3 w-full p-2 rounded text-sm ${themeClasses.buttonHover}`}>
                <Image size={18} />
                <span>Gallery</span>
              </button>
              <div className={`flex items-center w-full p-2 rounded text-sm ${themeClasses.buttonHover}`}>
                <ThemeSelector compact />
              </div>
            </div>
          </div>

          {/* Recents */}
          <div className="flex-1 p-3">
            <h3 className="text-xs text-gray-400 mb-2">Recents</h3>
          </div>

          {/* Bottom Menu */}
          <div className={themeClasses.border}>
            <button className={`flex items-center gap-3 w-full p-4 text-sm ${themeClasses.buttonHover}`}>
              <User size={18} />
              <span>Online</span>
              <span className="ml-auto w-2 h-2 bg-green-500 rounded-full"></span>
            </button>
            <button className={`flex items-center gap-3 w-full p-4 text-sm ${themeClasses.buttonHover}`}>
              <Settings size={18} />
              <span>Setting</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col relative">
        {/* Toggle Sidebar Button */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className={`absolute top-4 left-4 p-2 rounded z-10 ${themeClasses.buttonHover}`}
        >
          <Menu size={20} />
        </button>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto px-4 py-20">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full">
              <div className="w-32 h-32 bg-gray-800 rounded-full flex items-center justify-center mb-8 shadow-lg">
                <span className="text-6xl">🐱</span>
              </div>
              <h2 className="text-4xl font-light tracking-wider">Hi.......</h2>
              <p className="text-gray-500 mt-4">ถามอะไรก็ได้เลย</p>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto space-y-6">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${msg.role === 'user'
                      ? themeClasses.messageUserBg + ' text-white'
                      : msg.role === 'error'
                        ? themeClasses.messageErrorBg + ' text-white'
                        : themeClasses.messageAssistantBg + ' text-gray-900'
                      }`}
                  >
                    <p className="whitespace-pre-wrap">{msg.content}</p>
                    {msg.file && msg.file.type.startsWith('image/') && (
                      <div className="mt-2">
                        <img
                          src={URL.createObjectURL(msg.file)}
                          alt="Uploaded"
                          className="max-w-full max-h-48 rounded-lg"
                        />
                      </div>
                    )}
                    {msg.imageUrl && (
                      <div className="mt-2">
                        <img
                          src={msg.imageUrl}
                          alt="AI Generated"
                          className="max-w-full max-h-64 rounded-lg shadow-lg"
                        />
                      </div>
                    )}

                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className={`${themeClasses.messageAssistantBg} text-gray-100 rounded-2xl px-4 py-3`}>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* File Preview Area */}
        {selectedFile && (
          <div className="px-4 pb-2">
            <div className="max-w-3xl mx-auto">
              <div className={`${themeClasses.sidebarBg} rounded-lg ${themeClasses.border} p-3 flex items-center justify-between`}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center">
                    {previewUrl ? (
                      <img src={previewUrl} alt="Preview" className="w-full h-full object-cover rounded-lg" />
                    ) : (
                      <Paperclip size={20} className="text-gray-400" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-100">{selectedFile.name}</p>
                    <p className="text-xs text-gray-400">{(selectedFile.size / 1024).toFixed(1)} KB</p>
                  </div>
                </div>
                <button
                  onClick={removeFile}
                  className="text-gray-400 hover:text-white p-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className={`p-4 ${themeClasses.border}`}>
          <div className="max-w-3xl mx-auto">
            <div className={`${themeClasses.sidebarBg} rounded-2xl ${themeClasses.border} shadow-xl`}>
              <div className="flex items-center gap-2 p-3">
                <button
                  type="button"
                  className={`p-2 rounded-lg transition ${themeClasses.buttonHover}`}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Plus size={20} className="text-gray-400" />
                </button>
                <input
                  type="text"
                  placeholder="How can I help you?"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={loading}
                  className={`flex-1 bg-transparent outline-none placeholder-gray-500 disabled:opacity-50 ${themeClasses.text}`}
                />
                <button
                  onClick={handleSubmit}
                  disabled={loading || (!input.trim() && !selectedFile)}
                  className={`p-2 rounded-lg transition bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed ${themeClasses.buttonHover}`}
                >
                  <Send size={18} className="text-white" />
                </button>
                <button
                  type="button"
                  className={`p-2 rounded-lg transition ${themeClasses.buttonHover}`}
                >
                  <Mic size={18} className="text-gray-400" />
                </button>
                <button
                  type="button"
                  className={`p-2 rounded-lg transition ${themeClasses.buttonHover}`}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Paperclip size={18} className="text-gray-400" />
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                  accept="*/*"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}