"use client";

import styles from "./styles.module.scss";
import Tag from "@/app/components/Tag";

const Technologies = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "SCSS",
    "HTML",
    "React",
    "Next.js",
    "Node",
    "Express",
    "MongoDB",
    "Jest",
    "Cypress",
    "Git",
    "GitHub",
    "GitLab",
    "Bitbucket",
    "Angular",
  ];
  return (
    <div className={styles.Wrapper}>
      <h2 className={styles.Title}>Interested in any specific technology?</h2>
      <div className={styles.Skills}>
        {skills.map((skill) => (
          <Tag key={skill}>{skill}</Tag>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
