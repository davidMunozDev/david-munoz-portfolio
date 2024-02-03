"use client";

import styles from "./styles.module.scss";
import { applyStyles } from "@/lib/styleHelpers";
import { useThemeContext } from "@/lib/context";

export default function ThemeSelection() {
  const { theme, changeTheme } = useThemeContext();
  const isChecked = theme === "dark";

  return (
    <div
      className={applyStyles([
        theme === "light" && styles.Wrapper__light,
        theme === "dark" && styles.Wrapper__dark,
      ])}
    >
      <input
        className={styles.Checkbox}
        checked={isChecked}
        onChange={changeTheme}
        type="checkbox"
      />
      <div className={styles.SelectedTheme} />
    </div>
  );
}
