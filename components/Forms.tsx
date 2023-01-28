import styles from '../styles/Forms.module.css'
import QuestionModel from "../model/question";
import Question from './Question';
import Button from './Button';

interface FormsProps {
    key: any,
    question: QuestionModel,
    lastQuestion: boolean
    onSubmit: (question: QuestionModel) => void
    nextStep: () => void

}

export default function Forms(props: FormsProps) {
    function onResponse(idx: number) {
        if (!props.question.isAnswered) {
            props.onSubmit(props.question.answeredWith(idx))
        }
    }

    return (
        <div className={styles.forms}>
            {props.question ? (
                <Question
                    value={props.question}
                    timeToAnswer={600}
                    onResponse={onResponse}
                    timeUp={props.nextStep}
                />
            ) : false}
            <Button text={props.lastQuestion ? 'Finish' : 'Next Question'} onClick={props.nextStep} />
        </div>
    );
}