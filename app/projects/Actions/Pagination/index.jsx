import Button from "@/app/components/Button";
import Icon from "@/app/components/Icon";
import styles from "./styles.module.scss";

const Pagination = ({ goBack, goForward }) => {
  return (
    <div className={styles.Wrapper}>
      <p>Check other projects</p>
      <div className={styles.Buttons}>
        <Button disabled={!goBack} className={styles.Button} onClick={goBack}>
          <Icon width="18" name="arrowLeft" />
        </Button>
        <Button
          disabled={!goForward}
          className={styles.Button}
          onClick={goForward}
        >
          <Icon width="18" name="arrowRight" />
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
