"use client";

import styles from "./styles.module.scss";
import { useProjectsContext } from "@/lib/projects-context";

const ProjectsList = ({ part }) => {
  const { projects, onSelectProject } = useProjectsContext();

  return (
    <div className={styles.Wrapper}>
      {projects[part].map(({ id, name }, i) =>
        id !== "wip" ? (
          <div
            style={{ backgroundImage: `url("/projects/project-${id}.png")` }}
            onClick={() => onSelectProject(id)}
            className={styles.Project__content}
            key={id}
          >
            <div className={styles.MoreInfo}>More info</div>
            <span className={styles.ProjectName}>{name}</span>
            <span className={styles.ProjectNumber}>{id}</span>
          </div>
        ) : (
          <div key={i} className={styles.Project__wip}>
            wip..
          </div>
        )
      )}
    </div>
  );
};

export default ProjectsList;
