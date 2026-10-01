import React from 'react';

export default function BrandLogo({ size = 'md', className = '' }) {
  const sizeMap = {
    xs: 'w-6 h-6',
    sm: 'w-7 h-7',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-20 h-20'
  };

  const dim = sizeMap[size] || sizeMap.md;

  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 group ${dim} ${className}`}>
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full drop-shadow-[1px_1px_0px_rgba(0,0,0,0.15)] group-hover:scale-105 transition-transform duration-200"
      >
        {/* Qualcomm Hexagon Silicon Die Perimeter */}
        <polygon 
          points="50,6 88,28 88,72 50,94 12,72 12,28" 
          className="fill-white dark:fill-[#0c0e14] stroke-[#18181b] dark:stroke-white stroke-[4.5] stroke-linejoin-round stroke-linecap-round" 
        />
        
        {/* Inner circuit / compiler boundary */}
        <polygon 
          points="50,13 82,31 82,69 50,87 18,69 18,31" 
          className="fill-none stroke-blue-600 dark:stroke-blue-400 stroke-2 stroke-dasharray-[4_3] opacity-80" 
        />

        {/* Compiler Flow Nodes */}
        <circle cx="50" cy="13" r="3.2" className="fill-red-600 dark:fill-red-400 stroke-[#18181b] dark:stroke-white stroke-[1.5]" />
        <circle cx="50" cy="87" r="3.2" className="fill-red-600 dark:fill-red-400 stroke-[#18181b] dark:stroke-white stroke-[1.5]" />

        {/* Monogram: Interlocking 'K' */}
        <path d="M 33 28 L 33 72" className="fill-none stroke-[#18181b] dark:stroke-white stroke-[6] stroke-linecap-round stroke-linejoin-round" />
        <path d="M 33 50 L 53 30" className="fill-none stroke-[#18181b] dark:stroke-white stroke-[6] stroke-linecap-round stroke-linejoin-round" />
        <path d="M 40 44 L 56 72" className="fill-none stroke-[#18181b] dark:stroke-white stroke-[6] stroke-linecap-round stroke-linejoin-round" />

        {/* Monogram: Interlocking 'R' (Cobalt Blue Compiler Flow) */}
        <path d="M 52 32 L 67 32 C 75 32, 75 48, 67 48 L 52 48" className="fill-none stroke-blue-600 dark:stroke-blue-400 stroke-[5.5] stroke-linecap-round stroke-linejoin-round" />
        <path d="M 61 48 L 73 72" className="fill-none stroke-blue-600 dark:stroke-blue-400 stroke-[5.5] stroke-linecap-round stroke-linejoin-round" />

        {/* Micro compiler node dot */}
        <circle cx="67" cy="40" r="2.8" className="fill-blue-600 dark:fill-blue-400" />
      </svg>
    </div>
  );
}
