import React from 'react';
import { CheckCircle2, Info, X } from 'lucide-react';

interface ToastProps {
  message: string;
  type?: 'success' | 'info';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'success', onClose }) => {
  return (
    <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3 bg-[#0F172A] text-white px-5 py-3.5 rounded-xl shadow-2xl border border-[#C5A059]/40 backdrop-blur-md animate-bounce-short">
      {type === 'success' ? (
        <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0" />
      ) : (
        <Info className="w-5 h-5 text-sky-400 shrink-0" />
      )}
      <span className="text-sm font-medium pr-2 text-slate-100">{message}</span>
      <button
        onClick={onClose}
        className="p-1 hover:bg-slate-800 rounded-lg transition-colors text-slate-400 hover:text-white"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
