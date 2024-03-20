import Icon from "@/app/components/Icon";
import styles from "./styles.module.scss";
import Link from "next/link";
import { ROUTES } from "@/app/lib/router.constants";
import { dmSerifDisplay } from "@/app/fonts";

export default function Projects() {
  return (
    <Link className={styles.Wrapper} href={ROUTES.PROJECTS.path}>
      <h2 className={dmSerifDisplay.className}>{ROUTES.PROJECTS.name}.</h2>
      <div className={styles.PaperDark} />
      <div className={styles.PaperMedium} />
      <div className={styles.PaperLight} />
      <Icon className={styles.Link} name="link" size="22" />
    </Link>
  );
}
