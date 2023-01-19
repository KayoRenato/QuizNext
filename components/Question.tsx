import QuestionModel from "../model/question"
import styles from "../styles/Question.module.css"
import Answer from "./Answers"
import Statement from "./Statement"


interface QuestionProps {
    value: QuestionModel
    onResponse: (index: number) => void
}


export default function Question(props: QuestionProps) {
    const question = props.value

    const letters = [
        {value: 'A'},
        {value: 'B'},
        {value: 'C'},
        {value: 'D'},
        {value: 'E'},
    ]

    function renderAnswers() {
        return question.answers.map((answer, i) => {
            return (
                <Answer
                    value={answer}
                    idx={i}
                    key={i}
                    letter={letters[i].value}
                    letterBackgroundColor='#ffffff'
                    onResponse={props.onResponse}
                />
            )
        })
    }

    return (
        <div className={styles.question}>
            <Statement text={question.title} />
            {renderAnswers()}
        </div>
    )


}