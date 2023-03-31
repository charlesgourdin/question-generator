import styles from "@/styles/Home.module.scss";
import { useEffect, useState } from "react";
import type { Question } from "@/models/question";

import ActionButton from "@/components/ActionButton";
import FlipCard from "@/components/FlipCard";
import { animated, useSpring } from "@react-spring/web";
import Layout from "@/components/Layout";

export default function Home() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Question>();

  const [spring, setSpring] = useSpring(() => ({
    config: {
      duration: 500,
    },
    from: { opacity: "0" },
    to: { opacity: "1" },
  }));

  useEffect(() => {
    fetch("questions.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        setQuestions(resJson);
        setTimeout(() => initializedQuestion(resJson), 3000);
      });
  }, []);

  const initializedQuestion = (resJson: Question[]) => {
    setCurrentQuestion(resJson[Math.floor(Math.random() * resJson.length)]);
    setSpring.start({
      from: { opacity: "0" },
      to: { opacity: "1" },
    });
  };

  const getRandomQuestion = () =>
    questions[Math.floor(Math.random() * questions.length)];

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
                  <p className="text">
                    {currentQuestion ? currentQuestion.question : null}
                  </p>
                </FlipCard>
              </div>

              <div className={styles.actionContainer}>
                <ActionButton
                  onClick={() => setCurrentQuestion(getRandomQuestion())}
                >
                  Pose moi une autre question
                </ActionButton>
              </div>
            </>
          ) : (
            <h2 className="text">
              Bonjour et bienvenue sur la question du jour!
            </h2>
          )}
        </animated.div>
      </Layout>
    </>
  );
}
