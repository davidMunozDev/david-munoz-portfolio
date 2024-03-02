import styles from "./projects.module.scss";
import ProjectsList from "./ProjectsList";
import Actions from "./Actions";
import Detail from "./Detail";
import Header from "@/app/components/Header";
import { ProjectsContextProvider } from "@/app/projects/projects-context";

export default function Projects() {
  return (
    <ProjectsContextProvider>
      <div className={styles.Container}>
        <div className={styles.LeftColumn}>
          <ProjectsList part={0} />
        </div>
        <div className={styles.CenterColumn}>
          <Header currentPage="Projects" />
          <Detail />
          <Actions />
        </div>
        <div className={styles.RightColumn}>
          <ProjectsList part={1} />
        </div>
      </div>
    </ProjectsContextProvider>
  );
}
