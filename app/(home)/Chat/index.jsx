"use client";

import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import {
  get as getFromStorage,
  save as saveInStorage,
} from "@/app/lib/localStorage";
import Messages from "./Messages";
import Form from "./Form";
import Icon from "@/app/components/Icon";
import { useThemeContext } from "@/app/lib/theme-context";

const DEFAULT_MESSAGES = [
  "Hi! 👋🏻",
  "I’m your trusted software developer 👨🏼‍💻 and passionate about technology.",
  "I invite you to take a tour of my world 🌎 and get to know me a little better.",
  "If you are interested in my profile let’s contact! ⬇️",
].map((msg) => ({ message: msg, isUserMessage: false }));

export default function Chat() {
  const { isRendered } = useThemeContext();
  const [messages, setMessages] = useState([]);
  const [messagesAdded, setMessagesAdded] = useState(0);

  const date = new Date().toLocaleDateString("en-UK", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
  const isAnimationRunning = messagesAdded < DEFAULT_MESSAGES.length;

  useEffect(() => {
    const userMessages = getFromStorage("messages") || [];
    if (userMessages.length || isRendered) {
      setMessages([...DEFAULT_MESSAGES, ...userMessages]);
      return;
    }
    if (isAnimationRunning) {
      const timer = setTimeout(() => {
        setMessages((currentMessages) => [
          ...currentMessages,
          DEFAULT_MESSAGES[messagesAdded],
        ]);
        setMessagesAdded(messagesAdded + 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [messagesAdded, isAnimationRunning, isRendered]);

  const sendMessage = (form) => {
    const newMessages = [
      ...messages,
      { message: form.message, isUserMessage: true },
    ];

    setMessages(newMessages);
    saveInStorage(
      "messages",
      newMessages.filter((message) => message.isUserMessage)
    );
  };

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Header}>
        <span>{date}</span>
        <div
          className={
            isAnimationRunning && !isRendered
              ? styles.Notch__typing
              : styles.Notch
          }
        >
          {isAnimationRunning && !isRendered && (
            <>
              David is typing
              <i className={styles.Bubble}></i>
              <i className={styles.Bubble}></i>
              <i className={styles.Bubble}></i>
            </>
          )}
        </div>
        <Icon name="battery" />
      </div>
      <Messages messages={messages} isAnimationRunning={isAnimationRunning} />
      {!isAnimationRunning || isRendered ? (
        <Form onSubmit={sendMessage} />
      ) : (
        <div className={styles.FormPlaceholder} />
      )}
    </div>
  );
}
