import { useEffect, useRef, useState } from "react"
import Forms from "../components/Forms"
import QuestionModel from "../model/question"
import { useRouter } from "next/router"


const BASE_URL = '/api'

export default function Home() {

  const router = useRouter()

  const [idsQuestion, setIdsQuestion] = useState<number[]>([])
  const [question, setQuestion] = useState<QuestionModel>()
  const [rightAnswered, setRightAnswered] = useState<number>(0)

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

  function onResponse(index: number) {
    question ? setQuestion(question.answeredWith(index)) : false
  }

  function idNextQuestion() {
    if (question) {
      const nextIdx = idsQuestion.indexOf(question.id) + 1
      return idsQuestion[nextIdx]
    }
    return false
  }


  function answeredQuestion(answeredQuestion: QuestionModel) {
    setQuestion(answeredQuestion)
    const right = answeredQuestion.isRight
    setRightAnswered(rightAnswered + (right ? 1 : 0))
  }

  function nextStep() {
    const nextId = idNextQuestion()
    nextId ? goNextQuestion(nextId) : finishedQuiz()
  }

  function goNextQuestion(nextId: number) {
    onLoadQuestion(nextId)
  }

  function finishedQuiz() {
    router.push({
      pathname: '/result',
      query: {
        total: idsQuestion.length,
        right: rightAnswered
      }
    })
  }

  return question ? (

    <Forms
      key={question.id}
      question={question}
      lastQuestion={idNextQuestion() === undefined}
      onSubmit={answeredQuestion}
      nextStep={nextStep}

    />
  ) : false;

}