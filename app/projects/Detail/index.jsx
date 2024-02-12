"use client";

import styles from "./styles.module.scss";
import { useProjectsContext } from "@/lib/projects-context";

const Pagination = () => {
  const { selectedProject } = useProjectsContext();
  const { name, description } = selectedProject;

  return (
    <div className={styles.Wrapper}>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Pagination;
