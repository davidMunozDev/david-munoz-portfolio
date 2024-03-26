"use client";

import styles from "./styles.module.scss";
import { education } from "@/app/lib/portfolio-data.json";
import { applyStyles } from "@/app/lib/styleHelpers.util";
import ListParagraph from "@/app/components/ListParagraph";
import Title from "@/app/components/Title";
import { useState } from "react";
import Tag from "@/app/components/Tag";
import Image from "next/image";
import Icon from "@/app/components/Icon";

const EducationList = () => {
  const experiencesList = education.list;
  const [selectedContent, setSelectedContent] = useState(0);
  const isSelected = (content) => selectedContent === content;

  return (
    <div className={styles.Wrapper}>
      <div className={styles.GradientBox} />
      <div className={styles.StudiesList}>
        {experiencesList.map((experience, i) => (
          <article
            onClick={() => setSelectedContent(i)}
            className={applyStyles([
              styles.StudiesListItem,
              isSelected(i) && styles.StudiesListItem__selected,
            ])}
            key={experience.title}
          >
            <div className={styles.StudiesListItem__content}>
              <div className={styles.StudiesListItem__content__topic}>
                <Title>{experience.title}</Title>
                <span>{experience.place}</span>
              </div>
              <div className={styles.StudiesListItem__content__text}>
                {experience.messages.map((message, i) => (
                  <ListParagraph key={i}>{message}</ListParagraph>
                ))}
              </div>
            </div>
            <div className={styles.Union}>
              <Icon name="union" />
            </div>
            <div className={styles.StudiesListItem__skills}>
              <Title>Skills learned</Title>
              <div>
                {experience.skills.map((skill, i) => (
                  <Tag key={i}>{skill}</Tag>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default EducationList;
