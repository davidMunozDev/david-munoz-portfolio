"use client";

import styles from "./styles.module.scss";
import Messages from "./Messages";
import Header from "./Header";
import Image from "next/image";
import Button from "@/app/components/Button";
import Icon from "@/app/components/Icon";
import Background from "./Background";

const DEFAULT_MESSAGES = [
  "Hi! 👋🏻",
  "I'm David's AI 🤖, I'm here to help you get to know David better - ask me anything!",
].map((msg) => ({ message: msg, isUserMessage: false }));

export default function Chat() {
  return (
    <div className={styles.Wrapper}>
      <Background />
      <Header />
      <Image
        src="/img/me-contact.png"
        className={styles.BotImage}
        alt="bot image"
        width={60}
        height={60}
      />
      <Messages messages={DEFAULT_MESSAGES} isAnimationRunning={false} />
      <div className={styles.Form}>
        <input
          type="text"
          placeholder="Type a message"
          className={styles.Input}
        />
        <Button icon type="submit" onClick={() => {}} className={styles.Submit}>
          <Icon name="send" size="18" />
        </Button>
      </div>
    </div>
  );
}
