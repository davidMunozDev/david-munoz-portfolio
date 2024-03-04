"use client";

import styles from "./styles.module.scss";
import Tag from "@/app/components/Tag";
import { useExperienceContext } from "../experience-context";
import Icon from "@/app/components/Icon";

const Detail = () => {
  const { contentDetail } = useExperienceContext();
  return (
    <div className={styles.Wrapper}>
      <h2>{contentDetail.title}</h2>
      <div className={styles.Messages}>
        {contentDetail.messages.map((message, i) => (
          <p key={i}>{message}</p>
        ))}
      </div>
      <div className={styles.Skills}>
        {contentDetail.skills.map((skill) => (
          <Tag key={skill}>{skill}</Tag>
        ))}
      </div>
      <div className={styles.LinkIcon}>
        <Icon name="link" width="30" height="30" />
      </div>
    </div>
  );
};

export default Detail;
