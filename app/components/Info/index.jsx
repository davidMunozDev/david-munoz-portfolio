import Title from "@/app/components/Title";
import styles from "./styles.module.scss";

const Info = ({ page, children }) => {
  return (
    <div className={styles.Wrapper}>
      <Title tag="h1">
        <span className={styles.Decoration} /> {page}
      </Title>
      <p>{children}</p>
    </div>
  );
};

export default Info;
