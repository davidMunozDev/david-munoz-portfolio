import Info from "./Info";
import styles from "./projects.module.scss";
import ProjectsList from "./ProjectsList";

export default function Projects() {
  return (
    <div className={styles.Container}>
      <Info />
      <ProjectsList />
    </div>
  );
}
