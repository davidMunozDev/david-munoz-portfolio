import styles from "./styles.module.scss";
import Image from "next/image";

export default function Map() {
  return (
    <div className={styles.Wrapper}>
      <Image
        src="/img/astro-home.svg"
        alt="astronaut in home"
        width="120"
        height="170"
        className={styles.AstroHome}
      />
    </div>
  );
}
