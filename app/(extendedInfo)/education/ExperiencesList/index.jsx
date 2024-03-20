"use client";
import styles from "./styles.module.scss";
import { useExperienceContext } from "../experience-context";
import Icon from "@/app/components/Icon";

const ExperiencesList = () => {
  const { content, onSelectContentDetail, contentDetail } =
    useExperienceContext();
  const experiencesList = content.list.slice(0, 4);
  const isSelected = (id) => id === contentDetail.id;

  return (
    <div className={styles.Wrapper}>
      {experiencesList.map((experience, i) => (
        <div
          className={
            !isSelected(experience.id)
              ? styles.Experience
              : styles.Experience__selected
          }
          onClick={() => onSelectContentDetail(experience)}
          key={i}
        >
          <div className={styles.Information}>
            <h3>{experience.title}</h3>
            <p>{experience.place}</p>
          </div>
          <div className={styles.Date}>
            <span>{experience.to}</span>
            <Icon name="arrowTop" size="24" />
            <span>{experience.from}</span>
          </div>
        </div>
      ))}
      <div className={styles.LoadMore}>Load more</div>
    </div>
  );
};

export default ExperiencesList;
