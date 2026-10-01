export const personalInfo = {
  name: "Kartikey Rawat",
  handle: "carrycooldude",
  role: "DevRel Engineer — On-Device AI & Hardware Runtimes",
  company: "Qualcomm",
  siliconFocus: "Snapdragon X Elite, Hexagon NPU & Mobile Silicon",
  bio: "Developer Relations Engineer at Qualcomm focusing on edge AI execution, hardware runtime compilation, and developer ecosystems. Working at the intersection of ML compilers (OpenXLA PJRT, PyTorch ExecuTorch, LiteRT) and Qualcomm QNN (Qualcomm Neural Network) acceleration.",
  location: "Bengaluru, India",
  timezone: "IST (UTC+5:30)",
  email: "rawatkari554@gmail.com",
  socials: {
    github: "https://github.com/carrycooldude",
    huggingface: "https://huggingface.co/carrycooldude",
    medium: "https://medium.com/@carrycooldude",
    topmate: "https://topmate.io/carrycooldude",
    npm: "https://www.npmjs.com/~carrycooldude",
    pypi: "https://pypi.org/user/carrycooldude/",
    youtube: "https://www.youtube.com/@carrycooldude",
    instagram: "https://instagram.com/carrycooldude.tech.startup",
    linkedin: "https://linkedin.com/in/carrycooldude",
  },
  stats: [
    { label: "Compiler / ML Repos", value: "35+" },
    { label: "Published Packages (npm & pip)", value: "10+" },
    { label: "Deep-Dive Technical Posts", value: "20+" },
    { label: "Talks & Workshops Delivered", value: "30+" },
  ]
};

export const publishedPackages = [
  {
    id: "qnn-onnx-tools",
    name: "qnn-onnx-tools",
    registry: "pip / PyPI",
    installCmd: "pip install qnn-onnx-tools",
    url: "https://pypi.org/user/carrycooldude/",
    version: "v0.4.1",
    description: "Python CLI toolkit to inspect, partition, and validate ONNX computational graphs for Qualcomm Neural Network (QNN) HTP execution.",
    tags: ["PyPI", "Python", "QNN", "ONNX", "NPU"],
  },
  {
    id: "litert-delegate-helper",
    name: "litert-delegate-helper",
    registry: "pip / PyPI",
    installCmd: "pip install litert-delegate-helper",
    url: "https://pypi.org/user/carrycooldude/",
    version: "v0.2.0",
    description: "Lightweight helper for loading Google LiteRT CompiledModel delegates with Qualcomm Snapdragon Hexagon NPU acceleration.",
    tags: ["PyPI", "LiteRT", "Qualcomm NPU", "Compilers"],
  },
  {
    id: "tfjs-wasm-helpers",
    name: "@carrycooldude/tfjs-wasm-helpers",
    registry: "npm",
    installCmd: "npm i @carrycooldude/tfjs-wasm-helpers",
    url: "https://www.npmjs.com/~carrycooldude",
    version: "v1.1.2",
    description: "Utilities and SIMD feature detectors for TensorFlow.js WebAssembly backend and custom C++ WASM kernel execution.",
    tags: ["npm", "TensorFlow.js", "WebAssembly", "SIMD"],
  },
  {
    id: "qualcomm-hub-cli",
    name: "@carrycooldude/qualcomm-hub-cli",
    registry: "npm",
    installCmd: "npm i @carrycooldude/qualcomm-hub-cli",
    url: "https://www.npmjs.com/~carrycooldude",
    version: "v0.3.5",
    description: "Developer CLI to benchmark models against Qualcomm AI Hub cloud devices and pull serialized NPU context binaries.",
    tags: ["npm", "Qualcomm AI Hub", "CLI", "NodeJS"],
  }
];

