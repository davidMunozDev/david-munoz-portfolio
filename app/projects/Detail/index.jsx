"use client";

import Image from "next/image";
import styles from "./styles.module.scss";
import { useProjectsContext } from "@/app/projects/projects-context";
import Tag from "@/app/components/Tag";
import ListParagraph from "@/app/components/ListParagraph";
import Button from "@/app/components/Button";
import Icon from "@/app/components/Icon";

const Detail = () => {
  const { selectedProject } = useProjectsContext();
  const { name, messages, id, url } = selectedProject;

  return (
    <div className={styles.Wrapper}>
      <Image
        src={`/img/astro-projects.svg`}
        alt="astronaut projects"
        width="140"
        height="140"
        className={styles.AstroImage}
      />
      <Background />
      <div className={styles.Content}>
        <h2 className={styles.ProjectNumber}>{id}</h2>
        <h2 className={styles.ProjectName}>{name}</h2>
        <div className={styles.Messages}>
          {messages.map((message, i) => (
            <ListParagraph key={i} className={styles.ProjectDescription}>
              {message}
            </ListParagraph>
          ))}
        </div>
        <div className={styles.Skills}>
          {selectedProject.skills.map((skill) => (
            <Tag key={skill}>{skill}</Tag>
          ))}
        </div>

        <div className={styles.Actions}>
          <Button className={styles.Button} target="_blank" href={url}>
            View code
          </Button>
          <Button
            className={styles.Button}
            target="_blank"
            href={url}
            variant="text"
          >
            See the project
            <Icon className={styles.Icon} name="arrowRight" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const Background = () => (
  <div className={styles.Background}>
    <Image
      className={styles.Dots}
      src={`/img/circles-decoration.svg`}
      alt="astronaut projects"
      height="280"
      width="160"
    />
    <Image
      className={styles.Donuts}
      src={`/img/donuts.svg`}
      alt="astronaut projects"
      height="200"
      width="200"
    />
  </div>
);

export default Detail;
