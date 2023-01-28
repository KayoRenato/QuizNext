/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router"
import Button from "../components/Button"
import DisplayStatistic from "../components/DisplayStatistic"
import styles from '../styles/Result.module.css'

export default function result() {

    const router = useRouter()
    const total = +router.query.total
    const right = +router.query.right
    const percent = right / total * 100

    return (
        <div className={styles.result}>
            <div className={styles.card}>
                <h1 className={styles.title}>Final Result</h1>
                <div className={styles.statistic}>
                    <DisplayStatistic value={total} title='Questions Total' />
                    <DisplayStatistic value={right} colorBG='#9cd2a4' title='Right Answers' />
                    <DisplayStatistic value={percent} percent={true} title='Accuracy' />
                </div>
            </div>
            <Button href="/" text="Restart" />
        </div>

    )
}