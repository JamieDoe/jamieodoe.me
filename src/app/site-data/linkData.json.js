import {
  FaGithubSquare,
  FaLinkedin,
  FaFacebookSquare,
  FaInstagramSquare,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";

export const linkData = [
  {
    resume: true,
    link: "",
    icon: <IoDocumentTextOutline />,
  },
  {
    link: "",
    icon: <FaGithubSquare />,
  },
  {
    link: "https://www.linkedin.com/in/jamieoliverdoe/",
    icon: <FaLinkedin />,
  },
  {
    link: "",
    icon: <FaFacebookSquare />,
  },
  {
    link: "",
    icon: <FaInstagramSquare />,
  },
  {
    link: "",
    icon: "",
  },
  {
    link: "",
    icon: <MdAlternateEmail />,
  },
  {
    link: "",
    icon: <FaPhoneAlt />,
  },
];
