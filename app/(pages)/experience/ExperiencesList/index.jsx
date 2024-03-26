"use client";

import styles from "./styles.module.scss";
import Icon from "@/app/components/Icon";
import ListParagraph from "@/app/components/ListParagraph";
import Title from "@/app/components/Title";
import { work } from "@/app/lib/portfolio-data.json";
import Image from "next/image";
import { useState } from "react";

const ExperiencesList = () => {
  const experiencesList = work.list;
  const [selectedContent, setSelectedContent] = useState(0);
  const isSelected = (content) => selectedContent === content;

  return (
    <div className={styles.Wrapper}>
      {experiencesList.map((experience, i) => (
        <div key={i + experience.title}>
          <div
            className={
              !isSelected(i) ? styles.Experience : styles.Experience__selected
            }
            onClick={() => setSelectedContent(i)}
          >
            <div className={styles.Information}>
              <Title>{experience.title}</Title>
              <p>{experience.place}</p>
              <div className={styles.Messages}>
                <div>
                  {experience.messages.map((message, i) => (
                    <ListParagraph key={i}>{message}</ListParagraph>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.Date}>
              <span>{experience.to}</span>
              <Icon name="arrowTop" size="24" />
              <span>{experience.from}</span>
            </div>
          </div>
          {i !== experiencesList.length - 1 && (
            <div
              className={
                (i + 1) % 2 === 0 ? styles.Union__end : styles.Union__start
              }
            >
              <Image
                src="/img/union.svg"
                width="22"
                height="40"
                alt="experiences union"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ExperiencesList;
