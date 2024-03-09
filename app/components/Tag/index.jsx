import { applyStyles } from "@/app/lib/styleHelpers.util";
import styles from "./styles.module.scss";

export default function Tag({ children, className, ...props }) {
  return (
    <span className={applyStyles([styles.Tag, className])} {...props}>
      {children}
    </span>
  );
}
