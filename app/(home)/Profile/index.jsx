import styles from "./profile.module.scss";
import Image from "next/image";
import Button from "@/app/components/Button";
import Icon from "@/app/components/Icon";
//TODO add images, icons with component and button

export default function Profile() {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.ProfileInformation}>
        <Image
          alt="profile image"
          src="/img/me-avatar.jpeg"
          width="86"
          height="86"
          className={styles.Avatar}
        />
        <div className={styles.Information}>
          <span>Hello👋🏻,</span>
          <h2 className={styles.Name}>
            <span>I&apos;m</span> David Muñoz
          </h2>
        </div>
      </div>
      <p className={styles.Description}>
        Always looking for new opportunities and focus on improve. Always
        looking for new opportunities and focus on improve. Always looking for
        new opportunities and focus on improve.
      </p>
      <div className={styles.Social}>
        <a
          href="https://www.linkedin.com/in/davidmu%C3%B1ozviejo/"
          style={{ height: "24px" }}
          target="_blank"
        >
          <Icon width="24" height="24" name="linkedIn" />
        </a>
        <a
          href="https://github.com/davidMunozDev"
          style={{ height: "28px" }}
          target="_blank"
        >
          <Icon width="28" height="28" name="gitHub" />
        </a>
        <Button>Download CV</Button>
      </div>
    </div>
  );
}
