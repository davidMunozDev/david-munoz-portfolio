"use client";

import Icon from "@/app/components/Icon";
import styles from "./styles.module.scss";
import Button from "@/app/components/Button";
import { useRef, useState } from "react";
import { skills } from "@/app/lib/portfolio-data.json";
import { useProjectsContext } from "@/app/projects/projects-context";
import { useClickOutside } from "@/app/lib/useClickOutside.hook";

const Filter = ({}) => {
  const { filters, selectFilter } = useProjectsContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef(null);

  const handleModalopen = () => setIsModalOpen((isOpen) => !isOpen);
  const handleModalClose = () => isModalOpen && setIsModalOpen(false);
  const isFilterActive = (filter) => filters.includes(filter);

  useClickOutside(ref, handleModalClose);
  return (
    <div ref={ref} className={styles.Wrapper}>
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
            <div>
              {isFilterActive(skill) && <Icon name="check" size="16" />}
            </div>
          </li>
        ))}
      </ul>
      <Button onClick={handleModalopen} className={styles.Filters}>
        {!isModalOpen ? (
          <span>
            {filters.length ? <i className={styles.Dot} /> : null}
            Filter by tech <Icon size="18" name="filter" />
          </span>
        ) : (
          <span>
            Close <Icon size="18" name="close" />
          </span>
        )}
      </Button>
    </div>
  );
};

export default Filter;
