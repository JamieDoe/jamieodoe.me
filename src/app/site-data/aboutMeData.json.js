import { FaReadme, FaCar, FaCode, FaChartLine } from "react-icons/fa";
import { FaPersonPraying, FaCamera } from "react-icons/fa6";
import { FiWatch } from "react-icons/fi";
import { CgGym } from "react-icons/cg";

export const aboutMeData = {
  fullName: "Jamie Oliver Doe",
  age: 23,
  description:
    "I grew up in Feltham, London, and moved to Spain at 8. Moved back at 12 to the beautiful county of Hampshire. I studied game development at college, and software engineering at Portsmouth University. I'm now a Frontend React/Javascript Developer 👨‍💻",

  interests: [
    {
      label: "Reading",
      icon: <FaReadme className="w-full h-full" />,
      color: "bg-[#570007]",
      border: "border-[#80000c]",
    },
    {
      label: "Automobiles",
      icon: <FaCar className="w-full h-full" />,
      color: "bg-[#0F5C2E]",
      border: "border-[#1d9440]",
    },
    {
      label: "Machine Learning",
      icon: <FaCode className="w-full h-full" />,
      color: "bg-[#003A75]",
      border: "border-[#0a49b5]",
    },
    {
      label: "Gym",
      icon: <CgGym className="w-full h-full" />,
      color: "bg-[#E3963E]",
      border: "border-[#F28C28]",
    },
    {
      label: "Horology",
      icon: <FiWatch className="w-full h-full" />,
      color: "bg-[#570007]",
      border: "border-[#80000c]",
    },
    {
      label: "Investing",
      icon: <FaChartLine className="w-full h-full" />,
      color: "bg-[#570007]",
      border: "border-[#80000c]",
    },
    {
      label: "Coding",
      icon: <FaCode className="w-full h-full" />,
      color: "bg-[#003A75]",
      border: "border-[#0a49b5]",
    },
    {
      label: "Personal Development",
      icon: <FaPersonPraying className="w-full h-full" />,
      color: "bg-[#570007]",
      border: "border-[#80000c]",
    },
    {
      label: "Photography",
      icon: <FaCamera className="w-full h-full" />,
      color: "bg-[#570007]",
      border: "border-[#80000c]",
    },
  ],
};
