"use client";

import { applyStyles } from "@/app/lib/styleHelpers";
import styles from "./styles.module.scss";
import { useRef, useEffect, useState } from "react";

export default function Messages({ messages, isAnimationRunning }) {
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
          <div className={styles.MessageContainer} key={i}>
            <div
              className={applyStyles([
                isUserMessage ? styles.Message__user : styles.Message__default,
                !isAnimationRunning &&
                  messages.length === i + 1 &&
                  styles.Message__last,
              ])}
            >
              {message}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
