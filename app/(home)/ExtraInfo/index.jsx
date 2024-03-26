import Image from "next/image";
import styles from "./styles.module.scss";
import { dmSerifDisplay } from "@/app/fonts";
import { applyStyles } from "@/app/lib/styleHelpers.util";
import { projects } from "@/app/lib/portfolio-data.json";
import Title from "@/app/components/Title";
import Button from "@/app/components/Button";
import Icon from "@/app/components/Icon";
import Link from "next/link";

export default function Education() {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Experience}>
        <h2 className={applyStyles([dmSerifDisplay.className, styles.Title])}>
          +5
        </h2>
        <span>YEARS OF</span> <span>EXPERIENCE</span>
      </div>
      <Link href={`projects/${projects[0].id}`} className={styles.Project}>
        <Image
          src={`/projects/project-${projects[0].id}.png`}
          width={400}
          height={200}
          alt="last project"
        />
        <Title>Last project.</Title>
        <Button rounded>
          <Icon name="link" />
          <span>View</span>
        </Button>
      </Link>
    </div>
  );
}
