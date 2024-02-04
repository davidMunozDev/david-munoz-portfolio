import Icon from "@/app/components/Icon";
import styles from "./styles.module.scss";
import Image from "next/image";

export default function Projects() {
  return (
    <div className={styles.Wrapper}>
      <h2>Projects</h2>
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
      <Icon className={styles.Link} name="link" width="28" height="28" />
    </div>
  );
}
