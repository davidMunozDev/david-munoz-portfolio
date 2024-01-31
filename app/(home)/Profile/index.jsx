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
          width="82"
          height="82"
          className={styles.Avatar}
        />
        <div className={styles.Information}>
          <h2 className={styles.Name}>David Muñoz</h2>
          <p className={styles.Description}>
            Always looking for new opportunities and focus on improve.
          </p>
        </div>
      </div>
      <div className={styles.Social}>
        <Icon name="linkedIn" />
        <Icon name="gitHub" />
        <Button>Download CV</Button>
      </div>
    </div>
  );
}
