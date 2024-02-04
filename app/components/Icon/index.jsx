import { MdOutlineArrowOutward } from "react-icons/md";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { FaSquareGithub, FaRegCalendarCheck } from "react-icons/fa6";

const IconComponent = ({ name, width, height, ...rest }) => {
  const props = { style: { width, height }, ...rest };
  const icons = {
    gitHub: <FaSquareGithub {...props} />,
    linkedIn: <SiLinkedin {...props} />,
    calendar: <FaRegCalendarCheck {...props} />,
    link: <MdOutlineArrowOutward {...props} />,
    moon: <BsFillMoonFill {...props} />,
    sun: <BsFillSunFill {...props} />,
  };

  return icons[name];
};

export default function Icon({ name, width = "28", height = "28", ...props }) {
  return <IconComponent name={name} width={width} height={height} {...props} />;
}
