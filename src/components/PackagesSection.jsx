import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, Package } from 'lucide-react';
import { publishedPackages, personalInfo } from '../data/portfolioData';

export default function PackagesSection() {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (id, cmd) => {
    navigator.clipboard.writeText(cmd);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="packages" className="py-12 border-b border-gray-100 dark:border-gray-800/80">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-gray-100 dark:border-gray-800/80 pb-3">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-hand text-gray-900 dark:text-white tracking-tight">
              Published Packages &bull; npm &amp; pip
            </h2>
            <p className="font-hand text-sm sm:text-base text-blue-600 dark:text-blue-400">
              &ldquo;open-source tooling, CLI utilities, and runtime helpers&rdquo;
            </p>
          </div>
          <span className="font-hand text-xs text-red-600 dark:text-red-400">
            npm &amp; pypi verified ↗
          </span>
        </div>

        {/* Quick Links to Profiles */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <a
            href={personalInfo.socials.npm}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border-2 border-red-500/80 bg-red-50/50 dark:bg-red-950/20 text-red-700 dark:text-red-300 font-hand font-bold text-sm hover:scale-105 transition-transform"
            title="View npm profile in new window"
          >
            <span className="font-mono text-xs bg-red-600 text-white px-1 rounded">npm</span>
            <span>npmjs.com/~carrycooldude</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <a
            href={personalInfo.socials.pypi}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border-2 border-blue-500/80 bg-blue-50/50 dark:bg-blue-950/20 text-blue-700 dark:text-blue-300 font-hand font-bold text-sm hover:scale-105 transition-transform"
            title="View PyPI profile in new window"
          >
            <span className="font-mono text-xs bg-blue-600 text-white px-1 rounded">pip</span>
            <span>pypi.org/user/carrycooldude</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Packages List Styled as Whiteboard Index Cards */}
        <div className="space-y-4">
          {publishedPackages.map((pkg) => {
            const isCopied = copiedId === pkg.id;
            return (
              <div
                key={pkg.id}
                className="p-4 sm:p-5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-[#0f1118] shadow-sm hover:border-gray-400 dark:hover:border-gray-700 transition-all select-none"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-hand font-bold text-lg text-gray-900 dark:text-white">
                      {pkg.name}
                    </span>
                    <span className="font-mono text-xs text-gray-500 dark:text-gray-400">
                      {pkg.version}
                    </span>
                  </div>

                  <span className={`font-hand text-xs font-semibold px-2 py-0.5 rounded border ${
                    pkg.registry.includes('npm')
                      ? 'border-red-400 text-red-600 dark:text-red-400 bg-red-50/30 dark:bg-red-950/20'
                      : 'border-blue-400 text-blue-600 dark:text-blue-400 bg-blue-50/30 dark:bg-blue-950/20'
                  }`}>
                    {pkg.registry}
                  </span>
                </div>

                <p className="font-hand text-sm text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                  {pkg.description}
                </p>

                {/* Install Command Terminal Chip & Links */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 border-t border-gray-100 dark:border-gray-800/80">
                  <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-900 px-3 py-1.5 rounded border border-gray-200 dark:border-gray-800">
                    <span className="font-mono text-xs text-gray-700 dark:text-gray-300 select-all">
                      $ {pkg.installCmd}
                    </span>
                    <button
                      onClick={() => handleCopy(pkg.id, pkg.installCmd)}
                      title="Copy install command"
                      className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      {isCopied ? (
                        <Check className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  <a
                    href={pkg.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-hand text-sm text-blue-600 dark:text-blue-400 hover:underline font-bold"
                  >
                    <span>View on {pkg.registry.split('/')[0].trim()}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Marginalia */}
        <div className="mt-4 pt-3 flex items-center justify-between text-xs font-hand text-gray-500">
          <span className="text-green-700 dark:text-green-400">
            // all packages open in a new window
          </span>
          <span className="italic">
            updated weekly from registry feeds
          </span>
        </div>

      </div>
    </section>
  );
}
