import React from 'react';
import { ArrowUpRight, Star } from 'lucide-react';
import { projects, personalInfo } from '../data/portfolioData';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-12 border-b border-gray-100 dark:border-gray-800/80">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-gray-100 dark:border-gray-800/80 pb-3">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-hand text-gray-900 dark:text-white tracking-tight">
              Projects &amp; Open Source
            </h2>
            <p className="font-hand text-sm sm:text-base text-blue-600 dark:text-blue-400">
              &ldquo;compiler backends, JAX PJRT plugins, and on-device execution engines&rdquo;
            </p>
          </div>
          <span className="font-hand text-xs text-red-600 dark:text-red-400">
            github &bull; public repos ↗
          </span>
        </div>

        {/* Projects List Styled as Whiteboard Cards */}
        <div className="space-y-4">
          {projects.map((p) => (
            <div
              key={p.id}
              className="p-4 sm:p-5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-[#0f1118] shadow-sm hover:border-gray-400 dark:hover:border-gray-700 transition-all select-none"
            >
              <div className="flex items-center justify-between text-xs font-mono text-gray-400 dark:text-gray-500 mb-1.5">
                <span className="text-blue-600 dark:text-blue-400 font-semibold font-hand">
                  [{p.domain}]
                </span>
                <span className="flex items-center gap-1 font-mono">
                  <Star className="w-3 h-3 text-amber-500 fill-current" />
                  <span>{p.stars}</span>
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-hand font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors leading-snug mb-1">
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-baseline gap-1"
                  title="View repo on GitHub in new window"
                >
                  <span>{p.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50 hover:opacity-100 transition-opacity translate-y-0.5" />
                </a>
              </h3>

              <p className="text-sm font-hand text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                {p.description}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-gray-100 dark:border-gray-800/80">
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/80 px-2 py-0.5 rounded border border-gray-200 dark:border-gray-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-hand text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-0.5"
                >
                  <span>View Repository</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* All Repos on GitHub */}
        <div className="mt-8 pt-4 border-t border-gray-100 dark:border-gray-800/80 flex items-center justify-between text-sm font-hand">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline font-bold"
          >
            <span>All 35+ repositories on GitHub (@{personalInfo.handle})</span>
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
