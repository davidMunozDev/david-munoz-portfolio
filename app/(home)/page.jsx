import styles from "./home.module.scss";
import AstronautIntro from "./AstronautIntro";
import Profile from "./Profile";
import Notifications from "./Notifications";
import Navigation from "./Navigation";
import Chat from "./Chat";
import ThemeSelection from "./ThemeSelection";
import Position from "./Position";
import Map from "./Map";
import Education from "./Education";

export default function Home() {
  return (
    <div className={styles.Container}>
      <div className={styles.LeftColumn}>
        <Profile />
        <Navigation />
        <Map />
      </div>
      <div className={styles.CenterColumn}>
        <Position />
        <Notifications />
        <Chat />
      </div>
      <div className={styles.RightColumn}>
        <AstronautIntro />
        <ThemeSelection />
        <Education />
      </div>
    </div>
  );
}
