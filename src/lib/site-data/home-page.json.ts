import {
  Github,
  Twitter,
  Linkedin,
  FileDown,
  Mail,
  Code,
  Database,
  SquareMousePointer,
  PencilRuler,
  Brain,
  BicepsFlexed,
  Car,
  Plane,
} from "lucide-react";

const skills = [
  "JavaScript",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Appwrite",
];

export const homePage = {
  badge: "Next.js Developer | Full Stack Developer",
  title: {
    text: "Hi! I'm",
    options: ["Jamie Doe", "A Full Stack Developer", "A Next.js Enthusiast"],
  },
  subtitle:
    "I'm a Full Stack Next.js Developer with a passion for building web applications that are both functional and beautiful. I love working with the latest technologies and frameworks to create seamless user experiences.",
  topSkills: skills,
  ctas: [
    {
      text: "My Resume",
      url: "/files/Jamie_Doe_Resume-2025.pdf",
      downloadable: true,
      icon: FileDown,
    },
    {
      text: "Get in Touch",
      url: "mailto:jamiedoesdev@gmail.com",
      icon: Mail,
    },
  ],
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/JamieDoe",
      icon: Github,
    },
    {
      name: "Twitter",
      url: "https://x.com/JamieDoeveloper",
      icon: Twitter,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jamieoliverdoe/",
      icon: Linkedin,
    },
  ],
  education: {
    title: "Education",
    items: [
      {
        field: "Bachelor of Software Engineering",
        institution: "The University of Portsmouth",
        location: "Portsmouth, UK",
        year: "2019 - 2023",
        courseInformation: {
          title: "Course Details",
          modules: [
            {
              name: "Software Engineering",
              icon: Code,
            },
            {
              name: "Web Development",
              icon: Code,
            },
            {
              name: "Mobile Development",
              icon: Code,
            },
            {
              name: "Database Management",
              icon: Code,
            },
          ],
        },
      },
      {
        field: "Computer Science",
        institution: "Fareham College",
        location: "Fareham, UK",
        year: "2017 - 2019",
        courseInformation: {
          title: "Course Details",
          modules: [
            {
              name: "Computer Science",
              icon: Code,
            },
            {
              name: "Web Development",
              icon: Code,
            },
            {
              name: "Database Management",
              icon: Code,
            },
          ],
        },
      },
    ],
  },
  experience: {
    title: "Experience",
    items: [
      {
        logo: {
          src: "/images/Alliants_Logo.svg",
          alt: "Alliants Logo",
          width: 148,
          height: 51,
          url: "https://www.alliants.com/",
        },
        title: "Front-End React/JavaScript Developer",
        company: "Alliants",
        location: "Southampton, UK",
        year: "2023 - 2024",
        projects: [
          {
            name: "Four Seasons",
            description:
              "Developed a new checkout and booking flow for the Four Seasons restaurant booking Microservice using React, Typescript & OpenTable. Also responsible for A/B testing and performance optimisation.",
          },
          {
            name: "Hualālai Resort",
            description:
              "Contributed to the development of the new Hualālai Resort Golf Club members portal using React, Typescript & GraphQl. Responsible for implementing new features, pages and bug fixes.",
          },
          {
            name: "American Student Assistance",
            description:
              "Responsible for the development of a new Student Profile system for the American Student Assistance using Next.Js, Typescript, GraphQl & AWS.",
          },
        ],
      },
      {
        logo: {
          url: "https://www.webdesignbydoe.co.uk/",
        },
        title: "Full Stack Next.Js Developer & Graphic Designer",
        company: "Web Design by Doe",
        location: "Southampton, UK",
        year: "2024 - present",
        projects: [
          {
            name: "Gary Troia",
            description:
              "Designed and developed a new website for Gray Troia, a local, best selling author. The website is built using AstroJs, Javascript & Tailwind CSS. The website is fully responsive and includes a blog, book store and a contact form.",
          },
          {
            name: "Create Cooling",
            description:
              "Designed and developed a new website for Create Cooling, a local air conditioning company. The website is built using Next.Js, Typescript, Tailwind CSS & Resend. The website is fully responsive and provides clear information about the services provided, including a contact form ",
          },
          {
            name: "Henry Brooks Commercial Cleaning",
            description:
              "Designed a new logo and website for Henry Brooks Commercial Cleaning. The website is built using Next.Js, Typescript, Tailwind CSS & Resend. The website is currently in development, the domain is pointing to a coming soon page.",
          },
        ],
      },
    ],
  },
  projects: {
    title: "Projects",
    items: [
      {
        thumbnail: {
          src: "/images/Salespersona_Website.webp",
          alt: "Salespersona Website",
          width: 1200,
          height: 661,
        },
        name: "Salespersona",
        skills: [
          "Next.Js",
          "TypeScript",
          "ShadCn",
          "GraphQL",
          "Tailwind CSS",
          "Appwrite",
          "Resend",
          "Anthropic",
          "Machine Learning",
        ],
        description:
          "Salespersona is a web-app that leverages machine learning to provide deep personality insights into your customer via sales call transcripts.",
        url: "https://salespersona.app/",
      },
      {
        thumbnail: {
          src: "/images/Web_Design_by_Doe_Website.webp",
          alt: "Web Design by Doe",
          width: 1200,
          height: 661,
        },
        name: "Web Design by Doe",
        skills: [
          "Next.js",
          "TypeScript",
          "ShadCn",
          "Tailwind CSS",
          "Hygraph",
          "GraphQl",
          "Apollo Client",
        ],
        description:
          "A portfolio website for a local web design company, built using Next.js and Tailwind CSS. The website showcases the company's work and includes a contact form.",
        url: "https://www.webdesignbydoe.co.uk/",
      },
      {
        thumbnail: {
          src: "/images/Create_Cooling_Website.webp",
          alt: "Create Cooling Website",
          width: 1200,
          height: 661,
        },
        name: "Create Cooling",
        skills: ["Next.js", "TypeScript", "Tailwind CSS"],
        description:
          "A website for a local air conditioning company, built using Next.js and Tailwind CSS. The website provides information about the services offered and includes a contact form.",
        url: "https://createcooling.co.uk/",
      },
      {
        thumbnail: {
          src: "/images/Henry_Brooks_Website.webp",
          alt: "Henry Brooks Website",
          width: 1200,
          height: 661,
        },
        name: "Henry Brooks Commercial Cleaning",
        skills: ["Next.js", "TypeScript", "Tailwind CSS"],
        description:
          "A website for a local commercial cleaning company, built using Next.js and Tailwind CSS. The website provides information about the services offered and includes a contact form.",
        url: "https://henrybrooks.co.uk/",
      },
      {
        thumbnail: {
          src: "/images/Gary_Troia_Website.webp",
          alt: "Gary Troia Website",
          width: 1200,
          height: 661,
        },
        name: "Gary Troia",
        skills: ["Astro.js", "JavaScript", "Tailwind CSS"],
        description:
          "A website for a local best-selling author, built using Astro.js and Tailwind CSS. The website includes a blog, book store, and a contact form.",
        url: "https://www.garytroia.com/",
      },
      // {
      //   thumbnail: {
      //     src: "/images/Jamie_Doe_Website.webp",
      //     alt: "Jamie Doe Website",
      //
      //   },
      //   name: "My Portfolio",
      //   skills: ["Next.js", "TypeScript", "ShadCn", "Tailwind CSS"],
      //   description:
      //     "My personal portfolio website built using Next.js, TypeScript, and Tailwind CSS. It showcases my skills, projects, and experience as a developer.",
      //   url: "https://jamieodoe.me/",
      // },
    ],
  },
  skills: {
    title: "Skills",
    items: [
      {
        name: "TypeScript",
        icon: Code,
        category: "programming",
      },
      {
        name: "Next.js",
        icon: Code,
        category: "programming",
      },
      {
        name: "React",
        icon: Code,
        category: "programming",
      },
      {
        name: "GraphQL",
        icon: Code,
        category: "programming",
      },
      {
        name: "PostgreSQL",
        icon: Database,
        category: "database",
      },
      {
        name: "SQL",
        icon: Database,
        category: "database",
      },
      {
        name: "JavaScript",
        icon: Code,
        category: "programming",
      },
      {
        name: "MySQL",
        icon: Database,
        category: "database",
      },
      {
        name: "Tailwind CSS",
        icon: PencilRuler,
        category: "design",
      },
      {
        name: "Node.js",
        icon: Code,
        category: "programming",
      },
      {
        name: "Appwrite",
        icon: SquareMousePointer,
        category: "tools",
      },
      {
        name: "Resend",
        icon: SquareMousePointer,
        category: "tools",
      },
      {
        name: "Figma",
        icon: PencilRuler,
        category: "design",
      },
      {
        name: "Adobe Photoshop",
        icon: PencilRuler,
        category: "design",
      },
      {
        name: "Express.js",
        icon: Code,
        category: "programming",
      },
      {
        name: "Adobe Illustrator",
        icon: PencilRuler,
        category: "design",
      },
      {
        name: "Vercel",
        icon: SquareMousePointer,
        category: "tools",
      },
      {
        name: "Git",
        icon: SquareMousePointer,
        category: "tools",
      },
      {
        name: "GitHub",
        icon: SquareMousePointer,
        category: "tools",
      },
      {
        name: "AWS",
        icon: SquareMousePointer,
        category: "tools",
      },
    ],
  },
  languages: {
    title: "Languages",
    items: [
      {
        flag: {
          src: "/images/GB_Flag.svg",
          alt: "United Kingdom Flag",
          width: 32,
          height: 32,
        },
        name: "English",
        level: "Fluent",
        description:
          "I was born in the UK and have lived here most of my life, so I am fluent in English and have a good understanding of British culture.",
      },
      {
        flag: {
          src: "/images/ES_Flag.svg",
          alt: "Spain Flag",
          width: 32,
          height: 32,
        },
        name: "Spanish",
        level: "Basic",
        description:
          "I lived in Spain when I was a kid. I have a basic understanding of Spanish and can hold simple conversations.",
      },
    ],
  },
  interests: {
    title: "Interests",
    items: [
      {
        name: "Web Development",
        icon: Code,
        description:
          "I love building web applications and learning about new technologies and frameworks.",
      },
      {
        name: "Graphic Design",
        icon: PencilRuler,
        description:
          "I enjoy creating graphics and designs for websites and social media.",
      },
      {
        name: "Machine Learning",
        icon: Brain,
        description:
          "I am interested in machine learning and how it can be used to improve web applications.",
      },
      {
        name: "Fitness",
        icon: BicepsFlexed,
        description:
          "I enjoy going to the gym and staying fit. I believe that a healthy body leads to a healthy mind.",
      },
      {
        name: "Cars",
        icon: Car,
        description:
          "I absolutely love cars. I'm obsessed with everything about them, from the engineering to the design.",
      },
      {
        name: "Travel",
        icon: Plane,
        description:
          "I love to travel and explore new places, cultures, and cuisines.",
      },
    ],
  },
};
