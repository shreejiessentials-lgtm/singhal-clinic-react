import React, { useState } from 'react';
import { X, Calendar, User, Phone, Clock, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (msg: string) => void;
  initialService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  initialService = 'General Consultation',
}) => {
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [timeSlot, setTimeSlot] = useState('Morning (10:00 AM - 1:00 PM)');
  const [service, setService] = useState(initialService);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    onSuccess('Appointment Request Recorded!');
  };

  const handleWhatsAppDirect = () => {
    const textMessage = `*Appointment Request - Singhal Clinic*
• Name: ${patientName || 'Patient'}
• Phone: ${phone}
• Preferred Date: ${date}
• Time Slot: ${timeSlot}
• Service: ${service}

Please confirm availability for Dr. Amit Singhal.`;

    const url = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(textMessage)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn overflow-y-auto">
      <div className="bg-[#FAF9F6] rounded-3xl border border-slate-200 shadow-2xl max-w-lg w-full p-6 sm:p-8 relative my-8 text-slate-800">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-200/80 hover:bg-slate-300 text-slate-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-5">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            
            <h3 className="font-serif-luxury text-2xl font-bold text-[#0F172A]">
              Request Received
            </h3>
            
            <p className="text-xs text-slate-600">
              Your appointment request for <strong>{service}</strong> on <strong>{date}</strong> has been recorded.
            </p>

            <button
              onClick={handleWhatsAppDirect}
              className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Confirm Instantly via WhatsApp</span>
            </button>

            <button
              onClick={onClose}
              className="text-xs text-slate-500 hover:underline pt-2"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="border-b border-slate-200 pb-3">
              <span className="text-[11px] uppercase tracking-widest font-bold text-[#C5A059]">
                Singhal Clinic • Rohini Sector 9
              </span>
              <h3 className="font-serif-luxury text-2xl font-bold text-[#0F172A] mt-0.5">
                Book Visit with Dr. Amit Singhal
              </h3>
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-bold uppercase text-slate-700">
                Patient Name <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full pl-9 pr-3 py-2.5 bg-white rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#0F172A]"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-bold uppercase text-slate-700">
                Phone Number <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Mobile number"
                  className="w-full pl-9 pr-3 py-2.5 bg-white rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#0F172A]"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="block text-xs font-bold uppercase text-slate-700">
                  Preferred Date
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3 py-2.5 bg-white rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#0F172A]"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold uppercase text-slate-700">
                  Time Slot
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full px-3 py-2.5 bg-white rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#0F172A]"
                >
                  <option value="Morning (10:00 AM - 1:00 PM)">Morning</option>
                  <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon</option>
                  <option value="Evening (5:00 PM - 8:30 PM)">Evening</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-bold uppercase text-slate-700">
                Service / Reason
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-3 py-2.5 bg-white rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#0F172A]"
              >
                <option value="General Consultation">General Consultation</option>
                <option value="ECG">ECG</option>
                <option value="Vaccination">Vaccination</option>
                <option value="Nebulization">Nebulization</option>
                <option value="Blood Sample Collection">Blood Sample Collection</option>
                <option value="Radiology">Radiology Guidance</option>
              </select>
            </div>

            <div className="pt-2 space-y-2">
              <button
                type="submit"
                className="w-full py-3.5 px-4 bg-[#0F172A] text-white font-bold text-xs rounded-xl shadow-md hover:bg-[#1E293B] transition-all flex items-center justify-center gap-2 border border-[#C5A059]/40"
              >
                <Send className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Submit Visit Request</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Book via WhatsApp Instead</span>
              </button>
            </div>

            <p className="text-[10px] text-slate-500 text-center pt-1">
              📍 41, GF, Park Plaza Market, CSC-6, Sector 9, Rohini, Delhi
            </p>

          </form>
        )}

      </div>
    </div>
  );
};
