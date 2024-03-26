import Icon from "../Icon";
import styles from "./styles.module.scss";

const ListParagraph = ({ children }) => {
  return (
    <p className={styles.Paragraph}>
      <Icon className={styles.Decorator} size="14" name="listDecorator" />
      {children}
    </p>
  );
};

export default ListParagraph;
