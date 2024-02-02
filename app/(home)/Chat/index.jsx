"use client";

import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import {
  get as getFromStorage,
  save as saveInStorage,
} from "@/lib/localStorage";
import Messages from "./Messages";
import Form from "./Form";

const DEFAULT_MESSAGES = [
  "Hi! 👋🏻",
  "I’m your trusted software developer 👨🏼‍💻 and passionate about technology.",
  "I invite you to take a tour of my world 🌎 and get to know me a little better.",
  "If you are interested in my profile let’s contact! ⬇️",
].map((msg) => ({ message: msg, isUserMessage: false }));

export default function Chat() {
  const [messages, setMessages] = useState(DEFAULT_MESSAGES);

  useEffect(() => {
    const newMessages = getFromStorage("messages") || [];

    setMessages((oldMsgs) => [...oldMsgs, ...newMessages]);
  }, []);

  const sendMessage = (form) => {
    console.log(form, "hello");
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
      <Messages messages={messages} />
      <Form onSubmit={sendMessage} />
    </div>
  );
}
