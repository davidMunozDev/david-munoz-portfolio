import { MdOutlineArrowOutward } from "react-icons/md";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import {
  FaRegCalendarCheck,
  FaFilter,
  FaArrowUpLong,
  FaPlus,
  FaMinus,
} from "react-icons/fa6";

import { IoBatteryFull, IoMenu, IoClose } from "react-icons/io5";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheckCircle,
  FaReact,
  FaNode,
} from "react-icons/fa";
import { IoMdCloseCircle, IoMdArrowDropright, IoIosSend } from "react-icons/io";
import { PiGithubLogoFill } from "react-icons/pi";
import {
  BiLogoLinkedin,
  BiLogoTypescript,
  BiLogoJavascript,
} from "react-icons/bi";
import { SiNextdotjs, SiCss3, SiHtml5, SiCypress } from "react-icons/si";
import { FiDownload } from "react-icons/fi";

const icons = {
  gitHub: PiGithubLogoFill,
  linkedIn: BiLogoLinkedin,
  download: FiDownload,
  calendar: FaRegCalendarCheck,
  link: MdOutlineArrowOutward,
  moon: BsFillMoonFill,
  sun: BsFillSunFill,
  battery: IoBatteryFull,
  arrowLeft: FaArrowLeft,
  arrowRight: FaArrowRight,
  arrowTop: FaArrowUpLong,
  filter: FaFilter,
  close: IoMdCloseCircle,
  cross: IoClose,
  menu: IoMenu,
  listDecorator: IoMdArrowDropright,
  check: FaCheckCircle,
  plus: FaPlus,
  minus: FaMinus,
  send: IoIosSend,
  react: FaReact,
  node: FaNode,
  typescript: BiLogoTypescript,
  javascript: BiLogoJavascript,
  nextjs: SiNextdotjs,
  css: SiCss3,
  html: SiHtml5,
  cypress: SiCypress,
};

export default function Icon({ name, size = 22, ...rest }) {
  const Icon = icons[name];
  const pxSize = `${size}px`;
  const props = { style: { width: pxSize, height: pxSize }, ...rest };

  return <Icon {...props} />;
}
