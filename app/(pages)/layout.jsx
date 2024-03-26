import styles from "./layout.module.scss";
import Button from "@/app/components/Button";
import Link from "next/link";
import Icon from "@/app/components/Icon";
import { ROUTES } from "@/app/lib/router.constants";

export default function RootLayout({ children }) {
  return (
    <div className={styles.Container}>
      <Button icon component={Link} href={ROUTES.HOME.path}>
        <Icon name="arrowLeft" size="18" />
      </Button>
      {children}
    </div>
  );
}
