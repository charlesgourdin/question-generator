import { PropsWithChildren } from "react";
import styles from "./styles.module.scss";
import ActionLink from "../ActionLink";

export default function PostForm({ children }: PropsWithChildren) {
  return (
    <div className={styles.wrapper}>
      <p className="text">Merci pour votre proposition!</p>
      <ActionLink href="/">Retourner à l'accueil</ActionLink>
    </div>
  );
}
