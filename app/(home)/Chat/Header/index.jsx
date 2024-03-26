import Icon from "@/app/components/Icon";
import styles from "./styles.module.scss";

const Header = ({ isTyping }) => {
  const date = new Date().toLocaleDateString("en-UK", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <>
      <div className={styles.Header}>
        <span>{date}</span>
        <div
          className={
            isTyping && !isRendered ? styles.Notch__typing : styles.Notch
          }
        >
          {isTyping && !isRendered ? (
            <>
              David is typing
              <i className={styles.Bubble}></i>
              <i className={styles.Bubble}></i>
              <i className={styles.Bubble}></i>
            </>
          ) : (
            <>
              <i className={styles.OnlineDot} />
              Online
            </>
          )}
        </div>
        <Icon name="battery" size="24" />
      </div>
    </>
  );
};

export default Header;
