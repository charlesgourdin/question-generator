import Head from "next/head";
import styles from "./styles.module.scss";
import { PropsWithChildren } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export interface LayoutProps {
  title: string;
}

export default function Layout({
  title,
  children,
}: PropsWithChildren<LayoutProps>) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Répondez à une nouvelle question chaque jour sur La question du jour, un générateur de question aléatoire pour alimenter vos discussions!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="question, quotidienne, réponse, curiosité, générateur, generator, random, aléatoire"
        ></meta>
        <meta property="og:title" content="La question du jour" />
        <meta
          property="og:description"
          content="Répondez à une nouvelle question chaque jour sur La question du jour"
        />
        <meta property="og:url" content="https://www.laquestiondujour.fr/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.laquestiondujour.fr/"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />

        {children}

        <Footer />
      </main>
    </>
  );
}
