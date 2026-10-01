import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { podcasts } from '../data/portfolioData';

export default function PodcastsSection() {
  return (
    <section id="podcasts" className="py-12 border-b border-gray-100 dark:border-gray-800/80">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-gray-100 dark:border-gray-800/80 pb-3">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-hand text-gray-900 dark:text-white tracking-tight">
              Podcasts &amp; Media
            </h2>
            <p className="font-hand text-sm sm:text-base text-blue-600 dark:text-blue-400">
              &ldquo;audio and video conversations on hardware runtimes, compilers &amp; DevRel&rdquo;
            </p>
          </div>
          <span className="font-hand text-xs text-red-600 dark:text-red-400">
            audio &bull; episodes ↗
          </span>
        </div>

        {/* Podcasts List */}
        <div className="space-y-4">
          {podcasts.map((pod) => (
            <div
              key={pod.id}
              className="p-4 sm:p-5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-[#0f1118] shadow-sm hover:border-gray-400 dark:hover:border-gray-700 transition-all select-none"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-gray-400 dark:text-gray-500 mb-1.5">
                <span className="text-red-600 dark:text-red-400 font-bold font-hand">
                  [{pod.show}]
                </span>
                <span>&bull;</span>
                <span>{pod.duration}</span>
                <span>&bull;</span>
                <span>{pod.date}</span>
              </div>

              <h3 className="text-lg sm:text-xl font-hand font-bold text-gray-900 dark:text-white mb-1.5 leading-snug">
                {pod.title}
              </h3>

              <p className="text-sm font-hand text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                {pod.description}
              </p>

              <div className="flex items-center gap-4 text-xs font-hand pt-2 border-t border-gray-100 dark:border-gray-800/80">
                {pod.platforms.map((plat) => (
                  <a
                    key={plat.name}
                    href={plat.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline font-bold"
                  >
                    <span>Listen on {plat.name}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
