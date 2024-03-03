"use client";

import styles from "./styles.module.scss";
import Tag from "@/app/components/Tag";

const Technologies = () => {
  const skills = ["JavaScript", "TypeScript", "SCSS", "HTML", "React"];
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Skills}>
        {skills.map((skill) => (
          <Tag key={skill}>{skill}</Tag>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
