import Layout from "@/components/Layout";
import styles from "@/styles/About.module.scss";

export default function About() {
  return (
    <>
      <Layout>
        <div className={styles.globalContainer}>
          <h1 className="title">Bienvenue sur "La Question du Jour" !</h1>
          <p className="text">
            Notre site vous propose une manière simple et ludique de briser la
            glace lors d'un rendez-vous ou de mieux connaître vos collègues lors
            d'une réunion professionnelle.
          </p>
          <p className="text">
            Notre concept est simple : nous générons aléatoirement une question
            pour vous chaque fois que vous utilisez notre interface conviviale.
            Que vous cherchiez à pimenter un premier rendez-vous ou à
            approfondir les relations avec vos collègues, "La Question du Jour"
            est l'outil parfait pour vous aider à démarrer des conversations
            intéressantes.
          </p>
          <p className="text">
            Et ce n'est pas tout ! Vous pouvez également utiliser notre site
            pour des quiz amusants en famille ou entre amis, ou pour des moments
            de réflexion personnelle.
          </p>
          <p className="text">
            Alors, n'hésitez pas à utiliser "La Question du Jour" pour tous vos
            besoins de discussion et de divertissement. Nous sommes là pour vous
            aider à créer des moments mémorables et à découvrir de nouvelles
            perspectives sur la vie.
          </p>
        </div>
      </Layout>
    </>
  );
}
