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


  function nextStep(){

  }

  function answeredQuestion(){

  }

  return (
    <div style={
      {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }
    }>
      <Forms 
        question={question}
        lastQuestion={false}
        onSubmit={answeredQuestion}
        nextStep={nextStep}

      />
    </div>
  )
}
