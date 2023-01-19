import ProgressTimer, { ProgressTimerProps } from 'react-progress-bar-timer';
import styles from '../styles/Timer.module.css'

interface TimerProps {
    timeUp: () => void
}

export default function Timer(props: TimerProps) {
    return (
        <div className={styles.timer}>
            <ProgressTimer
                color="rgb(219, 99, 86)"
                duration={2}
                buttonText="Countdown"
                label="Countdown"
                onFinish={props.timeUp}
                rootRounded
                variant="fill"
            />
        </div>
    );
}