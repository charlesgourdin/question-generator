import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import NavItem from "./NavItem";

const MENU_LIST = [
  { text: "Accueil", href: "/" },
  { text: "A propos", href: "/about" },
];

export default function Nabvar() {
  const [navActive, setNavActive] = useState<string>();
  const [hideMenu, setHideMenu] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    setNavActive(router.pathname);
  }, [router.pathname]);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href={"/"}>
          <h1 className="title">La question du jour</h1>
        </Link>

        <div className={styles.btnMenu} onClick={() => setHideMenu(!hideMenu)}>
          <div className={styles.stripe} />
          <div className={styles.stripe} />
          <div className={styles.stripe} />
        </div>

        <div
          className={[styles.menuList, hideMenu ? "" : styles.isVisible].join(
            " "
          )}
        >
          {MENU_LIST.map((menu, idx) => (
            <NavItem
              onClick={() => setHideMenu(true)}
              active={navActive === menu.href}
              {...menu}
              key={idx}
            />
          ))}
        </div>
      </nav>
    </header>
  );
}
