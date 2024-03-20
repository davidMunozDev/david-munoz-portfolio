import styles from "./styles.module.scss";
import Icon from "@/app/components/Icon";
import Link from "next/link";
import { dmSerifDisplay } from "@/app/fonts";

export default function Folder({ children, style = "primary", href }) {
  return (
    <Link href={href} className={`${styles.Wrapper} ${styles[style]}`}>
      <Icon className={styles.LinkIcon} size="22" name="link" />
      <h2 className={dmSerifDisplay.className}>{children}.</h2>
      <div className={styles.Paper} />
    </Link>
  );
}
