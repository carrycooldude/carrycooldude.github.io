import React, { useState } from 'react';
import { Cpu, Terminal, ArrowRight, Layers, CheckCircle2, ChevronRight, PenTool } from 'lucide-react';
import { compilerPipeline } from '../data/portfolioData';

export default function CompilerArchitecture() {
  const [activeStep, setActiveStep] = useState(0);
  const current = compilerPipeline[activeStep];

  return (
    <section id="architecture" className="py-12 border-b border-gray-200 dark:border-gray-800 paper-grid">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 font-mono text-xs text-red-600 dark:text-red-400 uppercase tracking-wider mb-1">
            <PenTool className="w-3.5 h-3.5" />
            <span>Architecture Flow &bull; Framework to Silicon Lowering</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-gray-900 dark:text-white">
            Compiler Design Flow: JAX, PyTorch &rarr; Snapdragon QNN
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-sans mt-1">
            How compute graphs get captured via StableHLO / FX Graph, partitioned by runtime passes, and dispatched onto Qualcomm Hexagon hardware.
          </p>
        </div>

        {/* Interactive Steps Diagram (Whiteboard sketch feel) */}
        <div className="border border-gray-300 dark:border-gray-800 rounded bg-white dark:bg-[#12151f] p-4 sm:p-5 mb-6 shadow-sm">
          <div className="text-[11px] font-mono text-gray-500 dark:text-gray-400 pb-2 mb-3 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
            <span className="font-bold text-gray-800 dark:text-gray-200">
              [Pipeline Tracing &bull; 4 Stages]
            </span>
            <span className="font-hand text-sm text-blue-600 dark:text-amber-400">
              click stages to view lowering pass
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {compilerPipeline.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-3 rounded text-left transition-all font-mono border ${
                    isSelected
                      ? 'border-blue-600 dark:border-red-500 bg-blue-50/50 dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm ring-1 ring-blue-500/20 dark:ring-red-500/20'
                      : 'border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/40 text-gray-600 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-700'
                  }`}
                >
                  <div className="text-[10px] text-gray-500 font-mono mb-0.5">{step.step}</div>
                  <div className="text-xs font-bold truncate text-gray-900 dark:text-white">{step.title}</div>
                  <div className="text-[10px] text-gray-500 dark:text-gray-400 truncate">{step.subtitle}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Inspector Panel */}
        <div className="border border-gray-300 dark:border-gray-800 rounded bg-white dark:bg-[#12151f] p-5 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
            
            {/* Left: Notes & Logic */}
            <div className="lg:col-span-5 space-y-3">
              <div>
                <span className="tech-chip">
                  Pass {activeStep + 1} of 4
                </span>
                <h3 className="text-base font-bold font-mono text-gray-900 dark:text-white mt-1.5">
                  {current.title}
                </h3>
                <p className="text-xs font-mono text-blue-600 dark:text-cyan-400 mt-0.5">
                  Dialect: {current.subtitle}
                </p>
              </div>

              <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed font-sans">
                {current.description}
              </p>

              {/* Hand-annotated callout note */}
              <div className="p-3 rounded bg-amber-50/60 dark:bg-gray-900 border border-amber-200 dark:border-gray-800 font-mono text-xs">
                <div className="font-hand text-sm text-blue-700 dark:text-amber-300 mb-1">
                  // Compiler Note:
                </div>
                <div className="text-gray-800 dark:text-gray-300 font-sans text-xs leading-relaxed">
                  {activeStep === 0 && "JAX preserves broadcast semantics through StableHLO. In PyTorch, torch.export captures the FX graph ahead of time."}
                  {activeStep === 1 && "Subgraphs with vector math are lowered to Qualcomm HTP. CPU fallbacks remain on ARM64."}
                  {activeStep === 2 && "W4A16 compresses weight footprints to fit shared LPDDR5x device memory without host memory paging."}
                  {activeStep === 3 && "Binary executes directly through QNN's memory-mapped context cache on Hexagon hardware."}
                </div>
                <div className="mt-2 pt-2 border-t border-amber-200/60 dark:border-gray-800 text-[11px] text-emerald-700 dark:text-emerald-400 font-mono font-medium">
                  State: {current.output}
                </div>
              </div>
            </div>

            {/* Right: Technical Source Code */}
            <div className="lg:col-span-7">
              <div className="code-block rounded p-4 text-xs font-mono overflow-x-auto">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-200 dark:border-gray-800 text-[11px] text-gray-500 font-mono">
                  <span>compiler_lowering_pass.py</span>
                  <span className="font-hand text-xs text-blue-600 dark:text-amber-400">// lowering routine</span>
                </div>
                <pre className="leading-relaxed whitespace-pre">
                  <code>{current.code}</code>
                </pre>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
