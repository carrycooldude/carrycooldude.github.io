import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { talks } from '../data/portfolioData';

export default function TalksSection() {
  return (
    <section id="talks" className="py-12 border-b border-gray-100 dark:border-gray-800/80">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-gray-100 dark:border-gray-800/80 pb-3">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-hand text-gray-900 dark:text-white tracking-tight">
              Talks &amp; Workshops
            </h2>
            <p className="font-hand text-sm sm:text-base text-blue-600 dark:text-blue-400">
              &ldquo;conference keynotes, masterclasses, and hands-on sessions on edge AI&rdquo;
            </p>
          </div>
          <span className="font-hand text-xs text-red-600 dark:text-red-400">
            events &bull; talks ↗
          </span>
        </div>

        {/* Talks List Styled as Whiteboard Cards */}
        <div className="space-y-4">
          {talks.map((talk) => (
            <div
              key={talk.id}
              className="p-4 sm:p-5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-[#0f1118] shadow-sm hover:border-gray-400 dark:hover:border-gray-700 transition-all select-none"
            >
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-gray-400 dark:text-gray-500 mb-1.5">
                <span className="text-blue-600 dark:text-blue-400 font-semibold font-hand">
                  [{talk.type}]
                </span>
                <span>{talk.event}</span>
                <span>&bull;</span>
                <span>{talk.date}</span>
                <span>&bull;</span>
                <span>{talk.location}</span>
              </div>

              <h3 className="text-lg sm:text-xl font-hand font-bold text-gray-900 dark:text-white mb-1.5 leading-snug">
                {talk.title}
              </h3>

              <p className="text-sm font-hand text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                {talk.description}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-gray-100 dark:border-gray-800/80">
                <div className="flex flex-wrap gap-1.5">
                  {talk.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/80 px-2 py-0.5 rounded border border-gray-200 dark:border-gray-800"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-xs font-hand">
                  {talk.slidesUrl && (
                    <a
                      href={talk.slidesUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline font-bold"
                    >
                      <span>View Slides</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                  {talk.videoUrl && (
                    <a
                      href={talk.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:underline font-bold"
                    >
                      <span>Watch Recording</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slide Repository Link */}
        <div className="mt-8 pt-4 border-t border-gray-100 dark:border-gray-800/80 flex items-center justify-between text-sm font-hand">
          <a
            href="https://github.com/carrycooldude/Talks"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline font-bold"
          >
            <span>All slide decks and workshop materials on GitHub (carrycooldude/Talks)</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <span className="text-xs text-gray-500">
            // opens in new window
          </span>
        </div>

      </div>
    </section>
  );
}
