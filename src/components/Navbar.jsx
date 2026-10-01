import React, { useState } from 'react';
import { Sun, Moon, ArrowUpRight, Lock, Unlock } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated, openAuthModal, logout } = useAuth();
  const [clickCount, setClickCount] = useState(0);

  // Secret shortcut: clicking the brand 4 times opens the CMS login
  const handleBrandClick = (e) => {
    const nextCount = clickCount + 1;
    setClickCount(nextCount);
    if (nextCount >= 4) {
      setClickCount(0);
      openAuthModal();
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#0c0e14]/95 backdrop-blur-md border-b-2 border-gray-900 dark:border-gray-700 transition-colors py-3 select-none">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand in Felt-Tip Marker Kalam Style */}
        <div className="flex items-center gap-2">
          <a
            href="/"
            onClick={handleBrandClick}
            className="font-hand text-xl font-bold text-gray-900 dark:text-white tracking-tight hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5"
            title="Kartikey Rawat (Click 4x for CMS login)"
          >
            <span>KR</span>
            <span className="text-xs text-red-600 dark:text-red-400 font-normal">~devrel</span>
          </a>

          {isAuthenticated && (
            <span className="font-hand text-[10px] bg-green-100 dark:bg-green-950/60 text-green-700 dark:text-green-300 px-1.5 py-0.5 rounded border border-green-500/60">
              admin
            </span>
          )}
        </div>

        {/* Clean nav items - all opening in new window as dedicated sub-websites */}
        <nav className="flex items-center gap-2.5 sm:gap-4 text-sm sm:text-base font-hand text-gray-700 dark:text-gray-300">
          <a
            href="?view=writing"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-0.5"
            title="Open Writing Sub-Website in new window"
          >
            <span>Writing</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>

          <a
            href="?view=packages"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-0.5"
            title="Open Packages Sub-Website (npm & pip) in new window"
          >
            <span>Packages</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>

          <a
            href="?view=projects"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-0.5"
            title="Open Projects Sub-Website in new window"
          >
            <span>Projects</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>

          <a
            href="?view=talks"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-0.5"
            title="Open Talks Sub-Website in new window"
          >
            <span>Talks</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>

          <a
            href="?view=podcasts"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-0.5"
            title="Open Podcasts Sub-Website in new window"
          >
            <span>Podcasts</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>

          <a
            href={personalInfo.socials.topmate}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-0.5 text-blue-600 dark:text-blue-400 font-bold hover:underline"
            title="Book 1:1 on Topmate (opens in new window)"
          >
            <span>1:1</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* If authenticated, link to CMS Studio sub-website */}
          {isAuthenticated ? (
            <a
              href="?view=studio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-300 border border-green-600 px-2 py-0.5 rounded font-bold hover:bg-green-100 transition-colors"
              title="Open Blog Studio in new window"
            >
              ✍️ Studio
            </a>
          ) : null}

          {/* CMS Owner Lock Button */}
          {isAuthenticated ? (
            <button
              onClick={logout}
              className="p-1 rounded text-green-600 dark:text-green-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
              title="Authenticated as Owner (Click to logout)"
            >
              <Unlock className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={openAuthModal}
              className="p-1 rounded text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              title="CMS Login (or press Alt+C / Ctrl+Shift+W)"
            >
              <Lock className="w-3.5 h-3.5" />
            </button>
          )}

          {/* Theme toggle (Whiteboard / Darkboard) */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-1 rounded text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors ml-1 border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
            title={theme === 'light' ? 'Switch to dark board' : 'Switch to white paper'}
          >
            {theme === 'light' ? (
              <Moon className="w-4 h-4 text-gray-700" />
            ) : (
              <Sun className="w-4 h-4 text-amber-400" />
            )}
          </button>
        </nav>

      </div>
    </header>
  );
}