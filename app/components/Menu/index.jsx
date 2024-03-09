"use client";

import Link from "next/link";
import Icon from "../Icon";
import styles from "./styles.module.scss";
import { useMenuContext } from "@/app/lib/menu-context";
import { ROUTES } from "@/app/lib/router.constants";

export default function Menu() {
  const { isMenuOpen, manageMenu } = useMenuContext();

  return (
    <div className={isMenuOpen ? styles.Wrapper : styles.Wrapper__inactive}>
      <Icon
        className={styles.Close}
        size="32"
        name="cross"
        onClick={manageMenu}
      />
      {Object.values(ROUTES).map(({ name, path }) => (
        <Link key={name} onClick={manageMenu} href={path}>
          {name}
        </Link>
      ))}
    </div>
  );
}
