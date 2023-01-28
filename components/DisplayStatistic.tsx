import styles from '../styles/DisplayStatistic.module.css';

interface StatisticProps {
    value: any;
    title: string;
    percent?: boolean;
    colorBG?: string;
}

export default function DisplayStatistic(props: StatisticProps) {

    function renderValue() {
        return props.percent ? <span>{props.value}%</span> : <span>{props.value}</span>
    }

    function renderApproved() {
        return +props.value < 70 ? '#de1b1b' : '#2150be';
    }

    return (
        <div className={styles.statistic}>
            <div className={styles.value} style={{
                backgroundColor: props.colorBG ?? 'rgb(155, 178, 196)',
                color: props.percent ? renderApproved() : '#333',
            }}>
                {renderValue()}
            </div>
            <div className={styles.title}>
                {props.title}
            </div>

        </div>
    );
}