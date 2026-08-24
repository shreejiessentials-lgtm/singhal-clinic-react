import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface BotAction {
  action?: 'book_appointment' | null;
  whatsapp_message?: string;
}

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<(ChatMessage & BotAction)[]>([
    {
      role: 'assistant',
      content: `Hi, I'm ${CLINIC_INFO.name}'s assistant. What's bringing you in today?`,
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const whatsappLink = (text: string) =>
    `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;

  const sendMessage = async () => {
    const text = input.trim();
    if (!text) return;

    const nextMessages: ChatMessage[] = [...messages.map(({ role, content }) => ({ role, content })), { role: 'user', content: text }];
    setMessages((prev) => [...prev, { role: 'user', content: text }]);
    setInput('');
    setIsTyping(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ history: nextMessages }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: data.reply, action: data.action, whatsapp_message: data.whatsapp_message },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: "Sorry, I'm having trouble connecting right now. Please WhatsApp us directly.",
          action: 'book_appointment',
          whatsapp_message: `Hi, I'd like to book an appointment at ${CLINIC_INFO.name}.`,
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Toggle button — sits above the mobile quick-action bar */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        aria-label="Open clinic assistant"
        className="fixed bottom-24 sm:bottom-6 right-4 sm:right-6 z-50 w-14 h-14 rounded-full bg-[#0F172A] text-[#C5A059] border border-[#C5A059]/40 shadow-2xl flex items-center justify-center hover:bg-[#1E293B] transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-40 sm:bottom-24 right-4 sm:right-6 z-50 w-[320px] max-w-[88vw] bg-white rounded-2xl border border-[#C5A059]/30 shadow-2xl overflow-hidden flex flex-col">
          <div className="bg-[#0F172A] text-white px-4 py-3.5">
            <p className="font-serif-luxury text-lg leading-tight text-white">{CLINIC_INFO.name} Assistant</p>
            <p className="text-[11px] text-[#C5A059]/90 mt-0.5">Usually replies instantly</p>
          </div>

          <div ref={bodyRef} className="p-4 h-80 overflow-y-auto flex flex-col gap-2.5 bg-[#FAF9F6]">
            {messages.map((m, i) => (
              <div key={i} className="flex flex-col">
                <div
                  className={
                    m.role === 'user'
                      ? 'self-end max-w-[85%] bg-[#0F172A] text-white text-sm rounded-xl px-3.5 py-2'
                      : 'self-start max-w-[85%] bg-white border border-slate-200 text-[#1E293B] text-sm rounded-xl px-3.5 py-2'
                  }
                >
                  {m.content}
                </div>
                {m.role === 'assistant' && m.action === 'book_appointment' && (
                  <a
                    href={whatsappLink(m.whatsapp_message || `Hi, I'd like to book an appointment at ${CLINIC_INFO.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start mt-1.5 inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg px-3 py-2 transition-colors"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    Book on WhatsApp
                  </a>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="self-start max-w-[85%] bg-white border border-slate-200 text-slate-400 text-sm rounded-xl px-3.5 py-2">
                Typing…
              </div>
            )}
          </div>

          <div className="flex border-t border-slate-200">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Type your message..."
              className="flex-1 px-3.5 py-3 text-sm outline-none"
            />
            <button
              onClick={sendMessage}
              aria-label="Send message"
              className="px-4 bg-[#C5A059] text-[#0F172A] font-semibold hover:bg-[#b8935080] transition-colors flex items-center justify-center"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
