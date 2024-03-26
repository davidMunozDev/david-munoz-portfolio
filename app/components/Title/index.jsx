import { dmSerifDisplay } from "@/app/fonts";

const Title = ({ tag, children, ...props }) => {
  const Tag = tag || "h2";

  return (
    <Tag className={dmSerifDisplay.className} {...props}>
      {children}
    </Tag>
  );
};

export default Title;
