import Button from "@/app/components/Button";
import Icon from "@/app/components/Icon";
import styles from "./styles.module.scss";

const Pagination = ({ goBack, goForward, canGoBack, canGoForward }) => {
  return (
    <div className={styles.Wrapper}>
      <p>Check other projects</p>
      <div className={styles.Buttons}>
        <Button
          disabled={!canGoBack}
          className={styles.Button}
          onClick={goBack}
        >
          <Icon size="18" name="arrowLeft" />
        </Button>
        <Button
          disabled={!canGoForward}
          className={styles.Button}
          onClick={goForward}
        >
          <Icon size="18" name="arrowRight" />
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
