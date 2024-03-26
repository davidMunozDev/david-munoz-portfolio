import styles from "./project.module.scss";
import Info from "@/app/components/Info";

const Project = () => {
  return <div className={styles.Container}></div>;
};

Project.getLayout = function getLayout(page) {
  return (
    <main>
      <Info page="Projects">
        Here you can find a list of projects I have worked on.
      </Info>
      {page}
    </main>
  );
};

export default Project;
