import Image from "next/image";

const getIcon = (name) => {
  const icons = {
    gitHub: "github-dark",
    linkedIn: "linkedIn",
    calendar: "calendar",
    linkLight: "Link",
    linkDark: "Link-dark",
  };

  return `/icons/${icons[name]}.svg`;
};

export default function Icon({ name, width = "28", height = "28", ...props }) {
  return (
    <Image
      alt={`icon ${name}`}
      width={width}
      height={height}
      src={getIcon(name)}
      {...props}
    />
  );
}
