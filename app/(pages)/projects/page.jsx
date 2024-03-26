import Info from "../../components/Info";
import styles from "./projects.module.scss";
import ProjectsList from "./ProjectsList";
import Filters from "./Filters";
import { Suspense } from "react";

const Projects = () => {
  return (
    <div className={styles.Container}>
      <Info page="Projects">
        <p>
          This is a longer sample text containing twenty-eight example words for
          you to see how it looks in the layout.
        </p>
      </Info>
      <Suspense fallback={<div>Loading...</div>}>
        <Filters />
        <ProjectsList />
      </Suspense>
    </div>
  );
};

export default Projects;
