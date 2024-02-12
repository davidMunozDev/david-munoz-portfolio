import Icon from "@/app/components/Icon";
import styles from "./styles.module.scss";

const Pagination = ({ goBack, goForward }) => {
  return (
    <div className={styles.Wrapper}>
      Filter <Icon width="18" name="filter" />
    </div>
  );
};

export default Pagination;
