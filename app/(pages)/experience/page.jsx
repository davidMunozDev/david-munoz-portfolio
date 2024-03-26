import styles from "./experience.module.scss";
import ExperiencesList from "./ExperiencesList";

export default function Experience() {
  return (
    <div className={styles.Container}>
      <ExperiencesList />
    </div>
  );
}
