import Image from "next/image";
import styles from "./astronaut.module.scss";
export default function AstronautIntro() {
  const stars = Array.from({ length: 4 }, (_, i) => i + 1);
  return (
    <div className={styles.Wrapper}>
      <div className={styles.SpaceContainer}>
        <Image
          className={styles.AstronautImage}
          src="/img/astronaut.svg"
          alt="astronaut"
          width="250"
          height="250"
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
