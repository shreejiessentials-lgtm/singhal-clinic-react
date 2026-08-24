import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { ArrowUp, MapPin, Phone, ShieldAlert } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B132B] text-slate-300 pt-16 pb-24 sm:pb-16 border-t border-[#C5A059]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand & Introduction */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#C5A059] font-serif font-bold text-xl border border-[#C5A059]/40">
                S
              </div>
              <div className="flex flex-col">
                <span className="font-serif-luxury text-2xl font-bold text-white">
                  {CLINIC_INFO.name}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-semibold">
                  {CLINIC_INFO.doctor} • Rohini, Delhi
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              {CLINIC_INFO.introduction}
            </p>

            <div className="text-xs text-slate-400 space-y-1 pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <span className="truncate">Park Plaza Market, Sector 9, Rohini, Delhi</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <span>{CLINIC_INFO.phone} • {CLINIC_INFO.closingTime}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif-luxury text-lg font-bold text-white border-b border-white/10 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#home" className="hover:text-[#C5A059] transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#C5A059] transition-colors">About Dr. Amit Singhal</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C5A059] transition-colors">Services (ECG, Vaccination, etc.)</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#C5A059] transition-colors">Patient Reviews (5.0 ★)</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#C5A059] transition-colors">Clinic Gallery</a>
              </li>
              <li>
                <a href="#appointment" className="hover:text-[#C5A059] transition-colors">Book Appointment</a>
              </li>
              <li>
                <a href="#visit-us" className="hover:text-[#C5A059] transition-colors">Location & Directions</a>
              </li>
            </ul>
          </div>

          {/* Verified Services Summary */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif-luxury text-lg font-bold text-white border-b border-white/10 pb-2">
              Verified In-Clinic Facilities
            </h4>
            <div className="flex flex-wrap gap-1.5 text-xs text-slate-300">
              {['ECG Diagnostic', 'Vaccination', 'Nebulization', 'Blood Sample Collection', 'Radiology Guidance', 'General Consultation'].map((item, idx) => (
                <span key={idx} className="px-2.5 py-1 bg-white/5 rounded-lg border border-white/10">
                  {item}
                </span>
              ))}
            </div>
            
            <div className="pt-2 text-xs text-slate-400">
              Verified Google Business Profile • 5.0 Google Rating (2,590 Reviews)
            </div>
          </div>

        </div>

        {/* Emergency Disclaimer Banner */}
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Emergency Notice:</strong> Singhal Clinic provides general outpatient consultations and diagnostic services closing at 8:30 pm. For acute life-threatening medical emergencies, please immediately visit the nearest hospital emergency room or contact 112 / emergency ambulance services.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {CLINIC_INFO.name}. All rights reserved. Dr. Amit Singhal.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-300 hover:text-[#C5A059] transition-colors p-2 rounded-lg bg-white/5 hover:bg-white/10"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
