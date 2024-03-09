import { applyStyles } from "@/app/lib/styleHelpers.util";
import styles from "./styles.module.scss";

export default function Button({
  children,
  className,
  component,
  variant = "button",
  href,
  disabled,
  onClick,
  ...props
}) {
  const buttonClass = variant === "button" ? "Button" : "Text";
  const disabledClass = disabled ? styles[`${buttonClass}__disabled`] : "";
  const HTMLTag = component || (href ? "a" : "button");
  return (
    <HTMLTag
      className={applyStyles([
        styles[buttonClass],
        disabled && disabledClass,
        className,
      ])}
      href={href}
      onClick={onClick}
      {...props}
    >
      {children}
    </HTMLTag>
  );
}
