import Image from "next/image";
import Icon from "@/app/components/Icon";
import styles from "./styles.module.scss";

export default function Education() {
  return (
    <div className={styles.Wrapper}>
      <Image
        src="/img/astro-education.svg"
        alt="astronaut in home"
        width="160"
        height="195"
        className={styles.AstroEducation}
      />
      <Icon className={styles.Link} name="link" width="28" height="28" />
    </div>
  );
}
