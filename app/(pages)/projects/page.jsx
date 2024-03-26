import Info from "../../components/Info";
import styles from "./projects.module.scss";
import ProjectsList from "./ProjectsList";
import Filters from "./Filters";
import { Suspense } from "react";

const Projects = () => {
  return (
    <div className={styles.Container}>
      <Info page="Projects">
        Here you can find a list of projects I have worked on. Click on any of
      </Info>
      <Suspense fallback={<div>Loading...</div>}>
        <Filters />
        <ProjectsList />
      </Suspense>
    </div>
  );
};

export default Projects;
