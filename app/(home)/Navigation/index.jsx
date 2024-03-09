import styles from "./styles.module.scss";
import Folder from "./Folder";
import Projects from "./Projects";
import { ROUTES } from "@/app/lib/router.constants";

export default function Navigation() {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Folders}>
        <Folder href={ROUTES.EDUCATION.path} style="primary">
          {ROUTES.EDUCATION.name}
        </Folder>
        <Folder href={ROUTES.WORK.path} style="secondary">
          {ROUTES.WORK.name}
        </Folder>
      </div>
      <Projects />
    </div>
  );
}
