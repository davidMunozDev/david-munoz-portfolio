import styles from "./styles.module.scss";
import { skills } from "@/app/lib/portfolio-data";
import { dmSerifDisplay } from "@/app/fonts";
import Icon from "@/app/components/Icon";
import Button from "@/app/components/Button";

export default function MySkills() {
  const skillsList = skills.slice(0, 8);
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Header}>
        <h2 className={dmSerifDisplay.className}>Main skills.</h2>
        <Button>
          <Icon name="link" size="22" /> <span>View all</span>
        </Button>
      </div>
      <div className={styles.Skills}>
        {skillsList.map((skill, i) => (
          <div key={i} className={styles.Skill}>
            <Icon name={skill.toLowerCase()} size="30" />
          </div>
        ))}
      </div>
    </div>
  );
}
