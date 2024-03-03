"use client";

import Icon from "../Icon";
import styles from "./styles.module.scss";
import { useThemeContext } from "@/app/lib/theme-context";
import { useMenuContext } from "@/app/lib/menu-context";

export default function Header({ currentPage }) {
  const { theme, changeTheme } = useThemeContext();
  const { manageMenu } = useMenuContext();

  return (
    <div className={styles.Wrapper}>
      <span>{currentPage}</span>
      <div className={styles.Actions}>
        <Icon
          onClick={changeTheme}
          width="22"
          height="22"
          name={theme === "dark" ? "moon" : "sun"}
        />
        <Icon onClick={manageMenu} width="32" height="32" name="menu" />
      </div>
    </div>
  );
}
