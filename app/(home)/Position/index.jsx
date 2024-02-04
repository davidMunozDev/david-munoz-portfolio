import styles from "./styles.module.scss";

export default function Position() {
  return (
    <div className={styles.Wrapper}>
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