export const compilerPipeline = [
  {
    step: "01. Graph Definition",
    title: "PyTorch / JAX IR",
    subtitle: "torch.export / jax.jit",
    description: "Export computational graph into TorchScript / FX Graph / StableHLO IR, resolving dynamic shapes and isolating unsupported op branches.",
    code: "model = torch.export.export(qwen_model, args)\nexported_program = model.run_decompositions()",
    output: "ExportedProgram(graph_module, schema='StableHLO')"
  },
  {
    step: "02. Lowering & Partition",
    title: "ExecuTorch / PJRT Lowering",
    subtitle: "OpenXLA / ExecuTorch Pass",
    description: "Partition subgraphs into hardware-accelerated clusters while leaving fallbacks on ARM64 CPU. Lower ops to QNN HTP dialect.",
    code: "partitioned_graph = partition_subgraphs(exported_program)\nlowered_module = to_backend(partitioned_graph, QnnBackend)",
    output: "Subgraphs: 14 Hexagon NPU, 1 CPU fallback"
  },
  {
    step: "03. Quantization",
    title: "Weight & Activation Quant",
    subtitle: "W4A16 / INT4 Asymmetric",
    description: "Apply Post-Training Quantization (PTQ) or AWQ for Snapdragon NPU, reducing KV-cache footprint by 75% without perplexity degradation.",
    code: "quantizer = QnnQuantizer().set_bitwidth(weight=4, act=16)\nquantized_model = prepare_pt2e(lowered_module, quantizer)",
    output: "Memory Footprint: 8.2 GB -> 2.1 GB (-74.3%)"
  },
  {
    step: "04. Hardware Execution",
    title: "Qualcomm QNN HTP Engine",
    subtitle: "Hexagon Tensor Processor",
    description: "Ahead-of-time (AOT) context binary compilation. Dispatched via direct memory-mapped buffer onto Snapdragon NPU silicon.",
    code: "qnn_context = qnn_builder.generate_context_binary(device='SnapdragonXElite')\nengine.execute(input_tensor, qnn_context)",
    output: "Latency: 65 FPS (YOLOv8) | 42 tok/s (Qwen 4B)"
  }
];

