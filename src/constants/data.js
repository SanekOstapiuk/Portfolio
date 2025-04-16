import {
  FaHtml5,
  FaJsSquare,
  FaCodeBranch,
  FaReact,
  FaChartPie,
  FaRocket,
  FaSass,
  FaBootstrap,
  FaGitAlt,
  FaExchangeAlt,
  FaMobileAlt,
  FaSearch,
  FaBug,
  FaNodeJs,
  FaUsers,
  FaFlask,
  FaGlobe,
  FaEnvelope,
  FaTelegramPlane,
  FaMapMarkerAlt,
  FaLinkedin,
  FaPhoneAlt
} from "react-icons/fa";

export const aboutMeBlock = {
  label: 'About me',
  id: 'about-me',
  text: 'I have two years of experience working in a company. As a Front-End Engineer, I am dedicated to crafting seamless and engaging web experiences. I specialize in leveraging React, Next and TypeScript to build dynamic, responsive applications that are both visually stunning and highly functional. Also i successfully completed the Practical React course and Frontend Project-Based Learning course by SoftServe.'
}

export const skillsBlock = {
  label: 'Skills',
  id: 'skills',
  skills: [
    {
      label: "HTML5 & CSS3",
      description: "Proficient in crafting well-structured and styled web pages.",
      icon: FaHtml5,
    },
    {
      label: "JavaScript",
      description: "Strong knowledge of JavaScript and its modern ES6+ features.",
      icon: FaJsSquare,
    },
    {
      label: "TypeScript",
      description:
        "Experience with TypeScript for static typing in JavaScript projects.",
      icon: FaCodeBranch,
    },
    {
      label: "React.js and JSX",
      description: "Proficient in building dynamic user interfaces using React.",
      icon: FaReact,
    },
    {
      label: "Redux.js and Redux Toolkit",
      description: "State management using Redux and Redux Toolkit.",
      icon: FaChartPie,
    },
    {
      label: "Vite",
      description: "Experience with Vite for fast and optimized builds.",
      icon: FaRocket,
    },
    {
      label: "SCSS (Sass)",
      description: "Writing modular and maintainable styles using SCSS.",
      icon: FaSass,
    },
    {
      label: "CSS Frameworks (Bootstrap, Tailwind CSS, Material-UI)",
      description: "Knowledge of modern CSS frameworks for responsive design.",
      icon: FaBootstrap,
    },
    {
      label: "Version Control (Git, GitHub)",
      description: "Proficient in using Git and GitHub for version control.",
      icon: FaGitAlt,
    },
    {
      label: "REST API",
      description: "Experience in consuming and integrating REST APIs.",
      icon: FaExchangeAlt,
    },
    {
      label: "Responsive Web Design",
      description: "Creating web applications that work across all devices.",
      icon: FaMobileAlt,
    },
    {
      label: "Basic SEO",
      description: "Understanding of search engine optimization principles.",
      icon: FaSearch,
    },
    {
      label: "Debugging and Testing",
      description:
        "Skilled in debugging and testing applications for reliability.",
      icon: FaBug,
    },
    {
      label: "Basic Back-End Knowledge (Node.js)",
      description: "Familiarity with Node.js for back-end development.",
      icon: FaNodeJs,
    },
    {
      label: "Time Management and Collaboration Tools (Slack, Jira)",
      description:
        "Experience with tools for productivity and team collaboration.",
      icon: FaUsers,
    },
    {
      label: "Jest",
      description:
        "Wrote unit tests using Jest to ensure code quality and reliability.",
      icon: FaFlask,
    },
    {
      label: "Internationalization (i18n)",
      description:
        "Handled multi-language support using i18n for a global user base.",
      icon: FaGlobe,
    }
  ]
};

export const contactsBlock = {
  label: 'Contacts',
  id: 'contacts',
  telegram: {
    label: 'Telegram',
    value: '@ostapiuksanekk',
    link: 'https://t.me/ostapiuksanekk',
    icon: FaTelegramPlane
  },
  email: {
    label: 'Email',
    value: 'ostapiuksanekk@gmail.com',
    icon: FaEnvelope
  },
  linkedin: {
    label: 'Linkedin',
    link: 'https://www.linkedin.com/in/ostoleks',
    value: 'www.linkedin.com/in/ostoleks',
    icon: FaLinkedin
  },
  phone: {
    label: 'Phone',
    value: '+380664130346',
    icon: FaPhoneAlt
  },
}

export const location = {
  label: 'Location:',
  value: 'Lutsk, Ukraine',
  icon: FaMapMarkerAlt
}

export const copyright = '© 2025 Copyright. All Rights Reserved.'
export const logo = 'Front-End Engineer'

export const heroBlock = {
  title: 'Hello, my name is Oleksandr',
  subtitle: 'I\'m a Front-End Developer',
  description: 'with a strong passion for learning and crafting user-friendly experiences.',
  scrollToElement: aboutMeBlock.id
}

export const menu = [
  { label: aboutMeBlock.label, id: aboutMeBlock.id },
  { label: skillsBlock.label, id: skillsBlock.id },
  { label: contactsBlock.label, id: contactsBlock.id },
];
