import AnswerModel from "../model/answer"
import styles from '../styles/Answer.module.css'

interface AnswerProps {
    value: AnswerModel
    idx: number
    letter: string
    letterBackgroundColor: string
    onResponse: (index: number) => void
}

export default function Answer(props: AnswerProps) {

    const answer = props.value
    const answerUncovered = answer.uncovered ? styles.answerUncovered : ''

    return (
        <div className={styles.answer}
            onClick={() => props.onResponse(props.idx)}>
            <div className={`${styles.contentAnswer} ${answerUncovered}`}>

                <div className={styles.frontFlipper}>
                    <div className={styles.letter}
                        style={{ backgroundColor: props.letterBackgroundColor }}>
                        {props.letter}
                    </div>
                    <div className={styles.value}>
                        {answer.value}
                    </div>
                </div>
                
                <div className={styles.backFlipper}>
                    {answer.correct ? (
                        <div className={styles.correct}>
                            <div>
                                The answer right is ...
                            </div>
                            <div className={styles.value}>{answer.value}</div>
                        </div>
                    ) : (
                        <div className={styles.incorrect}>
                            <div>
                                The answer sent is wrong.
                            </div>
                            <div className={styles.value}>{answer.value}</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}