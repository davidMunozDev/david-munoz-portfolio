import Icon from "@/app/components/Icon";
import styles from "./styles.module.scss";

export default function Notifications() {
  return (
    <div className={styles.Wrapper}>
      <p className={styles.Content}>
        <Icon size="14" name="calendar" />
        David has notifications turned on
      </p>
    </div>
  );
}
