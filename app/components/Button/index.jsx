import { applyStyles } from "@/app/lib/styleHelpers.util";
import styles from "./styles.module.scss";

export default function Button({
  children,
  className,
  component,
  variant = "button",
  theme = "primary",
  href,
  disabled,
  onClick,
  icon,
  rounded,
  ...props
}) {
  const buttonClass = variant === "button" ? "Button" : "Text";
  const disabledClass = disabled ? styles[`${buttonClass}__disabled`] : "";
  const HTMLTag = component || (href ? "a" : "button");
  return (
    <HTMLTag
      className={applyStyles([
        styles[buttonClass],
        styles[theme],
        disabled && disabledClass,
        icon && styles.icon,
        rounded && styles.rounded,
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
