"use client";

import styles from "./styles.module.scss";
import Form from "./Form";
import { dmSerifDisplay } from "@/app/fonts";
import Button from "@/app/components/Button";
import Icon from "@/app/components/Icon";
import { useState } from "react";

export default function Contact() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm((showForm) => !showForm);
  };

  const handleSubmit = () => {
    toggleForm();
  };

  return (
    <div className={styles.Wrapper} onClick={toggleForm}>
      {showForm ? (
        <Form onSubmit={handleSubmit} />
      ) : (
        <div className={styles.Info}>
          <h2 className={dmSerifDisplay.className}>
            Do you want to get in touch?
          </h2>
          <p>
            If you have any questions or want to work together, feel free to
            contact me.
          </p>
          <Button icon rounded>
            <Icon size="18" name="arrowRight" /> <span>Contact</span>
          </Button>
        </div>
      )}
    </div>
  );
}
