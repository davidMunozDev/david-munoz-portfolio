"use client";

import { applyStyles } from "@/app/lib/styleHelpers";
import styles from "./styles.module.scss";
import { useProjectsContext } from "@/app/projects/projects-context";
import Image from "next/image";

const ProjectsList = ({ part }) => {
  const { projects, onSelectProject, selectedProject } = useProjectsContext();

  return (
    <div className={styles.Wrapper}>
      {projects[part].map(({ id, name }, i) =>
        id !== "wip" ? (
          <div
            style={{ backgroundImage: `url("/projects/project-${id}.png")` }}
            onClick={() => onSelectProject(id)}
            className={applyStyles([
              styles.Project__content,
              id === selectedProject.id && styles.Project__selected,
            ])}
            key={id}
          >
            <Image
              className={styles.Union}
              style={{
                [part === 0 ? "right" : "left"]: "-26px",
                ...(i !== 1 ? { [i === 0 ? "bottom" : "top"]: "15%" } : {}),
              }}
              src={`/img/union.svg`}
              alt="union"
              width={22}
              height={40}
            />
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
