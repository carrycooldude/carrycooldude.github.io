import React from 'react';
import { experience } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-12 border-b border-gray-100 dark:border-gray-800/80">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-gray-100 dark:border-gray-800/80 pb-3">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-hand text-gray-900 dark:text-white tracking-tight">
              Work &amp; Experience
            </h2>
            <p className="font-hand text-sm sm:text-base text-blue-600 dark:text-blue-400">
              &ldquo;chronological path through developer relations, systems &amp; open source&rdquo;
            </p>
          </div>
          <span className="font-hand text-xs text-red-600 dark:text-red-400">
            2021 — present
          </span>
        </div>

        {/* Experience Cards */}
        <div className="space-y-4">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-[#0f1118] shadow-sm hover:border-gray-400 dark:hover:border-gray-700 transition-all select-none"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                <div>
                  <h3 className="text-lg sm:text-xl font-hand font-bold text-gray-900 dark:text-white">
                    {exp.role}{' '}
                    <span className="text-red-600 dark:text-red-400 font-hand font-bold">
                      @ {exp.company}
                    </span>
                  </h3>
                  <div className="text-xs font-mono text-gray-500 dark:text-gray-400">
                    {exp.tag}
                  </div>
                </div>

                <div className="text-xs font-mono text-gray-400 dark:text-gray-500 shrink-0">
                  {exp.period} &bull; {exp.location}
                </div>
              </div>

              <ul className="space-y-1.5 mt-3 pt-2 border-t border-gray-100 dark:border-gray-800/80">
                {exp.points.map((p, pIdx) => (
                  <li key={pIdx} className="text-sm font-hand text-gray-700 dark:text-gray-300 leading-relaxed flex items-start gap-2">
                    <span className="text-blue-600 select-none">&bull;</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
