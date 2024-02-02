import styles from "./styles.module.scss";

export default function Button({ children, className, ...props }) {
  return (
    <button className={`${styles.Button} ${className}`} {...props}>
      {children}
    </button>
  );
}
