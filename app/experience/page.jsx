import styles from "./experience.module.scss";
import Header from "@/app/components/Header";
import TotalExperience from "./TotalExperience";
import Technologies from "./Technologies";
import Detail from "./Detail";
import ContentSwitch from "./ContentSwitch";

export default function Experience() {
  return (
    <div className={styles.Container}>
      <div className={styles.LeftColumn}>
        <TotalExperience />
        <Technologies />
      </div>
      <div className={styles.CenterColumn}>
        <Header currentPage="Experience" />
        <Detail />
      </div>
      <div className={styles.RightColumn}>
        <ContentSwitch />
        <div></div>
      </div>
    </div>
  );
}
