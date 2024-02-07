"use client";

import { applyStyles } from "@/lib/styleHelpers";
import styles from "./styles.module.scss";
import { useRef, useEffect, useState } from "react";

export default function Messages({ messages }) {
  const ref = useRef(null);
  const [hasScroll, setHasScroll] = useState(false);

  useEffect(() => {
    setHasScroll(ref.current.scrollHeight > ref.current.clientHeight);
    ref.current.scrollTop = ref.current.scrollHeight;
  }, [messages]);

  return (
    <div
      ref={ref}
      className={applyStyles([
        styles.Wrapper,
        hasScroll && styles.Wrapper__scroll,
      ])}
    >
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
