import { MdOutlineArrowOutward } from "react-icons/md";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import {
  FaSquareGithub,
  FaRegCalendarCheck,
  FaFilter,
  FaArrowUpLong,
} from "react-icons/fa6";
import { IoBatteryFull, IoMenu, IoClose } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoMdCloseCircle, IoMdArrowDropright } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";

const icons = {
  gitHub: FaSquareGithub,
  linkedIn: SiLinkedin,
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
};

export default function Icon({ name, size, ...rest }) {
  const Icon = icons[name];
  const props = { style: { width: size, height: size }, ...rest };

  return <Icon {...props} />;
}
