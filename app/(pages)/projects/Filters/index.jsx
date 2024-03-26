"use client";

import Button from "@/app/components/Button";
import styles from "./styles.module.scss";

const Filters = () => {
  return (
    <div className={styles.Wrapper}>
      <span>Filter by</span>
      <div className={styles.Filters}>
        <Button className={styles.Button} theme="secondary">
          Sort by: Newest
        </Button>
        <Button className={styles.Button} theme="secondary">
          Category
        </Button>
        <Button className={styles.Button} theme="secondary">
          Technologies
        </Button>
      </div>
    </div>
  );
};

export default Filters;
