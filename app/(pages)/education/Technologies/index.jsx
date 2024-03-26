"use client";

import styles from "./styles.module.scss";
import Title from "@/app/components/Title";
import Icon from "@/app/components/Icon";
import { skills } from "@/app/lib/portfolio-data";
import Link from "next/link";

const SkillsList = ({ skills }) => {
  return (
    <div className={styles.Skills}>
      {skills.map((skill, i) => (
        <div key={i} className={styles.Skill}>
          <Icon name={skill.toLowerCase()} size="38" />
          <p>{skill}</p>
        </div>
      ))}
    </div>
  );
};

const Technologies = () => {
  return (
    <div id="technologies" className={styles.Wrapper}>
      <div className={styles.Header}>
        <Title>Technical skills.</Title>
        <p>
          I specialize in frontend development but am always expanding my skill
          set. I am committed to staying current with technology trends and
          continually learning new technologies across the board. You can see
          some examples of my work with this stack{" "}
          <Link href="/projects">here</Link>.
        </p>
      </div>
      <div className={styles.Categories}>
        <div className={styles.Category}>
          <div className={styles.Bar} />
          <h3>Frontend</h3>
          <SkillsList skills={skills.front} />
        </div>
        <div className={styles.Category}>
          <div className={styles.Bar} />
          <h3>Backend</h3>
          <SkillsList skills={skills.back} />
        </div>
        <div className={styles.Category}>
          <div className={styles.Bar} />
          <h3>Learning</h3>
          <SkillsList skills={skills.learning} />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