export const projects = [
  {
    id: "jax-qnn",
    name: "JAX-QNN Backend",
    domain: "Compiler / Runtime",
    architecture: "OpenXLA PJRT &bull; C++ &bull; Hexagon NPU",
    description: "Native OpenXLA PJRT plugin enabling JAX primitives and StableHLO computations to compile and dispatch directly to Qualcomm QNN NPU hardware.",
    githubUrl: "https://github.com/carrycooldude/JAX-QNN",
    stars: 8,
    tech: ["JAX", "OpenXLA PJRT", "C++", "QNN", "Snapdragon"],
    metrics: "Direct PJRT plugin execution"
  },
  {
    id: "edge-ai-executorch",
    name: "EdgeAIApp-ExecuTorch",
    domain: "Edge Vision & LLMs",
    architecture: "PyTorch ExecuTorch &bull; QNN Backend &bull; Android NDK",
    description: "On-device zero-shot CLIP inference and local LLM runtime on Android using Meta ExecuTorch lowering to Qualcomm QNN Hexagon NPU.",
    githubUrl: "https://github.com/carrycooldude/EdgeAIApp-ExecuTorch",
    stars: 12,
    tech: ["ExecuTorch", "PyTorch", "QNN", "Android NDK", "CLIP"],
    metrics: "Zero-shot latency: 24ms on device"
  },
  {
    id: "nano-moe-jax",
    name: "Nano-MoE-JAX",
    domain: "Core ML Architectures",
    architecture: "JAX &bull; Flax &bull; Custom Router",
    description: "Lightweight, educational Mixture-of-Experts (MoE) GPT-style language model built from scratch in JAX with top-k gating and expert routing dispatch.",
    githubUrl: "https://github.com/carrycooldude/Nano-MoE-JAX",
    stars: 15,
    tech: ["JAX", "Python", "Transformers", "MoE Routing"],
    metrics: "Modular top-k sparse routing"
  },
  {
    id: "mobilenet-qualcomm-aot",
    name: "mobilenetv2-qualcomm-aot",
    domain: "Ahead-of-Time Compilation",
    architecture: "QNN SDK &bull; C++ Toolchain &bull; INT8",
    description: "Ahead-of-time (AOT) compilation pipeline compiling MobileNetV2 directly into serialized Qualcomm QNN context caches for zero cold-start latency.",
    githubUrl: "https://github.com/carrycooldude/mobilenetv2-qualcomm-aot",
    stars: 6,
    tech: ["QNN", "AOT Compilation", "C++", "INT8"],
    metrics: "Cold-start latency: <2ms"
  },
  {
    id: "llama-cpp-x-elite",
    name: "llama.cpp-X-Elite",
    domain: "Silicon Optimization",
    architecture: "ARM64 &bull; Snapdragon X Elite &bull; NEON",
    description: "Port and benchmarking testbed running quantized GGUF weights on Qualcomm Snapdragon X Elite with ARM64 NEON and Adreno/NPU offloading.",
    githubUrl: "https://github.com/carrycooldude/llama.cpp-X-Elite",
    stars: 18,
    tech: ["C++", "ARM64 NEON", "Snapdragon X Elite", "GGUF"],
    metrics: "48+ tok/sec on Snapdragon X Elite"
  },
  {
    id: "litert-qnn-samples",
    name: "ModelGarden-QNN-LiteRT",
    domain: "Google LiteRT Integration",
    architecture: "LiteRT CompiledModel API &bull; QNN Delegate",
    description: "Reference architectures integrating Google's LiteRT (formerly TensorFlow Lite) CompiledModel API with Qualcomm QNN delegate acceleration.",
    githubUrl: "https://github.com/carrycooldude/ModelGarden-QNN-LiteRT",
    stars: 9,
    tech: ["LiteRT", "TFLite", "Kotlin", "QNN Delegate"],
    metrics: "Google LiteRT delegate integration"
  },
  {
    id: "stable-diffusion-qnn",
    name: "Stable-Diffusion-QNN",
    domain: "Generative AI on Silicon",
    architecture: "Hexagon NPU &bull; INT8 Quantized U-Net &bull; Python",
    description: "End-to-end quantized on-device execution of Stable Diffusion v2.1 pipeline on Snapdragon Hexagon NPU using QNN execution engine.",
    githubUrl: "https://github.com/carrycooldude/Stable-Diffusion-QNN",
    stars: 14,
    tech: ["QNN", "Diffusion Models", "Hexagon NPU", "INT8"],
    metrics: "Sub-second 512x512 step latency"
  },
  {
    id: "gsoc-wasm-kernels",
    name: "TensorFlow.js WASM SIMD Kernels",
    domain: "Systems & WebAssembly",
    architecture: "WASM &bull; C++ SIMD &bull; Google Benchmark XTent",
    description: "Engineered 5 new SIMD-accelerated tensor kernels for Google TensorFlow.js WASM backend during Google Summer of Code, benchmarked on XTent.",
    githubUrl: "https://github.com/carrycooldude/WebAssembly-Complete-Guide",
    stars: 22,
    tech: ["WebAssembly", "C++", "SIMD", "TensorFlow.js"],
    metrics: "SIMD 3.8x inference speedup"
  }
];

