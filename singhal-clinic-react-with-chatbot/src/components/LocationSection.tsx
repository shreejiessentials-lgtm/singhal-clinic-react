import React from 'react';
import { MapPin, Phone, Clock, Copy, Navigation, Check, ExternalLink, Train } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface LocationSectionProps {
  onCopySuccess: (msg: string) => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onCopySuccess }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CLINIC_INFO.address);
    setCopied(true);
    onCopySuccess('Clinic Address Copied to Clipboard!');
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="visit-us" className="py-20 bg-[#FAF9F6] border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-[#C5A059] uppercase tracking-widest">
            <span>Clinic Location</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight">
            Visit Singhal Clinic
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal max-w-2xl mx-auto">
            Conveniently situated in Sector 9, Rohini, right near Metro Pillar No. 400 in Park Plaza Market.
          </p>
          <div className="w-16 h-1 bg-[#C5A059] mx-auto rounded-full mt-4"></div>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Address & Visiting Details Box */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-white border border-slate-200/90 shadow-lg flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              
              {/* Header Title */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                  Exact Address & Landmark
                </span>
                <h3 className="font-serif-luxury text-2xl font-bold text-[#0F172A] mt-1">
                  Singhal Clinic
                </h3>
              </div>

              {/* Exact Address Block */}
              <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-slate-200 space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C5A059] shrink-0 mt-1" />
                  <div className="text-sm font-medium text-[#0F172A] leading-relaxed">
                    {CLINIC_INFO.address}
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-slate-200/80">
                  <span className="text-xs text-slate-500 font-semibold">Landmark: Metro Pillar 400</span>
                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F172A] hover:text-[#C5A059] transition-colors p-1.5 rounded-lg hover:bg-slate-200/60"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Phone & Timings */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <Phone className="w-5 h-5 text-[#C5A059] shrink-0" />
                  <div>
                    <div className="text-xs text-slate-500">Direct Contact</div>
                    <a
                      href={`tel:${CLINIC_INFO.phoneRaw}`}
                      className="font-bold text-[#0F172A] hover:text-[#C5A059] transition-colors"
                    >
                      {CLINIC_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <Clock className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <div className="text-xs text-slate-500">Clinic Status & Hours</div>
                    <div className="font-bold text-[#0F172A]">
                      Open Daily • <span className="text-emerald-700">{CLINIC_INFO.closingTime}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Metro & Commute Guide */}
              <div className="p-4 rounded-2xl bg-sky-50/60 border border-sky-200/60 space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2 font-bold text-sky-900">
                  <Train className="w-4 h-4 text-sky-600" />
                  <span>Delhi Metro Commute Guide</span>
                </div>
                <p className="leading-relaxed text-slate-600">
                  Nearest metro stations: <strong>Rohini Sector 9</strong> or <strong>Rohini Sector 13</strong>. Take an auto/e-rickshaw directly to <strong>Park Plaza Market, CSC-6, near Metro Pillar No. 400</strong>.
                </p>
              </div>

            </div>

            {/* Direct Google Directions Link */}
            <a
              href={CLINIC_INFO.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 bg-[#0F172A] text-white hover:bg-[#1E293B] font-bold text-sm rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 border border-[#C5A059]/40"
            >
              <Navigation className="w-4 h-4 text-[#C5A059]" />
              <span>Get Directions on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>

          </div>

          {/* Interactive Map Section */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-slate-200/90 shadow-lg min-h-[420px] bg-slate-100 relative group flex flex-col">
            
            {/* Map Iframe */}
            <iframe
              title="Singhal Clinic Location Map"
              src={CLINIC_INFO.mapsEmbedUrl}
              className="w-full h-full min-h-[420px] border-0"
              loading="lazy"
              allowFullScreen
            ></iframe>

            {/* Top Map Floating Badge */}
            <div className="absolute top-4 left-4 bg-[#0F172A] text-white p-3.5 rounded-2xl shadow-xl border border-[#C5A059]/40 flex items-center gap-3 backdrop-blur-md">
              <div className="w-9 h-9 rounded-xl bg-[#C5A059] text-[#0F172A] flex items-center justify-center font-bold text-sm shrink-0">
                S
              </div>
              <div>
                <div className="font-serif-luxury font-bold text-sm text-slate-100">
                  {CLINIC_INFO.name}
                </div>
                <div className="text-[11px] text-slate-300">
                  Park Plaza Market, Sector 9, Rohini
                </div>
              </div>
            </div>

            {/* Bottom Overlay directions bar */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200 shadow-lg flex items-center justify-between text-xs text-slate-700">
              <div className="flex items-center gap-2 font-medium truncate">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span className="truncate">Near Metro Pillar No. 400, Rajapur, Pocket 6</span>
              </div>
              <a
                href={CLINIC_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#0F172A] hover:text-[#C5A059] shrink-0 ml-2 underline"
              >
                Open Map →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
