import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  gobaskt,
  postman,
  tfjs,
  turing,
  tripguide,
  threejs,
  arbol_ai,
  tfjspic,
  resume,
  fine,
  mediapipe,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "ML Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Developer Advocate Intern",
    company_name: "Postman",
    icon: postman,
    iconBg: "#383E56",
    date: "March 2022 - Present",
    points: [
      "Delivered 20+ API Sessions and act as the Postmanaut at a campus event",
      "At Write The Docs Kenya Community, I talked about Technical API Documentation using Swagger.",
      "Assist Ali Mustafa, Senior Developer Advocate at Postman Student Programs on documentation,tutorials, and other educational eorts with impacting 100+ Student Leaders around the world.",
      "Empowered the hacker community through our Student Program and gave talks about API on campuses and at conferences",
    ],
  },
  {
    title: "DevRel Intern",
    company_name: "Turing",
    icon: turing,
    iconBg: "#E6DEDD",
    date: "Aug 2021 - Dec 2022",
    points: [
      " Built Developer Communities with Uma Subramaniyam, Director at Community Evangelism",
      "Built New Programs like HireFest and a lot of collaboration with different Devfest to engage our developer communities",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Open Source Developer",
    company_name: "GSOC-Tensorflow.JS",
    icon: tfjs,
    iconBg: "#383E56",
    date: "May 2021 - Oct 2021",
    points: [
      "Worked on the WebAssembly part of Google's Tensorow.js and integrate SIMD threading into it by implementing 5 new kernels of backend-wasm which helps to implement those kernels into the models of tfjs that are deployed on TensorowHub.",
      "Improved the Inference Time of WASM by testing on the Google benchmark tool of the TensorFlow.js project called XTent(Google's Internal Tool)",
      "Built Kernels on top of the wasm-backend of TFJS",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "ML Intern",
    company_name: "GoBaskt",
    icon: gobaskt,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Implemented Vision Model for the Platform with the Help of Google ML Kit as I used Flutter here",
      "Worked on Product Search Project using TFLite and Flutter where I used a pre-trained model of NLP QnA where it uses a pre-trained model to answer questions based on the content of a given passage",
      "I used semi-complex pre-processing including tokenization and post-processing steps to improve the model as I used Transfer Learning to improve the data based on Data Augmentation",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I've had the pleasure of working with Kartikey only for a short period. I loved working with him, he has such positive energy and his on/off-work hours is driven by so much passion towards uplifting the student developer communities. Kartikey is a natural leader encompassing empathy towards others, and innovative thinking when it comes to ideas around his OpInCo Community. Kartikey is an asset to any company that works with him and I hope our paths cross again!",
    name: "Swathi Subbaraj ",
    designation: "Project Program Coordinator",
    company: "Google",
    image: "https://media.licdn.com/dms/image/C4D03AQGOaH_GfQ--QA/profile-displayphoto-shrink_800_800/0/1623085651736?e=1684368000&v=beta&t=ZKinLP8f7xqLYAK_fGIqiwom6oZnqZYn69h0OZ0oVNc",
  },
  {
    testimonial:
      "I've never met a community builder who truly cares about community success like Kartikey does.",
    name: "Abhishek Agrawal",
    designation: "Technical Solution Engineer",
    company: "Google",
    image: "https://media.licdn.com/dms/image/C4E03AQEf0uSaZPp0Lg/profile-displayphoto-shrink_400_400/0/1629462035915?e=1684368000&v=beta&t=O0hf7wS0IJb_-Xo2EcxfL0JADcHrJH_y-lUhvOEDI50",
  },
  {
    testimonial:
      "As a leader he always empower others in the community. Under his guidance I gained a variety of skills that help me in every aspect. Though he was a senior he always made me feel welcome and ask my opinions and matters in various events.",
    name: "Dheeraj Ghosh",
    designation: "Co-Organizer",
    company: "Hack The League",
    image: "https://media.licdn.com/dms/image/D4D03AQFPP5zOEN-J2w/profile-displayphoto-shrink_100_100/0/1673415983591?e=1684368000&v=beta&t=DZ-23ESj0nC6bLdnZXUqsKudi0QRQN5NPR3LaiIVxdI",
  },
];

const projects = [
  {
    name: "Gemini-Text-MediaPipe",
    description:
      "This web sample demonstrates how to use the LLM Inference API to run common text-to-text generation tasks like information retrieval, email drafting, and document summarization, on web using WebGPU and MediaPipe.",
    tags: [
      {
        name: "TensorFlow",
        color: "blue-text-gradient",
      },
      {
        name: "GenAI Studio",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: mediapipe,
    source_code_link: "https://github.com/carrycooldude/GeminiText-MediaPipe",
  },
  {
    name: "Resume-Matching",
    description:
      "Built a PDF extractor to pull relevant details from CVs in PDF format, and match them against the job descriptions from the Hugging Face dataset.",
    tags: [
      {
        name: "TensorFlow",
        color: "blue-text-gradient",
      },
      {
        name: "HuggingFace",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: resume,
    source_code_link: "https://github.com/carrycooldude/Resume-Matching",
  },
  {
    name: "Gemma Fine-Tune using LoRA",
    description:
      "Fine-tuned the Gemma-2b model using LoRA.",
    tags: [
      {
        name: "Kaggle",
        color: "blue-text-gradient",
      },
      {
        name: "Gemma-2b",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: fine,
    source_code_link: "https://www.github.com/carrycooldude/Gemma-FineTune-LoRA",
  },

  {
    name: "Arbol-AI🌱",
    description:
      "This is a web application🌐 which could help easily diagnose diseases in plants 🌱 using Machine Learning all on the web, powered by TensorFlow JS.",
    tags: [
      {
        name: "GCP",
        color: "blue-text-gradient",
      },
      {
        name: "TensorFlow JS",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: arbol_ai,
    source_code_link: "https://github.com/carrycooldude/Arbol-AI",
  },

  {
    name: "COVID-19 Tracker",
    description:
      "In this project, I used public COVID API for taking the number of deaths, the number of infected, and the number of recovered people in the world. In this, I am representing the data through Reactjs.Charts for visualization.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/carrycooldude/COVID-19_Tracker",
  },
  {
    name: "tfjs-linear-regression",
    description:
      "The Project is a visual representation of Linear Regression Model , built with Tensorflow.js",
    tags: [
      {
        name: "p5.js",
        color: "blue-text-gradient",
      },
      {
        name: "tf.js",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tfjspic,
    source_code_link: "https://github.com/carrycooldude/tfjs-linear-regression",
  },
];

export { services, technologies, experiences, testimonials, projects };