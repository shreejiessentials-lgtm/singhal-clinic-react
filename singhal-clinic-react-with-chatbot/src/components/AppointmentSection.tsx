import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Phone, MessageSquare, CheckCircle2, ShieldAlert, Sparkles, Send } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface AppointmentSectionProps {
  initialReason?: string;
  onSuccess: (msg: string) => void;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({ initialReason, onSuccess }) => {
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (10:00 AM - 1:00 PM)');
  const [reason, setReason] = useState('General Consultation');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialReason) {
      setReason(initialReason);
    }
  }, [initialReason]);

  // Set default date to today or tomorrow
  useEffect(() => {
    const today = new Date();
    const formatted = today.toISOString().split('T')[0];
    setPreferredDate(formatted);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    onSuccess('Appointment Request Recorded Successfully!');
  };

  const handleWhatsAppBooking = () => {
    const textMessage = `*New Appointment Request - Singhal Clinic*
• *Patient Name:* ${patientName || 'Not specified'}
• *Phone:* ${phone || 'Not specified'}
• *Preferred Date:* ${preferredDate || 'Earliest available'}
• *Preferred Time:* ${preferredTime}
• *Reason for Visit:* ${reason}
• *Notes:* ${notes || 'None'}

Please confirm availability for Dr. Amit Singhal.`;

    const url = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(textMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="appointment" className="py-20 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-[#C5A059] uppercase tracking-widest">
                <span>Appointment Desk</span>
              </div>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight">
                Book Your Visit
              </h2>
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                Schedule a consultation or diagnostic service at Singhal Clinic with Dr. Amit Singhal in Rohini Sector 9.
              </p>
            </div>

            {/* Direct Instant Action Buttons */}
            <div className="p-6 rounded-3xl bg-[#FAF9F6] border border-slate-200 space-y-4">
              <h3 className="font-serif-luxury text-xl font-bold text-[#0F172A]">
                Need Immediate Consultation?
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                You can also call the clinic directly or connect via WhatsApp for instant appointment slot confirmation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-[#0F172A] text-white hover:bg-[#1E293B] font-semibold text-xs rounded-xl shadow-md transition-all border border-[#C5A059]/40"
                >
                  <Phone className="w-4 h-4 text-[#C5A059]" />
                  <span>Call {CLINIC_INFO.phone}</span>
                </a>

                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(
                    'Hello Singhal Clinic, I would like to book an appointment with Dr. Amit Singhal.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 text-white hover:bg-emerald-700 font-semibold text-xs rounded-xl shadow-md transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>

            {/* Clinic Operational Note */}
            <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-xs text-slate-700 space-y-2">
              <div className="flex items-center gap-2 font-bold text-[#0F172A]">
                <Clock className="w-4 h-4 text-[#C5A059]" />
                <span>Operating Hours & Walk-In Guidance</span>
              </div>
              <p className="leading-relaxed text-slate-600">
                Singhal Clinic closes at 8:30 pm daily. Walk-in visits are accommodated; however, requesting an appointment helps minimize waiting time.
              </p>
            </div>

          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF9F6] border border-slate-200/90 shadow-xl relative overflow-hidden">
              
              {submitted ? (
                <div className="text-center py-12 space-y-6 animate-fadeIn">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200 shadow-md">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-widest text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                      Request Submitted
                    </span>
                    <h3 className="font-serif-luxury text-3xl font-bold text-[#0F172A]">
                      Thank You, {patientName || 'Patient'}
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Your visit request for <strong className="text-[#0F172A]">{reason}</strong> on <strong className="text-[#0F172A]">{preferredDate}</strong> ({preferredTime}) has been recorded.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-2xl border border-slate-200 text-xs text-slate-600 max-w-md mx-auto space-y-3 text-left">
                    <div className="font-bold text-[#0F172A] border-b border-slate-100 pb-2">
                      Send Copy Directly via WhatsApp?
                    </div>
                    <p>
                      Clicking below opens WhatsApp with your appointment request pre-filled for immediate clinic confirmation:
                    </p>
                    <button
                      onClick={handleWhatsAppBooking}
                      className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-md"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send Details via WhatsApp</span>
                    </button>
                  </div>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-[#0F172A] underline hover:text-[#C5A059]"
                  >
                    Submit Another Appointment Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="border-b border-slate-200 pb-4 mb-2">
                    <h3 className="font-serif-luxury text-2xl font-bold text-[#0F172A]">
                      Patient Appointment Form
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Fill out your preferred visit details. No advance online payment required.
                    </p>
                  </div>

                  {/* Patient Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Patient Full Name <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          required
                          value={patientName}
                          onChange={(e) => setPatientName(e.target.value)}
                          placeholder="e.g. Rajesh Kumar"
                          className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0F172A] focus:ring-1 focus:ring-[#0F172A]"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. 98765 43210"
                          className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0F172A] focus:ring-1 focus:ring-[#0F172A]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Date & Time Slot */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Preferred Date <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="date"
                          required
                          value={preferredDate}
                          onChange={(e) => setPreferredDate(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0F172A] focus:ring-1 focus:ring-[#0F172A]"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Preferred Time Slot
                      </label>
                      <div className="relative">
                        <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <select
                          value={preferredTime}
                          onChange={(e) => setPreferredTime(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0F172A] focus:ring-1 focus:ring-[#0F172A]"
                        >
                          <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                          <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2:00 PM - 5:00 PM)</option>
                          <option value="Evening (5:00 PM - 8:30 PM)">Evening (5:00 PM - 8:30 PM)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Reason for Visit */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Reason for Visit / Service
                    </label>
                    <select
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0F172A] focus:ring-1 focus:ring-[#0F172A]"
                    >
                      <option value="General Consultation">General Consultation</option>
                      <option value="ECG">ECG Diagnostic</option>
                      <option value="Vaccination">Vaccination</option>
                      <option value="Nebulization">Nebulization</option>
                      <option value="Blood Sample Collection">Blood Sample Collection</option>
                      <option value="Radiology">Radiology Guidance</option>
                      <option value="Other Query">Other Health Query</option>
                    </select>
                  </div>

                  {/* Additional Notes */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Additional Details / Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Briefly describe your health query or specific timing preference..."
                      className="w-full p-4 bg-white rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0F172A] focus:ring-1 focus:ring-[#0F172A]"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <button
                      type="submit"
                      className="flex-1 py-4 px-6 bg-[#0F172A] text-white hover:bg-[#1E293B] font-bold text-sm rounded-xl shadow-lg hover:shadow-xl transition-all border border-[#C5A059]/40 flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4 text-[#C5A059]" />
                      <span>Request Appointment</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppBooking}
                      className="py-4 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp Us</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-500 text-center">
                    🔒 Your personal phone and details are strictly protected and used solely for appointment scheduling at Singhal Clinic.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
