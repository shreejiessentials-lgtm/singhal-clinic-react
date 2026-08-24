import React from 'react';
import { Star, MessageSquareQuote, UserCheck, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const TrustStrip: React.FC = () => {
  const trustMetrics = [
    {
      icon: Star,
      value: "5.0",
      label: "Google Rating",
      subtext: "Highest rated local clinic",
      iconColor: "text-[#C5A059]",
      bgColor: "bg-amber-50 border-amber-200/60"
    },
    {
      icon: MessageSquareQuote,
      value: "2,590",
      label: "Google Reviews",
      subtext: "Verified patient feedback",
      iconColor: "text-sky-600",
      bgColor: "bg-sky-50 border-sky-200/60"
    },
    {
      icon: UserCheck,
      value: "Doctor",
      label: CLINIC_INFO.doctor,
      subtext: "Consulting Physician",
      iconColor: "text-slate-800",
      bgColor: "bg-slate-100 border-slate-200"
    },
    {
      icon: MapPin,
      value: "Rohini, Delhi",
      label: "Park Plaza Market",
      subtext: "Sector 9, Near Metro Pillar 400",
      iconColor: "text-emerald-600",
      bgColor: "bg-emerald-50 border-emerald-200/60"
    }
  ];

  return (
    <section className="py-8 bg-white border-y border-slate-200/80 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {trustMetrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-[#FAF9F6] border border-slate-200/90 shadow-2xs hover:shadow-sm transition-all flex items-start gap-3.5 group"
              >
                <div className={`p-3 rounded-xl border ${metric.bgColor} shrink-0 group-hover:scale-105 transition-transform`}>
                  <Icon className={`w-5 h-5 ${metric.iconColor}`} />
                </div>
                <div className="min-w-0">
                  <div className="text-lg sm:text-xl font-bold font-serif-luxury text-[#0F172A] leading-tight truncate">
                    {metric.value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-700 truncate">
                    {metric.label}
                  </div>
                  <div className="text-[11px] text-slate-500 truncate mt-0.5">
                    {metric.subtext}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