export const articles = [
  {
    title: "Accelerating JAX on Qualcomm Snapdragon: Building a Native QNN Backend with OpenXLA PJRT",
    url: "https://medium.com/@carrycooldude/accelerating-jax-on-qualcomm-snapdragon-building-a-native-qnn-backend-with-openxla-pjrt-72db4ae7ea77",
    publication: "Medium",
    date: "Aug 2026",
    readTime: "9 min read",
    tags: ["JAX", "OpenXLA PJRT", "QNN", "Snapdragon NPU"],
    summary: "Technical breakdown of bridging JAX's client compilation model with Qualcomm Neural Network SDK via custom C++ PJRT interfaces and HTP tensor ops."
  },
  {
    title: "Architectural Evolution and Implementation Strategy of the LiteRT CompiledModel API",
    url: "https://medium.com/google-developer-experts/architectural-evolution-and-implementation-strategy-of-the-litert-compiledmodel-api-136b79000100",
    publication: "Google Developer Experts",
    date: "Jan 2026",
    readTime: "11 min read",
    tags: ["LiteRT", "TFLite", "Compilers", "Qualcomm QNN"],
    summary: "In-depth analysis of Google LiteRT's CompiledModel architecture, dynamic buffer binding, and hardware delegate acceleration on Snapdragon."
  },
  {
    title: "Inside-Out: Building a High-Performance On-Device LLM Client in Flutter with Qualcomm's QNN",
    url: "https://medium.com/@carrycooldude/inside-out-building-a-high-performance-on-device-llm-client-in-flutter-with-qualcomms-qnn-4a19c482ffdb",
    publication: "Medium",
    date: "Jun 2026",
    readTime: "8 min read",
    tags: ["Flutter", "QNN", "LLM", "Snapdragon"],
    summary: "Architecting a zero-copy FFI interface between Flutter's Dart VM and Qualcomm QNN C APIs for local token generation on mobile."
  },
  {
    title: "Building a Nano Mixture-of-Experts (MoE) Language Model in JAX from Scratch",
    url: "https://medium.com/google-developer-experts/building-a-nano-mixture-of-experts-moe-language-model-in-jax-from-scratch-4b184298ee19",
    publication: "Google Developer Experts",
    date: "Feb 2026",
    readTime: "12 min read",
    tags: ["JAX", "MoE", "Transformers", "GDE"],
    summary: "Implementing sparse top-2 expert gating, load balancing auxiliary loss functions, and vectorized dispatch routines using JAX vmap and pmap."
  },
  {
    title: "On-Device Generative AI: Running Stable Diffusion v2.1 on Snapdragon X Elite NPU",
    url: "https://medium.com/@carrycooldude/on-device-generative-ai-running-stable-diffusion-v2-1-on-snapdragon-x-elite-npu-0b14bd614d9a",
    publication: "Medium",
    date: "Mar 2026",
    readTime: "7 min read",
    tags: ["Snapdragon X Elite", "NPU", "Stable Diffusion", "Quantization"],
    summary: "Quantizing cross-attention layers to INT8 and caching intermediate latents on the Snapdragon X Elite 45 TOPS Hexagon NPU."
  },
  {
    title: "Running Qwen3-4B On-Device: Deploying a 4B LLM on Snapdragon NPUs",
    url: "https://medium.com/@carrycooldude/running-qwen3-4b-on-device-deploying-a-4b-llm-on-snapdragon-npus-11a7fa17ffca",
    publication: "Medium",
    date: "Mar 2026",
    readTime: "8 min read",
    tags: ["Qwen", "Qualcomm AI Hub", "On-Device LLM", "NPU"],
    summary: "Memory mapping weights, handling KV-cache allocation in NPU shared memory, and streaming output tokens on mobile chipsets."
  },
  {
    title: "Unleashing the Beast: Running YOLOv8 on Snapdragon X Elite NPU at 65 FPS",
    url: "https://medium.com/@carrycooldude/unleashing-the-beast-running-yolov8-on-snapdragon-x-elite-npu-at-65-fps-296084253c2c",
    publication: "Medium",
    date: "Dec 2025",
    readTime: "6 min read",
    tags: ["YOLOv8", "ONNX Runtime", "QNN", "Computer Vision"],
    summary: "Compiling PyTorch ONNX exports with QNN Execution Provider to reach real-time 65 FPS multi-stream video inference on ARM64 Windows."
  },
  {
    title: "Bringing Multimodal Gemma 4 E2B to the Edge: A Deep Dive into LiteRT-LM and Qualcomm QNN",
    url: "https://medium.com/google-developer-experts/bringing-multimodal-gemma-4-e2b-to-the-edge-a-deep-dive-into-litert-lm-and-qualcomm-qnn-4e1e06f3030c",
    publication: "Google Developer Experts",
    date: "Apr 2026",
    readTime: "10 min read",
    tags: ["Gemma", "LiteRT-LM", "Multimodal", "Edge AI"],
    summary: "Benchmarking vision encoder projection layers and token decoders on Snapdragon NPU using Google's next-gen LiteRT-LM stack."
  }
];

