export const aboutMeBlock = {
  label: 'About me',
  id: 'about-me',
  education: 'I\'m a chemist by education, having studied at Lesya Ukrainka Volyn National University, where I earned Bachelor\'s and Master\'s degrees, but front-end development has fascinated me much more than chemistry.',
  text: 'Now, I\'m experienced and goal-oriented Front-End Developer with 2 years of hands-on experience in web development. I have a strong understanding of and practical experience with React, Next and TypeScript to build dynamic and responsive applications. Additionally, I quickly learn and adapt to new development tools as needed. I always look for new ways to improve my skills. Recently completed the Practical React course and the Frontend Project-Based Learning course by SoftServe. Motivated and open to new challenges.',
  icons: ['code', 'desktop', 'mobile'],
  iconsColor: ''
}

export const skillsBlock = {
  label: 'Skills',
  id: 'skills',
  skills: [
    {
      label: "React",
      description: "Proficient in building dynamic user interfaces using React.",
      icon: 'react',
    },
    {
      label: "Next",
      description: "Proficient in building client/server components with dynamic HTML streaming",
      icon: 'next',
    },
    {
      label: "TypeScript",
      description: "Experience with TypeScript for static typing in JavaScript projects.",
      icon: 'typescript',
    },
    {
      label: "JavaScript",
      description: "Strong knowledge of JavaScript and its modern ES6+ features.",
      icon: 'javascript',
    },
    {
      label: "GraphQl",
      description: "Experience with GraphQL queries and mutations for data fetching, updating and deletion.",
      icon: 'graphQl',
    },
    {
      label: "Redux and Redux Toolkit",
      description: "State management using Redux and Redux Toolkit.",
      icon: 'redux',
    },
    {
      label: "Jest",
      description: "Wrote unit tests using Jest to ensure code quality and reliability.",
      icon: 'jest',
    },
    {
      label: "i18n",
      description: "Handled multi-language support for a global user base.",
      icon: 'i18n',
    },
    {
      label: "HTML5 & CSS3",
      description: "Proficient in crafting well-structured and styled web pages.",
      icon: 'html',
    },
    {
      label: "SCSS (Sass)",
      description: "Writing modular and maintainable styles using SCSS.",
      icon: 'scss',
    },
    {
      label: "Tailwind CSS",
      description: "Proficient in building responsive and utility-first interfaces using Tailwind CSS.",
      icon: 'tailwind',
    },
    {
      label: "Material-UI",
      description: "Experience creating modern, accessible UIs with Material-UI components and theming.",
      icon: 'mui',
    },
    {
      label: "Version Control (Git, GitHub)",
      description: "Proficient in using Git and GitHub for version control.",
      icon: 'git',
    },
    {
      label: "Vite",
      description: "Experience with Vite for fast and optimized builds.",
      icon: 'vite',
    },
    {
      label: "Basic Back-End Knowledge (Node.js)",
      description: "Familiarity with Node.js (Express) for back-end development.",
      icon: 'node',
    },
    {
      label: "REST API",
      description: "Experience in consuming and integrating REST APIs.",
      icon: 'restApi',
    },
    {
      label: "Responsive Web Design",
      description: "Creating web applications that work across all devices.",
      icon: 'response',
    },
    {
      label: "Basic SEO",
      description: "Understanding of search engine optimization principles.",
      icon: 'seo',
    },
    {
      label: "Debugging and Testing",
      description: "Skilled in debugging and testing applications for reliability.",
      icon: 'debug',
    },
    {
      label: "Time Management (Redmine, Jira)",
      description: "Experience with tools for productivity and team collaboration.",
      icon: 'timeManagement',
    }
  ]
}

export const contactsBlock = {
  label: 'Contacts',
  id: 'contacts',
  telegram: {
    label: 'Telegram',
    value: '@ostapiuksanekk',
    link: 'https://t.me/ostapiuksanekk',
    icon: 'telegram'
  },
  email: {
    label: 'Email',
    value: 'ostapiuksanekk@gmail.com',
    icon: 'mail'
  },
  linkedin: {
    label: 'Linkedin',
    link: 'https://www.linkedin.com/in/ostoleks',
    value: 'www.linkedin.com/in/ostoleks',
    icon: 'linkedin'
  },
  phone: {
    label: 'Phone',
    value: '+380664130346',
    icon: 'phone'
  },
}

export const location = {
  label: 'Location:',
  value: 'Lutsk, Ukraine',
  icon: 'location'
}

export const copyright = '© 2025 Copyright. All Rights Reserved.'
export const logo = 'Front-End Engineer'

export const heroBlock = {
  title: 'Hello, my name is Oleksandr',
  subtitle: 'I\'m a Front-End Developer',
  description: 'with a strong passion for learning and crafting user-friendly experiences.',
  scrollToElement: aboutMeBlock.id
}

export const certificatesBlock = {
  label: 'Certificates',
  id: 'certificates',
  certificates: [
    {
      name: 'Practical React',
      company: 'By Soft Serve',
      src: 'practical-react.png',
      skills: ['Improved my understanding of React concepts and gained hands-on experience with TypeScript, Material-UI and Jest.']
    },
    {
      name: 'Frontend Project Based Learning',
      company: 'By Soft Serve',
      src: 'project-based.png',
      skills: ['Gained hands-on experience working as a Full Stack Developer with Node.js/Express and MongoDB and improved my practical knowledge of React and TypeScript.']
    }
  ]
}

export const projectsBlock = {
  label: 'Projects',
  id: 'projects',
  projects: [
    {
      name: 'Flunch',
      mainLink: 'https://www.flunch-traiteur.fr/',
      mainImage: 'Flunch.webp',
      skills: ['Knockout.js', 'RequireJS', 'JavaScript', 'jQuery', 'XML Layouts', 'PHTML', 'Scss']
    },
    {
      name: 'Meetings/Celebrations',
      mainImage: 'Meetings.webp',
      mainLink: 'https://meetings.montecarlosbm.com/en',
      secondImage: 'Celebration.webp',
      secondLink: 'https://celebrations.montecarlosbm.com/en',
      skills: ['React', 'Apollo/Client', 'GraphQl', 'Yup', 'Formik', 'ClassNames', 'Sass', 'Ally.js']
    }
  ]
}

export const menu = [
  { label: aboutMeBlock.label, id: aboutMeBlock.id },
  { label: skillsBlock.label, id: skillsBlock.id },
  { label: projectsBlock.label, id: projectsBlock.id},
  { label: certificatesBlock.label, id: certificatesBlock.id },
  { label: contactsBlock.label, id: contactsBlock.id }
]
