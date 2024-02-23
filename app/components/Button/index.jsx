import { applyStyles } from "@/lib/styleHelpers";
import styles from "./styles.module.scss";

export default function Button({ children, className, disabled, ...props }) {
  return (
    <button
      className={applyStyles([
        styles.Button,
        disabled && styles.Button__disabled,
        className,
      ])}
      {...props}
    >
      {children}
    </button>
  );
}
