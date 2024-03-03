import styles from "./experience.module.scss";
import Header from "@/app/components/Header";
import Highlight from "./Highlight";
import Technologies from "./Technologies";
import Detail from "./Detail";
import ContentSwitch from "./ContentSwitch";
import ExperiencesList from "./ExperiencesList";
import { ExperienceContextProvider } from "./experience-context";

export default function Experience() {
  return (
    <ExperienceContextProvider>
      <div className={styles.Container}>
        <div className={styles.LeftColumn}>
          <Highlight />
          <Technologies />
        </div>
        <div className={styles.CenterColumn}>
          <Header currentPage="Experience" />
          <Detail />
        </div>
        <div className={styles.RightColumn}>
          <ContentSwitch />
          <ExperiencesList />
        </div>
      </div>
    </ExperienceContextProvider>
  );
}
