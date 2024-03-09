import { applyStyles } from "@/app/lib/styleHelpers.util";
import styles from "./styles.module.scss";

export default function Toggle({ firstOpt, lastOpt, onChange, value }) {
  const isChecked = value === firstOpt.value;

  return (
    <div className={styles.Wrapper}>
      <input
        className={styles.Checkbox}
        checked={isChecked}
        onChange={onChange}
        type="checkbox"
      />
      <div
        className={applyStyles([
          styles.Item__left,
          isChecked && styles.ItemSelected,
        ])}
      >
        {firstOpt.content}
      </div>
      <div
        className={applyStyles([
          styles.Item__right,
          !isChecked && styles.ItemSelected,
        ])}
      >
        {lastOpt.content}
      </div>
      <div
        className={isChecked ? styles.Selected__left : styles.Selected__right}
      />
    </div>
  );
}
