import Image from "next/image";
import styles from "./styles.module.scss";

export default function Highlight() {
  return (
    <div className={styles.Wrapper}>
      <Image
        src="/img/astro-worker.svg"
        alt="astronaut experience"
        width={80}
        height={170}
      />
      <h2 className={styles.Title}>More than 5 years of experience</h2>
    </div>
  );
}
