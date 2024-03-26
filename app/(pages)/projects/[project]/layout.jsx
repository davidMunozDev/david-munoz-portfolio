import Info from "@/app/components/Info";
import Button from "@/app/components/Button";
import { projects } from "@/app/lib/portfolio-data";
import Icon from "@/app/components/Icon";
import styles from "./layout.module.scss";
import Image from "next/image";
import Title from "@/app/components/Title";

export default function RootLayout({ children, params }) {
  const project = projects.find((p) => p.id === params.project);
  return (
    <>
      <div className={styles.Content}>
        <div className={styles.ContentInfo}>
          <Title tag="h1">
            <span className={styles.Decoration} />
            {project.name}
          </Title>
          <p>
            This project is a comprehensive weather application that provides
            real-time weather updates, forecasts, and weather-related
            information using various APIs and advanced JavaScript techniques.
          </p>

          <div className={styles.Actions}>
            <Button rounded href={project.url}>
              Visit
              <Icon name="link" size={20} />
            </Button>
            <Button rounded theme="secondary" href={project.git}>
              GitHub
              <Icon name="gitHub" size={20} />
            </Button>
          </div>
        </div>
        <div className={styles.Image}>
          <Image
            src={`/projects/project-${params.project}.png`}
            fill
            alt="last project"
          />
        </div>
      </div>

      {children}
    </>
  );
}
