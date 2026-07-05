import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaPaperPlane, FaRobot, FaUser } from 'react-icons/fa';
import { servicesData } from '../data/servicesData';
import logo from '../assets/logo.png';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: 'Hello! I am the United Finserves virtual assistant. How can I help you today?', isTyping: false }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isBotThinking, setIsBotThinking] = useState(false);
  const [suggestions, setSuggestions] = useState([
    'Personal Loan', 'Business Loan', 'Home Loan', 'Interest Rates', 'Contact Support'
  ]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isBotThinking]);

  // Contextual intent matching engine
  const getBotResponse = (query) => {
    const q = query.toLowerCase();

    // Find matching service
    const matchedService = servicesData.find(s =>
      q.includes(s.title.toLowerCase()) ||
      q.includes(s.id.toLowerCase().replace('-', ' '))
    );

    if (matchedService) {
      if (q.includes('eligibility') || q.includes('eligible') || q.includes('age') || q.includes('income')) {
        return `For a ${matchedService.title}, you need an income of ${matchedService.eligibility.income}, age ${matchedService.eligibility.age}, and credit score ${matchedService.eligibility.creditScore}.`;
      }
      if (q.includes('document') || q.includes('proof')) {
        return `The required documents for ${matchedService.title} are: ${matchedService.documents.join(', ')}.`;
      }
      if (q.includes('interest') || q.includes('rate')) {
        return `Interest rates for ${matchedService.title} are highly competitive. Check our interest calculator or apply for exact rates based on your profile!`;
      }
      return matchedService.hero.desc + " Would you like to know about Eligibility, Documents, or Interest Rates?";
    }

    if (q.includes('hello') || q.includes('hi ') || q === 'hi') return "Hello there! Which loan service are you interested in?";
    if (q.includes('contact') || q.includes('support') || q.includes('call') || q.includes('phone')) return "You can reach our support team at +91 63964 26318 or ankitchauhan.1385.ac@gmail.com.";

    return "I'm sorry, I didn't quite catch that. Try asking about a specific service like 'Personal Loan' or 'Business Loan'.";
  };

  const getSuggestions = (query) => {
    const q = query.toLowerCase();
    const matchedService = servicesData.find(s => q.includes(s.title.toLowerCase()) || q.includes(s.id.toLowerCase().replace('-', ' ')));
    if (matchedService) {
      return [`${matchedService.title} Eligibility`, `${matchedService.title} Documents`, 'Apply Now'];
    }
    return ['Personal Loan', 'Business Loan', 'Contact Support'];
  };

  const handleSend = (text) => {
    if (!text.trim()) return;

    // Add user message
    const newMsg = { id: Date.now(), type: 'user', text, isTyping: false };
    setMessages(prev => [...prev, newMsg]);
    setInputValue('');
    setSuggestions([]);

    // Bot starts thinking
    setIsBotThinking(true);

    // Simulate network delay for thinking
    setTimeout(() => {
      setIsBotThinking(false);

      const replyText = getBotResponse(text);
      const botMsg = { id: Date.now(), type: 'bot', text: replyText, isTyping: true };

      setMessages(prev => [...prev, botMsg]);

      // Update suggestions after bot replies
      setTimeout(() => {
        setSuggestions(getSuggestions(text));
        setMessages(prev => prev.map(m => m.id === botMsg.id ? { ...m, isTyping: false } : m));
      }, Math.min(replyText.length * 30, 1500)); // typing time based on length

    }, 1500); // 1.5s thinking time
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend(inputValue);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[99999]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-20 right-0 w-[350px] h-[500px] bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-gray-100 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-brand-navy to-brand-royal p-3.5 flex justify-between items-center text-white shrink-0">
              <div className="flex items-center gap-3.5">
                {/* Logo circle */}
                <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-md shrink-0 overflow-hidden border-2 border-white/30">
                  <img src={logo} alt="United Finserves" className="w-9 h-9 object-contain" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-[15px] font-black uppercase tracking-[0.1em] text-brand-gold">United</h3>
                    <h3 className="text-[15px]  font-black uppercase tracking-[0.1em] text-white">Finserves</h3>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-green-300 mt-0.5">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    Online
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="w-8 h-8 flex items-center justify-center hover:bg-white/20 rounded-full transition-colors">
                <FaTimes />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-4">
              {messages.map(msg => (
                <div key={msg.id} className={`flex gap-2 max-w-[85%] ${msg.type === 'user' ? 'self-end flex-row-reverse' : 'self-start'}`}>
                  <div className={`w-8 h-8 rounded-full flex shrink-0 items-center justify-center overflow-hidden ${msg.type === 'user' ? 'bg-brand-gold text-brand-navy' : 'bg-white border border-gray-200 shadow-sm'}`}>
                    {msg.type === 'user' ? <FaUser className="text-xs" /> : <img src={logo} alt="Bot" className="w-5 h-5 object-contain" />}
                  </div>
                  <div className={`p-3 rounded-2xl text-sm shadow-sm ${msg.type === 'user' ? 'bg-brand-royal text-white rounded-tr-none' : 'bg-white text-gray-700 border border-gray-100 rounded-tl-none'}`}>
                    {msg.isTyping ? (
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "auto" }}
                        className="overflow-hidden whitespace-nowrap border-r-2 border-brand-royal animate-pulse"
                      >
                        Typing...
                      </motion.div>
                    ) : (
                      msg.text
                    )}
                  </div>
                </div>
              ))}

              {isBotThinking && (
                <div className="flex gap-2 max-w-[85%] self-start">
                  <div className="w-8 h-8 rounded-full bg-white border border-gray-200 shadow-sm flex shrink-0 items-center justify-center overflow-hidden">
                    <img src={logo} alt="Bot" className="w-5 h-5 object-contain" />
                  </div>
                  <div className="p-4 bg-white border border-gray-100 rounded-2xl rounded-tl-none shadow-sm flex gap-1 items-center">
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-2 h-2 bg-brand-royal/50 rounded-full" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-2 h-2 bg-brand-royal/50 rounded-full" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-2 h-2 bg-brand-royal/50 rounded-full" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            {suggestions.length > 0 && !isBotThinking && (
              <div
                className="px-4 py-2 bg-white border-t border-gray-100 flex gap-2 overflow-x-auto shrink-0"
                style={{
                  scrollbarWidth: 'thin',
                  scrollbarColor: '#0063c0ff transparent',
                }}
              >
                {suggestions.map((sug, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(sug)}
                    className="whitespace-nowrap px-3 py-1 bg-brand-light border border-brand-royal/20 text-brand-navy rounded-full text-xs font-medium hover:bg-brand-royal hover:text-white transition-colors"
                  >
                    {sug}
                  </button>
                ))}
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100 shrink-0">
              <div className="flex items-center gap-2 bg-gray-50 p-1.5 rounded-full border border-gray-200 focus-within:border-brand-royal/50 transition-colors">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-transparent px-4 py-2 text-sm outline-none text-gray-700"
                />
                <button
                  onClick={() => handleSend(inputValue)}
                  disabled={!inputValue.trim() || isBotThinking}
                  className="w-10 h-10 rounded-full bg-brand-navy hover:bg-brand-royal text-white flex items-center justify-center transition-colors disabled:opacity-50 disabled:hover:bg-brand-navy"
                >
                  <FaPaperPlane className="text-xs relative right-0.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button Area */}
      <div className="relative">
        {/* Tooltip (only when closed) */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="absolute -top-11 -right-4 bg-white/40 backdrop-blur-md border border-white/50 shadow-lg px-3 py-1.5 rounded-2xl rounded-bl-sm whitespace-nowrap z-0 pointer-events-none"
            >
              <span className="text-xs font-bold text-gray-900 tracking-wide">Hi, I'm <span className="font-extrabold">luci.</span></span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Shadow below sphere */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-10 h-1.5 bg-black/15 blur-[3px] rounded-full pointer-events-none" />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`w-[60px] h-[60px] rounded-full shadow-[0_12px_25px_rgba(64,8,180,0.4)] flex items-center justify-center relative z-10 transition-all ${
            isOpen ? 'bg-white border-4 border-[#3a069e]' : 'bg-gradient-to-br from-[#e89b4f] via-[#8727a6] to-[#3a069e] border-none'
          }`}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0 }} className="text-[#3a069e] text-2xl">
                <FaTimes />
              </motion.div>
            ) : (
              <motion.div key="robot" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full flex flex-col items-center justify-center relative">
                
                {/* 3D sphere highlight */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-white/40" />
                
                {/* Face Shield */}
                <div className="w-[36px] h-[16px] bg-[#22005A] rounded-full mt-1 relative overflow-hidden shadow-[inset_0_3px_6px_rgba(0,0,0,0.6)] flex items-center justify-center gap-[8px]">
                  {/* Left Eye */}
                  <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_6px_2px_rgba(255,255,255,0.9)]" />
                  {/* Right Eye */}
                  <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_6px_2px_rgba(255,255,255,0.9)]" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
};

export default Chatbot;
