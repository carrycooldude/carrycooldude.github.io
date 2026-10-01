import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 border-b border-gray-100 dark:border-gray-800/80">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-gray-100 dark:border-gray-800/80 pb-3">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-hand text-gray-900 dark:text-white tracking-tight">
              Connect &amp; 1:1 Mentorship
            </h2>
            <p className="font-hand text-sm sm:text-base text-blue-600 dark:text-blue-400">
              &ldquo;open for systems discussions, DevRel, and developer mentorship&rdquo;
            </p>
          </div>
          <span className="font-hand text-xs text-red-600 dark:text-red-400">
            topmate &bull; email ↗
          </span>
        </div>

        {/* Topmate Whiteboard Card */}
        <div className="p-5 sm:p-6 rounded border-2 border-blue-500/80 bg-blue-50/30 dark:bg-blue-950/20 mb-6 shadow-sm select-none">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-hand font-bold text-gray-900 dark:text-white">
              Book a 1:1 Session on Topmate
            </h3>
            <span className="font-hand text-xs font-bold text-blue-600 dark:text-blue-400 border border-blue-400 px-2 py-0.5 rounded">
              Verified Mentor
            </span>
          </div>

          <p className="text-sm font-hand text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Looking for guidance on developer relations, breaking into open-source / GSoC, low-level compilers, or on-device AI engineering? You can book time directly with me on Topmate.
          </p>

          <a
            href={personalInfo.socials.topmate}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-blue-600 text-white font-hand font-bold text-sm hover:bg-blue-700 transition-colors shadow-sm"
          >
            <span>Book 1:1 on Topmate (topmate.io/carrycooldude)</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Links and Profiles List */}
        <div className="space-y-3 font-hand text-sm">
          <div>
            <span className="text-gray-500 dark:text-gray-400">Direct Email: </span>
            <a
              href={personalInfo.socials.email}
              className="text-gray-900 dark:text-white hover:underline font-mono font-bold"
            >
              {personalInfo.email}
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2 border-t border-gray-100 dark:border-gray-800">
            <a
              href={personalInfo.socials.npm}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 text-red-600 dark:text-red-400 hover:underline font-bold"
            >
              <span>npm (~carrycooldude)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={personalInfo.socials.pypi}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 text-blue-600 dark:text-blue-400 hover:underline font-bold"
            >
              <span>pip (carrycooldude)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={personalInfo.socials.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 text-blue-600 dark:text-blue-400 hover:underline font-bold"
            >
              <span>Medium</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 text-blue-600 dark:text-blue-400 hover:underline font-bold"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={personalInfo.socials.huggingface}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 text-blue-600 dark:text-blue-400 hover:underline font-bold"
            >
              <span>Hugging Face</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 text-blue-600 dark:text-blue-400 hover:underline font-bold"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={personalInfo.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 text-red-600 dark:text-red-400 hover:underline font-bold"
              title="View YouTube Channel (@carrycooldude) (opens in new window)"
            >
              <span>YouTube (@carrycooldude)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
