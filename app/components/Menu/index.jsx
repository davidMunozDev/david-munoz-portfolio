"use client";

import Link from "next/link";
import Icon from "../Icon";
import styles from "./styles.module.scss";
import { useMenuContext } from "@/lib/menu-context";

export default function Menu({ currentPage }) {
  const { isMenuOpen, manageMenu } = useMenuContext();

  return (
    <div className={isMenuOpen ? styles.Wrapper : styles.Wrapper__inactive}>
      <Icon
        className={styles.Close}
        width="32"
        height="32"
        name="cross"
        onClick={manageMenu}
      />
      <Link onClick={manageMenu} href="/">
        HOME
      </Link>
      <Link onClick={manageMenu} href="/projects">
        PROJECTS
      </Link>
      <Link onClick={manageMenu} href="/about">
        ABOUT
      </Link>
      <Link onClick={manageMenu} href="/experience">
        EXPERIENCE
      </Link>
    </div>
  );
}
