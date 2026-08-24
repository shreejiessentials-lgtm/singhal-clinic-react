import React from 'react';
import { HeartHandshake, Clock, ShieldCheck, MessageCircle, UserCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const About: React.FC = () => {
  const principles = [
    {
      icon: HeartHandshake,
      title: "Attentive & Patient Listening",
      description: "Consultations are structured around listening carefully to your symptoms and concerns without rush or anxiety."
    },
    {
      icon: MessageCircle,
      title: "Clear, Jargon-Free Guidance",
      description: "Medical advice, test reports, and routine care steps are communicated in simple, actionable terms."
    },
    {
      icon: Clock,
      title: "Punctual & Respectful Access",
      description: "Organized appointment slotting and streamlined walk-in workflows designed to respect your valuable time."
    },
    {
      icon: ShieldCheck,
      title: "Clean & Comfortable Ambience",
      description: "A serene, hygienic clinic environment maintained under strict clinical protocol for patient comfort."
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#FAF9F6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-[#C5A059] uppercase tracking-widest">
            <span>About Singhal Clinic</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight">
            Care That Starts With Listening.
          </h2>
          <div className="w-16 h-1 bg-[#C5A059] mx-auto rounded-full mt-4"></div>
        </div>

        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white group">
              <div className="aspect-4/3 sm:aspect-4/3 overflow-hidden bg-slate-100">
                <img
                  src="/images/doctor-consulting.jpg"
                  alt="Dr Amit Singhal providing clear guidance to patient"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Overlay Quote Badge */}
              <div className="p-6 bg-[#0F172A] text-white border-t border-[#C5A059]/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#C5A059]/20 border border-[#C5A059]/40 flex items-center justify-center shrink-0">
                    <UserCheck className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <div className="font-serif-luxury text-lg font-bold text-slate-100">
                      Dr. Amit Singhal
                    </div>
                    <div className="text-xs text-slate-300">
                      Singhal Clinic • Rohini Sector 9
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Accent Subtle Badge */}
            <div className="absolute -top-4 -right-4 bg-[#C5A059] text-[#0F172A] font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-xl shadow-lg border border-white">
              Established Care
            </div>
          </div>

          {/* Text & Principles Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-semibold text-[#0F172A]">
                Modern Neighbourhood Healthcare in Rohini, Delhi
              </h3>
              
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
                "{CLINIC_INFO.introduction}"
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Whether you visit for an in-clinic ECG, routine vaccination, blood sample collection, or general doctor consultation, Singhal Clinic is structured to provide prompt medical attention with total clarity and warmth.
              </p>
            </div>

            {/* 4 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {principles.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex items-start gap-4"
                  >
                    <div className="p-2.5 rounded-xl bg-slate-100 text-[#0F172A] border border-slate-200 shrink-0">
                      <Icon className="w-5 h-5 text-[#C5A059]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0F172A] text-sm sm:text-base mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
