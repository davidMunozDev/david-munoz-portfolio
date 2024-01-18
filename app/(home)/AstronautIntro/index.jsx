import Image from "next/image";
import styles from "./astronaut.module.scss";
import Rocket from "./Rocket";

export default function AstronautIntro() {
  const stars = Array.from({ length: 4 }, (_, i) => i + 1);
  return (
    <div className={styles.Wrapper}>
      <Rocket />
      <div className={styles.SpaceContainer}>
        <Image
          className={styles.AstronautImage}
          src="/img/astronaut.svg"
          alt="astronaut"
          width="350"
          height="350"
        />

        <div className={styles.StarsWrapper}>
          {stars.map((star) => (
            <div key={star} className={styles[`ShootingStar_${star}`]} />
          ))}
        </div>
      </div>
    </div>
  );
}
