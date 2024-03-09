"use client";

import styles from "./styles.module.scss";
import Tag from "@/app/components/Tag";
import { useExperienceContext } from "../experience-context";
import Icon from "@/app/components/Icon";
import ListParagraph from "@/app/components/ListParagraph";

const Detail = () => {
  const { contentDetail } = useExperienceContext();
  return (
    <div className={styles.Wrapper}>
      <Background />
      <div className={styles.LinkIcon}>
        <Icon name="link" size="30" />
      </div>
      <div className={styles.Content}>
        <h2 className={styles.Title}>{contentDetail.title}</h2>
        {/* <span>{contentDetail.place}</span> */}
        <div className={styles.Messages}>
          {contentDetail.messages.map((message, i) => (
            <ListParagraph key={i}>{message}</ListParagraph>
          ))}
        </div>
        <div className={styles.Skills}>
          {contentDetail.skills.map((skill) => (
            <Tag key={skill}>{skill}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
};

const Background = () => <div className={styles.Background}></div>;

export default Detail;
