import { useEffect, useRef, useState } from "react"
import Question from "../components/Question"
import AnswerModel from "../model/answer"
import QuestionModel from "../model/question"


const questionMock = new QuestionModel(1, "What's a Color?", [
  AnswerModel.incorrect('White'),
  AnswerModel.incorrect('Blue'),
  AnswerModel.correct('Green'),
])

export default function Home() {

  const [question, setQuestion] = useState(questionMock)
  const questionRef = useRef<QuestionModel>(question)

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

  return (
    <div style={
      {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }
    }>
      <Question value={question}
        onResponse={onResponse}
        timeUp={timeUp}
        timeToAnswer={5}
      />
    </div>
  )
}
