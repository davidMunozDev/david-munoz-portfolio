"use client";
import styles from "./styles.module.scss";
import { useExperienceContext } from "../experience-context";
import Icon from "@/app/components/Icon";
import { applyStyles } from "@/app/lib/styleHelpers";

const ExperiencesList = () => {
  const { content } = useExperienceContext();
  const experiencesList = content.list.slice(0, 4);
  const isSelected = (index) => index === 0;
  return (
    <div className={styles.Wrapper}>
      {experiencesList.map((experience, i) => (
        <div
          className={
            !isSelected(i) ? styles.Experience : styles.Experience__selected
          }
          key={i}
        >
          <div className={styles.Information}>
            <h3>{experience.title}</h3>
            <p>{experience.place}</p>
          </div>
          <div className={styles.Date}>
            <span>{experience.to}</span>
            <Icon name="arrowTop" height="24" width="24" />
            <span>{experience.from}</span>
          </div>
        </div>
      ))}
      <div className={styles.LoadMore}>Load more</div>
    </div>
  );
};

export default ExperiencesList;
