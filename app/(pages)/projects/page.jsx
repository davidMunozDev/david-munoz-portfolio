import Info from "./Info";
import styles from "./projects.module.scss";
import ProjectsList from "./ProjectsList";
import Filters from "./Filters";

export default function Projects() {
  return (
    <div className={styles.Container}>
      <Info />
      <Filters />
      <ProjectsList />
    </div>
  );
}
