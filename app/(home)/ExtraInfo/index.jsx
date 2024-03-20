import Image from "next/image";
import styles from "./styles.module.scss";
import { dmSerifDisplay } from "@/app/fonts";
import { applyStyles } from "@/app/lib/styleHelpers.util";

export default function Education() {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Box}>
        <h2 className={applyStyles([dmSerifDisplay.className, styles.Title])}>
          +5
        </h2>
        <span>YEARS OF</span> <span>EXPERIENCE</span>
      </div>
      <div className={styles.Box}></div>
    </div>
  );
}
