import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/clinicData';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const openLightbox = (item: GalleryItem, index: number) => {
    setSelectedImage(item);
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const handleNext = () => {
    const nextIdx = (selectedIndex + 1) % GALLERY_ITEMS.length;
    setSelectedIndex(nextIdx);
    setSelectedImage(GALLERY_ITEMS[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (selectedIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    setSelectedIndex(prevIdx);
    setSelectedImage(GALLERY_ITEMS[prevIdx]);
  };

  return (
    <section id="gallery" className="py-20 bg-[#FAF9F6] border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-[#C5A059] uppercase tracking-widest">
            <span>Clinic Infrastructure</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight">
            Inside Singhal Clinic
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal max-w-2xl mx-auto">
            A clean, modern, and serene clinical environment designed for calm medical visits in Rohini, Delhi.
          </p>
          <div className="w-16 h-1 bg-[#C5A059] mx-auto rounded-full mt-4"></div>
        </div>

        {/* 6 Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item: GalleryItem, idx: number) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item, idx)}
              className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="aspect-4/3 overflow-hidden bg-slate-100 relative">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0F172A]/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity"></div>
                
                {/* Maximize Icon */}
                <div className="absolute top-3 right-3 p-2 rounded-xl bg-black/40 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] uppercase tracking-widest font-bold px-2.5 py-0.5 rounded-md bg-[#C5A059] text-[#0F172A] inline-block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif-luxury text-lg font-bold truncate">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="p-4 bg-white border-t border-slate-100 text-xs text-slate-600">
                <p className="line-clamp-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn">
          
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
            aria-label="Close image modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Main Lightbox Content */}
          <div className="max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 max-h-[70vh]">
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                className="max-h-[70vh] w-auto object-contain rounded-xl"
              />
            </div>

            <div className="text-center text-white space-y-1 max-w-xl">
              <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">
                {selectedImage.category} ({selectedIndex + 1} of {GALLERY_ITEMS.length})
              </span>
              <h3 className="font-serif-luxury text-2xl font-bold">
                {selectedImage.title}
              </h3>
              <p className="text-sm text-slate-300">
                {selectedImage.description}
              </p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-4 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

        </div>
      )}
    </section>
  );
};
