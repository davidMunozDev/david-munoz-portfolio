"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";
import { useProjectsContext } from "@/lib/projects-context";
import Tag from "@/app/components/Tag";
import Icon from "@/app/components/Icon";

const Detail = () => {
  const { selectedProject } = useProjectsContext();
  const { name, description, id, url } = selectedProject;

  return (
    <a href={url} target="_blank" className={styles.Wrapper}>
      <Image
        src={`/img/astro-projects.svg`}
        alt="astronaut projects"
        width="140"
        height="140"
        className={styles.AstroImage}
      />
      <Image
        src={`/projects/project-${id}.png`}
        alt="project image detail"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className={styles.DetailImage}
      />
      <div className={styles.LinkIcon}>
        <Icon name="link" width="30" height="30" />
      </div>
      <h2 className={styles.ProjectNumber}>{id}</h2>

      <p className={styles.ProjectDescription}>{description}</p>

      <div className={styles.Skills}>
        {selectedProject.skills.map((skill) => (
          <Tag key={skill}>{skill}</Tag>
        ))}
      </div>

      <h2 className={styles.ProjectName}>{name}</h2>
    </a>
  );
};

export default Detail;
