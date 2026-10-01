import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="pt-14 pb-10 border-b border-gray-100 dark:border-gray-800/80">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        
        {/* Name and Role in Felt-Tip Marker Typography */}
        <div className="space-y-1.5 mb-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl sm:text-4xl font-bold font-hand text-gray-900 dark:text-white tracking-tight">
              {personalInfo.name}
            </h1>
            <span className="font-hand text-xs text-red-600 dark:text-red-400">
              devrel &bull; qualcomm
            </span>
          </div>

          <p className="text-base sm:text-lg font-hand text-blue-600 dark:text-blue-400">
            &ldquo;Developer Relations at Qualcomm &bull; ML Compilers, Silicon Runtimes &amp; On-Device AI&rdquo;
          </p>

          <p className="text-sm font-hand text-gray-600 dark:text-gray-300 leading-relaxed pt-1">
            Making complex ML compilers, hardware runtimes, and Snapdragon NPU silicon approachable, observable, and practical for engineers worldwide.
          </p>
        </div>

        {/* Narrative / Bio in Handwritten Prose */}
        <div className="space-y-3 text-sm sm:text-base font-hand text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            I live at the intersection of developer community, code, and silicon runtimes. Most of my work revolves around solving the same challenge: taking something technically complex—such as native <strong className="text-gray-900 dark:text-white font-bold">OpenXLA PJRT</strong> plugins for JAX, <strong className="text-gray-900 dark:text-white font-bold">Meta ExecuTorch</strong> lowering, or <strong className="text-gray-900 dark:text-white font-bold">Qualcomm QNN</strong> acceleration on Hexagon NPUs—and making it easier for engineers to understand, build with, and ship on real hardware.
          </p>
          <p>
            Outside of Qualcomm, I write long-form technical essays on Medium and Google Developer Experts, maintain packages on <strong className="text-gray-900 dark:text-white">npm</strong> and <strong className="text-gray-900 dark:text-white">pip</strong>, speak at developer summits, record podcasts, and mentor engineers 1:1 on Topmate.
          </p>
        </div>

        {/* Verified Links Row - Featuring npm, pip, Topmate, Medium, GitHub, etc. */}
        <div className="mt-8 pt-5 border-t border-gray-100 dark:border-gray-800/80 flex flex-wrap items-center gap-x-5 gap-y-2.5 text-sm font-hand">
          <a
            href={personalInfo.socials.topmate}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-0.5 text-blue-600 dark:text-blue-400 hover:underline font-bold"
            title="Book 1:1 on Topmate (opens in new window)"
          >
            <span>Topmate (1:1)</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <a
            href={personalInfo.socials.npm}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-red-600 dark:text-red-400 hover:underline font-bold"
            title="View npm packages (opens in new window)"
          >
            <span>npm (~carrycooldude)</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <a
            href={personalInfo.socials.pypi}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline font-bold"
            title="View pip/PyPI packages (opens in new window)"
          >
            <span>pip (carrycooldude)</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <a
            href={personalInfo.socials.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-0.5 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:underline"
            title="Read on Medium (opens in new window)"
          >
            <span>Medium</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
          </a>

          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-0.5 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:underline"
            title="View GitHub (opens in new window)"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
          </a>

          <a
            href={personalInfo.socials.huggingface}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-0.5 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:underline"
            title="View Hugging Face (opens in new window)"
          >
            <span>Hugging Face</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
          </a>

          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-0.5 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:underline"
            title="View LinkedIn (opens in new window)"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
          </a>

          <a
            href={personalInfo.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-0.5 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 hover:underline font-bold"
            title="View YouTube Channel (@carrycooldude) (opens in new window)"
          >
            <span>YouTube (@carrycooldude)</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-red-500" />
          </a>

          <a
            href={personalInfo.socials.email}
            className="inline-flex items-center gap-0.5 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:underline"
            title="Send email"
          >
            <span>Email</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
          </a>
        </div>

      </div>
    </section>
  );
}