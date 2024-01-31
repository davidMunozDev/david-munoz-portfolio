import Image from "next/image";
import styles from "./rocket.module.scss";

export default function Rocket() {
  return (
    <div className={styles.Wrapper}>
      <Image
        className={styles.RocketImage}
        src="/img/astro-rocket.svg"
        alt="rocket"
        width="150"
        height="150"
      />
      <Image
        className={styles.SmokeImage}
        src="/img/smoke.svg"
        alt="rocket"
        width="110"
        height="150"
      />
      <div className={styles.FlameWrapper}>
        <div className={styles.Flame}>
          <div className={styles.RedFlame} />
          <div className={styles.OrangeFlame} />
          <div className={styles.GoldFlame} />
          <div className={styles.WhiteFlame} />
        </div>
      </div>
    </div>
  );
}
