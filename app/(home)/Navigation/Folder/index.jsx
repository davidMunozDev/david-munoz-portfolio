import styles from "./styles.module.scss";
import Icon from "@/app/components/Icon";

export default function Folder({ children, style = "primary" }) {
  return (
    <div className={`${styles.Wrapper} ${styles[style]}`}>
      <Icon className={styles.LinkIcon} width="28" height="28" name="link" />
      <h2>{children}</h2>
      <div className={styles.Paper} />
    </div>
  );
}
