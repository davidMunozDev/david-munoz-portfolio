import styles from "./styles.module.scss";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Button from "@/app/components/Button";

export default function Form({ onSubmit }) {
  const { register, handleSubmit, reset } = useForm();

  const submitForm = (form) => {
    onSubmit(form);
    reset();
  };

  return (
    <form className={styles.Form} onSubmit={handleSubmit(submitForm)}>
      <input
        className={styles.FormItem__name}
        placeholder="Name"
        {...register("name", { required: true, maxLength: 20 })}
      />
      <input
        className={styles.FormItem__email}
        placeholder="Email"
        {...register("email", {
          required: true,
          pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
        })}
      />
      <textarea
        className={styles.FormItem__message}
        placeholder="Say Hi!"
        {...register("message", {
          required: true,
        })}
      />
      <Button className={styles.FormItem__submit} type="submit">
        Send
      </Button>
      <Image
        src="/img/astro-adopt.svg"
        alt="astronaut with laptop"
        width="90"
        height="130"
        className={styles.AstroAdopt}
      />
    </form>
  );
}
