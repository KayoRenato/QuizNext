import { useEffect, useRef, useState } from "react"
import Button from "../components/Button"
import Forms from "../components/Forms"
import Question from "../components/Question"
import AnswerModel from "../model/answer"
import QuestionModel from "../model/question"


const questionMock = new QuestionModel(1, "What's a Color?", [
  AnswerModel.incorrect('White'),
  AnswerModel.incorrect('Blue'),
  AnswerModel.correct('Green'),
])

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {

  const [idsQuestion, setIdsQuestion] = useState<number[]>([])
  const [question, setQuestion] = useState<QuestionModel>(questionMock)
  const questionRef = useRef<QuestionModel>(question)

  async function onLoadQuestionIds() {
    const res = await fetch(`${BASE_URL}/forms`)
    const idsQuestions = await res.json()
    setIdsQuestion(idsQuestions)
  }

  useEffect(() => {
    onLoadQuestionIds()
  }, [])

  async function onLoadQuestion(idQuestion: number) {
    const res = await fetch(`${BASE_URL}/questions/${idQuestion}`)
    const questionJson = await res.json()
    const newQuestion = QuestionModel.createFromObject(questionJson)
    setQuestion(newQuestion)
  }

  useEffect(() => {
    idsQuestion.length > 0 && onLoadQuestion(idsQuestion[0])
  }, [idsQuestion])

  useEffect(() => {
    questionRef.current = question
  }, [question])

  function onResponse(index: number) {
    setQuestion(question.answeredWith(index))
  }

  function timeUp() {
    if (!questionRef.current.isAnswered) {
      setQuestion(questionRef.current.answeredWith(-1))
    }
  }


  function nextStep() {

  }

  function answeredQuestion() {

  }

  return (

    <Forms
      question={question}
      lastQuestion={false}
      onSubmit={answeredQuestion}
      nextStep={nextStep}

    />
  )
}
