import Title from "@/app/components/Title";
import styles from "./styles.module.scss";

const Info = () => {
  return (
    <div className={styles.Wrapper}>
      <Title tag="h1">Projects</Title>
      <p>This is a sample text containing twelve example words for you.</p>
    </div>
  );
};

export default Info;
