import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="py-8 text-xs font-hand text-gray-500 dark:text-gray-400">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-baseline justify-between gap-2">
        <div>
          <span>{personalInfo.name} &copy; {new Date().getFullYear()}</span>
          <span className="mx-1.5">&bull;</span>
          <span className="text-blue-600 dark:text-blue-400">DevRel at Qualcomm</span>
          <span className="mx-1.5">&bull;</span>
          <span>Bengaluru, India</span>
        </div>
        <div className="text-gray-400 dark:text-gray-500">
          <span>// whiteboard &amp; felt-tip pen notes</span>
        </div>
      </div>
    </footer>
  );
}
