import Icon from "@/app/components/Icon";
import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/app/lib/router.constants";

export default function Projects() {
  return (
    <Link className={styles.Wrapper} href={ROUTES.PROJECTS.path}>
      <h2>{ROUTES.PROJECTS.name}</h2>
      <div className={styles.PaperDark} />
      <div className={styles.PaperMedium} />
      <div className={styles.PaperLight} />
      <Image
        src="/img/astro-laptop.svg"
        alt="astronaut with laptop"
        width="126"
        height="87"
        className={styles.Astronaut}
      />
      <Icon className={styles.Link} name="link" size="28" />
    </Link>
  );
}
