import Question from "../components/Question"
import AnswerModel from "../model/answer"
import QuestionModel from "../model/question"

export default function Home() {

  const questionTest = new QuestionModel(1, 'What`s is Color?', [
    AnswerModel.incorrect('White'),
    AnswerModel.incorrect('Blue'),
    AnswerModel.correct('Green'),
  ])

  return (
    <Question value={questionTest}/>
  )
}
