import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Reviews } from './components/Reviews';
import { Gallery } from './components/Gallery';
import { AppointmentSection } from './components/AppointmentSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { AppointmentModal } from './components/AppointmentModal';
import { Toast } from './components/Toast';
import { ChatWidget } from './components/ChatWidget';

export function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('General Consultation');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setIsBookingModalOpen(true);
  };

  const handleSelectServiceFromCard = (serviceName: string) => {
    setSelectedService(serviceName);
    // Smooth scroll to appointment section or open modal
    const element = document.getElementById('appointment');
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    } else {
      setIsBookingModalOpen(true);
    }
    showToast(`Selected service: ${serviceName}`);
  };

  const showToast = (message: string) => {
    setToastMessage(message);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1E293B] font-sans antialiased selection:bg-[#C5A059] selection:text-white relative">
      
      {/* Sticky Header */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      {/* Main One-Page Content */}
      <main>
        {/* 1. HERO */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onCopySuccess={(msg) => showToast(msg)}
        />

        {/* 2. TRUST STRIP */}
        <TrustStrip />

        {/* 3. ABOUT */}
        <About />

        {/* 4. SERVICES */}
        <Services onSelectService={handleSelectServiceFromCard} />

        {/* 5. WHY CHOOSE US */}
        <WhyChooseUs onOpenBooking={() => handleOpenBooking()} />

        {/* 6. REVIEWS */}
        <Reviews />

        {/* 7. GALLERY */}
        <Gallery />

        {/* 8. APPOINTMENT */}
        <AppointmentSection
          initialReason={selectedService}
          onSuccess={(msg) => showToast(msg)}
        />

        {/* 9. LOCATION / VISIT US */}
        <LocationSection onCopySuccess={(msg) => showToast(msg)} />

        {/* 10. CONTACT */}
        <ContactSection
          onOpenBooking={() => handleOpenBooking()}
          onCopySuccess={(msg) => showToast(msg)}
        />

        {/* 11. FAQ ACCORDION */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Quick Action Bar on Mobile */}
      <MobileQuickBar onOpenBooking={() => handleOpenBooking()} />

      {/* AI Clinic Assistant */}
      <ChatWidget />

      {/* Quick Booking Modal */}
      <AppointmentModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialService={selectedService}
        onSuccess={(msg) => showToast(msg)}
      />

      {/* Notification Toast */}
      {toastMessage && (
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      )}
    </div>
  );
}

export default App;
