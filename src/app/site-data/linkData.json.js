import {
  FaGithubSquare,
  FaLinkedin,
  FaFacebookSquare,
  FaInstagramSquare,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import { FaSquareEnvelope } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { RiFolderDownloadFill } from "react-icons/ri";

export const linkData = {
  topLinks: [
    {
      resume: true,
      link: "/jamie-doe-resume.pdf",
      target: null,
      icon: <RiFolderDownloadFill className="w-full h-full" />,
    },
    {
      link: "https://github.com/JamieDoe",
      target: "_blank",
      icon: <FaGithubSquare className="w-full h-full" />,
    },
    {
      link: "https://www.linkedin.com/in/jamieoliverdoe/",
      target: "_blank",
      icon: <FaLinkedin className="w-full h-full" />,
    },
  ],
  middleLinks: [
    {
      link: "",
      target: "_blank",
      icon: <FaFacebookSquare className="w-full h-full" />,
    },
    {
      link: "",
      target: "_blank",
      icon: <FaInstagramSquare className="w-full h-full" />,
    },
    {
      link: "https://webdesignbydoe.co.uk",
      target: "_blank",
      icon: "",
    },
  ],
  bottomLinks: [
    {
      link: "mailto:jamie.doe@webdesignbydoe.co.uk",
      target: null,
      icon: <FaSquareEnvelope className="w-full h-full" />,
    },
    {
      link: "tel:07368275355",
      target: null,
      icon: <FaPhoneSquareAlt className="w-full h-full" />,
    },
  ],
};
