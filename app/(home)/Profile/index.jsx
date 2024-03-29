import styles from "./profile.module.scss";
import Button from "@/app/components/Button";
import Icon from "@/app/components/Icon";
import Title from "@/app/components/Title";

export default function Profile() {
  return (
    <div className={styles.Wrapper}>
      <div>
        <Title>
          <i className={styles.Decoration} />
          Software Developer
        </Title>
        <p>
          and product designer from Ireland. I&apos;m interested in React, Node,
          Product Design, Jamstack, Startups, Cryptocurrencies and Music.
        </p>
      </div>
      <div className={styles.Social}>
        <Button
          icon
          href="https://www.linkedin.com/in/davidmu%C3%B1ozviejo/"
          target="_blank"
        >
          <Icon size="20" name="linkedIn" />
        </Button>
        <Button icon href="https://github.com/davidMunozDev" target="_blank">
          <Icon size="20" name="gitHub" />
        </Button>
        <Button theme="secondary" rounded>
          Download CV
        </Button>
      </div>
    </div>
  );
}
