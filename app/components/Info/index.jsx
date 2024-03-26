import Title from "@/app/components/Title";
import styles from "./styles.module.scss";

const Info = ({ page, children, actions }) => {
  return (
    <div className={styles.Wrapper}>
      <Title tag="h1">
        <span className={styles.Decoration} /> {page}
      </Title>
      {children}
    </div>
  );
};

export default Info;
