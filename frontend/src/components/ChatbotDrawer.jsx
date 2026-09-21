import React, { useState, useRef, useEffect, useCallback } from 'react';
import { sendChatMessage } from '../api/client';
import { personalInfo } from '../data/portfolioData';
import { sound } from '../utils/audio';

const WELCOME_MSG = {
  sender: 'bot',
  text: `Hey, I'm Charlie — an IT student and aspiring full-stack developer from Malabon City. Ask me anything about my projects, tech stack, or background.`,
};

const SUGGESTIONS = [
  'What projects have you built?',
  'What is your tech stack?',
  'Are you available for freelance?',
  'Tell me about yourself',
];

function Avatar({ size = 'w-9 h-9', ring = true, dot = true }) {
  return (
    <div className="relative shrink-0">
      <div
        className={`${size} rounded-xl overflow-hidden bg-[#0a0a0a] ${
          ring ? 'border-2 border-[#c2ff01]' : 'border border-[#2a2a2a]'
        }`}
      >
        <img
          src={personalInfo.avatar1}
          alt={personalInfo.name}
          className="w-full h-full object-cover object-top"
        />
      </div>
      {dot && (
        <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#00ff88] rounded-full border-2 border-[#0d0d0d] shadow-[0_0_8px_#00ff88]" />
      )}
    </div>
  );
}

