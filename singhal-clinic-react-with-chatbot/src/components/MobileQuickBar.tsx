import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface MobileQuickBarProps {
  onOpenBooking: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0F172A]/95 backdrop-blur-md border-t border-[#C5A059]/30 p-2.5 sm:hidden shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={`tel:${CLINIC_INFO.phoneRaw}`}
          className="flex flex-col items-center justify-center py-2 px-1 bg-white/10 hover:bg-white/20 text-white rounded-xl text-[11px] font-semibold transition-colors"
        >
          <Phone className="w-4 h-4 text-[#C5A059] mb-0.5" />
          <span>Call Now</span>
        </a>

        <a
          href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(
            'Hello Singhal Clinic, I would like to inquire about an appointment.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-[11px] font-semibold transition-colors"
        >
          <MessageSquare className="w-4 h-4 mb-0.5" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-2 px-1 bg-[#C5A059] text-[#0F172A] rounded-xl text-[11px] font-bold transition-colors shadow-sm"
        >
          <Calendar className="w-4 h-4 mb-0.5" />
          <span>Book Visit</span>
        </button>
      </div>
    </div>
  );
};
