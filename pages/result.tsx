/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router"
import styles from '../styles/Result.module.css'

export default function result() {

    const router = useRouter()
    const total = +router.query.total
    const right = +router.query.right
    const percent = right / total * 100

    return (
        <div className={styles.result}>
            <h1>Final Result</h1>
            <div>Questions Total: {total}</div>
            <div>Right Answers: {right}</div>
            <div className={styles.percent}>{`${percent}%`}</div>
        </div>
    )
}