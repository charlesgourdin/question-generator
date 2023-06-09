import { useSpring, animated } from "@react-spring/web";
import { PropsWithChildren, useEffect } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

export interface ActionLinkProps {
  href: string;
}

export default function ActionLink({
  children,
  href,
}: PropsWithChildren<ActionLinkProps>) {
  const [spring, setSpring] = useSpring(() => ({
    from: { transform: "scale(1)" },
  }));

  const handleClick = () => {
    setSpring.start({
      from: { transform: "scale(0.9)" },
      to: { transform: "scale(1)" },
    });
  };

  return (
    <animated.div
      style={{
        ...spring,
      }}
    >
      <Link className={styles.actionLink} href={href}>
        {children}
      </Link>
    </animated.div>
  );
}
