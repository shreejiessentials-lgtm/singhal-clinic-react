import React from 'react';
import { Star, MessageSquareQuote, CheckCircle2, ExternalLink } from 'lucide-react';
import { CLINIC_INFO, REVIEWS, ReviewItem } from '../data/clinicData';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-[#0F172A]">
            <Star className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
            <span>Verified Google Reviews</span>
          </div>
          
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight">
            Patient Trust Built On Everyday Care
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal max-w-2xl mx-auto">
            Read verified experiences from patients who visit Singhal Clinic in Rohini Sector 9.
          </p>
          <div className="w-16 h-1 bg-[#C5A059] mx-auto rounded-full mt-2"></div>
        </div>

        {/* Aggregate Google Score Header Box */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-[#FAF9F6] border border-slate-200 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-2xl border border-slate-200 shadow-xs">
              <span className="font-serif-luxury text-4xl sm:text-5xl font-bold text-[#0F172A]">
                {CLINIC_INFO.googleRating}
              </span>
              <div>
                <div className="flex text-[#C5A059] gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C5A059]" />
                  ))}
                </div>
                <div className="text-xs text-slate-500 font-medium mt-1">
                  {CLINIC_INFO.googleReviewsCount} Google Reviews
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-serif-luxury text-xl font-bold text-[#0F172A]">
                100% Verified Google Business Profile
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Singhal Clinic, Dr Amit Singhal • Park Plaza Market, Rohini Sector 9
              </p>
            </div>
          </div>

          <a
            href={CLINIC_INFO.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 bg-[#0F172A] text-white hover:bg-[#1E293B] font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-md shrink-0 border border-[#C5A059]/40"
          >
            <span>View on Google Maps</span>
            <ExternalLink className="w-4 h-4 text-[#C5A059]" />
          </a>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {REVIEWS.map((review: ReviewItem) => (
            <div
              key={review.id}
              className="p-6 sm:p-7 rounded-3xl bg-[#FAF9F6] border border-slate-200 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative"
            >
              <div className="space-y-4">
                {/* Rating & Date */}
                <div className="flex items-center justify-between">
                  <div className="flex text-[#C5A059] gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C5A059]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-600 bg-white px-2.5 py-1 rounded-full border border-slate-200 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    {review.date}
                  </span>
                </div>

                {/* Review Body */}
                <p className="text-sm text-slate-700 italic leading-relaxed">
                  "{review.reviewText}"
                </p>

                {/* Aspect Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {review.aspects.map((aspect, aIdx) => (
                    <span
                      key={aIdx}
                      className="text-[10px] font-medium bg-white text-slate-600 px-2 py-0.5 rounded-md border border-slate-200"
                    >
                      ✓ {aspect}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Footer */}
              <div className="pt-5 mt-5 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <div className="font-serif-luxury text-base font-bold text-[#0F172A]">
                    {review.author}
                  </div>
                  <div className="text-xs text-slate-500">{review.location}</div>
                </div>

                <div className="w-8 h-8 rounded-full bg-slate-200 text-[#0F172A] flex items-center justify-center font-bold text-xs">
                  {review.author.charAt(0)}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
