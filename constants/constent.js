import { FaHashnode, FaXTwitter } from "react-icons/fa6";
import { FaHome, FaLinkedinIn, FaUser } from "react-icons/fa";

import { PiTerminalWindowFill } from "react-icons/pi";
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
    title: "Blog",
    icon: <FaHashnode />,
    url: "/blogs",
  },
  {
    id: 3,
    title: "Projects",
    icon: <PiTerminalWindowFill />,
    url: "/projects",
  },
];
