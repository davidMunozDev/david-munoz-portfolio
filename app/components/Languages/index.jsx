import styles from "./styles.module.scss";

const Languages = () => {
  return (
    <div className={styles.Wrapper}>
      <span className={styles.Label}>Languages I speak</span>
      <h2 className={styles.Title}>
        English - Spanish
        <div className={styles.Level}>
          <span className={styles.Label}>Professional</span>
          <span className={styles.Label}>Native</span>
        </div>
      </h2>
    </div>
  );
};

export default Languages;
