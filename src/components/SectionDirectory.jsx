import React from 'react';
import { 
  BookOpen, 
  Package, 
  Cpu, 
  Mic, 
  Radio, 
  Briefcase, 
  Mail, 
  ArrowRight, 
  Sparkles,
  ExternalLink,
  Code2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function SectionDirectory({ onSelectView }) {
  const sections = [
    {
      id: 'writing',
      num: '01',
      title: 'Technical Writing & Compiler Notes',
      subtitle: 'Deep-dive essays on ML compilers, Qualcomm QNN, OpenXLA PJRT, and on-device AI runtimes.',
      badge: '5 Deep Dives',
      tag: 'Compilers • QNN • PJRT',
      color: 'blue',
      icon: BookOpen,
      actionText: 'Explore Writing'
    },
    {
      id: 'packages',
      num: '02',
      title: 'Published Packages & Tooling',
      subtitle: 'Open-source Python and JavaScript libraries actively maintained on npm and PyPI.',
      badge: 'npm & pip',
      tag: 'CLI Tools • Delegates • SIMD',
      color: 'red',
      icon: Package,
      actionText: 'View Packages'
    },
    {
      id: 'projects',
      num: '03',
      title: 'Silicon & Edge AI Projects',
      subtitle: 'ExecuTorch lowerings, JAX hardware plugins, and Snapdragon X Elite NPU benchmarks.',
      badge: 'GitHub Open Source',
      tag: 'Hexagon NPU • ExecuTorch',
      color: 'green',
      icon: Cpu,
      actionText: 'Explore Projects'
    },
    {
      id: 'talks',
      num: '04',
      title: 'Talks, Workshops & Masterclasses',
      subtitle: 'Conference keynotes, compiler masterclasses, and slide decks delivered worldwide.',
      badge: 'GDG & AI Summits',
      tag: 'Slides • Keynotes • Workshops',
      color: 'blue',
      icon: Mic,
      actionText: 'View Talks'
    },
    {
      id: 'podcasts',
      num: '05',
      title: 'Podcasts & Systems Conversations',
      subtitle: 'Audio and video discussions on ML compilers, developer relations, and hardware engineering.',
      badge: 'YouTube & Spotify',
      tag: 'Audio • Video Episodes',
      color: 'red',
      icon: Radio,
      actionText: 'Listen to Podcasts'
    },
    {
      id: 'experience',
      num: '06',
      title: 'Experience & Qualcomm Journey',
      subtitle: 'Career history in Developer Relations, developer ecosystem acceleration, and technical community leadership.',
      badge: 'DevRel @ Qualcomm',
      tag: 'Silicon Runtimes • Community',
      color: 'blue',
      icon: Briefcase,
      actionText: 'Read Work History'
    },
    {
      id: 'contact',
      num: '07',
      title: 'Contact & 1:1 Mentorship',
      subtitle: 'Direct booking on Topmate for 1:1 sessions, conference invitations, and technical collaborations.',
      badge: 'Topmate Verified',
      tag: '1:1 Mentorship • Speaking',
      color: 'green',
      icon: Mail,
      actionText: 'Get in Touch'
    }
  ];

  const handleCardClick = (e, sectionId) => {
    // If user clicked with Ctrl/Cmd or middle-click, allow standard browser new tab behavior
    if (e.metaKey || e.ctrlKey || e.button === 1) return;
    
    e.preventDefault();
    if (onSelectView) {
      onSelectView(sectionId);
    }
  };

  const getColorClasses = (color) => {
    switch (color) {
      case 'red':
        return {
          border: 'border-red-600/70 hover:border-red-700 dark:border-red-500/70',
          badge: 'bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 border-red-300 dark:border-red-800',
          num: 'text-red-600 dark:text-red-400',
          link: 'text-red-600 dark:text-red-400 hover:text-red-700'
        };
      case 'green':
        return {
          border: 'border-green-600/70 hover:border-green-700 dark:border-green-500/70',
          badge: 'bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-300 border-green-300 dark:border-green-800',
          num: 'text-green-600 dark:text-green-400',
          link: 'text-green-600 dark:text-green-400 hover:text-green-700'
        };
      default:
        return {
          border: 'border-blue-600/70 hover:border-blue-700 dark:border-blue-500/70',
          badge: 'bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-800',
          num: 'text-blue-600 dark:text-blue-400',
          link: 'text-blue-600 dark:text-blue-400 hover:text-blue-700'
        };
    }
  };

  return (
    <section className="py-10 border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold font-hand text-gray-900 dark:text-white flex items-center gap-2">
              <span className="text-blue-600 dark:text-blue-400">#</span>
              <span>Portfolio Directory &amp; Pages</span>
            </h2>
            <span className="font-hand text-xs text-gray-500 dark:text-gray-400">
              direct hyperlinks &bull; no endless scroll
            </span>
          </div>
          <p className="text-sm font-hand text-gray-600 dark:text-gray-300 pt-1">
            Choose a dedicated page below to jump straight to what you want to explore:
          </p>
        </div>

        {/* Directory Grid of Hyperlink Portals */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
          {sections.map((section) => {
            const styles = getColorClasses(section.color);
            const Icon = section.icon;

            return (
              <a
                key={section.id}
                href={`?view=${section.id}`}
                onClick={(e) => handleCardClick(e, section.id)}
                className={`group block p-4 rounded bg-white dark:bg-[#111420] border-2 ${styles.border} shadow-[2px_2px_0px_rgba(0,0,0,0.08)] dark:shadow-[2px_2px_0px_rgba(255,255,255,0.04)] hover:shadow-[4px_4px_0px_rgba(0,0,0,0.12)] transition-all transform hover:-translate-y-0.5 select-none`}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className={`font-hand text-sm font-bold ${styles.num}`}>
                      {section.num}
                    </span>
                    <Icon className="w-4 h-4 text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform" />
                    <span className={`text-[11px] font-hand px-1.5 py-0.5 rounded border ${styles.badge}`}>
                      {section.badge}
                    </span>
                  </div>

                  <span className={`inline-flex items-center gap-1 text-xs font-hand font-bold ${styles.link} group-hover:translate-x-1 transition-transform`}>
                    <span>{section.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>

                <h3 className="font-hand font-bold text-base sm:text-lg text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                  {section.title}
                </h3>

                <p className="text-xs sm:text-sm font-hand text-gray-600 dark:text-gray-300 mt-1.5 leading-relaxed">
                  {section.subtitle}
                </p>

                <div className="mt-3 pt-2 border-t border-gray-100 dark:border-gray-800/80 flex items-center justify-between text-[11px] font-hand text-gray-500 dark:text-gray-400">
                  <span>{section.tag}</span>
                  <span className="text-[10px] text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300">
                    ?view={section.id}
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Quick Highlights Row (Compact preview of top resources) */}
        <div className="mt-6 p-4 rounded border border-gray-200 dark:border-gray-800 bg-gray-50/70 dark:bg-[#121520]/70">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-hand text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <strong className="text-gray-900 dark:text-white">Looking for something specific?</strong>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={personalInfo.socials.topmate}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 font-bold hover:underline inline-flex items-center gap-0.5"
              >
                <span>Book 1:1 Call</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <span className="text-gray-300 dark:text-gray-700">&bull;</span>

              <a
                href={personalInfo.socials.npm}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 dark:text-red-400 font-bold hover:underline inline-flex items-center gap-0.5"
              >
                <span>npm Packages</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <span className="text-gray-300 dark:text-gray-700">&bull;</span>

              <a
                href={personalInfo.socials.pypi}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 font-bold hover:underline inline-flex items-center gap-0.5"
              >
                <span>pip Packages</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