export const talks = [
  {
    id: "agentsnexus-2026",
    title: "On-Device AI Agents: Executing Local LLMs on Snapdragon Silicon",
    event: "AgentsNexus India 2026",
    type: "Conference Keynote",
    date: "2026",
    location: "Bengaluru, India",
    description: "Deep dive into running multi-step on-device AI agents with local quantized LLMs, minimizing memory footprint using Qualcomm QNN and ExecuTorch.",
    tags: ["On-Device AI", "AI Agents", "Qualcomm QNN", "Snapdragon"],
    slidesUrl: "https://github.com/carrycooldude/Talks",
    videoUrl: "https://www.youtube.com/@carrycooldude",
  },
  {
    id: "bengaluru-tech-week",
    title: "Edge Hardware & On-Device Generative AI: From PyTorch to Silicon",
    event: "Bengaluru Tech Week",
    type: "Invited Tech Talk",
    date: "2026",
    location: "Bengaluru, India",
    description: "Architectural overview of compiling modern open-weights generative models for Snapdragon X Elite and Hexagon NPU hardware.",
    tags: ["Snapdragon X Elite", "NPU", "ExecuTorch", "PyTorch"],
    slidesUrl: "https://github.com/carrycooldude/Talks",
    videoUrl: "https://www.youtube.com/@carrycooldude",
  },
  {
    id: "gdg-devfest-litert",
    title: "Accelerating Google LiteRT & Gemma on Qualcomm Hexagon NPU",
    event: "GDG DevFest & AI Days",
    type: "Masterclass",
    date: "2025",
    location: "Pune & Bengaluru",
    description: "Hands-on walkthrough using Google's LiteRT CompiledModel API and Qualcomm QNN delegates to deploy multimodal Gemma models on mobile.",
    tags: ["LiteRT", "Gemma", "GDE", "Hexagon NPU"],
    slidesUrl: "https://github.com/carrycooldude/Talks",
    videoUrl: "https://www.youtube.com/@carrycooldude",
  },
  {
    id: "openxla-hardware-forum",
    title: "Targeting Snapdragon Silicon with JAX via OpenXLA PJRT",
    event: "OpenXLA & Hardware Acceleration Forum",
    type: "Compiler Tech Talk",
    date: "2025",
    location: "Virtual",
    description: "How we engineered an OpenXLA PJRT plugin to bridge JAX StableHLO IR directly into Qualcomm's HTP execution runtime with zero host memory copies.",
    tags: ["JAX", "OpenXLA PJRT", "Compilers", "Silicon"],
    slidesUrl: "https://github.com/carrycooldude/Talks",
    videoUrl: "https://www.youtube.com/@carrycooldude",
  },
  {
    id: "talk-gsoc-tfjs-wasm",
    title: "Engineering SIMD-Vectorized WebAssembly Kernels in TensorFlow.js",
    event: "Google Open Source Summit / TFUG",
    type: "Systems Deep Dive",
    date: "2022",
    location: "Bengaluru, India",
    description: "Retrospective on implementing 5 SIMD WASM kernels for Google's TensorFlow.js, optimizing memory cache alignments and benchmarking on Google XTent.",
    tags: ["WebAssembly", "C++ SIMD", "TensorFlow", "GSoC"],
    slidesUrl: "https://github.com/carrycooldude/WebAssembly-Complete-Guide",
    videoUrl: "https://www.youtube.com/@carrycooldude",
  },
  {
    id: "talk-swagger-docs",
    title: "Architecting Developer-First Technical API Documentation & Tooling",
    event: "Write The Docs Kenya Community",
    type: "Workshop",
    date: "2023",
    location: "Nairobi (Virtual)",
    description: "Hands-on guide to OpenAPI specifications, automated testing suites, and building developer-centric documentation workflows at Postman.",
    tags: ["API Specs", "Postman", "DevRel", "Swagger"],
    slidesUrl: "https://github.com/carrycooldude/Talks",
    videoUrl: "https://www.youtube.com/@carrycooldude",
  }
];

