import React from 'react';
import { Phone, MessageSquare, Calendar, UserCheck, MapPin, Clock, Star, Copy, Check } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface ContactSectionProps {
  onOpenBooking: () => void;
  onCopySuccess: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking, onCopySuccess }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(CLINIC_INFO.phone);
    setCopied(true);
    onCopySuccess('Clinic Phone Number Copied!');
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Banner Container */}
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-[#0F172A] text-white shadow-2xl relative overflow-hidden border border-[#C5A059]/30">
          
          {/* Subtle Background Architectural Gradients */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-slate-700/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 text-[#C5A059] text-xs font-semibold uppercase tracking-widest">
                <span>Contact Clinic</span>
              </div>

              <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Get In Touch With {CLINIC_INFO.name}
              </h2>

              <p className="text-base sm:text-lg text-slate-300 font-normal max-w-xl leading-relaxed">
                Direct healthcare assistance under <strong className="text-white">{CLINIC_INFO.doctor}</strong> in Rohini, Delhi.
              </p>

              {/* Direct Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-sm text-slate-200">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <UserCheck className="w-5 h-5 text-[#C5A059] shrink-0" />
                  <div>
                    <div className="text-xs text-slate-400">Doctor</div>
                    <div className="font-bold text-white">{CLINIC_INFO.doctor}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <Phone className="w-5 h-5 text-[#C5A059] shrink-0" />
                  <div className="flex-1">
                    <div className="text-xs text-slate-400">Phone Contact</div>
                    <div className="font-bold text-white flex items-center justify-between">
                      <span>{CLINIC_INFO.phone}</span>
                      <button
                        onClick={handleCopyPhone}
                        className="text-xs text-[#C5A059] hover:underline p-1"
                        aria-label="Copy phone number"
                      >
                        {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <Clock className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <div className="text-xs text-slate-400">Status</div>
                    <div className="font-bold text-white">{CLINIC_INFO.closingTime}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <Star className="w-5 h-5 text-[#C5A059] shrink-0" />
                  <div>
                    <div className="text-xs text-slate-400">Google Rating</div>
                    <div className="font-bold text-white">{CLINIC_INFO.googleRating} ★ ({CLINIC_INFO.googleReviewsCount} Reviews)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Action Buttons */}
            <div className="lg:col-span-5 flex flex-col gap-4 bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-md">
              <h3 className="font-serif-luxury text-2xl font-bold text-white">
                Quick Action Options
              </h3>

              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="w-full py-4 px-6 bg-white text-[#0F172A] hover:bg-slate-100 font-bold text-base rounded-2xl shadow-lg transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
              >
                <Phone className="w-5 h-5 text-[#C5A059]" />
                <span>Call Now ({CLINIC_INFO.phone})</span>
              </a>

              <a
                href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Singhal Clinic, I would like to inquire about consulting Dr. Amit Singhal.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base rounded-2xl shadow-lg transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp Message</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="w-full py-4 px-6 bg-[#C5A059] hover:bg-[#d4af37] text-[#0F172A] font-bold text-base rounded-2xl shadow-lg transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
              </button>

              <div className="text-[11px] text-slate-400 text-center pt-1">
                📍 41, GF, Park Plaza Market, CSC-6, Sector 9, Rohini, Delhi
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
