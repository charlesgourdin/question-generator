import Link from "next/link";
import styles from "../styles.module.scss";
import { PropsWithChildren } from "react";

export interface NavItemProps {
  text: string;
  href: string;
  active: boolean;
  onClick: () => void;
}

const NavItem = ({
  text,
  href,
  active,
  onClick,
}: PropsWithChildren<NavItemProps>) => {
  return (
    <Link
      onClick={() => onClick()}
      href={href}
      className={active ? styles.active : ""}
    >
      {text}
    </Link>
  );
};

export default NavItem;
