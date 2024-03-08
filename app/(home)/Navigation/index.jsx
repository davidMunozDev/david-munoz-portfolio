import styles from "./styles.module.scss";
import Folder from "./Folder";
import Projects from "./Projects";

export default function Navigation() {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Folders}>
        <Folder href="/experience?content=education" style="primary">
          Education
        </Folder>
        <Folder href="/experience?content=work" style="secondary">
          Work
        </Folder>
      </div>
      <Projects />
    </div>
  );
}
