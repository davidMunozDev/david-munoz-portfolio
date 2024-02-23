import { applyStyles } from "@/lib/styleHelpers";
import styles from "./styles.module.scss";

export default function Tag({ children, className, ...props }) {
  return (
    <span className={applyStyles([styles.Tag, className])} {...props}>
      {children}
    </span>
  );
}
