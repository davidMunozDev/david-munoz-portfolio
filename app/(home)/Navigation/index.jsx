import styles from "./styles.module.scss";
import Folder from "./Folder";
import Projects from "./Projects";

export default function Navigation() {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Folders}>
        <Folder href="/about" style="primary">
          About me
        </Folder>
        <Folder href="/experience" style="secondary">
          Experience
        </Folder>
      </div>
      <Projects />
    </div>
  );
}
