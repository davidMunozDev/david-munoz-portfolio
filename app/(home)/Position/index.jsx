import styles from "./styles.module.scss";
import Rocket from "./Rocket";

export default function Position() {
  return (
    <div className={styles.Wrapper}>
      <Rocket />
      <span>Software</span>
      <a
        href="https://www.bbvanexttechnologies.com/"
        target="_blank"
        className={styles.Company}
      >
        Developer
      </a>
    </div>
  );
}