export const podcasts = [
  {
    id: "pod-edge-silicon",
    title: "Building Compilers and Runtimes for Edge Silicon: From PyTorch to NPU",
    show: "Hardware & Edge ML Architecture",
    role: "Featured Systems Guest",
    duration: "48 mins",
    date: "2025",
    description: "Kartikey breaks down why NPU hardware differs from traditional GPUs, the reality of W4A16 quantization, and building OpenXLA PJRT plugins for mobile chipsets.",
    platforms: [
      { name: "YouTube", url: "https://www.youtube.com/@carrycooldude" },
      { name: "Spotify", url: "https://spotify.com" },
    ]
  },
  {
    id: "pod-devrel-systems",
    title: "Developer Relations in Deep Tech: Speaking to Kernel & Compiler Engineers",
    show: "The Systems DevRel Podcast",
    role: "Guest Speaker",
    duration: "42 mins",
    date: "2024",
    description: "How developer advocacy works in hardware and systems engineering — writing reference C++ implementations, collaborating with silicon architects, and building genuine developer trust.",
    platforms: [
      { name: "YouTube", url: "https://www.youtube.com/@carrycooldude" },
      { name: "Spotify", url: "https://spotify.com" }
    ]
  },
  {
    id: "pod-gsoc-journey",
    title: "From Writing WASM Kernels in GSoC to DevRel at Qualcomm",
    show: "Open Source Engineers Radio",
    role: "Interviewee",
    duration: "55 mins",
    date: "2023",
    description: "Kartikey shares lessons from contributing low-level C++ SIMD kernels to Google's TensorFlow.js, community building with OpInCo, and charting a career in developer advocacy.",
    platforms: [
      { name: "YouTube", url: "https://www.youtube.com/@carrycooldude" },
      { name: "Spotify", url: "https://spotify.com" }
    ]
  }
];

export const experience = [
  {
    role: "Developer Relations Engineer",
    company: "Qualcomm",
    period: "2024 — Present",
    tag: "Hardware & AI Ecosystem",
    location: "Bengaluru, India",
    points: [
      "Driving developer adoption and reference architectures for Qualcomm Neural Network (QNN) SDK and Snapdragon X Elite NPU silicon.",
      "Engineering open-source integrations with modern ML runtimes including OpenXLA PJRT (JAX), PyTorch ExecuTorch, and Google LiteRT.",
      "Authoring technical deep dives on NPU quantization, AOT graph compilation, and delivering workshops at developer summits globally."
    ]
  },
  {
    role: "Developer Advocate Intern",
    company: "Postman",
    period: "2022 — 2023",
    tag: "Developer Ecosystem",
    location: "Hybrid / Remote",
    points: [
      "Conducted 20+ technical API workshops reaching 500+ developers and student leaders globally.",
      "Keynote speaker at Write The Docs Kenya on OpenAPI/Swagger tooling and interactive documentation.",
      "Collaborated with senior developer advocates on certification curricula and developer advocacy playbooks."
    ]
  },
  {
    role: "DevRel Intern",
    company: "Turing",
    period: "2021 — 2022",
    tag: "Community Evangelism",
    location: "Remote",
    points: [
      "Co-designed community engagement programs such as HireFest to mobilize international developer cohorts.",
      "Partnered with regional Google Developer Groups and DevFest summits to run hackathons and technical sessions.",
    ]
  },
  {
    role: "Open Source Developer (GSoC)",
    company: "Google Summer of Code — TensorFlow.js",
    period: "2021",
    tag: "Compiler & WASM Kernels",
    location: "Google / Remote",
    points: [
      "Engineered 5 new SIMD-accelerated C++ tensor kernels inside the tfjs-backend-wasm repository.",
      "Evaluated inference latency improvements on Google's internal benchmarking suite (XTent).",
      "Merged upstream commits into Google's open-source repositories through peer code review."
    ]
  }
];
