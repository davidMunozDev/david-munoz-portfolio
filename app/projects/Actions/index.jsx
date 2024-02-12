"use client";

import Pagination from "./Pagination";
import Filter from "./Filter";
import { useProjectsContext } from "@/lib/projects-context";
import styles from "./styles.module.scss";

const Actions = () => {
  const { goBack, goForward, canGoBack, canGoForward } = useProjectsContext();

  return (
    <div className={styles.Wrapper}>
      <Pagination
        goBack={canGoBack && goBack}
        goForward={canGoForward && goForward}
      />
      <Filter />
    </div>
  );
};

export default Actions;
