"use client";

import Icon from "@/app/components/Icon";
import styles from "./styles.module.scss";
import Button from "@/app/components/Button";
import { useState } from "react";
import { skills } from "@/portfolio-data.json";
import { useProjectsContext } from "@/app/projects/projects-context";

const Filter = ({}) => {
  const { filters, selectFilter } = useProjectsContext();
  const [isModalOpen, setIsmodalOpen] = useState(false);
  const handleModalopen = () => setIsmodalOpen((isOpen) => !isOpen);
  const isFilterActive = (filter) => filters.includes(filter);

  return (
    <div className={styles.Wrapper}>
      <ul
        className={
          isModalOpen ? styles.FiltersModal : styles.FiltersModal__inactive
        }
      >
        {skills.map((skill, i) => (
          <li
            className={
              !isFilterActive(skill)
                ? styles.FiltersItem
                : styles.FiltersItem__active
            }
            onClick={() => selectFilter(skill)}
            key={i}
          >
            {skill}
          </li>
        ))}
      </ul>
      <Button onClick={handleModalopen} className={styles.Filters}>
        {!isModalOpen ? (
          <span>
            {filters.length ? <i className={styles.Dot} /> : null}
            Filter <Icon width="18" name="filter" />
          </span>
        ) : (
          <span>
            Close <Icon width="18" name="close" />
          </span>
        )}
      </Button>
    </div>
  );
};

export default Filter;
