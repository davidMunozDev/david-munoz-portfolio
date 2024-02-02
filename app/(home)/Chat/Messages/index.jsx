"use client";

import styles from "./styles.module.scss";

export default function Messages({ messages }) {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.MessagesWrapper}>
        {messages.map(({ message, isUserMessage }, i) => (
          <div
            className={
              isUserMessage ? styles.Message__user : styles.Message__default
            }
            key={i}
          >
            {message}
          </div>
        ))}
      </div>
    </div>
  );
}
