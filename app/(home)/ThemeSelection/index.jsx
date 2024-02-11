"use client";

import styles from "./styles.module.scss";
import { useThemeContext } from "@/lib/theme-context";
import Icon from "@/app/components/Icon";

export default function ThemeSelection() {
  const { theme, changeTheme } = useThemeContext();
  const isChecked = theme === "dark";

  return (
    <div className={styles.Wrapper}>
      <input
        className={styles.Checkbox}
        checked={isChecked}
        onChange={changeTheme}
        type="checkbox"
      />
      <div className={styles.Icon__light}>
        <Icon
          className={!isChecked && styles.IconSelected}
          name="sun"
          width="34"
          height="34"
        />
      </div>
      <div className={styles.Icon__dark}>
        <Icon className={isChecked && styles.IconSelected} name="moon" />
      </div>
      <div
        className={
          isChecked ? styles.SelectedTheme__dark : styles.SelectedTheme__light
        }
      />
    </div>
  );
}
