import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import { useEffect, useState } from 'react'
import type { Question } from '@/models/question'

import ActionButton from '@/components/ActionButton'
import FlipCard from '@/components/FlipCard'

export default function Home() {
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestion, setCurrentQuestion] = useState<Question>()

  useEffect(() => {
    fetch('questions.json',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then((res) => res.json())
    .then((resJson) => {
      setQuestions(resJson)
      setCurrentQuestion(resJson[Math.floor(Math.random()*resJson.length)])
    })
  }, [])

  const getRandomQuestion = () => questions[Math.floor(Math.random()*questions.length)]

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <header>
          <h1 className='title'>
            La question du jour
          </h1>
        </header>

        <div className={styles.questionContainer}>
          <FlipCard>
              <p className='text'>{currentQuestion ? currentQuestion.question : null}</p>
          </FlipCard>
        </div>

        <div className={styles.actionContainer}>
          <ActionButton
            onClick={() => setCurrentQuestion(getRandomQuestion())}
          >
            Pose moi une question
          </ActionButton>
        </div>



        <footer>
        </footer>
      </main>
    </>
  )
}
