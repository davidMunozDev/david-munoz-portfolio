import styles from "./styles.module.scss";
import Folder from "./Folder";
import Projects from "./Projects";

export default function Navigation() {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Folders}>
        <Folder style="primary">About me</Folder>
        <Folder style="secondary">Experience</Folder>
      </div>
      <Projects />
    </div>
  );
}
