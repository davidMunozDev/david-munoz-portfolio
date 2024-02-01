import styles from "./home.module.scss";
import AstronautIntro from "./AstronautIntro";
import Profile from "./Profile";
import Notifications from "./Notifications";
import Navigation from "./Navigation";
import Chat from "./Chat";

export default function Home() {
  return (
    <div className={styles.Container}>
      <div className={styles.LeftColumn}>
        <Profile />
        <Navigation />
      </div>
      <div className={styles.CenterColumn}>
        <div
          style={{
            backgroundColor: "white",
            width: "100%",
            minHeight: "94px",
            borderRadius: "10px",
          }}
        ></div>
        <Notifications />
        <Chat />
        <div
          style={{
            backgroundColor: "#000000",
            width: "100%",
            height: "100%",
            borderRadius: "10px",
          }}
        ></div>
      </div>
      <div className={styles.RightColumn}>
        <AstronautIntro />
        <div
          style={{
            backgroundColor: "#000000",
            width: "100%",
            height: "100%",
            borderRadius: "10px",
          }}
        ></div>
        <div
          style={{
            backgroundColor: "#000000",
            width: "100%",
            height: "100%",
            borderRadius: "10px",
          }}
        ></div>
      </div>
    </div>
  );
}
