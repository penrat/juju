// pages/index.js
import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage = message;
    setMessage('');
    setLoading(true);

    // เพิ่มข้อความของผู้ใช้
    setConversation(prev => [...prev, { role: 'user', content: userMessage }]);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      // เพิ่มข้อความตอบกลับจาก AI
      setConversation(prev => [...prev, { role: 'ai', content: data.reply }]);

    } catch (error) {
      console.error('Error:', error);
      setConversation(prev => [...prev, { 
        role: 'error', 
        content: 'เกิดข้อผิดพลาด: ' + error.message 
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>My AI Chat App</title>
      </Head>

      <div className="container">
        <h1>🤖 AI Chat Assistant</h1>
        
        <div className="chat-container">
          {conversation.map((msg, index) => (
            <div key={index} className={`message ${msg.role}`}>
              <strong>{msg.role === 'user' ? 'คุณ:' : msg.role === 'ai' ? 'AI:' : 'ข้อผิดพลาด:'}</strong>
              <p>{msg.content}</p>
            </div>
          ))}
          {loading && (
            <div className="message ai">
              <strong>AI:</strong>
              <p>กำลังคิด... 🤔</p>
            </div>
          )}
        </div>

        <form onSubmit={sendMessage} className="input-form">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="พิมพ์ข้อความของคุณ..."
            disabled={loading}
            className="message-input"
          />
          <button type="submit" disabled={loading || !message.trim()}>
            ส่ง
          </button>
        </form>
      </div>
    </>
  );
}