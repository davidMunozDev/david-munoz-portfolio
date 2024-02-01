import styles from "./styles.module.scss";
import Icon from "@/app/components/Icon";

export default function Folder({ children, style = "primary" }) {
  return (
    <div className={`${styles.Wrapper} ${styles[style]}`}>
      <Icon
        className={styles.LinkIcon}
        width="14"
        height="14"
        name={style === "primary" ? "linkLight" : "linkDark"}
      />
      <h2>{children}</h2>
    </div>
  );
}
