import { FaReadme, FaCar, FaCode, FaChartLine } from "react-icons/fa";
import { FaPersonPraying, FaCamera } from "react-icons/fa6";
import { FiWatch } from "react-icons/fi";
import { CgGym } from "react-icons/cg";

export const interestCategories = [
  {
    type: "selfDevelopment",
    styling: {
      background: "bg-[#6d1858]",
      border: "border-[#bf45a1]",
    },
  },
  {
    type: "hobby",
    styling: {
      background: "bg-[#ae8105]",
      border: "border-[#f4b60a]",
    },
  },
  {
    type: "technology",
    styling: {
      background: "bg-[#14747f]",
      border: "border-[#1ebbcd]",
    },
  },
  {
    type: "finance",
    styling: {
      background: "bg-[#6c8302]",
      border: "border-[#a2c114]",
    },
  },
];

export const aboutMeData = {
  fullName: "Jamie Oliver Doe",
  age: 23,
  description:
    "I grew up in London, and moved to Spain at 8. Moved back at 12 to the beautiful county of Hampshire. I studied game development at college, and software engineering at Portsmouth University. I'm now a Frontend React/Javascript Developer 👨‍💻",

  interests: [
    {
      label: "Reading",
      icon: <FaReadme className="w-full h-full" />,
      category: "selfDevelopment",
    },
    {
      label: "Automobiles",
      icon: <FaCar className="w-full h-full" />,
      category: "hobby",
    },
    {
      label: "Machine Learning",
      icon: <FaCode className="w-full h-full" />,
      category: "technology",
    },
    {
      label: "Gym",
      icon: <CgGym className="w-full h-full" />,
      category: "selfDevelopment",
    },
    {
      label: "Horology",
      icon: <FiWatch className="w-full h-full" />,
      category: "hobby",
    },
    {
      label: "Investing",
      icon: <FaChartLine className="w-full h-full" />,
      category: "finance",
    },
    {
      label: "Coding",
      icon: <FaCode className="w-full h-full" />,
      category: "technology",
    },
    {
      label: "Personal Development",
      icon: <FaPersonPraying className="w-full h-full" />,
      category: "selfDevelopment",
    },
    {
      label: "Photography",
      icon: <FaCamera className="w-full h-full" />,
      category: "hobby",
    },
  ],
};
