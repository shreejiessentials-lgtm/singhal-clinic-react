import React from 'react';
import { Activity, ShieldCheck, Wind, Droplets, Scan, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/clinicData';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return <Activity className="w-6 h-6 text-[#C5A059]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#C5A059]" />;
      case 'Wind':
        return <Wind className="w-6 h-6 text-[#C5A059]" />;
      case 'Droplets':
        return <Droplets className="w-6 h-6 text-[#C5A059]" />;
      case 'Scan':
        return <Scan className="w-6 h-6 text-[#C5A059]" />;
      default:
        return <Activity className="w-6 h-6 text-[#C5A059]" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-[#C5A059] uppercase tracking-widest">
            <span>Verified Clinic Services</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight">
            Essential Healthcare & Diagnostic Services
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal max-w-2xl mx-auto">
            High-standard clinical services available directly at Singhal Clinic in Rohini Sector 9.
          </p>
          <div className="w-16 h-1 bg-[#C5A059] mx-auto rounded-full mt-4"></div>
        </div>

        {/* 5 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service: ServiceItem, idx) => (
            <div
              key={service.id}
              className={`p-6 sm:p-7 rounded-3xl bg-[#FAF9F6] border border-slate-200 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
                idx === 0 ? 'md:col-span-2 lg:col-span-1 border-slate-300' : ''
              }`}
            >
              {/* Subtle Card Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-[#0F172A] via-[#C5A059] to-[#0F172A] opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="space-y-4">
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-2xs group-hover:bg-[#0F172A] transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-200/80 text-slate-700">
                    {service.badge}
                  </span>
                </div>

                {/* Service Title & Short Description */}
                <div>
                  <h3 className="font-serif-luxury text-2xl font-bold text-[#0F172A] group-hover:text-[#0F172A] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Service Bullet Details */}
                <ul className="space-y-2 pt-2 border-t border-slate-200/60 text-xs text-slate-700">
                  {service.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom CTA Button */}
              <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">In-Clinic Service</span>
                <button
                  onClick={() => onSelectService(service.name)}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#0F172A] group-hover:text-[#C5A059] transition-colors focus:outline-none"
                >
                  <span>Book Visit</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}

          {/* Consultation Note Box */}
          <div className="p-6 sm:p-7 rounded-3xl bg-[#0F172A] text-white border border-[#C5A059]/40 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 bg-[#C5A059]/20 border border-[#C5A059]/40 text-[#C5A059] rounded-full text-xs font-bold uppercase tracking-wider">
                Direct Consultation
              </div>
              <h3 className="font-serif-luxury text-2xl font-bold text-white">
                General Medical Guidance
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Need guidance on a health concern or custom query? Dr. Amit Singhal provides direct evaluation and clear consultation steps.
              </p>
            </div>

            <button
              onClick={() => onSelectService('General Consultation')}
              className="mt-6 w-full py-3 px-4 bg-[#C5A059] hover:bg-[#d4af37] text-[#0F172A] font-bold text-xs rounded-xl shadow-md transition-all text-center uppercase tracking-wider"
            >
              Consult Dr. Amit Singhal
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
