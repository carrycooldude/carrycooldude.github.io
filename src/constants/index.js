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
  carrent,
  jobit,
  tripguide,
  threejs,
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
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };