import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Star, Clock, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section highlight logic
      const sections = ['home', 'about', 'services', 'why-us', 'reviews', 'gallery', 'appointment', 'visit-us', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Reviews', href: '#reviews', id: 'reviews' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Appointment', href: '#appointment', id: 'appointment' },
    { name: 'Visit Us', href: '#visit-us', id: 'visit-us' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 font-sans">
      {/* Top Announcement Strip */}
      <div className="bg-[#0F172A] text-slate-200 text-xs py-2 px-4 border-b border-[#C5A059]/30 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6 text-slate-300">
            <span className="flex items-center gap-1.5 font-medium text-[#C5A059]">
              <Star className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
              <span>{CLINIC_INFO.googleRating} Google Rating</span>
              <span className="text-slate-400">({CLINIC_INFO.googleReviewsCount} Verified Reviews)</span>
            </span>
            <span className="text-slate-500">|</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>Sector 9, Rohini, Delhi • Near Metro Pillar 400</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-800/40 text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              {CLINIC_INFO.closingTime}
            </span>
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 text-slate-200 hover:text-[#C5A059] transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3.5 border-b border-slate-200/80'
            : 'bg-white/90 backdrop-blur-sm py-4 border-b border-slate-200/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0F172A] flex items-center justify-center text-[#C5A059] font-serif font-bold text-xl border border-[#C5A059]/40 shadow-sm group-hover:bg-[#1E293B] transition-colors">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-serif-luxury text-2xl font-bold tracking-tight text-[#0F172A] leading-tight">
                {CLINIC_INFO.name}
              </span>
              <span className="text-[11px] uppercase tracking-widest text-[#C5A059] font-semibold">
                Rohini, Delhi • {CLINIC_INFO.doctor}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'text-[#0F172A] bg-slate-100 font-semibold border-b-2 border-[#C5A059]'
                      : 'text-slate-600 hover:text-[#0F172A] hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Right Desktop CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="hidden xl:flex items-center gap-2 px-3.5 py-2 text-sm font-semibold text-[#0F172A] bg-slate-100 hover:bg-slate-200 rounded-xl transition-all border border-slate-200"
            >
              <Phone className="w-4 h-4 text-[#C5A059]" />
              <span>Call Clinic</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#0F172A] text-white hover:bg-[#1E293B] font-medium text-sm rounded-xl shadow-md hover:shadow-lg transition-all border border-[#C5A059]/40 active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4 text-[#C5A059]" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenBooking}
              className="sm:hidden flex items-center gap-1.5 px-3 py-1.5 bg-[#0F172A] text-white text-xs font-semibold rounded-lg shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Book</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0F172A] hover:bg-slate-100 rounded-lg focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-fadeIn">
            <div className="grid grid-cols-2 gap-2 pb-2 border-b border-slate-100">
              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-slate-100 text-[#0F172A] rounded-xl font-semibold text-xs border border-slate-200"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Call {CLINIC_INFO.phone}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#0F172A] text-white rounded-xl font-semibold text-xs border border-[#C5A059]/40"
              >
                <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Book Appointment</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-1 pt-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#0F172A] border border-transparent hover:border-slate-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2 text-xs text-slate-500 bg-slate-50 p-3 rounded-xl flex flex-col gap-1 border border-slate-200/80">
              <div className="flex items-center gap-2 font-medium text-[#0F172A]">
                <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Open Daily • Closes 8:30 pm</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span className="truncate">Park Plaza Market, Sector 9, Rohini</span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
