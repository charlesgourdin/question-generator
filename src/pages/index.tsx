import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import ActionButton from "@/components/ActionButton";
import FlipCard from "@/components/FlipCard";
import Layout from "@/components/Layout";
import db from "@/lib/firebase";
import styles from "@/styles/Home.module.scss";
import { Question } from "@/models/question";

export default function Home() {
  const [questionsLength, setQuestionsLength] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<string>("");

  const [spring, setSpring] = useSpring(() => ({
    config: {
      duration: 500,
    },
    from: { opacity: "0" },
    to: { opacity: "1" },
  }));

  useEffect(() => {
    const questionRef = ref(db, "question");
    onValue(questionRef, (t: { val: () => Question[] }) => {
      const questions = t.val().map(({ value }) => value);
      setQuestionsLength(questions.length);

      const randomIndex = Math.floor(Math.random() * questionsLength);

      setCurrentQuestion(questions[randomIndex]);
      setSpring.start({
        from: { opacity: "0" },
        to: { opacity: "1" },
      });
    });
  }, []);

  const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questionsLength);
    const questionRef = ref(db, `question/${randomIndex}`);
    onValue(questionRef, (t) => {
      const question = t.val().value;
      setCurrentQuestion(question);
    });
  };

  return (
    <>
      <Layout>
        <animated.div
          className={styles.globalContainer}
          style={{
            ...spring,
          }}
        >
          {currentQuestion ? (
            <>
              <div className={styles.questionContainer}>
                <FlipCard>
                  <p className="text">{currentQuestion}</p>
                </FlipCard>
              </div>

              <div className={styles.actionContainer}>
                <ActionButton onClick={() => getRandomQuestion()}>
                  Pose moi une autre question
                </ActionButton>
              </div>
            </>
          ) : (
            <h1 className="title">
              Bonjour et bienvenue sur la question du jour!
            </h1>
          )}
        </animated.div>
      </Layout>
    </>
  );
}
