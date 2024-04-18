import { FaCode, FaFile, FaHome, FaLinkedinIn, FaUser } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { VscGithubInverted } from "react-icons/vsc";

export const socialHome = [
  {
    id: 1,
    title: "X",
    icon: <FaXTwitter />,
    path: "https://x.com/",
  },
  {
    id: 2,
    title: "LinkedIn",
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/",
  },
  {
    id: 3,
    title: "GitHub",
    icon: <VscGithubInverted />,
    path: "https://github.com/",
  },
];

export const navMenu = [
  {
    id: 1,
    title: "Home",
    icon: <FaHome />,
    url: "/",
  },
  {
    id: 2,
    title: "About",
    icon: <FaUser />,
    url: "/about",
  },
  {
    id: 3,
    title: "Stack",
    icon: <FaCode />,
    url: "/stack",
  },
  {
    id: 4,
    title: "Certificates",
    icon: <FaFile />,
    url: "/certificates",
  },
];