export default function ChatbotDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME_MSG]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Keep history for multi-turn context (only role/content pairs, not the welcome msg)
  const historyRef = useRef([]);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(scrollToBottom, 50);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [messages, isLoading, isOpen, scrollToBottom]);

  const sendMessage = async (text) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    setShowSuggestions(false);
    setMessages(prev => [...prev, { sender: 'user', text: trimmed }]);
    setInputValue('');
    setIsLoading(true);

    // Build history snapshot for this request (exclude the initial bot welcome)
    const historySnapshot = historyRef.current.slice(-10); // cap at last 10 turns

    try {
      const data = await sendChatMessage(trimmed, historySnapshot);
      const reply = data.reply || 'No response received.';

      // Update history with this new exchange
      historyRef.current = [
        ...historyRef.current,
        { role: 'user', content: trimmed },
        { role: 'assistant', content: reply },
      ];

      setMessages(prev => [...prev, { sender: 'bot', text: reply }]);
    } catch (error) {
      const isNetworkError = !error.response;
      const errMsg = isNetworkError
        ? (error.message?.includes('VITE_GROQ_API_KEY')
            ? error.message
            : 'Could not reach the AI service. Check your connection and try again.')
        : (error.response?.data?.reply || 'Something went wrong. Please try again.');

      setMessages(prev => [...prev, { sender: 'bot', text: errMsg }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputValue);
    }
  };

  const handleClear = () => {
    sound.playClick();
    setMessages([WELCOME_MSG]);
    historyRef.current = [];
    setShowSuggestions(true);
  };

  const toggleOpen = () => {
    sound.playClick();
    setIsOpen(prev => !prev);
  };

  return (
    <div className="fixed bottom-3 right-3 sm:bottom-5 sm:right-6 z-50 flex flex-col items-end gap-2.5 sm:gap-3">

      {/* ── CHAT WINDOW ──────────────────────────────── */}
      {isOpen && (
        <div className="w-[calc(100vw-24px)] sm:w-[400px] max-w-[400px] bg-[#0d0d0d] border-2 border-[#0a0a0a] rounded-2xl shadow-[5px_5px_0px_#0a0a0a] overflow-hidden flex flex-col h-[min(540px,75vh)]">

          {/* Brand accent strip — ties the site's three colors together */}
          <div className="h-1 w-full shrink-0 bg-[linear-gradient(90deg,#c2ff01_0%,#c2ff01_33%,#ff4502_33%,#ff4502_66%,#0044ff_66%,#0044ff_100%)]" />

          {/* Header */}
          <div className="px-4 py-3 border-b border-[#1f1f1f] flex items-center justify-between bg-[#111] shrink-0">
            <div className="flex items-center gap-2.5 min-w-0">
              <Avatar />
              <div className="min-w-0">
                <p className="font-silkscreen text-[11px] font-bold text-white leading-tight tracking-wider truncate">
                  CHARLIE MER LIBATOD
                </p>
                <p className="font-silkscreen text-[9px] text-[#00ff88] flex items-center gap-1.5 mt-0.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff88] opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00ff88]" />
                  </span>
                  ONLINE
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <button
                onClick={handleClear}
                title="Clear chat"
                className="text-white/30 hover:text-[#ff4502] font-silkscreen text-[9px] px-2 py-1.5 rounded transition-colors cursor-pointer"
              >
                CLR
              </button>
              <button
                onClick={toggleOpen}
                title="Close"
                className="text-white/40 hover:text-[#c2ff01] font-silkscreen text-xs px-2 py-1.5 rounded transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto flex flex-col gap-3 p-4 bg-[#080808]"
            style={{ scrollbarWidth: 'thin', scrollbarColor: '#1f1f1f transparent' }}
          >
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.sender === 'bot' && (
                  <div className="w-6 h-6 rounded-lg overflow-hidden bg-[#0a0a0a] border border-[#c2ff01]/50 mr-2 mt-1 shrink-0">
                    <img
                      src={personalInfo.avatar1}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                )}
                <div
                  className={`px-3.5 py-2.5 max-w-[85%] text-xs sm:text-[13px] leading-relaxed rounded-2xl ${
                    msg.sender === 'user'
                      ? 'bg-[#c2ff01] text-[#0a0a0a] font-semibold rounded-br-sm font-space'
                      : 'bg-[#181818] text-[#e8ffe8] border border-[#2a2a2a] rounded-bl-sm font-space'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="w-6 h-6 rounded-lg overflow-hidden bg-[#0a0a0a] border border-[#c2ff01]/50 mr-2 mt-1 shrink-0">
                  <img
                    src={personalInfo.avatar1}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="bg-[#181818] border border-[#2a2a2a] rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-[#c2ff01] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-[#c2ff01] rounded-full animate-bounce" style={{ animationDelay: '160ms' }} />
                  <span className="w-2 h-2 bg-[#c2ff01] rounded-full animate-bounce" style={{ animationDelay: '320ms' }} />
                </div>
              </div>
            )}

            {/* Suggestion chips */}
            {showSuggestions && messages.length === 1 && !isLoading && (
              <div className="flex flex-wrap gap-2 mt-1">
                {SUGGESTIONS.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => sendMessage(s)}
                    onMouseEnter={() => sound.playHover()}
                    className="font-space text-[11px] bg-[#141414] text-[#c2ff01] border border-[#c2ff01]/30 hover:border-[#c2ff01] hover:bg-[#c2ff01]/10 px-3 py-1.5 rounded-xl transition-all cursor-pointer"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-[#1a1a1a] flex gap-2 bg-[#0f0f0f] shrink-0">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask anything about Charlie..."
              disabled={isLoading}
              className="flex-1 font-space text-xs px-3.5 py-2.5 rounded-xl border border-[#2a2a2a] bg-[#050505] text-white focus:outline-none focus:border-[#c2ff01] transition-colors placeholder-[#555] disabled:opacity-50"
            />
            <button
              onClick={() => { sound.playClick(); sendMessage(inputValue); }}
              onMouseEnter={() => sound.playHover()}
              disabled={isLoading || !inputValue.trim()}
              className="btn-brutalist px-3.5 sm:px-4 py-2.5 bg-[#c2ff01] text-[#0a0a0a] font-silkscreen font-bold text-[10px] rounded-xl border-2 border-[#0a0a0a] shadow-[2px_2px_0px_#0a0a0a] hover:bg-white transition-all cursor-pointer disabled:opacity-40 disabled:shadow-none shrink-0 tracking-wider"
            >
              SEND
            </button>
          </div>
        </div>
      )}

      {/* ── TOGGLE BUTTON ──────────────────────────── */}
      <button
        onClick={toggleOpen}
        onMouseEnter={() => sound.playHover()}
        id="chatToggleBtn"
        className="btn-brutalist flex items-center gap-2.5 bg-[#c2ff01] text-[#0a0a0a] font-silkscreen text-[11px] sm:text-xs font-bold pl-2 pr-4 py-2 sm:pr-5 rounded-xl shadow-[3px_3px_0px_#0a0a0a] border-2 border-[#0a0a0a] hover:bg-white transition-all cursor-pointer active:scale-95"
      >
        {isOpen ? (
          <>
            <span className="w-7 h-7 rounded-lg flex items-center justify-center bg-[#0a0a0a] text-[#c2ff01] text-xs shrink-0">✕</span>
            <span>CLOSE CHAT</span>
          </>
        ) : (
          <>
            <Avatar size="w-7 h-7" ring={false} />
            <span>CHAT WITH CHARLIE</span>
          </>
        )}
      </button>

    </div>
  );
}
