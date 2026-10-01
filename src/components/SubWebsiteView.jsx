import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  Sun, 
  Moon, 
  Lock, 
  Unlock, 
  Sparkles,
  BookOpen,
  Package,
  Cpu,
  Mic,
  Radio,
  Briefcase,
  Mail
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { personalInfo } from '../data/portfolioData';
import BlogsSection from './BlogsSection';
import PackagesSection from './PackagesSection';
import ProjectsSection from './ProjectsSection';
import TalksSection from './TalksSection';
import PodcastsSection from './PodcastsSection';
import ExperienceSection from './ExperienceSection';
import ContactSection from './ContactSection';
import BlogCMSModal from './BlogCMSModal';

export default function SubWebsiteView({ view, onNavigateHome, onSelectView }) {
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated, openAuthModal, logout } = useAuth();
  const [isCMSOpen, setIsCMSOpen] = useState(false);

  // Sub-website metadata mapping
  const subWebsites = {
    writing: {
      title: "Technical Writing & Compiler Notes",
      subtitle: "Deep-dive essays on ML compilers, Qualcomm QNN, OpenXLA PJRT & on-device AI runtimes",
      tagline: "essays • architectural traces • benchmarks",
      color: "blue",
    },
    packages: {
      title: "Published Packages & Tooling",
      subtitle: "Open-source Python and JavaScript packages actively maintained on npm and PyPI",
      tagline: "npm • pip • cli tools • runtimes",
      color: "red",
    },
    projects: {
      title: "Compiler & Edge AI Projects",
      subtitle: "Hardware lowering plugins, ExecuTorch runtimes, and JAX silicon architectures",
      tagline: "github • open source • silicon acceleration",
      color: "green",
    },
    talks: {
      title: "Talks, Workshops & Keynotes",
      subtitle: "Conference keynotes, masterclasses, and slide decks delivered worldwide",
      tagline: "speaking • slides • recordings • summits",
      color: "blue",
    },
    podcasts: {
      title: "Podcasts & Systems Conversations",
      subtitle: "Audio and video discussions on hardware, systems engineering, and DevRel",
      tagline: "audio • episodes • spotify • youtube",
      color: "red",
    },
    experience: {
      title: "Experience & Engineering Journey",
      subtitle: "Qualcomm Developer Relations, compiler ecosystem, community leadership",
      tagline: "qualcomm • devrel • ecosystem • career",
      color: "blue",
    },
    contact: {
      title: "Get in Touch & 1:1 Sessions",
      subtitle: "Mentorship on Topmate, technical collaborations, and speaking inquiries",
      tagline: "topmate • email • booking • connect",
      color: "green",
    },
    studio: {
      title: "Blog Studio & Private CMS",
      subtitle: "Authenticated authoring environment for publishing directly to the site",
      tagline: "author • draft • export • private",
      color: "green",
    }
  };

  const meta = subWebsites[view] || subWebsites.writing;

  const handleTabClick = (e, targetView) => {
    if (e.metaKey || e.ctrlKey || e.button === 1) return;
    e.preventDefault();
    if (onSelectView) {
      onSelectView(targetView);
    }
  };

  const tabs = [
    { id: 'writing', label: 'Writing' },
    { id: 'packages', label: 'Packages' },
    { id: 'projects', label: 'Projects' },
    { id: 'talks', label: 'Talks' },
    { id: 'podcasts', label: 'Podcasts' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-white text-[#18181b] dark:bg-[#0c0e14] dark:text-[#f1f5f9] font-hand transition-colors duration-200">
      
      {/* Sub-Website Top Bar */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#0c0e14]/95 backdrop-blur-md border-b-2 border-gray-900 dark:border-gray-700 py-3 px-4 sm:px-6 select-none">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-2">
          
          <div className="flex items-center gap-3">
            <a
              href="/"
              onClick={(e) => {
                if (onNavigateHome) {
                  e.preventDefault();
                  onNavigateHome();
                }
              }}
              className="inline-flex items-center gap-1.5 text-sm font-hand font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded border border-gray-300 dark:border-gray-700 shadow-sm"
              title="Return to Main Directory"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>← Directory Index</span>
            </a>

            <span className="text-gray-300 dark:text-gray-700 select-none">/</span>

            <span className="text-xs font-hand text-red-600 dark:text-red-400 font-bold uppercase tracking-wider">
              {view}
            </span>
          </div>

          {/* Quick Sub-Website Switcher & Auth */}
          <div className="flex items-center gap-2 sm:gap-3 text-xs font-hand overflow-x-auto py-1 max-w-full">
            <nav className="flex items-center gap-1 sm:gap-1.5 text-gray-600 dark:text-gray-400">
              {tabs.map((tab) => (
                <a
                  key={tab.id}
                  href={`?view=${tab.id}`}
                  onClick={(e) => handleTabClick(e, tab.id)}
                  className={`capitalize px-2 py-0.5 rounded transition-colors whitespace-nowrap ${
                    view === tab.id
                      ? 'border border-gray-900 dark:border-white font-bold text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800'
                      : 'hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {tab.label}
                </a>
              ))}
            </nav>

            {/* Auth / Studio button */}
            {isAuthenticated ? (
              <div className="flex items-center gap-1 bg-green-50 dark:bg-green-950/40 border border-green-500/80 px-2 py-0.5 rounded text-green-700 dark:text-green-300 text-xs whitespace-nowrap">
                <span>✍️ Owner</span>
                <button onClick={logout} className="underline ml-1 text-gray-500 hover:text-red-600">Logout</button>
              </div>
            ) : (
              <button
                onClick={openAuthModal}
                className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 p-1"
                title="Owner Login for CMS"
              >
                <Lock className="w-3.5 h-3.5" />
              </button>
            )}

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-1 rounded text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              {theme === 'light' ? <Moon className="w-4 h-4 text-gray-700" /> : <Sun className="w-4 h-4 text-amber-400" />}
            </button>
          </div>

        </div>
      </header>

      {/* Sub-Website Dedicated Header Banner */}
      <section className="pt-8 pb-6 border-b border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-[#12151f]/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
            <h1 className="text-2xl sm:text-3xl font-bold font-hand text-gray-900 dark:text-white tracking-tight">
              {meta.title}
            </h1>
            <span className="font-hand text-xs text-red-600 dark:text-red-400">
              {meta.tagline}
            </span>
          </div>

          <p className="text-base font-hand text-blue-600 dark:text-blue-400 mb-3">
            &ldquo;{meta.subtitle}&rdquo;
          </p>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-gray-200 dark:border-gray-800 text-xs font-hand text-gray-600 dark:text-gray-400">
            <div>
              <span>Curated by </span>
              <strong className="text-gray-900 dark:text-white">{personalInfo.name}</strong>
              <span> &bull; DevRel at Qualcomm</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={personalInfo.socials.topmate}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-0.5 font-bold"
              >
                <span>Book 1:1 on Topmate</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>

              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline inline-flex items-center gap-0.5"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Sub-Website Isolated Content (Loaded independently, no scrolling through the rest of the site) */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        {view === 'writing' && <BlogsSection />}
        {view === 'packages' && <PackagesSection />}
        {view === 'projects' && <ProjectsSection />}
        {view === 'talks' && <TalksSection />}
        {view === 'podcasts' && <PodcastsSection />}
        {view === 'experience' && <ExperienceSection />}
        {view === 'contact' && <ContactSection />}
        {view === 'studio' && (
          <div className="space-y-6">
            {!isAuthenticated ? (
              <div className="p-8 rounded border-2 border-red-500 bg-red-50/50 dark:bg-red-950/20 text-center space-y-4">
                <Lock className="w-12 h-12 text-red-600 dark:text-red-400 mx-auto" />
                <h2 className="text-2xl font-bold font-hand text-gray-900 dark:text-white">
                  Owner Authentication Required
                </h2>
                <p className="text-sm font-hand text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                  The Blog Studio is private to Kartikey. Please enter your passcode to manage and draft blog posts.
                </p>
                <button
                  onClick={openAuthModal}
                  className="px-6 py-2 rounded bg-blue-600 text-white font-hand font-bold text-base hover:bg-blue-700 transition-colors shadow-md"
                >
                  Enter Passcode
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between mb-6 p-4 rounded border border-green-500/80 bg-green-50/30 dark:bg-green-950/20">
                  <div>
                    <h3 className="font-hand font-bold text-lg text-green-800 dark:text-green-300">
                      CMS Studio Active
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 font-hand">
                      You are authenticated as owner. All written posts will appear on your site and can be exported for Medium.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsCMSOpen(true)}
                    className="px-4 py-2 rounded bg-green-600 text-white font-hand font-bold text-sm hover:bg-green-700 transition-colors shadow-sm"
                  >
                    + Write New Post
                  </button>
                </div>
                <BlogsSection />
                <BlogCMSModal
                  isOpen={isCMSOpen}
                  onClose={() => setIsCMSOpen(false)}
                  onSavePost={() => {}}
                />
              </div>
            )}
          </div>
        )}
      </main>

      {/* Sub-Website Dedicated Footer */}
      <footer className="py-8 border-t border-gray-200 dark:border-gray-800 text-xs font-hand text-gray-500 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>{personalInfo.name} &copy; {new Date().getFullYear()} &bull; Dedicated {view} page</span>
          <a
            href="/"
            onClick={(e) => {
              if (onNavigateHome) {
                e.preventDefault();
                onNavigateHome();
              }
            }}
            className="text-blue-600 dark:text-blue-400 hover:underline font-bold inline-flex items-center gap-1"
          >
            <span>&larr; Return to Main Directory</span>
          </a>
        </div>
      </footer>

    </div>
  );
}
