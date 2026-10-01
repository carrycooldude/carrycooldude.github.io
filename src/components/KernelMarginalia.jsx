import React from 'react';

export default function KernelMarginalia() {
  return (
    <div className="hidden xl:block pointer-events-none select-none font-hand">
      
      {/* ================= LEFT SIDE MARGINALIA ================= */}
      <aside className="fixed left-4 2xl:left-8 top-28 w-48 2xl:w-56 space-y-10 text-xs">
        
        {/* Sketch 1: Hexagon HVX 1024-bit Vector Kernel */}
        <div className="p-3 rounded border border-dashed border-gray-400 dark:border-gray-700 bg-white/70 dark:bg-[#0f1118]/70 shadow-sm backdrop-blur-xs rotate-[-1.5deg]">
          <div className="flex items-center justify-between text-[10px] text-red-600 dark:text-red-400 font-bold mb-1">
            <span>// HVX_KERNEL.cc</span>
            <span>1024-bit</span>
          </div>

          <div className="text-gray-800 dark:text-gray-200 font-bold text-xs mb-1">
            Hexagon NPU Vector Lane
          </div>

          {/* SIMD Register Lane Box */}
          <div className="grid grid-cols-4 gap-0.5 border-2 border-gray-800 dark:border-gray-300 rounded text-center font-mono text-[9px] my-1.5 bg-gray-50 dark:bg-gray-900 py-1">
            <span className="text-blue-600 dark:text-blue-400 font-bold">V[0]</span>
            <span className="text-blue-600 dark:text-blue-400 font-bold">V[1]</span>
            <span className="text-blue-600 dark:text-blue-400 font-bold">V[2]</span>
            <span className="text-blue-600 dark:text-blue-400 font-bold">V[3]</span>
          </div>

          {/* Assembly / Intrinsic doodle */}
          <div className="font-mono text-[10px] text-gray-600 dark:text-gray-400 space-y-0.5 pt-1">
            <div className="text-blue-700 dark:text-blue-300 font-bold">Q6_V_vzero()</div>
            <div>vout = Q6_Vw_vmpy_...</div>
          </div>

          {/* Hand-drawn curly brace doodle */}
          <div className="flex items-center gap-1 text-[10px] text-green-700 dark:text-green-400 pt-1.5 font-bold">
            <svg width="24" height="12" viewBox="0 0 24 12" fill="none" className="stroke-current">
              <path d="M1 11 Q 6 1, 12 6 T 23 1" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span>parallel FMA cycle</span>
          </div>
        </div>

        {/* Sketch 2: WASM SIMD Kernel (TensorFlow.js GSoC) */}
        <div className="p-3 rounded border border-gray-300 dark:border-gray-800 bg-white/70 dark:bg-[#0f1118]/70 shadow-sm backdrop-blur-xs rotate-[1.5deg]">
          <div className="text-[10px] text-blue-600 dark:text-blue-400 font-bold mb-1 flex items-center justify-between">
            <span>tfjs_wasm_kernel.cpp</span>
            <span className="text-red-500 font-mono">GSoC</span>
          </div>

          <div className="text-gray-900 dark:text-white font-bold text-xs">
            128-bit WASM Vector Loop
          </div>

          <div className="my-1.5 bg-gray-100 dark:bg-gray-900/90 p-1.5 rounded font-mono text-[9px] text-gray-700 dark:text-gray-300 space-y-0.5 border border-gray-200 dark:border-gray-800">
            <div>v128_t va = wasm_v128_load(a);</div>
            <div>v128_t vb = wasm_v128_load(b);</div>
            <div className="text-green-600 dark:text-green-400 font-bold">
              v128_t vc = wasm_f32x4_add(va, vb);
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-gray-500">
            <span className="text-red-600 dark:text-red-400 font-bold">XTent speedup</span>
            <span className="font-mono text-gray-800 dark:text-gray-200 font-bold">3.8x &uarr;</span>
          </div>
        </div>

        {/* Sketch 3: Cache / SRAM Scratchpad Note */}
        <div className="p-2.5 rounded border-l-2 border-green-600 bg-green-50/40 dark:bg-green-950/20 text-gray-700 dark:text-gray-300 rotate-[-1deg]">
          <div className="font-bold text-green-800 dark:text-green-300 text-xs">
            TCM Scratchpad Memory
          </div>
          <p className="text-[11px] leading-tight text-gray-600 dark:text-gray-400 mt-1">
            Keep intermediate activations in on-chip SRAM to bypass DDR bus latency.
          </p>
          <div className="mt-1 text-[10px] text-blue-600 dark:text-blue-400 font-mono">
            bandwidth: ~1.2 TB/s
          </div>
        </div>

      </aside>

      {/* ================= RIGHT SIDE MARGINALIA ================= */}
      <aside className="fixed right-4 2xl:right-8 top-28 w-48 2xl:w-56 space-y-10 text-xs">
        
        {/* Sketch 4: 2D Convolution Kernel Filter */}
        <div className="p-3 rounded border border-gray-300 dark:border-gray-800 bg-white/70 dark:bg-[#0f1118]/70 shadow-sm backdrop-blur-xs rotate-[1.5deg]">
          <div className="flex items-center justify-between text-[10px] text-red-600 dark:text-red-400 font-bold mb-1">
            <span>CONV2D_KERNEL</span>
            <span>3&times;3</span>
          </div>

          <div className="text-gray-900 dark:text-white font-bold text-xs mb-1">
            Spatial Sliding Window
          </div>

          {/* 3x3 hand-drawn convolution grid */}
          <div className="grid grid-cols-3 gap-1 border-2 border-gray-800 dark:border-gray-300 p-1 rounded font-mono text-[9px] text-center my-1.5 bg-gray-50 dark:bg-gray-900">
            <span className="border border-gray-200 dark:border-gray-700 p-0.5">w₀₀</span>
            <span className="border border-gray-200 dark:border-gray-700 p-0.5 bg-blue-100 dark:bg-blue-950/60 font-bold text-blue-600">w₀₁</span>
            <span className="border border-gray-200 dark:border-gray-700 p-0.5">w₀₂</span>
            <span className="border border-gray-200 dark:border-gray-700 p-0.5 bg-blue-100 dark:bg-blue-950/60 font-bold text-blue-600">w₁₀</span>
            <span className="border border-green-500 bg-green-100 dark:bg-green-950/60 p-0.5 font-bold text-green-700 dark:text-green-300">kᵢⱼ</span>
            <span className="border border-gray-200 dark:border-gray-700 p-0.5 bg-blue-100 dark:bg-blue-950/60 font-bold text-blue-600">w₁₂</span>
            <span className="border border-gray-200 dark:border-gray-700 p-0.5">w₂₀</span>
            <span className="border border-gray-200 dark:border-gray-700 p-0.5 bg-blue-100 dark:bg-blue-950/60 font-bold text-blue-600">w₂₁</span>
            <span className="border border-gray-200 dark:border-gray-700 p-0.5">w₂₂</span>
          </div>

          {/* Mathematical formulation */}
          <div className="text-[11px] text-blue-600 dark:text-blue-400 font-bold text-center">
            y[i, j] = &Sigma; (W &bull; X) + b
          </div>

          <div className="flex items-center justify-between text-[10px] text-gray-500 mt-1 border-t border-gray-100 dark:border-gray-800 pt-1">
            <span>stride = 1</span>
            <span className="text-red-600 dark:text-red-400 font-bold">pad = SAME</span>
          </div>
        </div>

        {/* Sketch 5: Op Fusion & HTP Graph Lowering */}
        <div className="p-3 rounded border border-dashed border-gray-400 dark:border-gray-700 bg-white/70 dark:bg-[#0f1118]/70 shadow-sm backdrop-blur-xs rotate-[-1deg]">
          <div className="text-[10px] text-green-700 dark:text-green-400 font-bold mb-1 flex items-center justify-between">
            <span>// FusedKernelPass</span>
            <span>QNN</span>
          </div>

          <div className="text-gray-900 dark:text-white font-bold text-xs mb-1">
            Kernel Operator Fusion
          </div>

          {/* Fusion flow doodle */}
          <div className="space-y-1 font-mono text-[10px] my-1.5">
            <div className="p-1 rounded bg-blue-50 dark:bg-blue-950/40 border border-blue-300 dark:border-blue-800 text-blue-800 dark:text-blue-300 text-center">
              MatMul (W, X)
            </div>
            <div className="text-center text-red-500 font-bold">&darr;</div>
            <div className="p-1 rounded bg-green-50 dark:bg-green-950/40 border border-green-400 dark:border-green-800 text-green-800 dark:text-green-300 text-center font-bold">
              Fused: MatMul+Bias+SiLU
            </div>
          </div>

          <div className="text-[10px] text-gray-600 dark:text-gray-400 italic">
            // eliminates 2 memory writebacks
          </div>
        </div>

        {/* Sketch 6: Quantization Scheme Marginalia */}
        <div className="p-2.5 rounded border-r-2 border-red-500 bg-red-50/40 dark:bg-red-950/20 text-gray-700 dark:text-gray-300 rotate-[1.5deg]">
          <div className="font-bold text-red-700 dark:text-red-300 text-xs">
            W4A16 Asymmetric Quant
          </div>
          <div className="font-mono text-[10px] text-gray-800 dark:text-gray-200 mt-1">
            q = clamp(round(x / s) + z)
          </div>
          <div className="text-[10px] text-blue-600 dark:text-blue-400 mt-1">
            KV-Cache 75% smaller
          </div>
        </div>

      </aside>

    </div>
  );
}
