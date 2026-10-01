import React from 'react';
import { MessageSquareQuote, Star } from 'lucide-react';
import { testimonials } from '../data/portfolioData';

export default function TestimonialsSection() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-300 mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Community &amp; Peer Endorsements</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            What Leaders Say
          </h2>
          <p className="text-sm sm:text-base text-brand-muted mt-2">
            Feedback from collaborators, engineering program managers, and community leaders.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 sm:p-7 border border-brand-border card-hover flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-brand-border/60">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border border-brand-border"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=0066ff&color=fff`;
                  }}
                />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-brand-muted">
                    {item.role}, <span className="text-brand-cyan">{item.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
