import AstronautIntro from "./AstronautIntro";
import Profile from "./Profile";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <main className={styles.Container}>
      <div className={styles.LeftColumn}>
        <Profile />
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
        <div
          style={{
            backgroundColor: "#D9D9D9",
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
    </main>
  );
}
