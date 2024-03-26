import { applyStyles } from "@/app/lib/styleHelpers.util";
import styles from "./styles.module.scss";
import { dmSerifDisplay, dmSans } from "@/app/fonts";

const Name = () => {
  return (
    <h1 className={applyStyles([styles.Wrapper, dmSerifDisplay.className])}>
      <span>David</span>
      <span className={styles.LastName}>Muñoz</span>
    </h1>
  );
};

export default Name;
