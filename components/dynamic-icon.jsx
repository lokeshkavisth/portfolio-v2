import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io5";
import * as SiIcons from "react-icons/si";
import * as TbIcons from "react-icons/tb";

const libraries = {
  fa: FaIcons,
  si: SiIcons,
  tb: TbIcons,
  bi: BiIcons,
  io: IoIcons,
};

export default function DynamicIcon({ icon, className }) {
  const [lib, iconName] = icon.split(":");
  const IconComponent = libraries[lib]?.[iconName];

  if (!IconComponent) return null;

  return <IconComponent className={className || "text-2xl text-white_03"} />;
}
