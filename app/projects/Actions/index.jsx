"use client";

import Pagination from "./Pagination";
import Filter from "./Filter";
import { useProjectsContext } from "@/app/projects/projects-context";
import styles from "./styles.module.scss";

const Actions = () => {
  const { goBack, goForward, canGoBack, canGoForward } = useProjectsContext();

  return (
    <div className={styles.Wrapper}>
      <Pagination
        goBack={goBack}
        canGoBack={canGoBack}
        canGoForward={canGoForward}
        goForward={goForward}
      />
      <Filter />
    </div>
  );
};

export default Actions;
