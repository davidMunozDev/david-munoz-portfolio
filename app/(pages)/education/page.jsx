import styles from "./education.module.scss";
import EducationList from "./EducationList";
import Technologies from "./Technologies";

export default function Experience() {
  return (
    <div className={styles.Container}>
      <EducationList />
      <Technologies />
    </div>
  );
}
