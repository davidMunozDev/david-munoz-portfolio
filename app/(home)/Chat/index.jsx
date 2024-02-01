import styles from "./styles.module.scss";
export default function Chat() {
  const messages = [
    "Hi! 👋🏻",
    "I’m your trusted software developer 👨🏼‍💻 and passionate about technology.",
    "I invite you to take a tour of my world 🌎 and get to know me a little better.",
    "If you are interested in my profile let’s contact! ⬇️",
  ];
  return (
    <div className={styles.Wrapper}>
      <div className={styles.MessagesWrapper}>
        {messages.map((message, i) => (
          <div className={styles.Message} key={i}>
            {message}
          </div>
        ))}
      </div>
    </div>
  );
}
