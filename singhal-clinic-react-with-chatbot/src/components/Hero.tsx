import React from 'react';
import { Calendar, Phone, MessageSquare, Star, MapPin, ShieldCheck, CheckCircle2, UserCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface HeroProps {
  onOpenBooking: () => void;
  onCopySuccess: (text: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onCopySuccess }) => {
  const whatsappUrl = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Singhal Clinic, I would like to inquire about an appointment with Dr. Amit Singhal.'
  )}`;

  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-[#FAF9F6]">
      {/* Background Architectural Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-slate-200/40 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Top Verified Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-slate-200/80 shadow-sm text-xs font-semibold text-slate-800">
              <span className="flex items-center gap-1 text-[#C5A059]">
                <Star className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
                <span className="font-bold">{CLINIC_INFO.googleRating}</span>
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-600">{CLINIC_INFO.googleReviewsCount} Google Reviews</span>
              <span className="text-slate-300">|</span>
              <span className="flex items-center gap-1 text-slate-700">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>Sector 9, Rohini</span>
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] tracking-tight leading-[1.12]">
                Quality Care.{' '}
                <span className="italic font-normal text-[#C5A059] block sm:inline">Clear Guidance.</span>{' '}
                <span className="block">Easy Access.</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-600 font-normal max-w-2xl leading-relaxed">
                Professional healthcare access in Rohini, Delhi. Modern, patient-centric general consultation and essential diagnostic support under Dr. Amit Singhal.
              </p>
            </div>

            {/* Quick Doctor & Location Info Card */}
            <div className="p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/80 shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-[#0F172A] shrink-0 border border-slate-200">
                  <UserCheck className="w-5 h-5 text-[#C5A059]" />
                </div>
                <div>
                  <div className="font-bold text-[#0F172A]">{CLINIC_INFO.doctor}</div>
                  <div className="text-xs text-slate-500">Consulting Physician</div>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t sm:border-t-0 sm:border-l border-slate-100 pt-3 sm:pt-0 sm:pl-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-[#0F172A] shrink-0 border border-slate-200">
                  <MapPin className="w-5 h-5 text-[#C5A059]" />
                </div>
                <div>
                  <div className="font-bold text-[#0F172A]">Park Plaza Market</div>
                  <div className="text-xs text-slate-500">CSC-6, Sector 9, Rohini</div>
                </div>
              </div>
            </div>

            {/* Primary Action CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onOpenBooking}
                className="flex items-center justify-center gap-2.5 px-7 py-4 bg-[#0F172A] text-white hover:bg-[#1E293B] font-semibold text-base rounded-2xl shadow-lg hover:shadow-xl transition-all border border-[#C5A059]/40 active:scale-[0.98] group"
              >
                <Calendar className="w-5 h-5 text-[#C5A059] group-hover:scale-110 transition-transform" />
                <span>Book an Appointment</span>
              </button>

              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2.5 px-6 py-4 bg-white text-[#0F172A] hover:bg-slate-50 font-semibold text-base rounded-2xl shadow-sm hover:shadow-md transition-all border border-slate-300 active:scale-[0.98]"
              >
                <Phone className="w-5 h-5 text-[#C5A059]" />
                <span>Call Clinic</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base rounded-2xl shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Key Service Highlights Pills */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-600">
              <span className="text-slate-400 font-normal">Available in-clinic:</span>
              {['ECG Diagnostic', 'Vaccination', 'Nebulization', 'Blood Sample Collection', 'Radiology Guidance'].map(
                (service, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-white rounded-lg border border-slate-200/80 text-slate-700 shadow-2xs"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    {service}
                  </span>
                )
              )}
            </div>

          </div>

          {/* Right Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Frame */}
              <div className="absolute -inset-3 bg-linear-to-tr from-[#0F172A] to-[#C5A059]/30 rounded-3xl opacity-20 blur-xl"></div>

              {/* Doctor Visual Card */}
              <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-2xl">
                
                {/* Image */}
                <div className="relative aspect-4/3 sm:aspect-4/3 overflow-hidden bg-slate-100">
                  <img
                    src="/images/doctor-hero.jpg"
                    alt="Dr. Amit Singhal in modern clinic"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0F172A]/80 via-transparent to-transparent"></div>
                  
                  {/* Overlay Doctor Name Tag */}
                  <div className="absolute bottom-4 left-4 right-4 text-white p-4 rounded-2xl bg-[#0F172A]/85 backdrop-blur-md border border-white/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-serif-luxury text-xl font-bold text-white tracking-wide">
                          {CLINIC_INFO.doctor}
                        </h3>
                        <p className="text-xs text-slate-300">Consulting Physician • Singhal Clinic</p>
                      </div>
                      <div className="bg-[#C5A059] text-[#0F172A] p-2 rounded-xl text-xs font-bold shrink-0">
                        5.0 ★
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Sub-Strip */}
                <div className="p-4 bg-slate-50 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Verified Google Business Profile</span>
                  </div>
                  <span className="font-semibold text-[#0F172A]">{CLINIC_INFO.closingTime}</span>
                </div>

              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white p-3.5 rounded-2xl shadow-xl border border-slate-200 flex items-center gap-3 hidden sm:flex">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-[#C5A059]">
                  <Star className="w-5 h-5 fill-[#C5A059]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0F172A]">2,590+ Reviews</div>
                  <div className="text-xs text-slate-500">Rohini Sector 9</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
