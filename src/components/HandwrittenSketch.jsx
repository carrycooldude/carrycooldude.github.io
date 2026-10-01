import React, { useState } from 'react';

export default function HandwrittenSketch() {
  const [selectedElement, setSelectedElement] = useState('3'); // '1', '2', '3', '4'

  // Strided calculation details for 2x2 matrix with strides [2, 1]
  const elementData = {
    '1': { row: 0, col: 0, calc: '0×2 + 0×1 = 0', offset: '0x10', note: 'top-left contiguous start' },
    '2': { row: 0, col: 1, calc: '0×2 + 1×1 = 1', offset: '0x14', note: 'stride along col dimension' },
    '3': { row: 1, col: 0, calc: '1×2 + 0×1 = 2', offset: '0x18', note: 'stride along row dimension' },
    '4': { row: 1, col: 1, calc: '1×2 + 1×1 = 3', offset: '0x1C', note: 'bottom-right vector slot' },
  };

  const curr = elementData[selectedElement];

  return (
    <div className="my-10 p-5 sm:p-6 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-[#0f1118] shadow-sm overflow-hidden select-none">
      
      {/* Hand-drawn Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-6 border-b border-gray-100 dark:border-gray-800/80 pb-3">
        <div>
          <h3 className="font-hand text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
            Tensor: Strided Representation &amp; Silicon Layout
          </h3>
          <p className="font-hand text-sm sm:text-base text-blue-600 dark:text-blue-400">
            &ldquo;how high-level PyTorch / JAX tensors map onto physical memory&rdquo;
          </p>
        </div>
        <span className="font-hand text-xs text-red-600 dark:text-red-400">
          rev2 &bull; interactive sketch
        </span>
      </div>

      {/* Main Diagram Area */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center py-2">
        
        {/* Left: Logical 2x2 Matrix */}
        <div className="md:col-span-4 flex flex-col items-center">
          <span className="font-hand text-lg text-blue-600 dark:text-blue-400 font-bold mb-2">
            logical
          </span>

          <div className="relative font-hand text-2xl flex items-center gap-3">
            {/* Left parenthesis */}
            <span className="text-4xl text-gray-800 dark:text-gray-200 select-none font-sans font-light">(</span>
            
            {/* Matrix grid */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-center my-1">
              {['1', '2', '3', '4'].map((val) => {
                const isSelected = selectedElement === val;
                return (
                  <button
                    key={val}
                    onClick={() => setSelectedElement(val)}
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                      isSelected
                        ? 'border-2 border-green-600 text-green-700 dark:text-green-400 font-bold bg-green-50 dark:bg-green-950/40 ring-2 ring-green-500/20 scale-110'
                        : 'text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    {val}
                  </button>
                );
              })}
            </div>

            {/* Right parenthesis */}
            <span className="text-4xl text-gray-800 dark:text-gray-200 select-none font-sans font-light">)</span>
          </div>

          <div className="font-hand text-xs text-gray-600 dark:text-gray-400 mt-3">
            dtype = torch.int32
          </div>

          <div className="font-hand text-sm text-gray-800 dark:text-gray-200 mt-2">
            tensor[<span className="text-blue-600 dark:text-blue-400 font-bold">{curr.row}</span>, <span className="text-red-600 dark:text-red-400 font-bold">{curr.col}</span>]
          </div>
        </div>

        {/* Center: Hand-drawn Squiggly Arrow & Stride Equation */}
        <div className="md:col-span-4 flex flex-col items-center text-center space-y-2">
          
          {/* Stride formula box */}
          <div className="px-3 py-1.5 rounded border border-green-600/80 dark:border-green-500/80 bg-green-50/40 dark:bg-green-950/20 font-hand text-base sm:text-lg">
            <span className="text-blue-600 dark:text-blue-400 font-bold">{curr.row}</span>
            <span className="text-gray-500">×</span>
            <span className="text-blue-600 dark:text-blue-400 font-bold">2</span>
            <span className="text-gray-500"> + </span>
            <span className="text-red-600 dark:text-red-400 font-bold">{curr.col}</span>
            <span className="text-gray-500">×</span>
            <span className="text-red-600 dark:text-red-400 font-bold">1</span>
            <span className="text-gray-700 dark:text-gray-300"> = </span>
            <span className="text-green-700 dark:text-green-400 font-bold text-xl">
              {curr.row * 2 + curr.col * 1}
            </span>
          </div>

          <div className="flex items-center gap-1 font-hand text-xs text-gray-500">
            <span className="text-blue-600 dark:text-blue-400">index×stride</span>
            <span>+</span>
            <span className="text-red-600 dark:text-red-400">index×stride</span>
          </div>

          {/* Squiggly hand-drawn arrow */}
          <div className="flex items-center justify-center gap-1 text-red-600 dark:text-red-400 font-hand text-base pt-1">
            <span>maps to</span>
            <svg width="60" height="20" viewBox="0 0 60 20" fill="none" className="stroke-current">
              <path d="M2 10 Q 15 2, 30 10 T 50 10 L 44 5 M 50 10 L 44 15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="font-hand text-xs text-gray-500 italic">
            // {curr.note}
          </div>
        </div>

        {/* Right: Physical Contiguous Memory Layout */}
        <div className="md:col-span-4 flex flex-col items-center">
          <span className="font-hand text-lg text-blue-600 dark:text-blue-400 font-bold mb-2">
            physical
          </span>

          <div className="w-40 border-2 border-gray-900 dark:border-gray-200 rounded font-hand text-sm divide-y divide-gray-800 dark:divide-gray-200 bg-white dark:bg-gray-900">
            {[
              { addr: '0x10', val: '1' },
              { addr: '0x14', val: '2' },
              { addr: '0x18', val: '3' },
              { addr: '0x1C', val: '4' },
            ].map((slot) => {
              const isSelected = selectedElement === slot.val;
              return (
                <div
                  key={slot.addr}
                  onClick={() => setSelectedElement(slot.val)}
                  className={`flex items-center justify-between px-3 py-1 cursor-pointer transition-colors ${
                    isSelected
                      ? 'bg-green-100 dark:bg-green-950/60 font-bold text-green-800 dark:text-green-300'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white'
                  }`}
                >
                  <span className="font-mono text-[11px] text-gray-400 select-none">
                    {slot.addr}
                  </span>
                  <span className={`text-base font-hand ${isSelected ? 'scale-125 text-green-700 dark:text-green-400' : ''}`}>
                    {slot.val}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Sizes and Strides Marginalia */}
          <div className="mt-3 font-hand text-xs text-gray-700 dark:text-gray-300 space-y-0.5">
            <div>sizes: [<span className="text-blue-600 dark:text-blue-400 font-bold">2</span>, <span className="text-red-600 dark:text-red-400 font-bold">2</span>]</div>
            <div>strides: [<span className="text-blue-600 dark:text-blue-400 font-bold">2</span>, <span className="text-red-600 dark:text-red-400 font-bold">1</span>]</div>
          </div>
        </div>

      </div>

      {/* Bottom Whiteboard Sketch Footer */}
      <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800 flex flex-wrap items-center justify-between text-xs font-hand text-gray-500">
        <span className="text-green-700 dark:text-green-400">
          Upcoming: Qualcomm QNN Zero-Copy Memory Map
        </span>
        <span className="text-gray-400 dark:text-gray-500">
          click matrix numbers 1, 2, 3, 4 to recalculate memory offset
        </span>
      </div>

    </div>
  );
}
