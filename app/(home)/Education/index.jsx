import Image from "next/image";
import styles from "./styles.module.scss";
import { skills } from "@/app/lib/portfolio-data";
import Tag from "@/app/components/Tag";

export default function Education() {
  const skillsList = skills.slice(0, 8);
  return (
    <div className={styles.Wrapper}>
      <Image
        src="/img/astro-education.svg"
        alt="astronaut in home"
        width="140"
        height="173"
        className={styles.AstroEducation}
      />
      <div className={styles.Skills}>
        {skillsList.map((skill, index) => (
          <Tag key={index}>{skill}</Tag>
        ))}
      </div>
    </div>
  );
}
