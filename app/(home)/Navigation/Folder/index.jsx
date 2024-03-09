import styles from "./styles.module.scss";
import Icon from "@/app/components/Icon";
import Link from "next/link";

export default function Folder({ children, style = "primary", href }) {
  return (
    <Link href={href} className={`${styles.Wrapper} ${styles[style]}`}>
      <Icon className={styles.LinkIcon} size="28" name="link" />
      <h2>{children}</h2>
      <div className={styles.Paper} />
    </Link>
  );
}
