import React from 'react';
import { MapPin, MessageSquareText, Clock, Compass, CheckCircle2, ChevronRight } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface WhyChooseUsProps {
  onOpenBooking: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenBooking }) => {
  const reasons = [
    {
      id: "reach",
      title: "Easy to Reach",
      subtitle: "Rohini Sector 9 Landmark",
      icon: MapPin,
      description: "Located centrally at Park Plaza Market, CSC-6, directly near Metro Pillar No. 400. Convenient parking and smooth transit from Sector 9 and Sector 13 Metro stations.",
      points: [
        "Ground floor accessible entrance",
        "Directly near Metro Pillar No. 400",
        "Park Plaza Market central location",
        "Ample local vehicle parking space"
      ]
    },
    {
      id: "communication",
      title: "Clear Communication",
      subtitle: "Direct Doctor Interaction",
      icon: MessageSquareText,
      description: "Dr. Amit Singhal takes dedicated time during every visit to explain health findings, prescriptions, and diagnostic steps clearly without medical jargon.",
      points: [
        "Empathetic, calm listening posture",
        "Clear report & prescription walk-through",
        "Direct answers to patient questions",
        "Honest, transparent health guidance"
      ]
    },
    {
      id: "access",
      title: "Convenient Clinic Access",
      subtitle: "Flexible Consultation Hours",
      icon: Clock,
      description: "Designed for busy family schedules with evening availability closing at 8:30 pm, organized appointment scheduling, and comfortable waiting arrangements.",
      points: [
        "Open daily • Closes 8:30 pm",
        "Minimal wait time with pre-booked slots",
        "Walk-in patient support accommodated",
        "Air-conditioned, serene waiting lounge"
      ]
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-[#FAF9F6] border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-[#C5A059] uppercase tracking-widest">
            <span>Patient Experience</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight">
            Designed For Patient Comfort & Convenience
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal max-w-2xl mx-auto">
            Three core commitments that define every visit to Singhal Clinic in Rohini, Delhi.
          </p>
          <div className="w-16 h-1 bg-[#C5A059] mx-auto rounded-full mt-4"></div>
        </div>

        {/* 3 Premium Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.id}
                className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-6">
                  {/* Icon Header */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-[#0F172A] text-[#C5A059] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform border border-[#C5A059]/30">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-3xl font-serif-luxury font-bold text-slate-300">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
                      {reason.subtitle}
                    </span>
                    <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#0F172A] mt-1">
                      {reason.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {reason.description}
                  </p>

                  {/* Checkpoints */}
                  <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                    {reason.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#0F172A] hover:text-[#C5A059] transition-colors"
                  >
                    <span>Schedule Your Visit</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
