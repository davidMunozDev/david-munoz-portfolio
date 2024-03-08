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
import { IoMdCloseCircle, IoIosArrowForward } from "react-icons/io";

const IconComponent = ({ name, width, height, ...rest }) => {
  const props = { style: { width, height }, ...rest };
  const icons = {
    gitHub: <FaSquareGithub {...props} />,
    linkedIn: <SiLinkedin {...props} />,
    calendar: <FaRegCalendarCheck {...props} />,
    link: <MdOutlineArrowOutward {...props} />,
    moon: <BsFillMoonFill {...props} />,
    sun: <BsFillSunFill {...props} />,
    battery: <IoBatteryFull {...props} />,
    arrowLeft: <FaArrowLeft {...props} />,
    arrowRight: <FaArrowRight {...props} />,
    arrowTop: <FaArrowUpLong {...props} />,
    filter: <FaFilter {...props} />,
    close: <IoMdCloseCircle {...props} />,
    cross: <IoClose {...props} />,
    menu: <IoMenu {...props} />,
    listItem: <IoIosArrowForward {...props} />,
  };

  return icons[name];
};

export default function Icon({ name, width = "28", height = "28", ...props }) {
  return <IconComponent name={name} width={width} height={height} {...props} />;
}
