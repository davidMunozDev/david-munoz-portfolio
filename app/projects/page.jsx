import styles from "./projects.module.scss";
import ProjectsList from "./ProjectsList";
import ProjectDetail from "./ProjectsList";
import Actions from "./Actions";
import { ProjectsContextProvider } from "@/lib/projects-context";

export default function Home() {
  return (
    <ProjectsContextProvider>
      <div className={styles.Container}>
        <div className={styles.LeftColumn}>
          <ProjectsList part={0} />
        </div>
        <div className={styles.CenterColumn}>
          <div></div>
          <div></div>
          <Actions />
        </div>
        <div className={styles.RightColumn}>
          <ProjectsList part={1} />
        </div>
      </div>
    </ProjectsContextProvider>
  );
}
