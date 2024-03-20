import styles from "./home.module.scss";
import Profile from "./Profile";
import Notifications from "./Notifications";
import Navigation from "./Navigation";
import Chat from "./Chat";
import Name from "./Name";
import Map from "./Map";
import MainSkills from "./MainSkills";
import Reading from "./Reading";
import ExtraInfo from "./ExtraInfo";
import Languages from "@/app/components/Languages";
import Contact from "./Contact";

export default function Home() {
  return (
    <div className={styles.Container}>
      <div className={styles.LeftColumn}>
        <Profile />
        <Navigation />
        <Map />
      </div>
      <div className={styles.CenterColumn}>
        <Name />
        <Notifications />
        <Chat />
        <Contact />
      </div>
      <div className={styles.RightColumn}>
        <ExtraInfo />
        <Reading />
        <Languages />
        <MainSkills />
      </div>
    </div>
  );
}
