import Image from "next/image";
import styles from "./styles.module.scss";
import { dmSerifDisplay } from "@/app/fonts";
import Button from "@/app/components/Button";
import Icon from "@/app/components/Icon";

export default function Education() {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Header}>
        <h2 className={dmSerifDisplay.className}>My readings. 📚</h2>
        <Button>
          <Icon name="link" size="22" /> <span>View all</span>
        </Button>
      </div>
      <p>
        Currently reading: <br></br>{" "}
        <span>Fundamentals of Software Architecture</span>
      </p>

      <Image
        className={styles.BookImage}
        src="/books/fundamentals-of-software-architecture.png"
        alt="Fundamentals of Software Architecture"
        width={150}
        height={200}
      />
    </div>
  );
}
